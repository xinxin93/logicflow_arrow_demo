import { RectNodeModel, RectNode } from '@logicflow/core'

// 矩形
class Model extends RectNodeModel {
  initNodeData(data) {
    super.initNodeData(data);
    this.width = 60;
    this.height = 40;
  }
}

export function registerRect(lf) {
  lf.register({type: 'rect', view: RectNode, model: Model});
}
