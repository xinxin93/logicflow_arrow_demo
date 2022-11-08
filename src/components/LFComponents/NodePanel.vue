<script setup>
import { nodeList } from '../config';

const props = defineProps(['lf'])
console.log(props);
function $_dragNode (item) {
  props.lf.dnd.startDrag({
    type: item.type,
  })
}
</script>

<template>
   <div class="node-panel">
    <div class="node-item"
      v-for="item in nodeList"
      :key="item.text"
      @mousedown="$_dragNode(item)">
    <div class="node-item-icon" :class="item.class">
      <div v-if="item.type === 'user' || item.type === 'time'" class="shape"></div>
    </div>
    <span class="node-label">{{item.text}}</span>
    </div>
  </div>
</template>

<style scoped>
.node-panel {
  position: absolute;
  top: 160px;
  left: 20px;
  width: 70px;
  padding: 20px 10px;
  background-color: white;
  box-shadow: 0 0 10px 1px rgb(228, 224, 219);
  border-radius: 6px;
  text-align: center;
  z-index: 101;
}
.node-item {
  margin-bottom: 20px;
}
.node-item-icon {
  width: 30px;
  height: 30px;
  margin-left: 20px;
  background-size: cover;
}
.node-label {
  display: inline-block;
  font-size: 12px;
  margin-top: 10px;
  user-select: none;
}
.node-rect{
  border: 1px solid black;
}
.node-circel{
  border-radius: 20px;
  border: 1px solid black;
}
.node-diamond{
  border: 1px solid black;
  transform: rotate(45deg);
}
</style>
