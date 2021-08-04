import request from '@/common/request';

export async function queryLoadignConfig() {
  return request('/api/queryLoadingCfg');
}
