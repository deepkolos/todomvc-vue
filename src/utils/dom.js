import { Interpolator } from './interpolator';

const getNow = Date.now;

export const animate = (
  src,
  dst,
  duration,
  translate,
  easeFn = Interpolator.easeOutQuint.fn
) => {
  let startTime = getNow();
  let destTime = startTime + duration;
  let doneCB;
  let status = {
    isAnimating: true,
    animateTimer: null,
    cancel: () => {
      status.isAnimating = false;
      return status;
    },
    finish: () => {
      translate(dst);
      doneCB instanceof Function && doneCB();
    },
    then: cb => {
      doneCB = cb;
      return status;
    }
  };

  let step = () => {
    if (!status.isAnimating) return;

    let now = getNow();

    if (now >= destTime || !duration) {
      status.isAnimating = false;
      clearTimeout(status.animateTimer);
      translate(dst);
      doneCB instanceof Function && doneCB();
      return;
    }
    now = (now - startTime) / duration;
    let easing = easeFn(now);
    let curr = Object.keys(src).reduce((acc, k) => {
      acc[k] = (dst[k] - src[k]) * easing + src[k];
      return acc;
    }, {});
    translate(curr);

    if (status.isAnimating) {
      status.animateTimer = setTimeout(step, 8);
    }
  };

  step();

  return status;
};
