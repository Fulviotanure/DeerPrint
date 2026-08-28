const bgCanvas = document.getElementById('bg-canvas');
const bgCtx = bgCanvas.getContext('2d');
const selectionBox = document.getElementById('selection-box');
const dimBadge = document.getElementById('dimension-badge');
const dimOverlay = document.getElementById('dim-overlay');
const helperBar = document.getElementById('helper-bar');
const loupe = document.getElementById('loupe');
const loupeCanvas = document.getElementById('loupe-canvas');
const loupeCtx = loupeCanvas.getContext('2d');
const loupeInfo = document.getElementById('loupe-info');

let bgImage = new Image();
let isReady = false;
let isSelecting = false;
let startX = 0;
let startY = 0;
let endX = 0;
let endY = 0;
let displayData = null;

// Configure loupe smoothing for crisp pixel view
loupeCtx.imageSmoothingEnabled = false;

window.snipAPI.onInitCapture((payload) => {
  displayData = payload;
  
  bgImage.onload = () => {
    bgCanvas.width = bgImage.naturalWidth;
    bgCanvas.height = bgImage.naturalHeight;
    bgCtx.imageSmoothingEnabled = false;
    bgCtx.drawImage(bgImage, 0, 0, bgCanvas.width, bgCanvas.height);
    isReady = true;
  };
  bgImage.src = payload.dataUrl;
});

// Update Magnifier Loupe (Lupa compacta de precisão pixel-a-pixel)
function updateLoupe(mouseX, mouseY) {
  if (!isReady || !bgCanvas.width || !bgCanvas.height) return;
  
  // Mapeia coordenadas CSS do cursor para coordenadas nativas do canvas da tela
  const scaleX = bgCanvas.width / window.innerWidth;
  const scaleY = bgCanvas.height / window.innerHeight;

  const nativeX = mouseX * scaleX;
  const nativeY = mouseY * scaleY;

  // Amostra uma área compacta de 16x16 pixels em volta do cursor
  const sampleSize = 16;
  const sx = nativeX - sampleSize / 2;
  const sy = nativeY - sampleSize / 2;

  // Posiciona a lupa compacta sem obstruir a visão
  const loupeWidth = 104;
  const loupeHeight = 120;
  let loupeX = mouseX + 16;
  let loupeY = mouseY + 16;

  if (loupeX + loupeWidth > window.innerWidth) loupeX = mouseX - loupeWidth - 12;
  if (loupeY + loupeHeight > window.innerHeight) loupeY = mouseY - loupeHeight - 12;

  loupe.style.left = `${loupeX}px`;
  loupe.style.top = `${loupeY}px`;
  loupe.classList.remove('hidden');

  loupeInfo.textContent = `${Math.round(mouseX)} × ${Math.round(mouseY)} px`;

  // Renderiza ampliação pixelada nítida
  loupeCtx.imageSmoothingEnabled = false;
  loupeCtx.clearRect(0, 0, loupeCanvas.width, loupeCanvas.height);
  loupeCtx.drawImage(
    bgCanvas,
    sx, sy, sampleSize, sampleSize,
    0, 0, loupeCanvas.width, loupeCanvas.height
  );

  // Desenha guias de cruz (mira)
  loupeCtx.strokeStyle = 'rgba(56, 189, 248, 0.7)';
  loupeCtx.lineWidth = 1;

  loupeCtx.beginPath();
  // Linhas horizontais
  loupeCtx.moveTo(0, 48);
  loupeCtx.lineTo(44, 48);
  loupeCtx.moveTo(52, 48);
  loupeCtx.lineTo(96, 48);

  // Linhas verticais
  loupeCtx.moveTo(48, 0);
  loupeCtx.lineTo(48, 44);
  loupeCtx.moveTo(48, 52);
  loupeCtx.lineTo(48, 96);
  loupeCtx.stroke();

  // Quadrado de alvo vermelho no pixel exato do cursor
  loupeCtx.strokeStyle = '#ef4444';
  loupeCtx.lineWidth = 1.5;
  loupeCtx.strokeRect(45, 45, 6, 6);
}

// Mouse Event Handlers
window.addEventListener('mousedown', (e) => {
  if (e.button !== 0 || !isReady) return; // Left click only
  
  isSelecting = true;
  startX = e.clientX;
  startY = e.clientY;
  endX = startX;
  endY = startY;

  selectionBox.classList.remove('hidden');
  dimOverlay.style.opacity = '0'; // Shadow from selectionBox takes over
  helperBar.style.opacity = '0.3';
  updateSelection();
});

