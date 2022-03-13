<template>
  <p>在我当前的实际项目中，产生了比简单示例中更多的(3份)重复样式。</p>
  <p>图1：在开发环境中虽然显示正常（.el-message-box_status的postion没有被覆盖），但是.el-icon 同样产生了多份重复</p>
  <p>图2：编译打包之后，样式出问题了（.el-message-box_status的postion被覆盖了），.el-icon在多个不同的css中重复存在</p>
  <p>图3：当所有路由视图不再使用“component: () => import('../views/home.vue')”这种方式动态导入，虽然显示正常了，但在vendor.css中仍然存在多份重复样式</p>
  <div class="ct">
    <h3>图1</h3>
    <img src="/3.png" width="1000" />
  </div>
  <div class="ct">
    <h3>图2</h3>
    <img src="/2.png" width="1000" />
  </div>
  <div class="ct">
    <h3>图3</h3>
    <img src="/1.png" width="1000" />
  </div>
</template>
<style scoped>
.ct {
  border: 1px solid #aaa;
  padding: 10px;
  margin-bottom: 10px;
}
</style>