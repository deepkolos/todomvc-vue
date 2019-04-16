<template>
  <div style="flex-direction: column;">
    <input type="button" value="getData" @click="getData">
    <input type="button" value="setData" @click="setData">
  </div>
</template>

<script>
import { getData } from "../../libs/simple-state";

export default {
  created() {
    console.log(this);

    console.log("TCL: created -> getData()", getData());
    this.$app.$def.schedule();
    console.log("TCL: created -> getData()", getData());
  },

  methods: {
    getData() {
      console.log("TCL: getData -> getData", this.$app.$def.getData());
    },

    setData() {
      this.$app.$def.setData("key", "value");
    }
  }
};
</script>
