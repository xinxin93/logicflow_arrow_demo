<script setup>
import { reactive, onMounted } from 'vue';
import LogicFlow from '@logicflow/core';
import "@logicflow/core/dist/style/index.css";
import '@logicflow/extension/lib/style/index.css';
import NodePanel from './LFComponents/NodePanel.vue';
import { registerPolyline, registerPolylinePro, registerRect } from './register/index';
import { theme, themeArrowData, endArrowData, bothArrowData, customeArrowData } from './config';

const state = reactive({lf: null});

onMounted(() => {
  const lf = new LogicFlow({
    background: {
      backgroundColor: '#f7f9ff',
    },
    container: document.querySelector('#LF-view'),
    height: 800,
  });
  // 设置主题
  lf.setTheme({...theme});
  registerPolyline(lf);
  registerPolylinePro(lf);
  registerRect(lf);
  console.log(endArrowData);
  lf.render({
    nodes: [...themeArrowData.nodes, ...endArrowData.nodes, ...bothArrowData.nodes, ...customeArrowData.nodes],
    edges: [...themeArrowData.edges, ...endArrowData.edges, ...bothArrowData.edges, ...customeArrowData.edges],
  });
  state.lf = lf;
});
</script>

<template>
   <h3 class="a">LogicFlow自定义箭头demo</h3>
   <!-- 画布 -->
   <div id="LF-view" ref="lfContainer"></div>
   <NodePanel v-if="state.lf" :lf="state.lf"></NodePanel>
</template>

<style>
#LF-view{
  width: calc(100% - 100px);
  height: 80%;
  outline: none;
  margin-left: 50px;
}
.arrow-custome2 {
  width: 30px;
  height: 30px;
  background: url(../assets/custome2.png);
}
.arrow-custome3 {
  width: 30px;
  height: 30px;
  background: url(../assets/custome3.png);
}
</style>
