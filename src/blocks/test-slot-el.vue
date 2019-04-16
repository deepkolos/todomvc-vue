<style>
.test-slot-el {
  width: 100px;
  height: 100px;
  background-color: aqua;
}
</style>

<template>
  <div class="test-slot-el"></div>
</template>

<script>
export default {
  props: {
    value: String
  },

  watch: {
    value(v, o) {
			console.log("TCL: value -> v, o", v, o)
    }
  },
};
</script>
