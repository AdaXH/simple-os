function initHitokoto() {
  const target = document.querySelector("#hitokoto-text");
  if (!target) return;
  target.innerText = "loading......";
  getHitokoto().then(text => (target.innerText = text.hitokoto));
  setInterval(() => {
    getHitokoto().then(text => (target.innerText = text.hitokoto));
  }, 10000);
}

/**
 * 获取一言
 * @returns Promise<any>
 */
function getHitokoto() {
  return new Promise((resolve, reject) => {
    fetch("http://v1.hitokoto.cn")
      .then(res => res.json())
      .then(d => resolve(d))
      .catch(err => reject(err));
  });
}

initHitokoto();
