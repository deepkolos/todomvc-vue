<style>
.slot-el {
  margin: 10px;
  background-color: aqua;
  height: 100px;
  width: 100%;
}

.slot-el.typeA {
  background-color: burlywood;
}

.test-slot-el {
  background-color: blueviolet;
}
</style>

<template>
  <div>
    <input type="button" value="toggle template" @click="testSlotProps.showTpl = !testSlotProps.showTpl">

    <test-slot v-bind="testSlotProps" :scope="{root}">
      <div class="slot-el" slot-scope="item">
        <text>default文字 {{item.propA}}</text>
      </div>

      <div class="slot-el typeA" slot="before" slot-scope="item">
        <text>before文本 {{item.attr}}</text>
      </div>
      <test-slot-el class="test-slot-el" slot="after" />

      <template slot-scope="item" v-if="item.showTpl">
        <text>template文字 {{item.propA}}</text>
        <test-slot-el class="test-slot-el" :value="getValue()" />
        <test-slot-el class="test-slot-el" :value="value" />
      </template>

      <test-tree slot="bottom" slot-scope="{ root }" v-bind="root" />
    </test-slot>
  </div>
</template>

<script>
import testTree from "../../blocks/test-tree";
import testSlot from "../../blocks/test-slot";
import testSlotEl from "../../blocks/test-slot-el";

export default {
  components: {
    testTree,
    testSlot,
    testSlotEl
  },

  data() {
    return {
      value: "value",
      valueFromGet: "value from get fn",
      testSlotProps: {
        propA: "string",
        propB: 1,
        showTpl: false
      },
      root: {
        value: "根节点",
        children: [
          {
            value: "节点1",
            children: [
              {
                value: "节点1.1"
              }
            ]
          },
          {
            value: "节点2",
            children: [
              {
                value: "节点2.1"
              }
            ]
          },
          {
            value: "节点3",
            children: []
          }
        ]
      }
    };
  },

  watch: {
    value() {
      console.log("TCL: parent comp's value changed");
      this.valueFromGet = "value from get fn changed";
    }
  },

  mounted() {
    setTimeout(() => {
      this.value = "value changed";
    }, 1000);
  },

  methods: {
    getValue() {
      console.log("TCL: getValue triggered");
      return this.valueFromGet;
    }
  }
};
</script>
