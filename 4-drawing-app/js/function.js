let g_state = {};

function initialize() {
  g_state.itemList = [];
  g_state.selectedItemID = '';
  g_state.canvasParam = {};
  g_state.canvasParam.size = { w: 600, h: 400 };
  g_state.canvasParam.position = { x: -50, y: -50 };
  g_state.canvasParam.scale = 1.0;

  window.addEventListener('resize', () => {
    resize();
  });

  mouseEvent();
  resize();
}

//////////////////////////////////////////
// Event
//////////////////////////////////////////

function onChangeCanvasSize() {
  let w = document.getElementById('canvasWidth').value;
  let h = document.getElementById('canvasHeight').value;
  dispatch('changeCanvasSize', { w, h });
}

function onClickSquareButton() {
  dispatch('addSquare');
}

function onClickCircleButton() {
  dispatch('addCircle');
}

function onClickTriangleButton() {
  dispatch('addTriangle');
}

function onChangeSquareParamName() {
  let input = document.getElementById('squareParamName');
  let param = {
    id: getSelectedItemID(),
    paramName: 'name',
    value: input.value,
  };
  dispatch('changeItemParam', param);
}

function onChangeSquareParamX() {
  let input = document.getElementById('squareParamX');
  let param = {
    id: getSelectedItemID(),
    paramName: 'x',
    value: Number(input.value),
  };
  dispatch('changeItemParam', param);
}

function onChangeSquareParamY() {
  let input = document.getElementById('squareParamY');
  let param = {
    id: getSelectedItemID(),
    paramName: 'y',
    value: Number(input.value),
  };
  dispatch('changeItemParam', param);
}

function onChangeSquareParamWidth() {
  let input = document.getElementById('squareParamWidth');
  let param = {
    id: getSelectedItemID(),
    paramName: 'width',
    value: Number(input.value),
  };
  dispatch('changeItemParam', param);
}

function onChangeSquareParamHeight() {
  let input = document.getElementById('squareParamHeight');
  let param = {
    id: getSelectedItemID(),
    paramName: 'height',
    value: Number(input.value),
  };
  dispatch('changeItemParam', param);
}

function onChangeSquareParamColor() {
  let input = document.getElementById('squareParamColor');
  let param = {
    id: getSelectedItemID(),
    paramName: 'color',
    value: input.value,
  };
  dispatch('changeItemParam', param);
}

function onChangeCircleParamName() {
  let input = document.getElementById('circleParamName');
  let param = {
    id: getSelectedItemID(),
    paramName: 'name',
    value: input.value,
  };
  dispatch('changeItemParam', param);
}

function onChangeCircleParamX() {
  let input = document.getElementById('circleParamX');
  let param = {
    id: getSelectedItemID(),
    paramName: 'x',
    value: Number(input.value),
  };
  dispatch('changeItemParam', param);
}

function onChangeCircleParamY() {
  let input = document.getElementById('circleParamY');
  let param = {
    id: getSelectedItemID(),
    paramName: 'y',
    value: Number(input.value),
  };
  dispatch('changeItemParam', param);
}

function onChangeCircleParamRadius() {
  let input = document.getElementById('circleParamRadius');
  let param = {
    id: getSelectedItemID(),
    paramName: 'radius',
    value: Number(input.value),
  };
  dispatch('changeItemParam', param);
}

function onChangeCircleParamOblateness() {
  let input = document.getElementById('circleParamOblateness');
  let param = {
    id: getSelectedItemID(),
    paramName: 'oblateness',
    value: Number(input.value),
  };
  dispatch('changeItemParam', param);
}

function onChangeCircleParamRotation() {
  let input = document.getElementById('circleParamRotation');
  let param = {
    id: getSelectedItemID(),
    paramName: 'rotation',
    value: Number(input.value),
  };
  dispatch('changeItemParam', param);
}

function onChangeCircleParamColor() {
  let input = document.getElementById('circleParamColor');
  let param = {
    id: getSelectedItemID(),
    paramName: 'color',
    value: input.value,
  };
  dispatch('changeItemParam', param);
}

function onChangeCircleParamStartAngle() {
  let input = document.getElementById('circleParamStartAngle');
  let param = {
    id: getSelectedItemID(),
    paramName: 'start',
    value: Number(input.value),
  };
  dispatch('changeItemParam', param);
}

function onChangeCircleParamEndAngle() {
  let input = document.getElementById('circleParamEndAngle');
  let param = {
    id: getSelectedItemID(),
    paramName: 'end',
    value: Number(input.value),
  };
  dispatch('changeItemParam', param);
}

function onChangeTriangleParamName() {
  let input = document.getElementById('triangleParamName');
  let param = {
    id: getSelectedItemID(),
    paramName: 'name',
    value: input.value,
  };
  dispatch('changeItemParam', param);
}

function onChangeTriangleParamV1X() {
  let input = document.getElementById('triangleParamV1X');
  let param = {
    id: getSelectedItemID(),
    paramName: 'v1x',
    value: Number(input.value),
  };
  dispatch('changeItemParam', param);
}

function onChangeTriangleParamV1Y() {
  let input = document.getElementById('triangleParamV1Y');
  let param = {
    id: getSelectedItemID(),
    paramName: 'v1y',
    value: Number(input.value),
  };
  dispatch('changeItemParam', param);
}

