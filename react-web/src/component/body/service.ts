import request from '@/common/request';

export function queryBgConfig() {
  return request('/api/queryBgConfig');
}
