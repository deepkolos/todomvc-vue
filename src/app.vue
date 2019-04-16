<script>
import { release, intercept } from "./libs/simple-state";
/**
 * 应用级别的配置，供所有页面公用
 */
const data = {};

export default {
  onCreate() {
    console.log(`app created`);
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
