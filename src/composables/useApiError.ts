export const useApiError = () => ({
  messageFromError(error: unknown) {
    return error instanceof Error ? error.message : 'Something went wrong'
  },
})
