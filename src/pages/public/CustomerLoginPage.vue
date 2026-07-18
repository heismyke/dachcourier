<template>
  <div class="login-page">
    <header class="login-header">
      <RouterLink to="/" class="brand" aria-label="Dach Courier Services home">
        <img class="brand-mark" src="/logo.jpg" alt="" aria-hidden="true" />
        <span>Dach Courier Services</span>
      </RouterLink>
      <nav aria-label="Customer login support">
        <RouterLink to="/support">Support</RouterLink>
        <button type="button">English</button>
      </nav>
    </header>

    <main class="auth-main">
      <section class="login-panel" aria-labelledby="customer-login-title">
        <h1 id="customer-login-title">Customer login</h1>
        <p class="create-line">
          Don’t have an account?
          <RouterLink to="/register">Create an account</RouterLink>
        </p>

        <form class="login-form" novalidate @submit.prevent="submit">
          <p v-if="formError" id="login-error" class="form-error" role="alert">
            {{ formError }}
          </p>

          <label class="field">
            <span>Email address or phone number</span>
            <input
              v-model="identifier"
              type="text"
              autocomplete="username"
              :aria-invalid="Boolean(errors.identifier)"
              :aria-describedby="errors.identifier ? 'identifier-error' : undefined"
            />
          </label>
          <p v-if="errors.identifier" id="identifier-error" class="field-error">
            {{ errors.identifier }}
          </p>

          <label class="field">
            <span>Password</span>
            <div class="password-control">
              <input
                v-model="password"
                :type="showPassword ? 'text' : 'password'"
                autocomplete="current-password"
                :aria-invalid="Boolean(errors.password)"
                :aria-describedby="errors.password ? 'password-error' : undefined"
              />
              <button
                type="button"
                :aria-label="showPassword ? 'Hide password' : 'Show password'"
                @click="showPassword = !showPassword"
              >
                <EyeOff v-if="showPassword" :size="18" />
                <Eye v-else :size="18" />
              </button>
            </div>
          </label>
          <p v-if="errors.password" id="password-error" class="field-error">
            {{ errors.password }}
          </p>

          <div class="form-options">
            <label class="remember">
              <input v-model="rememberMe" type="checkbox" />
              <span>Remember me</span>
            </label>
            <RouterLink to="/forgot-password">Forgot/reset password</RouterLink>
          </div>

          <button class="login-button" type="submit" :disabled="auth.loading">
            {{ auth.loading ? 'Logging in…' : 'Login' }}
          </button>
        </form>

        <RouterLink to="/track" class="track-link">Track a shipment without logging in</RouterLink>
      </section>
    </main>

    <footer class="login-footer">
      <nav aria-label="Legal and support links">
        <RouterLink to="/privacy">Privacy</RouterLink>
        <RouterLink to="/terms">Terms</RouterLink>
        <RouterLink to="/support">Support</RouterLink>
      </nav>
      <span>© 2026 Dach Courier Services</span>
    </footer>
  </div>
</template>

<script setup lang="ts">
import { reactive, ref } from 'vue'
import { useRouter } from 'vue-router'
import { Eye, EyeOff } from 'lucide-vue-next'
import { useAuthStore } from '@/stores/auth.store'

const identifier = ref('')
const password = ref('')
const rememberMe = ref(false)
const showPassword = ref(false)
const formError = ref('')
const errors = reactive({
  identifier: '',
  password: '',
})

const router = useRouter()
const auth = useAuthStore()

function validate() {
  errors.identifier = identifier.value.trim() ? '' : 'Enter your email address or phone number.'
  errors.password = password.value ? '' : 'Enter your password.'
  return !errors.identifier && !errors.password
}

const submit = async () => {
  formError.value = ''
  if (!validate()) return

  try {
    await auth.login(identifier.value.trim(), password.value)
    await router.push('/account')
  } catch (error) {
    const message = error instanceof Error ? error.message.toLowerCase() : ''

    if (message.includes('disabled')) {
      formError.value = 'This account is disabled. Contact support for help.'
      return
    }

    if (message.includes('attempt')) {
      formError.value = 'Too many login attempts. Wait a moment and try again.'
      return
    }

    if (message.includes('network')) {
      formError.value = 'Network error. Check your connection and try again.'
      return
    }

    formError.value =
      'We could not log you in with those details. Check your information and try again.'
  }
}
</script>

