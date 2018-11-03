((doc, win) => {
  const docEl = doc.documentElement;
  const resizeEvt =
    'orientationchange' in window ? 'orientationchange' : 'resize';
  function recalc() {
    const { clientWidth, clientHeight } = docEl.clientWidth;
    // const clientWidth = docEl.clientWidth;
    // const clientHeight = docEl.clientHeight;
    // win.clientWidth = clientWidth;
    // win.clientHeight = clientHeight;
    console.log(clientWidth);
    console.log(clientHeight);
    if (!clientWidth) return;
    if (clientWidth < 750) {
      docEl.style.fontSize = `${200 * (clientWidth / 750)}px`;
      // document.documentElement.style.fontSize = document.documentElement.clientWidth / 100 * 26.66 + 'px'
    } else {
      docEl.style.fontSize = `${200}px`;
    }
  }
  if (!doc.addEventListener) return;
  win.addEventListener(resizeEvt, recalc, false);
  doc.addEventListener('DOMContentLoaded', recalc, false);
})(document, window);
