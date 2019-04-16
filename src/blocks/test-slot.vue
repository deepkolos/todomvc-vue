<style>
.test-slot {
  background-color: red;
  width: 100%;
  flex-direction: column;
}
</style>

<template>
  <div class="test-slot">
    <slot name="before" v-bind="obj"></slot>
    <slot v-bind="$props"></slot>
    <slot name="after" v-bind="obj"></slot>
    <slot name="bottom" v-bind="scope"></slot>
  </div>
</template>

<script>
export default {
  props: {
    propA: String,
    propB: Number,
    showTpl: Boolean,
    scope: Object
  },
  data() {
    return {
      obj: {
        attr: "value",
        key: "value-key"
      }
    };
  }
};
</script>
