import request from '@/common/request';

export async function queryIndexPageConfig() {
  return request('/api/queryIndexPageConfig');
}