function onChangeTriangleParamV2X() {
  let input = document.getElementById('triangleParamV2X');
  let param = {
    id: getSelectedItemID(),
    paramName: 'v2x',
    value: Number(input.value),
  };
  dispatch('changeItemParam', param);
}

function onChangeTriangleParamV2Y() {
  let input = document.getElementById('triangleParamV2Y');
  let param = {
    id: getSelectedItemID(),
    paramName: 'v2y',
    value: Number(input.value),
  };
  dispatch('changeItemParam', param);
}

function onChangeTriangleParamV3X() {
  let input = document.getElementById('triangleParamV3X');
  let param = {
    id: getSelectedItemID(),
    paramName: 'v3x',
    value: Number(input.value),
  };
  dispatch('changeItemParam', param);
}

function onChangeTriangleParamV3Y() {
  let input = document.getElementById('triangleParamV3Y');
  let param = {
    id: getSelectedItemID(),
    paramName: 'v3y',
    value: Number(input.value),
  };
  dispatch('changeItemParam', param);
}

function onChangeTriangleParamColor() {
  let input = document.getElementById('triangleParamColor');
  let param = {
    id: getSelectedItemID(),
    paramName: 'color',
    value: input.value,
  };
  dispatch('changeItemParam', param);
}

function onChangeLayerUp() {
  let id = getSelectedItemID();
  dispatch('changeItemLayer', { id, isUp: true });
}

function onChangeLayerDown() {
  let id = getSelectedItemID();
  dispatch('changeItemLayer', { id, isUp: false });
}

function onClickSaveButton() {
  let itemList = getItemList();
  let data = JSON.stringify(itemList);
  let fileName = 'data.json';
  var blob = new Blob([data], { type: 'text/plain' });
  if (window.navigator.msSaveBlob) {
    window.navigator.msSaveBlob(blob, fileName);
    window.navigator.msSaveOrOpenBlob(blob, fileName);
  } else {
    let downloader = document.createElement('a');
    downloader.download = fileName;
    downloader.href = window.URL.createObjectURL(blob);
    downloader.click();
  }
}

function onClickLoadButton() {
  let fileInput = document.createElement('input');
  fileInput.type = 'file';
  fileInput.onchange = (event) => {
    let file = fileInput.files[0];
    if (!file) return;
    let reader = new FileReader();
    reader.readAsText(file);
    reader.onload = (e) => {
      let items = JSON.parse(reader.result);
      console.log(items);
      dispatch('loadItemData', { items });
    };
  };
  fileInput.click();
}

