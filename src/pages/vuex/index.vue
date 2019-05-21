<template>
  <div><text>{{keyword}}</text></div>
</template>

<script>
import { mapGetters } from "vuex";
import { initStore } from "../../stores/index";

export default {
  computed: {
    ...mapGetters(["keyword"])
    // keyword() {
    //   return this.$store.state.keyword;
    // }
  },

  beforeCreate() {
    initStore(this, Vue);
  },

  mounted() {
    console.log(`keyword ${this.keyword} ${this.$store.state.keyword}`);
    setTimeout(() => {
      this.$store.dispatch("setKeyword", `${this.keyword} added `);
      this.$nextTick(() => {
        console.log(`keyword ${this.keyword} ${this.$store.state.keyword}`);
      });
    }, 1000);
  }
};
</script>
