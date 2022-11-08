import { PolylineEdge, PolylineEdgeModel } from '@logicflow/core';

class View extends PolylineEdge {
  getArrowStyle() {
    const style = super.getArrowStyle();
    return {
      ...style,
      fill: 'green',
      stroke: 'green',
    }
  }
}

export function registerPolyline(lf) {
  lf.register({type: 'polyline', view: View, model: PolylineEdgeModel});
}