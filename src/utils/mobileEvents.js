/**
 * Mobile touch direction detect
 * @example
 * let el = document.getElementById('someElement');
 * swipeDetect(el, function(swipedir){
 *   // swipedir contains either "none", "left", "right", "top", or "down"
 *   if (swipedir =='left')
 *     alert('You just swiped left!')
 * })
 * @export
 * @param {DOMElement} el
 * @param {function} callback
 */
export default function swipeDetect(el, callback = () => {}) {
  let swipeDir;
  let startX;
  let startY;
  let distX;
  let distY;
  // required min distance traveled to be considered swipe
  const threshold = 75;
  // maximum distance allowed at the same time in perpendicular direction
  const restraint = 50;
  // maximum time allowed to travel that distance
  const allowedTime = 300;
  let elapsedTime;
  let startTime;

  el.addEventListener(
    'touchstart',
    e => {
      const touchobj = e.changedTouches[0];
      swipeDir = 'none';
      startX = touchobj.pageX;
      startY = touchobj.pageY;
      // record time when finger makes first touch with surface
      startTime = new Date().getTime();
      e.preventDefault();
    },
    false
  );

  el.addEventListener(
    'touchmove',
    e => {
      // prevent scrolling when inside DIV
      e.preventDefault();
    },
    false
  );

  el.addEventListener(
    'touchend',
    e => {
      const touchobj = e.changedTouches[0];
      // get horizontal dist traveled by finger while in contact with surface
      distX = touchobj.pageX - startX;
      // get vertical dist traveled by finger while in contact with surface
      distY = touchobj.pageY - startY;
      // get elapsed time
      elapsedTime = new Date().getTime() - startTime;
      // first condition for swipe met
      if (elapsedTime <= allowedTime) {
        // 2nd condition for horizontal swipe met
        if (Math.abs(distX) >= threshold && Math.abs(distY) <= restraint) {
          // if dist traveled is negative, it indicates left swipe
          swipeDir = distX < 0 ? 'left' : 'right';
          // 2nd condition for vertical swipe met
        } else if (
          Math.abs(distY) >= threshold &&
          Math.abs(distX) <= restraint
        ) {
          // if dist traveled is negative, it indicates up swipe
          swipeDir = distY < 0 ? 'up' : 'down';
        }
      }
      callback(swipeDir);
      e.preventDefault();
    },
    false
  );
}

export function moveDetect(el, callback = () => {}) {
  let moveState = true;
  let startX;
  let startY;
  // let moveX = 0;
  // let moveY = 0;
  let distX;
  let distY;
  // // required min distance traveled to be considered swipe
  // const threshold = 75;
  // // maximum distance allowed at the same time in perpendicular direction
  // const restraint = 50;
  // // maximum time allowed to travel that distance
  // const allowedTime = 300;
  // let elapsedTime;
  // let startTime;
  function touchmove(e) {
    if (moveState) {
      moveState = false;
      const touchMvoeObj = e.changedTouches[0];
      console.log('startX', startX);
      // console.log('moveX', moveX);
      distX = touchMvoeObj.pageX - startX;
      // moveX = distX;
      distY = touchMvoeObj.pageY - startY;
      // moveY = distY;
      console.log(distX / 100, distY / 100);
      if (callback) {
        callback({ left: distX / 200, top: distY / 200 });
      }
      // prevent scrolling when inside DIV
      moveState = true;
      e.preventDefault();
    }
  }
  function touchend(e) {
    el.removeEventListener('touchmove', touchmove);
    el.removeEventListener('touchend', touchend);
    e.preventDefault();
  }

  el.addEventListener(
    'touchstart',
    e => {
      const touchobj = e.changedTouches[0];
      startX = touchobj.pageX;
      startY = touchobj.pageY;
      e.preventDefault();
      el.addEventListener('touchmove', touchmove, false);
      el.addEventListener('touchend', touchend, false);
    },
    false
  );
}
