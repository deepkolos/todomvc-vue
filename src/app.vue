<script>
import store from './stores/index'
import { release, intercept } from "./libs/simple-state";
/**
 * 应用级别的配置，供所有页面公用
 */
const data = {};

export default {
  onCreate() {
    this.$store = store;
		console.log("TCL: onCreate -> store", store)
    // console.log(`app created`);
    // console.log("global vue", global.Vue);
    // console.log("global setTimeout", global.setTimeout);
  },
  onDestroy() {
    console.log(`app destroyed`);
  },
  getData() {
    return data;
  },
  setData(k, v) {
    data[k] = v;
  },
  schedule() {
    intercept();
    setTimeout(() => {
      release();
    }, 100);
  }
};
</script>
