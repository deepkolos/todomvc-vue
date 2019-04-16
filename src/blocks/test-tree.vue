<style>
.tree {
  flex-direction: column;
  margin-left: 20px;
}

.tree-text {
  font-size: 30px;
  color: greenyellow;
  margin-bottom: 10px;
}
</style>

<template>
  <div class="tree">
    <text class="tree-text">{{value}}</text>
    <test-tree v-for="(item, index) in children" :key="index" v-bind="item"/>
  </div>
</template>

<script>
export default {
  name: 'test-tree',

  props: {
    value: [String, Number],
    children: Array
  }
};
</script>
