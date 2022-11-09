import { PolylineEdge, PolylineEdgeModel, h } from '@logicflow/core';
import { ArrorList } from '../config';
import custome2Url from '../../assets/custome2.png';
import custome3Url from '../../assets/custome3.png';

class Model extends PolylineEdgeModel {
  // 展示起点箭头
  setAttributes() {
    const { properties } = this;
    if (properties.arrowStart) {
      this.arrowConfig.markerStart = `url(#marker-start-${this.id})`
    }
  }
}

class View extends PolylineEdge {
  getStartArrow() {
    const { model } = this.props;
    const { id, properties } = model;
    const { stroke, strokeWidth } = this.getArrowStyle();
    const { arrowStart } = properties;
    let pathAttr = {
      stroke,
      strokeWidth,
      transform: 'rotate(180)'
    }
    pathAttr = arrowStart ? {...pathAttr, ...ArrorList[arrowStart]} : {...pathAttr, ...ArrorList['1']};
    console.log(pathAttr);
    if (pathAttr.type === 'custome1') {
      return  h('svg', { x: 2, y: -15,  width: 30, height: 30, viewBox: "0 0 1024 1024"}, [
        h('g', { transform: 'translate(1024 1024) rotate(180)'}, [
          h('path', {
            d: 'M0.1 884.5l1024-372.4H279.4L0.1 884.5z',
            fill: '#2868F0',
            
          }),
          h('path', {
            d: 'M279.4 512.1h744.7L0.1 139.8l279.3 372.3z',
            fill: '#043EB8',
          }),
        ]),
      ]);
    } else if (pathAttr.type === 'custome2') {
      return  h('image', {
        x: -17,
        y: -10,
        width: 20,
        height: 20,
        xlinkHref: custome2Url,
        transform: 'rotate(180)'
      })
    } else if (pathAttr.type === 'custome3') {
      return  h('image', {
        x: -23,
        y: -15,
        width: 30,
        height: 30,
        xlinkHref: custome3Url,
        transform: 'rotate(180)'
      })
    } else if (pathAttr.d) {
      if (pathAttr.fill) {
        pathAttr.fill = stroke
      } else if (pathAttr.fillColor){
        pathAttr.fill = pathAttr.fillColor
      } else {
        pathAttr.fill = 'none'
      }
      return (
        h('path', { ...pathAttr })
      )
    } else {
      return (
        h(pathAttr.tag, { ...pathAttr, ...pathAttr.tagAttr })
      );
    }
    
  }
  getEndArrow() {
    const { model } = this.props;
    const { id, properties } = model;
    const { stroke, strokeWidth } = this.getArrowStyle();
    const { arrowEnd } = properties;
    let pathAttr = {
      stroke,
      strokeWidth,
    }
    pathAttr = arrowEnd ? {...pathAttr, ...ArrorList[arrowEnd]} : {...pathAttr, ...ArrorList['2']};
    if (pathAttr.type === 'custome1') {
      return  h('svg', { x: -28, y: -15,  width: 30, height: 30, viewBox: "0 0 1024 1024"}, [
        h('path', {
          d: 'M0.1 884.5l1024-372.4H279.4L0.1 884.5z',
          fill: '#2868F0',
        }),
        h('path', {
          d: 'M279.4 512.1h744.7L0.1 139.8l279.3 372.3z',
          fill: '#043EB8',
        }),
      ]);
    } else if (pathAttr.type === 'custome2') {
      return  h('image', {
        x: -17,
        y: -10,
        width: 20,
        height: 20,
        // xlinkHref: 'src/assets/custome2.png'
        xlinkHref: custome2Url,
      })
    } else if (pathAttr.type === 'custome3') {
      return  h('image', {
        x: -23,
        y: -15,
        width: 30,
        height: 30,
        // xlinkHref: 'src/assets/custome3.png',
        xlinkHref: custome3Url,
      })
    } else if (pathAttr.d) {
      if (pathAttr.fill) {
        pathAttr.fill = stroke
      } else if (pathAttr.fillColor){
        pathAttr.fill = pathAttr.fillColor
      } else {
        pathAttr.fill = 'none'
      }
      return (
        h('path', { ...pathAttr })
      )
    } else {
      return (
        h(pathAttr.tag, { ...pathAttr, ...pathAttr.tagAttr })
      );
    }
  }
}

export function registerPolylinePro(lf) {
  lf.register({type: 'polyline-pro', view: View, model: Model});
}