function mouseEvent() {
  let canvas = document.getElementById('canvasArea');
  let isItemShapeChanging = false;
  let changeShapeType = -1;
  let shapeControllerKnobPositions = {};
  let targetItem = -1;
  let isCanvasPosChanging = false;
  let mousePosX = 0;
  let mousePosY = 0;

  canvas.onmousedown = (e) => {
    let x = e.offsetX;
    let y = e.offsetY;

    changeShapeType = hitTestForShapeController(x, y);

    let item = hitTestForItem(x, y);
    if (item !== -1) {
      dispatch('selectItem', { id: item.id });
    }

    if (changeShapeType === -1) {
      isCanvasPosChanging = true;
    }

    mousePosX = x;
    mousePosY = y;
  };

  canvas.onmousemove = (e) => {
    let x = e.offsetX;
    let y = e.offsetY;

    if (isCanvasPosChanging) {
      let diffX = mousePosX - x;
      let diffY = mousePosY - y;
      let canvasParam = getCanvasParam();
      let scale = canvasParam.scale;
      let param = {};
      param.x = diffX / scale + canvasParam.position.x;
      param.y = diffY / scale + canvasParam.position.y;
      dispatch('changeCanvasPosition', param);
    } else {
      let result = hitTestForShapeController(x, y);
      if (result !== -1) {
        let cursor = 'auto';
        switch (result) {
          case 'LeftTop':
            cursor = 'nw-resize';
            break;
          case 'CenterTop':
            cursor = 'n-resize';
            break;
          case 'RightTop':
            cursor = 'ne-resize';
            break;
          case 'LeftMiddle':
            cursor = 'w-resize';
            break;
          case 'CenterMiddle':
            cursor = 'move';
            break;
          case 'RightMiddle':
            cursor = 'e-resize';
            break;
          case 'LeftBottom':
            cursor = 'sw-resize';
            break;
          case 'CenterBottom':
            cursor = 's-resize';
            break;
          case 'RightBottom':
            cursor = 'se-resize';
            break;
          case 'v1':
            cursor = 'move';
            break;
          case 'v2':
            cursor = 'move';
            break;
          case 'v3':
            cursor = 'move';
            break;
          case 'center':
            cursor = 'move';
            break;
          case 'e12':
            cursor = 'move';
            break;
          case 'e23':
            cursor = 'move';
            break;
          case 'e34':
            cursor = 'move';
            break;
          case 'e41':
            cursor = 'move';
            break;
        }
        canvas.style.cursor = cursor;
        return;
      } else {
        canvas.style.cursor = 'auto';
      }

      if (changeShapeType !== -1) {
        if (!changeItemShape(x, y)) {
          changeShapeType = -1;
          targetItem = -1;
          canvas.style.cursor = 'auto';
        }
      } else {
        let item = hitTestForItem(x, y);
        if (item === -1) {
          if (targetItem !== -1) {
            targetItem = -1;
            drawItems();
            shapeControllerKnobPositions = {};
          }
        } else {
          if (targetItem.id !== item.id) {
            targetItem = item;
            shapeControllerKnobPositions = {};
            drawItems();
            drawShapeController(item);
          }
        }
      }
    }

    mousePosX = x;
    mousePosY = y;
  };

  canvas.onmouseup = (e) => {
    isCanvasPosChanging = false;
    changeShapeType = -1;
    targetItem = -1;
    canvas.style.cursor = 'auto';
  };

  canvas.onmousewheel = (e) => {
    let canvasParam = getCanvasParam();
    let scale = canvasParam.scale;
    let position = canvasParam.position;
    let focusX = mousePosX / scale + position.x;
    let focusY = mousePosY / scale + position.y;
    if (e.wheelDelta > 0) {
      scale *= 1.05;
    } else {
      scale *= 0.95;
    }
    scale = Math.max(scale, 0.01);
    let x = focusX - mousePosX / scale;
    let y = focusY - mousePosY / scale;
    let newCanvasParam = {
      position: { x, y },
      scale: scale,
      size: canvasParam.size,
    };
    dispatch('changeCanvasParam', { canvasParam: newCanvasParam });
  };

  function convertToCanvasPos(p) {
    let canvasParam = getCanvasParam();
    let x = (p.x - canvasParam.position.x) * canvasParam.scale;
    let y = (p.y - canvasParam.position.y) * canvasParam.scale;
    return { x, y };
  }

  function convertToItemPos(p) {
    let canvasParam = getCanvasParam();
    let x = p.x / canvasParam.scale + canvasParam.position.x;
    let y = p.y / canvasParam.scale + canvasParam.position.y;
    return { x, y };
  }

  function hitTestForItem(x, y) {
    let itemList = getItemList();
    for (let i in itemList) {
      let item = itemList[i];
      let isHit = false;
      if (item.type === 'Square') {
        isHit = isHitSquare(item, x, y);
      } else if (item.type === 'Circle') {
        isHit = isHitEllipse(item, x, y);
      } else if (item.type === 'Triangle') {
        isHit = isHitTriangle(item, x, y);
      }
      if (isHit) {
        return item;
      }
    }
    return -1;
  }

  function isHitSquare(item, x, y) {
    let m = 10;
    let p = convertToItemPos({ x, y });
    let l = item.x - m;
    let r = item.x + item.width + m;
    let t = item.y - m;
    let b = item.y + item.height + m;
    return l < p.x && p.x < r && t < p.y && p.y < b;
  }

  function isHitEllipse(item, x, y) {
    let m = 10;
    let p = convertToItemPos({ x, y });
    let dX = p.x - item.x;
    let dY = p.y - item.y;
    let d = Math.sqrt(dX * dX + dY * dY);
    let rot = (-item.rotation * Math.PI) / 180;
    let rX = dX * Math.cos(rot) - dY * Math.sin(rot);
    let rY = dX * Math.sin(rot) + dY * Math.cos(rot);
    rY = rY / item.oblateness;
    d = Math.sqrt(rX * rX + rY * rY);
    return d < item.radius + m;
  }

  function isHitTriangle(item, x, y) {
    let centerX = (item.v1x + item.v2x + item.v3x) / 3;
    let centerY = (item.v1y + item.v2y + item.v3y) / 3;
    let dV1 = { x: item.v1x - centerX, y: item.v1y - centerY };
    let dV2 = { x: item.v2x - centerX, y: item.v2y - centerY };
    let dV3 = { x: item.v3x - centerX, y: item.v3y - centerY };
    function normalize(v) {
      let l = Math.sqrt(v.x * v.x + v.y * v.y);
      return { x: v.x / l, y: v.y / l };
    }
    dV1 = normalize(dV1);
    dV2 = normalize(dV2);
    dV3 = normalize(dV3);

    m = 10;
    let v1 = [item.v1x + m * dV1.x, item.v1y + m * dV1.y, 0.0];
    let v2 = [item.v2x + m * dV2.x, item.v2y + m * dV2.y, 0.0];
    let v3 = [item.v3x + m * dV3.x, item.v3y + m * dV3.y, 0.0];
    let p = convertToItemPos({ x, y });
    let point = [p.x, p.y, 0.0];

    function sub(vec1, vec2) {
      let vec = [];
      vec[0] = vec1[0] - vec2[0];
      vec[1] = vec1[1] - vec2[1];
      vec[2] = vec1[2] - vec2[2];
      return vec;
    }

    function cross(vec1, vec2) {
      let vec = [];
      vec[0] = vec1[1] * vec2[2] - vec1[2] * vec2[1];
      vec[1] = vec1[2] * vec2[0] - vec1[0] * vec2[2];
      vec[2] = vec1[0] * vec2[1] - vec1[1] * vec2[0];
      return vec;
    }

    function dot(vec1, vec2) {
      return vec1[0] * vec2[0] + vec1[1] * vec2[1] + vec1[2] * vec2[2];
    }

    let vec12 = sub(v2, v1);
    let vec2p = sub(point, v2);
    let vec23 = sub(v3, v2);
    let vec3p = sub(point, v3);
    let vec31 = sub(v1, v3);
    let vec1p = sub(point, v1);
    let cross1 = cross(vec12, vec2p);
    let cross2 = cross(vec23, vec3p);
    let cross3 = cross(vec31, vec1p);
    let dot1 = dot(cross1, cross2);
    let dot2 = dot(cross1, cross3);

    let isInside = false;
    if (dot1 > 0 && dot2 > 0) isInside = true;

    return isInside;
  }

  function hitTestForShapeController(x, y) {
    let p = convertToItemPos({ x, y });
    for (let key in shapeControllerKnobPositions) {
      let pos = shapeControllerKnobPositions[key];
      let hitMargin = 8;
      let left = pos.x - hitMargin;
      let top = pos.y - hitMargin;
      let right = pos.x + hitMargin;
      let bottom = pos.y + hitMargin;
      if (left < p.x && p.x < right && top < p.y && p.y < bottom) {
        return key;
      }
    }
    return -1;
  }

  function drawShapeController(item) {
    function drawKnob(x, y, type) {
      let pos = convertToCanvasPos({ x, y });
      let ctx = canvas.getContext('2d');
      ctx.beginPath();
      ctx.arc(pos.x, pos.y, 4, 0, 2 * Math.PI);
      ctx.fillStyle = '#88d6eb';
      ctx.fill();
      ctx.lineWidth = 1;
      ctx.strokeStyle = '#008b9b';
      ctx.stroke();
      shapeControllerKnobPositions[type] = { x: x, y: y };
    }

    function drawLine(v1, v2) {
      let pos1 = convertToCanvasPos(v1);
      let pos2 = convertToCanvasPos(v2);
      let ctx = canvas.getContext('2d');
      ctx.strokeStyle = '#88d6eb';
      ctx.lineWidth = 1;
      ctx.beginPath();
      ctx.moveTo(pos1.x, pos1.y);
      ctx.lineTo(pos2.x, pos2.y);
      ctx.closePath();
      ctx.stroke();
    }

    if (item.type === 'Square') {
      let left = item.x;
      let center = left + item.width / 2;
      let right = left + item.width;
      let top = item.y;
      let middle = item.y + item.height / 2;
      let bottom = item.y + item.height;
      drawLine({ x: left, y: top }, { x: right, y: top });
      drawLine({ x: left, y: top }, { x: left, y: bottom });
      drawLine({ x: left, y: bottom }, { x: right, y: bottom });
      drawLine({ x: right, y: top }, { x: right, y: bottom });
      drawKnob(left, top, 'LeftTop');
      drawKnob(center, top, 'CenterTop');
      drawKnob(right, top, 'RightTop');
      drawKnob(left, middle, 'LeftMiddle');
      drawKnob(center, middle, 'CenterMiddle');
      drawKnob(right, middle, 'RightMiddle');
      drawKnob(left, bottom, 'LeftBottom');
      drawKnob(center, bottom, 'CenterBottom');
      drawKnob(right, bottom, 'RightBottom');
    } else if (item.type === 'Circle') {
      let left = -item.radius;
      let right = item.radius;
      let top = -item.radius * item.oblateness;
      let bottom = item.radius * item.oblateness;
      let rotation = (item.rotation * Math.PI) / 180;
      function rotationPos(x, y, rot) {
        let rX = x * Math.cos(rot) - y * Math.sin(rot);
        let rY = x * Math.sin(rot) + y * Math.cos(rot);
        return { x: rX + item.x, y: rY + item.y };
      }
      let v1 = rotationPos(left, top, rotation);
      let v2 = rotationPos(right, top, rotation);
      let v3 = rotationPos(right, bottom, rotation);
      let v4 = rotationPos(left, bottom, rotation);
      drawLine(v1, v2);
      drawLine(v2, v3);
      drawLine(v3, v4);
      drawLine(v4, v1);
      drawKnob(item.x, item.y, 'center');
      drawKnob((v1.x + v2.x) / 2, (v1.y + v2.y) / 2, 'e12');
      drawKnob((v2.x + v3.x) / 2, (v2.y + v3.y) / 2, 'e23');
      drawKnob((v3.x + v4.x) / 2, (v3.y + v4.y) / 2, 'e34');
      drawKnob((v4.x + v1.x) / 2, (v4.y + v1.y) / 2, 'e41');
    } else if (item.type === 'Triangle') {
      let v1x = item.v1x;
      let v1y = item.v1y;
      let v2x = item.v2x;
      let v2y = item.v2y;
      let v3x = item.v3x;
      let v3y = item.v3y;
      drawLine({ x: v1x, y: v1y }, { x: v2x, y: v2y });
      drawLine({ x: v2x, y: v2y }, { x: v3x, y: v3y });
      drawLine({ x: v3x, y: v3y }, { x: v1x, y: v1y });
      drawKnob(v1x, v1y, 'v1');
      drawKnob(v2x, v2y, 'v2');
      drawKnob(v3x, v3y, 'v3');
      let centerX = (v1x + v2x + v3x) / 3;
      let centerY = (v1y + v2y + v3y) / 3;
      drawKnob(centerX, centerY, 'center');
    }
  }

  function changeItemShape(x, y) {
    let scale = getCanvasScale();
    let dx = (x - mousePosX) / scale;
    let dy = (y - mousePosY) / scale;
    let shape = {};

    if (targetItem.type === 'Square') {
      if (changeShapeType === 'CenterMiddle') {
        shape.x = targetItem.x + dx;
        shape.y = targetItem.y + dy;
      } else {
        if (changeShapeType.match('Left')) {
          shape.x = targetItem.x + dx;
          shape.width = targetItem.width - dx;
          if (shape.width < 1) {
            return false;
          }
        } else if (changeShapeType.match('Right')) {
          shape.width = targetItem.width + dx;
          if (shape.width < 1) {
            return false;
          }
        }
        if (changeShapeType.match('Top')) {
          shape.y = targetItem.y + dy;
          shape.height = targetItem.height - dy;
          if (shape.height < 1) {
            return false;
          }
        } else if (changeShapeType.match('Bottom')) {
          shape.height = targetItem.height + dy;
          if (shape.height < 1) {
            return false;
          }
        }
      }
    } else if (targetItem.type === 'Circle') {
      if (changeShapeType === 'center') {
        shape.x = targetItem.x + dx;
        shape.y = targetItem.y + dy;
      } else {
        let mousePos = convertToItemPos({ x, y });

        let left = -targetItem.radius;
        let right = targetItem.radius;
        let top = -targetItem.radius * targetItem.oblateness;
        let bottom = targetItem.radius * targetItem.oblateness;
        let rotation = (targetItem.rotation * Math.PI) / 180;

        function rotationPos(x, y, rot) {
          let rX = x * Math.cos(rot) - y * Math.sin(rot);
          let rY = x * Math.sin(rot) + y * Math.cos(rot);
          return { x: rX + targetItem.x, y: rY + targetItem.y };
        }

        function calcLine(p1, p2) {
          if (p2.y === p1.y) {
            return { a: 0, b: 1, c: -p1.y };
          }
          let b = -(p2.x - p1.x) / (p2.y - p1.y);
          let c = -(p1.x + b * p1.y);
          return { a: 1, b, c };
        }

        function calcDistancePointToLine(p, l) {
          return (
            Math.abs(l.a * p.x + l.b * p.y + l.c) /
            Math.sqrt(l.a * l.a + l.b * l.b)
          );
        }

        function calcDistance(p1, p2) {
          let dx = p2.x - p1.x;
          let dy = p2.y - p1.y;
          return Math.sqrt(dx * dx + dy * dy);
        }

        let v1 = rotationPos(left, top, rotation);
        let v2 = rotationPos(right, top, rotation);
        let v3 = rotationPos(right, bottom, rotation);
        let v4 = rotationPos(left, bottom, rotation);

        let line1 = {};
        let line2 = {};
        let o = { x: targetItem.x, y: targetItem.y };
        if (changeShapeType === 'e12' || changeShapeType === 'e34') {
          if (changeShapeType === 'e12') {
            line1 = calcLine(v1, v2);
            line2 = calcLine(v3, v4);
          } else {
            line1 = calcLine(v3, v4);
            line2 = calcLine(v1, v2);
          }
          let diffL1 = calcDistancePointToLine(mousePos, line1);
          let diffL2 = calcDistancePointToLine(mousePos, line2);
          if (diffL2 < diffL1) {
            return false;
          }
          let dist = calcDistance(o, mousePos);
          if (dist < bottom) {
            diffL1 = -diffL1;
          }
          shape.oblateness =
            2 * targetItem.radius * targetItem.oblateness + diffL1;
          shape.oblateness /= 2 * targetItem.radius;
        } else if (changeShapeType === 'e23' || changeShapeType === 'e41') {
          if (changeShapeType === 'e23') {
            line1 = calcLine(v2, v3);
            line2 = calcLine(v4, v1);
          } else {
            line1 = calcLine(v4, v1);
            line2 = calcLine(v2, v3);
          }
          let diffL1 = calcDistancePointToLine(mousePos, line1);
          let diffL2 = calcDistancePointToLine(mousePos, line2);
          if (diffL2 < diffL1) {
            return false;
          }
          let dist = calcDistance(o, mousePos);
          if (dist < right) {
            diffL1 = -diffL1;
          }
          shape.radius = targetItem.radius + diffL1;
          shape.oblateness =
            (targetItem.radius * targetItem.oblateness) / shape.radius;
        }
      }
    } else if (targetItem.type === 'Triangle') {
      if (changeShapeType === 'v1') {
        shape.v1x = targetItem.v1x + dx;
        shape.v1y = targetItem.v1y + dy;
      } else if (changeShapeType === 'v2') {
        shape.v2x = targetItem.v2x + dx;
        shape.v2y = targetItem.v2y + dy;
      } else if (changeShapeType === 'v3') {
        shape.v3x = targetItem.v3x + dx;
        shape.v3y = targetItem.v3y + dy;
      } else if (changeShapeType === 'center') {
        shape.v1x = targetItem.v1x + dx;
        shape.v1y = targetItem.v1y + dy;
        shape.v2x = targetItem.v2x + dx;
        shape.v2y = targetItem.v2y + dy;
        shape.v3x = targetItem.v3x + dx;
        shape.v3y = targetItem.v3y + dy;
      }
    }
    dispatch('changeItemShape', { id: targetItem.id, shape });
    return true;
  }
}

