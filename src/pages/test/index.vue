<style>
.test-page {
  flex-direction: column;
}
.test-page a {
  font-size: 60px;
}
</style>

<template>
  <div class="test-page">
    <a v-for="([label, link], index) in links" :key="index" :href="link">{{ label }}</a>
  </div>
</template>

<script>
export default {
  data() {
    return {
      links: [
        ["Todos 测试", "/index"],
        ["Slot 测试", "/pages/slot"],
        ["Page 测试", "/pages/page"],
        ["Event 测试", "/pages/event"],
        ["Class 测试", "/pages/class"],
        ["Directive 测试", "/pages/directive"],
        ["Animation 测试", "/pages/animation"],
        ["Component 测试", "/pages/component"]
      ]
    };
  },
  async created() {
    console.log("TCL: created -> created");
  },
  mounted() {
    this.$page.setTitleBar({
      text: "todomvc"
    });
  },
  onBackPress() {
    console.log("TCL: onBackPress -> onBackPress");
    // 若为true，取消默认返回行为
    return false;
  },
  methods: {}
};
</script>
