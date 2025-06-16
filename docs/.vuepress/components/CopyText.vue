<template>
  <span class="copy-text" @click="copyText">
    {{ text }}
    <span class="copy-tip" v-if="showTip">点击复制</span>
  </span>
</template>

<script>
export default {
  props: {
    text: {
      type: String,
      required: true,
    },
    showTip: {
      type: Boolean,
      default: true,
    },
  },
  methods: {
    async copyText() {
      try {
        await navigator.clipboard.writeText(this.text);
        alert(`已复制: ${this.text}`);
      } catch (err) {
        prompt("复制失败，请手动复制：", this.text);
      }
    },
  },
};
</script>

<style scoped>
.copy-text {
  cursor: pointer;
  color: #3eaf7c; /* VuePress 主题色 */
  border-bottom: 1px dashed #3eaf7c;
  padding: 0 2px;
}
.copy-tip {
  font-size: 0.8em;
  color: #999;
  margin-left: 4px;
}
</style>