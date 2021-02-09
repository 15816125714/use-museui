<template>
  <div class="demp-page">
    <div class="wrap">
      <div class="box">
        Flex
      </div>
    </div>
    <mu-radio v-model="tag" label="vue" value="vue" color="red" />
    <br>
    <br>
    <mu-radio v-model="tag" label="react" value="react" />
    <br>
    <br>
    <mu-checkbox v-model="time" label="2014" value="2014" />
    <mu-checkbox border v-model="time" label="2016" value="2016" />
    <mu-checkbox border color="red" v-model="time" label="2017" value="2017" />
    <mu-checkbox border disabled v-model="time" label="2018" value="2018" />
  </div>
</template>

<script>
export default {
  data() {
    return {
      tag: "vue",
      time: [],
    }
  },
  methods: {
  }
}
</script>

<style lang="less" scoped>
.demp-page {
  color: #545252;
  padding: 100px;
  .box {
    color: #545252;
    width: 200px;
    height: 200px;
    font-size: 20px;
    background: #ffd200;
    display: flex;
    align-items: center;
    justify-content: center;
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    margin: auto;
    &::after {
      content: " ";
      width: 20px;
      height: 20px;
      background: currentColor;
      // background: #333;
      position: absolute;
      right: 0;
      bottom: 0;
    }
  }
}
</style>