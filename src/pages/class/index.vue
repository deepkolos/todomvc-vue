<style>
.test {
  margin: 100px;
  background-color: aqua;
}

.loading {
  background-color: blueviolet;
}
</style>

<template>
  <div style="flex-direction: column;">
    <test-class class="static-class" :class="`test ${state}`" :style="`background-color: ${bgColor}`" />
    <test-class :style="{
      backgroundColor: `#ff${index * 3}${index * 3}00`
    }" v-for="(index) in 3" :key="index" />
  </div>
</template>

<script>
import testClass from "../../blocks/test-class";

export default {
  components: { testClass },

  data() {
    return {
      state: "loading",
      bgColor: "red"
    };
  }
};
</script>
