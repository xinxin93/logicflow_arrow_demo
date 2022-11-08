// 节点面板-节点类型列表
export const nodeList = [
  {
    text: '矩形',
    type: 'rect',
    class: 'node-rect'
  },
];
// 主题数据
export const theme = {
  arrow: {
    offset: 20, // 箭头垂线长度
    verticalLength: 4, // 箭头底线长度
  },
  circle: {
    stroke: '#000000',
    strokeWidth: 1,
    outlineColor: '#88f',
  },
  rect: {
    outlineColor: '#88f',
    strokeWidth: 1,
    fill: 'transparent'
  },
  polyline: {
    stroke: '#000000',
    hoverStroke: '#000000',
    selectedStroke: '#000000',
    outlineColor: '#88f',
    strokeWidth: 1
  },
  nodeText: {
    color: '#000000'
  },
  edgeText: {
    color: '#000000',
    background: {
      fill: '#f7f9ff'
    }
  },
}

// 自定义箭头path枚举列表
export const ArrorList =  {
  1: {},
  2: {
    d: 'M 0 0 -10 -5 -10 5 z',
    fill: true,
  },
  3: {
    d: 'M 0 0 -10 5',
  },
  4: {
    d: 'M -10 0  -20 -5 -30 0 -20 5 z',
    fill: true
  },
  5: {
    d: 'M 0 0 -10 -5 -10 5 z',
    fillColor: '#f7f9ff',
  },
  6: {
    d: 'M -10 -5 0 0 -10 5',
  },
  7: {
    d: 'M -10 0  -20 -5 -30 0 -20 5 z',
    fillColor: '#f7f9ff',
  },
  8: {
    tag: 'circle',
    tagAttr: {
      cx: -10,
      cy: 0,
      r: 5,
      fill: '#f7f9ff',
    },
  },
  101: { type: 'custome1'},
  102: { type: 'custome2'},
  103: { type: 'custome3'}
}


export function createGraphData({startX, startY, startId, edgeNumber, edgeType, properties}) {
  const nodes = [];
  const edges = [];
  const id = startId;
  for(let i = 0; i < edgeNumber; i++) {
    const sourceNodeId = startId + i * 2 + 1;
    const targetNodeId = startId + i * 2 + 2;
    // 起点
    nodes.push(
      {
        id: sourceNodeId,
        type: 'rect',
        x: startX,
        y: startY + i * 60,
      }
    );
    // 终点
    nodes.push(
      {
        id: targetNodeId,
        type: 'rect',
        x: startX + 180,
        y: startY + i * 60,
      }
    );
    // 连线
    edges.push(
      {
        id: `edge_${startId + i}`,
        type: edgeType ? edgeType : 'polyline',
        sourceNodeId,
        targetNodeId,
        properties: properties ? properties[i] : {}
      }
    );
  }
  console.log(nodes, edges);
  return { nodes, edges }
};

// 只使用主题自定义的箭头
export const themeArrowData = createGraphData ({startX: 100, startY: 10, startId: 1, edgeNumber: 1});
const endProperties = [
  { arrowEnd: 2 },
  { arrowEnd: 3 },
  { arrowEnd: 4 },
  { arrowEnd: 5 },
  { arrowEnd: 6 },
  { arrowEnd: 7 },
  { arrowEnd: 8 },
]
// 只有终点箭头
export const endArrowData = createGraphData ({startX: 400, startY: 10, startId: 100, edgeNumber: 7, edgeType: 'polyline-pro', properties: endProperties});
const bothProperties = [
  { arrowStart: 2, arrowEnd: 2 },
  { arrowStart: 3, arrowEnd: 3 },
  { arrowStart: 4, arrowEnd: 4 },
  { arrowStart: 5, arrowEnd: 5 },
  { arrowStart: 6, arrowEnd: 6 },
  { arrowStart: 7, arrowEnd: 7 },
  { arrowStart: 8, arrowEnd: 8 },
  { arrowStart: 8, arrowEnd: 2 },
  { arrowStart: 5, arrowEnd: 6 },
]
// 起点终点都有箭头
export const bothArrowData = createGraphData ({startX: 700, startY: 10, startId: 200, edgeNumber: 9, edgeType: 'polyline-pro', properties: bothProperties});
const customeProperties = [
  { arrowEnd: '101' },
  { arrowEnd: '102' },
  { arrowEnd: '103' },
  { arrowStart: '101', arrowEnd: '101' },
  { arrowStart: '102', arrowEnd: '102' },
  { arrowStart: '103', arrowEnd: '103' },
  { arrowStart: '101', arrowEnd: '102' },
  { arrowStart: '102', arrowEnd: '103' },
  { arrowStart: '103', arrowEnd: '101' },
]
export const customeArrowData = createGraphData ({startX: 1000, startY: 10, startId: 300, edgeNumber: 9, edgeType: 'polyline-pro', properties: customeProperties});