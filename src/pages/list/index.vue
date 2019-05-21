<template>
  <div style="flex-direction: column;">
    <list>
      <template v-for="(item, index) in 10">
        <list-item :key="index">
          <text>item: {{ index }}</text>
        </list-item>
      </template>
    </list>
  </div>
</template>

<script>
export default {
  created() {},

  methods: {}
};
</script>