function resize() {
  let canvas = document.getElementById('canvasArea');
  let width = canvas.clientWidth;
  let height = canvas.clientHeight;
  canvas.width = width;
  canvas.height = height;
  render();
}

function saveAsImageFile() {
  let canvasSize = getCanvasSize();
  let outImage = document.createElement('canvas');
  outImage.width = canvasSize.w;
  outImage.height = canvasSize.h;
  let ctx = outImage.getContext('2d');

  let itemList = getItemList();
  for (let i = itemList.length - 1; i >= 0; --i) {
    let item = itemList[i];
    if (item.type === 'Square') {
      drawSquare(item.x, item.y, item.width, item.height, item.color);
    } else if (item.type === 'Circle') {
      drawEllipse(
        item.x,
        item.y,
        item.radius,
        item.oblateness,
        item.rotation,
        item.color,
        item.start,
        item.end
      );
    } else if (item.type === 'Triangle') {
      drawTriangle(
        { x: item.v1x, y: item.v1y },
        { x: item.v2x, y: item.v2y },
        { x: item.v3x, y: item.v3y },
        item.color
      );
    }
  }

  let imageType = 'image/png';
  let base64 = outImage.toDataURL(imageType);
  let blob = Base64toBlob(base64);
  let fileName = 'out.png';
  saveBlob(blob, fileName);

  function drawSquare(x, y, w, h, color) {
    ctx.fillStyle = color;
    ctx.fillRect(x, y, w, h);
  }

  function drawEllipse(x, y, rad, oblateness, rot, color, start, end) {
    ctx.fillStyle = color;
    let radX = rad;
    let radY = rad * oblateness;
    let rotRad = (rot * Math.PI) / 180;
    let startRad = (start * Math.PI) / 180;
    let endRad = (end * Math.PI) / 180;
    ctx.beginPath();
    ctx.ellipse(x, y, radX, radY, rotRad, startRad, endRad);
    ctx.fill();
  }

  function drawTriangle(v1, v2, v3, color) {
    ctx.beginPath();
    ctx.moveTo(v1.x, v1.y);
    ctx.lineTo(v2.x, v2.y);
    ctx.lineTo(v3.x, v3.y);
    ctx.closePath();
    ctx.fillStyle = color;
    ctx.fill();
  }

  function Base64toBlob(base64) {
    let tmp = base64.split(',');
    let data = atob(tmp[1]);
    let mime = tmp[0].split(':')[1].split(';')[0];
    let buf = new Uint8Array(data.length);
    for (var i = 0; i < data.length; i++) {
      buf[i] = data.charCodeAt(i);
    }
    let blob = new Blob([buf], { type: mime });
    return blob;
  }

  function saveBlob(blob, fileName) {
    if (window.navigator.msSaveBlob) {
      window.navigator.msSaveBlob(blob, fileName);
      window.navigator.msSaveOrOpenBlob(blob, fileName);
    } else {
      let download = document.createElement('a');
      download.download = fileName;
      download.href = window.URL.createObjectURL(blob);
      download.click();
    }
  }
}

