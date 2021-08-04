import { TIME_STAMP } from './constant';

/**
 * 判断缓存是否过期
 * @param key 
 * @returns 
 */
export function hasExpires(key: string): boolean {
  try {
    const str = localStorage.getItem(key);
    if (!str) return true;
    const res = JSON.parse(str || '{}');
    const cacheData = { expriresTime: Date.now(), ...res };
    // 超时，两天
    if (cacheData.expriresTime - Date.now() > TIME_STAMP.DAY * 2) {
      // 更新数据的缓存时间
      setExpires(key, res);
      return true;
    }
    return false;
  } catch (error) {
    return false;
  }
}

/**
 * 设置缓存时间
 * @param key 
 * @param data 
 * @param expiresDay 
 */
export function setExpires(key: string, data: any, expiresDay: number = 2): void {
  const expriresTime = Date.now() + TIME_STAMP.DAY * expiresDay;
  localStorage.setItem(key, JSON.stringify({ data, expriresTime }));
}