<style scoped>
.login-page {
  min-height: 100dvh;
  display: grid;
  grid-template-rows: auto 1fr auto;
  background: var(--dach-grey-50);
  color: var(--dach-text-primary);
}
.login-header {
  min-height: 64px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 20px;
  border-bottom: 1px solid var(--dach-border-light);
  background: #fff;
  padding: 0 32px;
}
.brand,
.login-header nav,
.login-footer nav,
.remember {
  display: flex;
  align-items: center;
}
.brand {
  gap: 10px;
  color: var(--dach-text-primary);
  font-weight: var(--font-weight-semibold);
}
.brand-mark {
  width: 38px;
  height: 38px;
  border-radius: 8px;
  object-fit: cover;
  box-shadow: var(--shadow-sm);
}
.login-header nav {
  gap: 22px;
  color: var(--dach-text-secondary);
  font-size: 0.94rem;
}
.login-header button {
  min-height: 44px;
  border: 0;
  background: transparent;
  color: inherit;
  font: inherit;
  cursor: pointer;
}
.auth-main {
  min-height: calc(100dvh - 130px);
  display: flex;
  justify-content: center;
  align-items: flex-start;
  padding: 48px 20px;
}
.login-panel {
  width: min(100%, 520px);
  display: grid;
  gap: 22px;
  border: 1px solid var(--dach-border-default);
  border-radius: 4px;
  background: #fff;
  box-shadow: 0 3px 12px rgb(13 31 60 / 12%);
  padding: 32px;
}
h1 {
  font-family: var(--font-sans);
  font-size: 1.75rem;
  font-weight: var(--font-weight-bold);
  line-height: 1.2;
}
.create-line {
  color: var(--dach-text-primary);
  font-size: 0.95rem;
}
.create-line a,
.form-options a {
  color: var(--dach-blue-700);
  font-weight: var(--font-weight-semibold);
  text-decoration: underline;
}
.login-form {
  display: grid;
  gap: 14px;
}
.field {
  display: grid;
  gap: 7px;
  color: var(--dach-text-primary);
  font-size: 0.93rem;
  font-weight: var(--font-weight-semibold);
}
.field input,
.password-control input {
  width: 100%;
  height: 48px;
  border: 1px solid var(--dach-border-strong);
  border-radius: 2px;
  background: #fff;
  color: var(--dach-text-primary);
  font: inherit;
  padding: 0 14px;
}
.field input:focus,
.password-control input:focus {
  outline: 0;
  border-color: var(--dach-blue-600);
  box-shadow: 0 0 0 2px rgb(30 95 170 / 12%);
}
.password-control {
  position: relative;
}
.password-control input {
  padding-right: 48px;
}
.password-control button {
  position: absolute;
  top: 2px;
  right: 4px;
  width: 44px;
  height: 44px;
  display: grid;
  place-items: center;
  border: 0;
  border-radius: 2px;
  background: transparent;
  color: var(--dach-text-muted);
  cursor: pointer;
}
.password-control button:hover {
  color: var(--dach-text-primary);
}
.form-options {
  min-height: 44px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
  color: var(--dach-text-secondary);
  font-size: 0.93rem;
  font-weight: var(--font-weight-regular);
}
.remember {
  gap: 9px;
}
.remember input {
  width: 20px;
  height: 20px;
  accent-color: var(--dach-blue-600);
}
.login-button {
  width: 100%;
  height: 48px;
  border: 0;
  border-radius: 3px;
  background: var(--dach-blue-600);
  color: #fff;
  font: inherit;
  font-weight: var(--font-weight-semibold);
  cursor: pointer;
}
.login-button:hover {
  background: var(--dach-blue-700);
}
.login-button:disabled {
  cursor: wait;
  opacity: 0.72;
}
.track-link {
  justify-self: center;
  color: var(--dach-text-secondary);
  font-size: 0.93rem;
  font-weight: var(--font-weight-regular);
  text-decoration: underline;
}
.form-error,
.field-error {
  color: var(--dach-danger-700);
}
.form-error {
  border: 1px solid rgb(220 38 38 / 24%);
  border-radius: 3px;
  background: var(--dach-danger-50);
  padding: 12px;
}
.field-error {
  margin-top: -7px;
  font-size: 0.88rem;
  font-weight: var(--font-weight-regular);
}
.login-footer {
  min-height: 66px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 20px;
  border-top: 1px solid var(--dach-border-light);
  background: #fff;
  color: var(--dach-text-muted);
  font-size: 0.9rem;
  font-weight: var(--font-weight-regular);
  padding: 0 32px;
}
.login-footer nav {
  gap: 22px;
}
@media (max-width: 560px) {
  .login-header,
  .login-footer {
    padding-inline: 16px;
  }
  .login-header nav {
    gap: 14px;
  }
  .auth-main {
    padding: 28px 16px 40px;
  }
  .login-panel {
    padding: 24px;
  }
  .form-options,
  .login-footer {
    align-items: flex-start;
    flex-direction: column;
  }
}
</style>
