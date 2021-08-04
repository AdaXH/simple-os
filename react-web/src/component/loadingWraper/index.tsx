import React, { useState, useRef, useEffect } from 'react';
import { hasExpires, setExpires } from '@/common/util';
import { useDidMount } from '@/common/hooks';
import { LOADING_CACHE_KEY } from './constant';
import { queryLoadignConfig } from './serivce';

import './styles.css';

interface Config {
  blogTitle?: string;
  loadingTitle?: string;
  loadingSubTitle?: string;
  unlockTip?: string;
}

export default () => {
  const [visible, setVisible] = useState<Boolean>(hasExpires(LOADING_CACHE_KEY));
  const ref: Ref<HTMLDivElement> = useRef();
  const [loadingCfg, setCfg] = useState<Config>({});
  useEffect(() => {
    if (ref?.current) {
      listenDom(ref.current);
    }
  }, [ref]);

  useDidMount(async () => {
    queryLoadignConfig().then((res) => setCfg(res));
  });

  function listenDom(dot) {
    function unlock() {
      const unlockContainer = document.querySelector('.loading-container');
      const top = unlockContainer.querySelector('.loading-top');
      const HIDE_TOP = 'hideen-animation-top';
      const HIDE_BOTTOM = 'hideen-animation-bottom';
      const bottom = unlockContainer.querySelector('.loading-bottom');
      top.classList.add(HIDE_TOP);
      bottom.classList.add(HIDE_BOTTOM);
      setTimeout(() => {
        setExpires(LOADING_CACHE_KEY, {});
        setVisible(false);
      }, 1000);
    }

    const dots = document.querySelectorAll('.loading-dot span');
    const STATIC_HEIGHT = 30;
    function listenMove() {
      const UNLOCK_DISTANCE = dots.length * 30;
      if (arguments.length < 1) return;
      const event = arguments[0];
      const { clientY } = event;
      const distance = clientY - startY;
      dots.forEach((item: HTMLDivElement, index) => {
        item.style.opacity = distance >= index * STATIC_HEIGHT ? '0' : '1';
      });
      if (distance < 0) {
        dot.style.cssText = `transform: translate3d(0, 0, 0)`;
        return;
      }
      dot.style.cssText = `transform: translate3d(0, ${distance}px, 0)`;
      if (distance >= UNLOCK_DISTANCE) {
        const box: HTMLDivElement = document.querySelector('.unlock-box');
        box.style.display = 'none';
        unlock();
      }
    }
    let startY = 0;
    dot.addEventListener(
      'mousedown',
      (e: MouseEvent) => {
        startY = e.clientY;
        window.addEventListener('mousemove', listenMove);
      },
      false,
    );
    window.addEventListener('mouseup', () => {
      window.removeEventListener('mousemove', listenMove);
      dot.style.cssText = `transform: translate3d(0, 0, 0)`;
      restoreDotStatus();
    });
    dot.addEventListener('mouseup', () => {
      window.removeEventListener('mousemove', listenMove);
      dot.style.cssText = `transform: translate3d(0, 0, 0)`;
      restoreDotStatus();
    });
    /**
     * 恢复解锁状态
     */
    function restoreDotStatus() {
      dots.forEach((item: HTMLDivElement) => {
        item.style.opacity = '1';
      });
    }
  }
  if (!visible) return null;
  const { loadingTitle, loadingSubTitle, unlockTip } = loadingCfg;
  return (
    <div className="loading-container">
      <div className="loading-top">
        <h3>{loadingTitle}</h3>
        <div className="loading-tips">{loadingSubTitle}</div>
        <h4 className="loading-tips-unlock">{unlockTip}</h4>
      </div>
      <div className="loading-bottom">
        <div className="unlock-box">
          <div className="unlock-btn" ref={ref}>
            <div className="btn"></div>
            <div className="btn-inner"></div>
            <div className="unlock-direction"></div>
          </div>
          <div className="loading-dot">
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
      </div>
    </div>
  );
};
