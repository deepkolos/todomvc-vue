const fillPercent = percent => {
  if (percent > -0.009 && percent < 0.009) return 0;
  if (percent > 0.991 && percent < 1.009) return 1;
  return percent;
};

const getNow = Date.now;
const rFA = cb => setTimeout(cb, 16);

export default class ValueAnimator {
  constructor(from, to, duration, interpolator) {
    this.originTo = to;
    this.originFrom = from;
    this.originDuration = duration;
    this.to = to;
    this.from = from;
    this.duration = duration;
    this.interpolator = interpolator;

    this.curr = from;
    this.delta = to - from;
    this.thenCbs = [];
    this.duringCbs = [];
    this.percent = 0;
    this.stopTime = null;
    this.startTime = null;
    this.isPlaying = false;
    this.isFinished = false;
    // TODO: repeatCount repeatMode
  }

  setTo(to) {
    // TODO: 支持动态修改to的位置
    if (this.isPlaying) {
      this.startTime = this.currTime;
      this.duration = (1 - this.percent) * this.duration;
      this.from = this.curr;
      this.percent = 0;
    }

    this.originTo = to;
    this.to = to;
    this.delta = to - this.from;

    return this;
  }

  setDuration(duration) {
    // TODO: 支持动态修改duration
    // 这里逻辑应该也是吧
    if (this.isPlaying) {
      this.startTime = this.currTime;
      this.from = this.curr;
      this.delta = this.to - this.from;
      this.percent = 0;
    }

    this.duration = ~~duration;
    this.originDuration = ~~duration;

    return this;
  }

  setInterpolator(interpolator) {
    if (interpolator) this.interpolator = interpolator;

    return this;
  }

  getCurr() {
    return this.curr;
  }

  start() {
    this.startTime = getNow();
    this.isPlaying = true;
    this.isFinished = false;

    if (
      this.to !== null &&
      this.from !== null &&
      this.duration !== null &&
      this.interpolator !== null
    )
      this._frame();
    return this;
  }

  _frame() {
    this.currTime = getNow();

    this.percent = fillPercent(
      (this.currTime - this.startTime) / this.duration
    );
    this.curr = this.from + this.interpolator(this.percent) * this.delta;
    this.duringCbs.length && this.duringCbs.forEach(cb => cb(this));

    if (this.percent >= 1) {
      this.isPlaying = false;
      this.isFinished = true;
      this.to = this.originTo;
      this.from = this.originFrom;
      this.delta = this.to - this.from;
      this.duration = this.originDuration;
      this.thenCbs.length && this.thenCbs.forEach(cb => cb(this));
    } else if (this.isPlaying) {
      rFA(() => this._frame());
    }
  }

  stop() {
    this.stopTime = getNow();
    this.isPlaying = false;
    return this;
  }

  finish() {
    this.curr = this.to;
    this.percent = 1;
    this.isPlaying = false;
    this.isFinished = true;
    this.duringCbs.length && this.duringCbs.forEach(cb => cb(this));
    this.thenCbs.length && this.thenCbs.forEach(cb => cb(this));
    return this;
  }

  reset() {
    this.percent = 0;
    this.startTime = null;
    this.isPlaying = false;
    this.isFinished = false;
    this.curr = this.from;
    this.delta = this.to - this.from;
    this.duringCbs.length && this.duringCbs.forEach(cb => cb(this));
  }

  destroy() {
    this.to = null;
    this.from = null;
    this.curr = null;
    this.delta = null;
    this.percent = null;
    this.thenCbs = null;
    this.duringCbs = null;
    this.isPlaying = null;
    this.startTime = null;
    this.isFinished = null;
    this.interpolator = null;
  }

  then(cb) {
    this.thenCbs.push(cb);
    return this;
  }

  during(cb) {
    this.duringCbs.push(cb);
    return this;
  }
}