//////////////////////////////////////////
// Getter
//////////////////////////////////////////

function getItemList() {
  return g_state.itemList;
}

function getItemByID(id) {
  for (let i in g_state.itemList) {
    let item = g_state.itemList[i];
    if (id === item.id) {
      return item;
    }
  }
  return -1;
}

function getItemIdxByID(id) {
  let itemList = getItemList();
  let idx = -1;
  for (let i = 0; i < itemList.length; ++i) {
    if (id === itemList[i].id) {
      idx = i;
      break;
    }
  }
  return idx;
}

function getSelectedItemID() {
  return g_state.selectedItemID;
}

function getSelectedItem() {
  return getItemByID(g_state.selectedItemID);
}

function getCanvasParam() {
  return g_state.canvasParam;
}

function getCanvasSize() {
  return g_state.canvasParam.size;
}

function getCanvasPostion() {
  return g_state.canvasParam.position;
}

function getCanvasScale() {
  return g_state.canvasParam.scale;
}

//////////////////////////////////////////
// Action
//////////////////////////////////////////

function dispatch(actionName, param) {
  if (actionName === 'addSquare') {
    let item = createNewItem('Square');
    g_state.itemList.unshift(item);
    g_state.selectedItemID = item.id;
  } else if (actionName === 'addCircle') {
    let item = createNewItem('Circle');
    g_state.itemList.unshift(item);
    g_state.selectedItemID = item.id;
  } else if (actionName === 'addTriangle') {
    let item = createNewItem('Triangle');
    g_state.itemList.unshift(item);
    g_state.selectedItemID = item.id;
  } else if (actionName === 'selectItem') {
    g_state.selectedItemID = param.id;
  } else if (actionName === 'changeItemParam') {
    let item = getItemByID(param.id);
    item[param.paramName] = param.value;
  } else if (actionName === 'changeItemLayer') {
    changeItemLayer(param.id, param.isUp);
  } else if (actionName === 'changeItemShape') {
    changeItemShape(param.id, param.shape);
  } else if (actionName === 'deleteItem') {
    deleteItem(param.id);
  } else if (actionName === 'changeCanvasPosition') {
    g_state.canvasParam.position.x = param.x;
    g_state.canvasParam.position.y = param.y;
  } else if (actionName === 'changeCanvasScale') {
    g_state.canvasParam.scale = param.scale;
  } else if (actionName === 'changeCanvasSize') {
    g_state.canvasParam.size.w = param.w;
    g_state.canvasParam.size.h = param.h;
  } else if (actionName === 'changeCanvasParam') {
    g_state.canvasParam = param.canvasParam;
  } else if (actionName === 'loadItemData') {
    loadItemData(param.items);
  }
  render(actionName);
}

