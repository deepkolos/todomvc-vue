<style>
.event {
  flex-direction: column;
}

.text {
  width: 100%;
  height: 100%;
  display: flex;
  text-align: center;
  align-items: center;
}

.stack {
  width: 750px;
  height: 750px;
  background-color: azure;
}

.point {
  width: 50px;
  height: 50px;
  background-color: red;
}
</style>

<template>
  <div class="event">
    <stack class="stack" @touchstart="onTouchStart" @touchmove="onTouchMove" @touchend="onTouchEnd">
      <!-- <text class="text">附魔台: 请绘制附魔咒符</text> -->

      <div class="point" ref="point" :style="{transform}"></div>
    </stack>
    <text>
      x: {{ x }} px
      y: {{ y }} px
      vx: {{ vx }} px/s
      vy: {{ vy }} px/s
      ax: {{ ax }} px/ss
      ay: {{ ay }} px/ss
      flingT: {{ flingT }}
    </text>
  </div>
</template>

<script>
import { animate } from "../../utils/dom";
import VelocityTracker from "../../libs/velocity-tracker";
import { setTimeout, clearTimeout } from "timers";

const tran = (x, y) => `translateX(${x}px) translateY(${y}px)`;
const restrictRange = (x, min, max) => (x > max ? max : x < min ? min : x);

export default {
  data() {
    return {
      x: "",
      y: "",
      vx: "",
      vy: "",
      ax: "",
      ay: "",
      flingT: "",
      deceleration: -0.012,
      pointWidth: 50,
      transform: "",
      transitionDuration: ""
    };
  },

  mounted() {
    this.tracker = new VelocityTracker();
    this.$point = this.$refs.point;

    const timer = setTimeout(() => {
      console.log("TCL: timer -> setTimeout fired");
    }, 1000);
    clearTimeout(timer);
  },

  methods: {
    onTouchStart(e) {
      this.tracker.clear();
      this.transitionDuration = "0ms";
    },
    onTouchMove(e) {
      this.tracker.addMovement({
        x: e.touches[0].clientX,
        y: e.touches[0].clientY
      });
      this.vy = Math.round(this.tracker.getYVelocity() * 1000);
      this.vx = Math.round(this.tracker.getXVelocity() * 1000);
      this.ax = Math.round(this.tracker.getXAcceleration() * 1000 * 1000);
      this.ay = Math.round(this.tracker.getYAcceleration() * 1000 * 1000);
      this.x = this.tracker.getPoint().x - this.pointWidth / 2;
      this.y = this.tracker.getPoint().y - this.pointWidth / 2;
      this.x = restrictRange(this.x, this.minPointX, this.maxPointX);
      this.y = restrictRange(this.y, this.minPointY, this.maxPointY);
      this.transform = tran(this.x, this.y);
    },
    onTouchEnd(e) {
      const pX = this.tracker.predictX(parseFloat(this.deceleration));
      const pY = this.tracker.predictY(parseFloat(this.deceleration));
      const detaX = pX.s;
      const detaY = pY.s;
      const x = this.x;
      const y = this.y;

      this.x += detaX;
      this.y += detaY;
      this.flingT = Math.max(pX.t, pY.t);
      animate({ x, y }, { x: this.x, y: this.y }, this.flingT, ({ x, y }) => {
        this.transform = tran(x, y);
      });
    }
  }
};
</script>
