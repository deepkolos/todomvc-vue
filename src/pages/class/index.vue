<style>
.test {
  margin: 50px;
  background-color: aqua;
}

.loading {
  background-color: blueviolet;
}

.border-bug {
  flex-direction: column;
  border-radius: 100px;
  background-color: chartreuse;
}

.simple-blk {
  width: 100%;
  height: 50px;
  background-color: cyan;
}
</style>

<template>
  <div class="border-bug">
    <div class="simple-blk"></div>
    <test-class
      class="static-class"
      :class="`test ${state}`"
      :style="`background-color: ${bgColor}`"
    />
    <test-class
      :style="{
        backgroundColor: `#ff${index * 3}${index * 3}00`
      }"
      v-for="index in 3"
      :key="index"
    />
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
