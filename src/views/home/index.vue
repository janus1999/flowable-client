<template>
  <div class="app-container documentation-container">
    <a class="document-btn" target='_blank' href="https://panjiachen.github.io/vue-element-admin-site/#/">文档</a>
    <a class="document-btn" target='_blank' href="https://github.com/PanJiaChen/vue-element-admin/">github</a>
  </div>
</template>
<script>

export default {
  name: 'index'
}
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
.documentation-container {
  margin: 50px;
  .document-btn {
    float: left;
    margin-left: 50px;
    vertical-align: middle;
    display: block;
    cursor: pointer;
    background: black;
    color: white;
    height: 60px;
    width: 200px;
    line-height: 60px;
    font-size: 20px;
    text-align: center;
  }
}
</style>
