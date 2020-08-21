<template>
  <div class="dialog">
    <div
      class="dialog-box"
      :style="{
          width:info.width,
          height:info.height
      }"
    >
      <div class="dialog-title">
        我是标题
        <i @click="handleClose">X</i>
      </div>
      <div
        class="dialog-content"
        :style="{
          height:contentHeight
        }"
      >
        <component
          v-if="info.name"
          :is="info.name"
        ></component>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Dialog',
  data () {
    return {
      info: {}
    }
  },
  computed: {
    contentHeight () {
      return parseInt(this.info.height) - 48 + 'px'
    }
  },
  methods: {
    handleClose () {
      document.body.removeChild(this.$el)
    },
    show (options) {
      this.info = options;
    }
  }
}

</script>
<style lang="css" scoped>
.dialog {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
}
.dialog-box {
  position: absolute;
  left: 50%;
  top: 100px;
  transform: translateX(-50%);
  width: 800px;
  height: 500px;
  background-color: #fff;
  border-radius: 10px;
}
.dialog-title {
  position: relative;
  height: 40px;
  line-height: 40px;
  text-align: center;
  border-bottom: 1px solid #e0e0e0;
}
.dialog-title i {
  position: absolute;
  right: 20px;
  cursor: pointer;
  font-style: normal;
}
.dialog-content {
  padding: 10px 20px;
  box-sizing: border-box;
  overflow-y: auto;
}
</style>