<template>
  <p>在我当前的实际项目中，产生了比这个简单示例中更多的(3份)重复样式，并且其他组件也存在类似情况，比如.el-button样式同样被提取了多次。</p>
  
  <div class="ct">
    <p>下图是在开发环境中，虽然显示正常（.el-message-box_status的postion没有被覆盖），但是.el-icon 存在多份重复样式</p>
    <img src="/3.png" width="1000" />
  </div>
  <div class="ct">
    <p>下图是在编译打包之后，样式出问题了：icon和message错位（.el-message-box_status的postion被覆盖了），并且.el-icon在多个不同的cssw文件中重复存在</p>
    <img src="/2.png" width="1000" />
  </div>
  <div class="ct">
    <p>当所有路由视图不再使用“component: () => import('../views/home.vue')”这种方式动态导入，虽然显示正常了，但在vendor.css中仍然存在多份重复样式</p>
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