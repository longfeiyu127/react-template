import store from '../service/store';

((doc, win) => {
  const docEl = doc.documentElement;
  const { dispatch, getState } = store;
  const resizeEvt =
    'orientationchange' in window ? 'orientationchange' : 'resize';
  function recalc() {
    const { clientWidth, clientHeight } = docEl;
    if (!clientWidth) return;
    // eslint-disable-next-line
    win.clientWidth = clientWidth;
    // eslint-disable-next-line
    win.clientHeight = clientHeight;
    if (getState().screen.clientHeight !== clientHeight) {
      dispatch.screen.setClientHeight(clientHeight);
    }
    if (getState().screen.clientWidth !== clientWidth) {
      dispatch.screen.setClientWidth(clientWidth);
    }
    if (clientWidth < 750) {
      docEl.style.fontSize = `${200 * (clientWidth / 750)}px`;
    } else {
      docEl.style.fontSize = `${200}px`;
    }
  }
  if (!doc.addEventListener) return;
  win.addEventListener(resizeEvt, recalc, false);
  doc.addEventListener('DOMContentLoaded', recalc, false);
})(document, window);
