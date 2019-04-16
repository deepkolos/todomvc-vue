<style>
.block {
  height: 100px;
  width: 100px;
  background-color: aqua;
}

.btn-start {
  margin: 20px;
  margin-bottom: 20px;
  padding: 15px;
}

.animated {
  animation-name: translate;
  animation-duration: 1s;
  animation-fill-mode: forwards;
  animation-timing-function: ease;
}

@keyframes translate {
  0% {
    transform: translateX(0px);
  }
  100% {
    transform: translateX(550px);
  }
}
</style>

<template>
  <div style="flex-direction: column; width: 100%;">
    <text>模拟value animator</text>
    <input class="btn-start" type="button" value="start" @click="startSimulation">
    <div class="block" :style="{
      transform: `translateX(${x}px)`
    }"></div>

    <text>animation</text>
    <input class="btn-start" type="button" value="start" @click="startAnimate">
    <div class="block" :class="{animated}"></div>
  </div>
</template>

<script>
import { animate } from "../../utils/dom";
import BezierEasing from "bezier-easing";

export default {
  data() {
    return {
      x: 0,
      animated: false
    };
  },

  methods: {
    startSimulation() {
      var startTime = Date.now();

      animate(
        { x: 0 },
        { x: 550 },
        1000,
        ({ x }) => {
          this.x = x;
          // console.log("TCL: startAnimate -> x", x);
        },
        BezierEasing(0.25, 0.1, 0.25, 1)
      ).then(() => {
        console.log(Date.now() - startTime);
      });
    },

    startAnimate() {
      this.animated = true;
    }
  }
};
</script>
