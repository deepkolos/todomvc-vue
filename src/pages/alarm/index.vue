<template>
  <div style="flex-direction: column;width: 100%;">
    <input type="text" placeholder="小时" @change="setHour">
    <input type="text" placeholder="分钟" @change="setMinute">
    <input type="text" placeholder="备注" @change="setMsg">

    <input type="button" value="设置闹钟" @click="setAlarm">
  </div>
</template>

<script>
import alarm from "@system.alarm";
import prompt from "@system.prompt";

export default {
  methods: {
    setHour(e) {
      this.hour = e.value;
    },
    setMinute(e) {
      this.minute = e.value;
    },
    setMsg(e) {
      this.msg = e.value;
    },

    setAlarm() {
      alarm.setAlarm({
        hour: this.hour,
        minute: this.minute,
        message: this.msg,

        success(e) {
          prompt.showToast({
            message: "闹钟设置成功"
          });
        },
        fail(e) {
          prompt.showToast({
            message: `闹钟设置失败: ${e}`
          });
        }
      });
    }
  }
};
</script>