window.addEventListener('mousemove', (e) => {
  if (!isReady) return;

  updateLoupe(e.clientX, e.clientY);

  if (!isSelecting) return;

  endX = e.clientX;
  endY = e.clientY;
  updateSelection();
});

window.addEventListener('mouseup', (e) => {
  if (!isSelecting || !isReady) return;
  isSelecting = false;
  loupe.classList.add('hidden');

  const x = Math.min(startX, endX);
  const y = Math.min(startY, endY);
  const width = Math.abs(endX - startX);
  const height = Math.abs(endY - startY);

  // Minimum threshold to prevent accidental tiny clicks
  if (width > 8 && height > 8) {
    performCrop(x, y, width, height);
  } else {
    // If just clicked without dragging, reset box
    selectionBox.classList.add('hidden');
    dimOverlay.style.opacity = '1';
    helperBar.style.opacity = '1';
  }
});

// Double click = Capture entire screen
window.addEventListener('dblclick', () => {
  if (!isReady) return;
  performCrop(0, 0, window.innerWidth, window.innerHeight);
});

// Keyboard controls
window.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') {
    window.snipAPI.cancelCrop();
  } else if (e.key === 'Enter') {
    if (selectionBox && !selectionBox.classList.contains('hidden')) {
      const x = Math.min(startX, endX);
      const y = Math.min(startY, endY);
      const width = Math.abs(endX - startX);
      const height = Math.abs(endY - startY);
      if (width > 8 && height > 8) {
        performCrop(x, y, width, height);
        return;
      }
    }
    // Fallback: capture full screen
    performCrop(0, 0, window.innerWidth, window.innerHeight);
  }
});

function updateSelection() {
  const x = Math.min(startX, endX);
  const y = Math.min(startY, endY);
  const width = Math.abs(endX - startX);
  const height = Math.abs(endY - startY);

  selectionBox.style.left = `${x}px`;
  selectionBox.style.top = `${y}px`;
  selectionBox.style.width = `${width}px`;
  selectionBox.style.height = `${height}px`;

  dimBadge.textContent = `${Math.round(width)} × ${Math.round(height)} px`;

  // Prevent badge from overflowing screen bottom
  if (y + height + 35 > window.innerHeight) {
    dimBadge.style.bottom = 'auto';
    dimBadge.style.top = '-28px';
  } else {
    dimBadge.style.top = 'auto';
    dimBadge.style.bottom = '-28px';
  }
}

function performCrop(cssX, cssY, cssWidth, cssHeight) {
  // Scale calculations according to native background image dimensions
  const scaleX = bgImage.naturalWidth / window.innerWidth;
  const scaleY = bgImage.naturalHeight / window.innerHeight;

  let nativeX = Math.round(cssX * scaleX);
  let nativeY = Math.round(cssY * scaleY);
  let nativeWidth = Math.round(cssWidth * scaleX);
  let nativeHeight = Math.round(cssHeight * scaleY);

  // Clamp within image bounds to prevent any edge distortion
  nativeX = Math.max(0, Math.min(bgImage.naturalWidth - 1, nativeX));
  nativeY = Math.max(0, Math.min(bgImage.naturalHeight - 1, nativeY));
  nativeWidth = Math.min(nativeWidth, bgImage.naturalWidth - nativeX);
  nativeHeight = Math.min(nativeHeight, bgImage.naturalHeight - nativeY);

  if (nativeWidth <= 0 || nativeHeight <= 0) return;

  const cropCanvas = document.createElement('canvas');
  cropCanvas.width = nativeWidth;
  cropCanvas.height = nativeHeight;
  const cropCtx = cropCanvas.getContext('2d');
  
  // Pure 1:1 pixel copy without blurring or interpolation
  cropCtx.imageSmoothingEnabled = false;

  cropCtx.drawImage(
    bgImage,
    nativeX, nativeY, nativeWidth, nativeHeight,
    0, 0, nativeWidth, nativeHeight
  );

  const croppedDataUrl = cropCanvas.toDataURL('image/png');
  window.snipAPI.finishCrop({
    dataUrl: croppedDataUrl,
    width: nativeWidth,
    height: nativeHeight
  });
}
