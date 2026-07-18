import pluginVue from 'eslint-plugin-vue'
import vueTs from '@vue/eslint-config-typescript'
import prettier from '@vue/eslint-config-prettier'

export default [
  { ignores: ['dist', 'coverage', 'playwright-report'] },
  ...pluginVue.configs['flat/recommended'],
  ...vueTs(),
  {
    rules: {
      'vue/no-mutating-props': ['error', { shallowOnly: true }],
    },
  },
  prettier,
]
