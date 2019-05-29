<style>
</style>

<template>
  <div style="flex-direction: column; width: 100%;">
    <input type="button" value="toggle component" @click="toggle" />
    <component :is="currentComp" v-bind="components[currentComp]" />

    <image src="/images/spider-man.webp"></image>
  </div>
</template>

<script>
import testClass from "../../blocks/test-slot";
import testSlotEl from "../../blocks/test-slot-el";

export default {
  components: {
    testClass,
    testSlotEl
  },

  data() {
    return {
      currentComp: "test-class",

      components: {
        "test-class": {
          props: {
            k1: "v1"
          }
        },
        "test-slot-el": {
          props: {
            k2: "v2"
          }
        }
      }
    };
  },

  methods: {
    toggle() {
      this.currentComp =
        this.currentComp === "test-class" ? "test-slot-el" : "test-class";
    }
  }
};
</script>