function createNewItem(type) {
  function createGUID() {
    return (
      new Date().getTime().toString(16) +
      Math.floor(1000 * Math.random()).toString(16)
    );
  }

  let initialPosX = 20 * g_state.itemList.length + 20;
  let initialPosY = 20 * g_state.itemList.length + 20;
  let item = {
    id: createGUID(),
    name: type + '_' + g_state.itemList.length,
    type: type,
    color: '#ee5555',
  };

  if (type === 'Square') {
    item.x = initialPosX;
    item.y = initialPosY;
    item.width = 100;
    item.height = 100;
  } else if (type === 'Circle') {
    item.x = initialPosX + 50;
    item.y = initialPosY + 50;
    item.radius = 50;
    item.oblateness = 1;
    item.rotation = 0;
    item.start = 0;
    item.end = 360;
  } else if (type === 'Triangle') {
    item.v1x = initialPosX + 50;
    item.v1y = initialPosY;
    item.v2x = initialPosX;
    item.v2y = initialPosY + 100;
    item.v3x = initialPosX + 100;
    item.v3y = initialPosY + 100;
  }

  return item;
}

function changeItemShape(id, shape) {
  let item = getItemByID(id);
  for (let key in shape) {
    item[key] = shape[key];
  }
}

function changeItemLayer(id, isUp) {
  let idx = getItemIdxByID(id);
  if (idx === 0 && isUp) {
    return;
  }
  let itemList = getItemList();
  if (idx === itemList.length - 1 && !isUp) {
    return;
  }
  let temp = itemList[idx];
  if (isUp) {
    itemList[idx] = itemList[idx - 1];
    itemList[idx - 1] = temp;
  } else {
    itemList[idx] = itemList[idx + 1];
    itemList[idx + 1] = temp;
  }
}

