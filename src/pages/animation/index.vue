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

.animated-x {
  animation-name: translateX;
  animation-delay: 1s;
  animation-duration: 1s;
  animation-fill-mode: forwards;
  transform: translateX(200%);
}

.animated-x-px {
  animation-name: translateXPX;
  animation-delay: 1s;
  animation-duration: 1s;
  animation-fill-mode: forwards;
  transform: translateX(200px);
}

@keyframes translateX {
  0% {
    transform: translateX(200%);
  }
  100% {
    transform: translateX(0%);
  }
}

@keyframes translateXPX {
  0% {
    transform: translateX(200px);
  }
  100% {
    transform: translateX(0%);
  }
}
</style>

<template>
  <div style="flex-direction: column; width: 100%;">
    <text>模拟value animator</text>
    <input
      class="btn-start"
      type="button"
      value="start"
      @click="startSimulation"
    />
    <div
      class="block"
      :style="{
        transform: `translateX(${x}px)`
      }"
    ></div>

    <text>animation</text>
    <input
      class="btn-start"
      type="button"
      value="start"
      @click="startAnimate"
    />
    <div ref="block" class="block" :class="{ animated }"></div>

    <text>animation-fill-mode-bug-translateX-percent</text>
    <div class="block animated-x"></div>

    <text>animation-fill-mode-bug-translateX-px</text>
    <div class="block animated-x-px"></div>
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
      // this.animated = true;
      var $block = this.$refs.block;

      var handler = $block
        .animate(
          [
            {
              transform: "translateX(0px)",
              time: 0
            },
            {
              transform: "translateX(550px)",
              time: 100
            }
          ],
          {
            duration: 1000,
            easing: "ease",
            delay: 0,
            fill: "forwards",
            iterations: 1,
            needLayout: false
          }
        )
        .play();

      console.log("TCL: startAnimate -> animate", handler);
    }
  }
};
</script>
