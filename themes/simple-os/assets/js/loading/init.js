if (window.isMobile) {
  // setTimeout(unlock, 700);
  //   return;
}

const dot = document.querySelector(".unlock-btn");

let startY = 0;
if (dot) {
  dot.addEventListener(
    "mousedown",
    e => {
      startY = e.clientY;
      window.addEventListener("mousemove", listenMove);
    },
    false
  );
  window.addEventListener("mouseup", () => {
    window.removeEventListener("mousemove", listenMove);
    dot.style.cssText = `transform: translate3d(0, 0, 0)`;
    restoreDotStatus();
  });
  dot.addEventListener("mouseup", () => {
    window.removeEventListener("mousemove", listenMove);
    dot.style.cssText = `transform: translate3d(0, 0, 0)`;
    restoreDotStatus();
  });
}

const dots = document.querySelectorAll(".loading-dot span");
const STATIC_HEIGHT = 30;
const UNLOCK_DISTANCE = dots.length * 30;

/**
 * 监听移动
 * @returns
 */
function listenMove() {
  if (arguments.length < 1) return;
  const [event] = arguments;
  const { clientY } = event;
  const distance = clientY - startY;
  dots.forEach((item, index) => {
    item.style.opacity = distance >= index * STATIC_HEIGHT ? "0" : "1";
  });
  if (distance < 0) {
    dot.style.cssText = `transform: translate3d(0, 0, 0)`;
    return;
  }
  dot.style.cssText = `transform: translate3d(0, ${distance}px, 0)`;
  if (distance >= UNLOCK_DISTANCE) {
    const box = document.querySelector(".unlock-box");
    box.style.display = "none";
    unlock();
  }
}

/**
 * 恢复解锁状态
 */
function restoreDotStatus() {
  dots.forEach(item => {
    item.style.opacity = "1";
  });
}

/**
 * 完成解锁
 */
function unlock() {
  const unlockContainer = document.querySelector(".loading-container");
  const top = unlockContainer.querySelector(".loading-top");
  const HIDE_TOP = "hideen-animation-top";
  const HIDE_BOTTOM = "hideen-animation-bottom";
  const bottom = unlockContainer.querySelector(".loading-bottom");
  top.classList.add(HIDE_TOP);
  bottom.classList.add(HIDE_BOTTOM);
  setTimeout(() => {
    unlockContainer.remove();
  }, 1000);
}