function deleteItem(id) {
  let idx = getItemIdxByID(id);
  let itemList = getItemList();
  if (0 <= idx && idx < itemList.length) {
    itemList.splice(idx, 1);
  }
}

function loadItemData(items) {
  let itemList = getItemList();
  for (let i = items.length - 1; i >= 0; --i) {
    itemList.unshift(items[i]);
  }
}

//////////////////////////////////////////
// Render
//////////////////////////////////////////

function render(actionName) {
  updateDom(actionName);
  drawItems();
}

function updateDom(actionName) {
  // Update item list
  if (
    actionName !== 'changeItemParam' &&
    actionName !== 'changeItemShape' &&
    actionName !== 'changeCanvasPosition' &&
    actionName !== 'changeCanvasScale' &&
    actionName !== 'changeCanvasSize' &&
    actionName !== 'changeCanvasParam'
  ) {
    let itemListArea = document.getElementById('itemList');
    while (itemListArea.lastElementChild) {
      itemListArea.removeChild(itemListArea.lastElementChild);
    }
    let itemList = getItemList();
    for (let i in itemList) {
      let type = itemList[i].type;
      let name = itemList[i].name;
      let id = itemList[i].id;
      let row = document.createElement('div');
      row.classList.add('itemListRow');
      if (id === getSelectedItemID()) {
        row.style.backgroundColor = '#ec4';
        row.style.color = '333';
      }
      let nameArea = document.createElement('div');
      if (type === 'Square') {
        nameArea.textContent = '■ ';
      } else if (type === 'Circle') {
        nameArea.textContent = '● ';
      } else if (type === 'Triangle') {
        nameArea.textContent = '▲ ';
      }
      nameArea.textContent += name;
      let deleteButton = document.createElement('button');
      deleteButton.classList.add('itemDeleteButton');
      deleteButton.textContent = '×';
      deleteButton.onclick = () => {
        dispatch('deleteItem', { id });
      };
      row.onclick = () => {
        dispatch('selectItem', { id });
      };
      row.appendChild(nameArea);
      row.appendChild(deleteButton);
      itemListArea.appendChild(row);
    }
  }

  // Update canvas size
  let canvasSize = getCanvasSize();
  document.getElementById('canvasWidth').value = canvasSize.w;
  document.getElementById('canvasHeight').value = canvasSize.h;

  // Update param input
  let squareParamArea = document.getElementById('squareParamArea');
  let circleParamArea = document.getElementById('circleParamArea');
  let triangleParamArea = document.getElementById('triangleParamArea');
  squareParamArea.style.display = 'none';
  circleParamArea.style.display = 'none';
  triangleParamArea.style.display = 'none';
  let item = getSelectedItem();
  if (item !== -1) {
    let selectedItemType = item.type;
    let idx = getItemIdxByID(getSelectedItemID());
    if (selectedItemType === 'Square') {
      squareParamArea.style.display = 'flex';
      document.getElementById('squareParamName').value = item.name;
      document.getElementById('squareParamX').value = item.x;
      document.getElementById('squareParamY').value = item.y;
      document.getElementById('squareParamWidth').value = item.width;
      document.getElementById('squareParamHeight').value = item.height;
      document.getElementById('squareParamColor').value = item.color;
      document.getElementById('squareParamLayer').textContent = idx;
    } else if (selectedItemType === 'Circle') {
      circleParamArea.style.display = 'flex';
      document.getElementById('circleParamName').value = item.name;
      document.getElementById('circleParamX').value = item.x;
      document.getElementById('circleParamY').value = item.y;
      document.getElementById('circleParamRadius').value = item.radius;
      document.getElementById('circleParamOblateness').value = item.oblateness;
      document.getElementById('circleParamRotation').value = item.rotation;
      document.getElementById('circleParamColor').value = item.color;
      document.getElementById('circleParamStartAngle').value = item.start;
      document.getElementById('circleParamEndAngle').value = item.end;
      document.getElementById('circleParamLayer').textContent = idx;
    } else if (selectedItemType === 'Triangle') {
      triangleParamArea.style.display = 'flex';
      document.getElementById('triangleParamName').value = item.name;
      document.getElementById('triangleParamV1X').value = item.v1x;
      document.getElementById('triangleParamV1Y').value = item.v1y;
      document.getElementById('triangleParamV2X').value = item.v2x;
      document.getElementById('triangleParamV2Y').value = item.v2y;
      document.getElementById('triangleParamV3X').value = item.v3x;
      document.getElementById('triangleParamV3Y').value = item.v3y;
      document.getElementById('triangleParamColor').value = item.color;
      document.getElementById('triangleParamLayer').textContent = idx;
    }
  }
}

