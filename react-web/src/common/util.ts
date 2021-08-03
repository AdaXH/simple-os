export function getCache(key: string): any {
  try {
    const res = JSON.parse(sessionStorage.getItem(key) || '{}');
    const cacheData = { expriresTime: Date.now(), ...res };
  } catch (error) {}
}
