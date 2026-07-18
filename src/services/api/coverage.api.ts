import { apiClient } from './client'
import { checkCoverageMock } from '@/services/mock/coverage.mock'
import type { CoverageCheckRequest, CoverageCheckResult } from '@/types/coverage'

export const coverageApi = {
  async check(request: CoverageCheckRequest): Promise<CoverageCheckResult> {
    if (import.meta.env.VITE_USE_MOCK_API !== 'false') return checkCoverageMock(request)

    const { data } = await apiClient.post<CoverageCheckResult>('/coverage/check', request)
    return data
  },
}