function drawItems() {
  let canvas = document.getElementById('canvasArea');
  let ctx = canvas.getContext('2d');
  // ctx.clearRect( 0, 0, canvas.width, canvas.height );

  function convertToCanvasPos(p) {
    let canvasParam = getCanvasParam();
    let x = (p.x - canvasParam.position.x) * canvasParam.scale;
    let y = (p.y - canvasParam.position.y) * canvasParam.scale;
    return { x, y };
  }

  function drawSquare(x, y, w, h, color, isSelected) {
    ctx.fillStyle = color;
    let pos = convertToCanvasPos({ x, y });
    let scale = getCanvasScale();
    let width = w * scale;
    let height = h * scale;
    ctx.fillRect(pos.x, pos.y, width, height);
    if (isSelected) {
      ctx.lineWidth = 3;
      ctx.strokeStyle = '#ec4';
      ctx.strokeRect(pos.x, pos.y, width, height);
    }
  }

  function drawEllipse(
    x,
    y,
    rad,
    oblateness,
    rot,
    color,
    start,
    end,
    isSelected
  ) {
    ctx.fillStyle = color;
    let pos = convertToCanvasPos({ x, y });
    let scale = getCanvasScale();
    let radX = rad * scale;
    let radY = rad * oblateness * scale;
    let rotRad = (rot * Math.PI) / 180;
    let startRad = (start * Math.PI) / 180;
    let endRad = (end * Math.PI) / 180;
    ctx.beginPath();
    ctx.ellipse(pos.x, pos.y, radX, radY, rotRad, startRad, endRad);
    ctx.fill();
    if (isSelected) {
      ctx.lineWidth = 3;
      ctx.strokeStyle = '#ec4';
      ctx.stroke();
    }
  }

  function drawTriangle(v1, v2, v3, color, isSelected) {
    let pos1 = convertToCanvasPos(v1);
    let pos2 = convertToCanvasPos(v2);
    let pos3 = convertToCanvasPos(v3);
    ctx.beginPath();
    ctx.moveTo(pos1.x, pos1.y);
    ctx.lineTo(pos2.x, pos2.y);
    ctx.lineTo(pos3.x, pos3.y);
    ctx.closePath();
    ctx.fillStyle = color;
    ctx.fill();
    if (isSelected) {
      ctx.lineWidth = 3;
      ctx.strokeStyle = '#ec4';
      ctx.stroke();
    }
  }

  // Background color
  ctx.fillStyle = '#eee';
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  // canvas area
  let canvasSize = getCanvasSize();
  drawSquare(0, 0, canvasSize.w, canvasSize.h, '#fff', false);

  // items
  let itemList = getItemList();
  for (let i = itemList.length - 1; i >= 0; --i) {
    let item = itemList[i];
    let isSelected = item.id === getSelectedItemID();
    if (item.type === 'Square') {
      let x = item.x;
      let y = item.y;
      let w = item.width;
      let h = item.height;
      let c = item.color;
      drawSquare(x, y, w, h, c, isSelected);
    } else if (item.type === 'Circle') {
      let x = item.x;
      let y = item.y;
      let rad = item.radius;
      let obl = item.oblateness;
      let rot = item.rotation;
      let col = item.color;
      let start = item.start;
      let end = item.end;
      drawEllipse(x, y, rad, obl, rot, col, start, end, isSelected);
    } else if (item.type === 'Triangle') {
      let v1 = { x: item.v1x, y: item.v1y };
      let v2 = { x: item.v2x, y: item.v2y };
      let v3 = { x: item.v3x, y: item.v3y };
      let col = item.color;
      drawTriangle(v1, v2, v3, col, isSelected);
    }
  }

  // canvas border
  let canvasPos = convertToCanvasPos({ x: 0, y: 0 });
  let canvasScale = getCanvasScale();
  let canvasWidth = canvasSize.w * canvasScale;
  let canvasHeight = canvasSize.h * canvasScale;
  ctx.lineWidth = 1;
  ctx.strokeStyle = '#00a69b';
  ctx.strokeRect(canvasPos.x, canvasPos.y, canvasWidth, canvasHeight);
}
