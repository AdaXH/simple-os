export function getHitokoto() {
    return fetch('http://v1.hitokoto.cn').then(res => res.json())
}