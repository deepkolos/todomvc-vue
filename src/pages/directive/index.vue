<style>
.page {
  width: 100%;
  flex-direction: column;
}
.directive {
  flex-direction: column;
  width: 100%;
  background-color: beige;
  flex: 1;
}

.directive text {
  font-size: 60px;
}

.bg-other {
  background-color: azure;
}

.active {
  background-color: lawngreen;
}
</style>

<template>
  <div class="page">
    <div class="directive" :class="{active}" v-swipe:horizonal.lock="swipeCfg">
      <text>horizonal测试</text>
      <text>{{directionFour}} {{directionTwo}}</text>
    </div>

    <div class="directive bg-other" :class="{active: otherActive}" v-swipe:vertical.lock="otherSwipeCfg">
      <text>vertical测试</text>
      <text>{{otherDirectionFour}} {{otherDirectionTwo}}</text>
    </div>
  </div>
</template>

<script>
export default {
  directives: {
    swipe: {
      bind($el, binding) {
        // any , horizonal, vertical, right, left, up, down
        // modifiers: lock, capture
        var argument = [
          "any",
          "horizonal",
          "vertical",
          "right",
          "left",
          "up",
          "down"
        ];

        var lock = binding.modifiers.lock;
        var capture = binding.modifiers.capture;
        var processor = binding.value;
        var startX;
        var startY;
        var movingX;
        var movingY;
        var directionFour;
        var directionTwo;
        var offset;
        var directionCheckDone;
        var continuePropagation;
        var startWidthTwo;
        var startWidthFour;
        var canceled;
        var enable =
          binding.value.enable !== undefined ? binding.value.enable : true;

        function getInfo(srcEvt) {
          return {
            element: $el,
            scrEvt: srcEvt,
            offset: offset,
            startX: startX,
            startY: startY,
            movingX: movingX,
            movingY: movingY,
            directionTwo: directionTwo,
            directionFour: directionFour,
            startWidthTwo: startWidthTwo,
            startWidthFour: startWidthFour
          };
        }

        // offset的含义由directionTwo来确定的

        if (argument.includes(binding.arg) && enable) {
          $el.addEventListener(
            "touchstart",
            function(e) {
              startX = e.touches[0].clientX;
              startY = e.touches[0].clientY;
              directionTwo = null;
              directionCheckDone = null;
              startWidthTwo = null;
              startWidthFour = null;
              continuePropagation = false;
              canceled = false;
            },
            capture
          );

          $el.addEventListener(
            "touchmove",
            function(e) {
              movingX = e.touches[0].clientX;
              movingY = e.touches[0].clientY;

              var x = movingX - startX;
              var y = movingY - startY;
              var lockCheck = false;
              var check;

              (directionTwo == null || binding.arg === "any") &&
                (directionTwo =
                  Math.abs(y) <= Math.abs(x) ? "horizonal" : "vertical");

              if (directionTwo === "vertical") {
                offset = y;
                directionFour = y < 0 ? "up" : "down";
              } else {
                offset = x;
                directionFour = x > 0 ? "right" : "left";
              }

              check =
                [directionFour, directionTwo].includes(binding.arg) ||
                binding.arg === "any";

              if (directionCheckDone === null) {
                if (check === true) {
                  startWidthTwo = directionTwo;
                  startWidthFour = directionFour;
                  processor.start instanceof Function &&
                    processor.start(
                      getInfo(e),
                      setTo => {
                        lockCheck = setTo;
                      },
                      setTo => {
                        continuePropagation = setTo;
                      }
                    );
                }

                directionCheckDone = check;
              }

              if (directionCheckDone) {
                lock && (lockCheck = true);

                processor.move instanceof Function &&
                  processor.move(
                    getInfo(e),
                    setTo => {
                      lockCheck = setTo;
                    },
                    setTo => {
                      continuePropagation = setTo;
                    }
                  );
                !continuePropagation && e.stopPropagation();
                lockCheck && e.cancelable && e.preventDefault();
              } else if (!canceled) {
                canceled = true;
                processor.cancel instanceof Function &&
                  processor.cancel(
                    getInfo(e),
                    setTo => {
                      lockCheck = setTo;
                    },
                    setTo => {
                      continuePropagation = setTo;
                    }
                  );
              }
            },
            capture
          );

          $el.addEventListener(
            "touchend",
            function(e) {
              var lockCheck = false;
              continuePropagation = true;
              lock && directionCheckDone && (lockCheck = true);

              directionCheckDone &&
                processor.end instanceof Function &&
                processor.end(
                  getInfo(e),
                  setTo => {
                    lockCheck = setTo;
                  },
                  setTo => {
                    continuePropagation = setTo;
                  }
                );
              !continuePropagation && e.stopPropagation();
              lockCheck && e.cancelable && e.preventDefault();
            },
            capture
          );
        } else {
          enable && console.log(`未知自定义swipe位置参数:${binding.arg}`);
        }
      }
    }
  },

  data() {
    return {
      active: false,
      directionTwo: "",
      directionFour: "",

      otherActive: false,
      otherDirectionTwo: "",
      otherDirectionFour: ""
    };
  },

  created() {
    const log = info => {
			console.log("TCL: created -> info", info)
      this.active = info.scrEvt.type !== "touchend";
      this.directionTwo = info.directionTwo;
      this.directionFour = info.directionFour;
    };
    const otherLog = info => {
      this.otherActive = info.scrEvt.type !== "touchend";
      this.otherDirectionTwo = info.directionTwo;
      this.otherDirectionFour = info.directionFour;
    };

    this.swipeCfg = {
      start: log,
      move: log,
      end: log
    };
    this.otherSwipeCfg = {
      start: otherLog,
      move: otherLog,
      end: otherLog
    };
  },

  methods: {
    onSwipeStart(e) {
      console.log("TCL: onSwipeStart -> e", e);
    },
    onSwipeMove(e) {
      console.log("TCL: onSwipeStart -> e", e);
    },
    onSiwpeEnd(e) {
      console.log("TCL: onSwipeStart -> e", e);
    }
  }
};
</script>
