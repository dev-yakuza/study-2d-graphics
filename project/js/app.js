function init() {
  const canvas = document.getElementById('canvas');
  const ctx = canvas.getContext('2d');

  function resizeCanvas() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    drawGrid();
    if (image) {
      drawImage();
    }
  }

  function drawGrid() {
    const majorLineEvery = 4;

    ctx.clearRect(0, 0, canvas.width, canvas.height);

    for (let y = 0; y <= canvas.height; y += gridSize) {
      if ((y / gridSize) % majorLineEvery === 0) {
        ctx.strokeStyle = '#666';
        ctx.lineWidth = 1.5;
        ctx.setLineDash([]);
      } else {
        ctx.strokeStyle = '#ccc';
        ctx.lineWidth = 0.5;
        ctx.setLineDash([5, 5]);
      }

      ctx.beginPath();
      ctx.moveTo(0, y);
      ctx.lineTo(canvas.width, y);
      ctx.stroke();
    }

    for (let x = 0; x <= canvas.width; x += gridSize) {
      if ((x / gridSize) % majorLineEvery === 0) {
        ctx.strokeStyle = '#666';
        ctx.lineWidth = 1.5;
        ctx.setLineDash([]);
      } else {
        ctx.strokeStyle = '#ccc';
        ctx.lineWidth = 0.5;
        ctx.setLineDash([5, 5]);
      }

      ctx.beginPath();
      ctx.moveTo(x, 0);
      ctx.lineTo(x, canvas.height);
      ctx.stroke();
    }
  }

  function drawImage() {
    const maxWidth = canvas.width * 0.8 * scaleFactor;
    const maxHeight = canvas.height * 0.8 * scaleFactor;

    let scale = Math.min(maxWidth / image.width, maxHeight / image.height);
    const imgWidth = image.width * scale;
    const imgHeight = image.height * scale;

    const x = (canvas.width - imgWidth) / 2 + offset.x;
    const y = (canvas.height - imgHeight) / 2 + offset.y;

    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.drawImage(image, x, y, imgWidth, imgHeight);
  }

  function handleZoom(event) {
    if (event.altKey) {
      const zoom = event.deltaY > 0 ? -zoomSpeed : zoomSpeed;
      scaleFactor = Math.max(0.1, scaleFactor + zoom);
      resizeCanvas();
    }
  }

  function handleMouseDown(event) {
    if (isSpacePressed) {
      isDragging = true;
      dragStart = { x: event.clientX, y: event.clientY };
    }
  }

  function handleMouseMove(event) {
    if (isDragging) {
      const dx = event.clientX - dragStart.x;
      const dy = event.clientY - dragStart.y;
      dragStart = { x: event.clientX, y: event.clientY };
      offset.x += dx;
      offset.y += dy;
    }
  }

  function handleMouseUp() {}

  function handleKeyDown(event) {
    if (event.code === 'Space') {
    }
  }

  function handleKeyUp(event) {
    if (event.code === 'Space') {
    }
  }

  window.addEventListener('resize', resizeCanvas);
  canvas.addEventListener('wheel', handleZoom);
  canvas.addEventListener('mousedown', handleMouseDown);
  canvas.addEventListener('mousemove', handleMouseMove);
  canvas.addEventListener('mouseup', handleMouseUp);
  window.addEventListener('keydown', handleKeyDown);
  window.addEventListener('keyup', handleKeyUp);
  resizeCanvas();

  canvas.addEventListener('dragover', (event) => {
    event.preventDefault();
    canvas.style.border = '2px dashed grey';
  });

  canvas.addEventListener('dragleave', () => {
    canvas.style.border = 'none';
  });

  canvas.addEventListener('drop', (event) => {
    event.preventDefault();
    canvas.style.border = 'none';

    const file = event.dataTransfer.files[0];
    if (file && file.type.startsWith('image/')) {
      const reader = new FileReader();

      reader.onload = function (event) {
        image = new Image();
        image.onload = function () {};
        image.src = event.target.result;
      };
      reader.readAsDataURL(file);
    }
  });
}
