/**
 * 自动切换背景图，目录约定：/assets/img/bg/num.jpg
 * 文件名必须为数字+“.jpg”
 */
function initBg() {
  const path = window.publicPath + "/assets/img/bg/";
  console.log(window.publicPath, path);
  let start = 1;
  const body = document.querySelector("body");
  body.style.backgroundImage = `url(${path}bg${start}.jpg)`;
  //   setInterval(async () => {
  //     try {
  //       const url = `${path}bg${start}.jpg`;
  //       const res = await getURLBase64(url);
  //       body.style.backgroundImage = `url(${res})`;
  //       start++;
  //     } catch (error) {
  //       console.warn(error);
  //       start = 1;
  //     }
  //   }, 1500);
  // hack => need clear
}

initBg();

/**
 * 加载图片，采用base64
 * @param {string} url
 * @returns Promise
 */
function getURLBase64(url) {
  return new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest();
    xhr.open("get", url, true);
    xhr.responseType = "blob";
    xhr.onload = function () {
      if (this.status === 200) {
        const blob = this.response;
        const fileReader = new FileReader();
        fileReader.onloadend = function (e) {
          const result = e.target.result;
          resolve(result);
        };
        fileReader.readAsDataURL(blob);
      } else {
        reject();
      }
    };
    xhr.onerror = function () {
      reject();
    };
    xhr.send();
  });
}
