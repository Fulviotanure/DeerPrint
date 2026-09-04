// ==========================================================================
// DOM Elements
// ==========================================================================
const btnCaptureNow = document.getElementById('btn-capture-now');
const btnEmptyCapture = document.getElementById('btn-empty-capture');
const btnCloseActiveImage = document.getElementById('btn-close-active-image');
const btnSaveAs = document.getElementById('btn-save-as');
const btnCopyClipboard = document.getElementById('btn-copy-clipboard');
const btnOpenFolder = document.getElementById('btn-open-folder');
const btnToggleHistory = document.getElementById('btn-toggle-history');
const btnCloseHistory = document.getElementById('btn-close-history');
const btnOpenSettings = document.getElementById('btn-open-settings');
const btnCloseSettings = document.getElementById('btn-close-settings');
const btnCancelSettings = document.getElementById('btn-cancel-settings');
const btnSaveSettings = document.getElementById('btn-save-settings');

// Badges & Labels
const headerShortcutBadge = document.getElementById('header-shortcut-badge');
const emptyShortcutBadge = document.getElementById('empty-shortcut-badge');
const historyCountBadge = document.getElementById('history-count-badge');
const footerSavePath = document.getElementById('footer-save-path');
const footerShortcutBadge = document.getElementById('footer-shortcut-badge');
const statusText = document.getElementById('status-text');

// Workspace & Canvas
const emptyState = document.getElementById('empty-state');
const canvasWrapper = document.getElementById('canvas-wrapper');
const activeImage = document.getElementById('active-image');
const annotationCanvas = document.getElementById('annotation-canvas');
const inlineTextEditor = document.getElementById('inline-text-editor');
const viewport = document.getElementById('viewport');
const viewportControls = document.getElementById('viewport-controls');

// Zoom controls
const btnZoomIn = document.getElementById('btn-zoom-in');
const btnZoomOut = document.getElementById('btn-zoom-out');
const btnFitScreen = document.getElementById('btn-fit-screen');
const btnActualSize = document.getElementById('btn-actual-size');
const zoomLevelText = document.getElementById('zoom-level');

// Metadata
const fileInfoGroup = document.getElementById('file-info');
const metaFilename = document.getElementById('meta-filename');
const metaDimensions = document.getElementById('meta-dimensions');
const metaFilesize = document.getElementById('meta-filesize');

// History Drawer
const historyDrawer = document.getElementById('history-drawer');
const historyList = document.getElementById('history-list');

// Variables Sidebar
const variablesSidebar = document.getElementById('variables-sidebar');
const btnToggleVariables = document.getElementById('btn-toggle-variables');
const btnOpenVariablesSidebar = document.getElementById('btn-open-variables-sidebar');
const formAddVariable = document.getElementById('form-add-variable');
const inputNewVariable = document.getElementById('input-new-variable');
const variablesList = document.getElementById('variables-list');

// Annotation Toolbar Elements
const toolButtons = {
  select: document.getElementById('tool-select'),
  rect: document.getElementById('tool-rect'),
  arrow: document.getElementById('tool-arrow'),
  text: document.getElementById('tool-text'),
  glass: document.getElementById('tool-glass')
};

// Grouped Shapes Elements (Dropdown Popover)
const btnShapesToggle = document.getElementById('btn-shapes-toggle');
const shapesPopover = document.getElementById('shapes-popover');
const activeShapeIcon = document.getElementById('active-shape-icon');
const shapeItemBtns = document.querySelectorAll('.shape-item-btn');

// Shape SVGs
const SHAPE_ICONS = {
  rect: `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2"><rect width="18" height="18" x="3" y="3" rx="2"></rect></svg>`,
  'rounded-rect': `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2"><rect width="18" height="18" x="3" y="3" rx="6"></rect></svg>`,
  'rect-fill': `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2"><rect width="18" height="18" x="3" y="3" rx="2" fill="currentColor" fill-opacity="0.3"></rect></svg>`,
  circle: `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2"><circle cx="12" cy="12" r="9"></circle></svg>`,
  'circle-fill': `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2"><circle cx="12" cy="12" r="9" fill="currentColor" fill-opacity="0.3"></circle></svg>`,
  arrow: `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2"><path d="M5 12h14M12 5l7 7-7 7"></path></svg>`,
  'double-arrow': `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2"><path d="m7 7-5 5 5 5M17 7l5 5-5 5M2 12h20"></path></svg>`,
  line: `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2"><line x1="4" y1="20" x2="20" y2="4"></line></svg>`,
  step: `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2"><circle cx="12" cy="12" r="9"></circle><path d="M12 8v8M10 10l2-2"></path></svg>`,
  callout: `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path></svg>`,
  pen: `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2"><path d="m18 2 4 4-14 14H4v-4L18 2z"></path></svg>`,
  highlighter: `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2"><path d="m14 2 8 8-10 10H4v-8L14 2z"></path><path d="m10 6 8 8"></path></svg>`
};

// 32 Curated Preset Colors
const PRESET_COLORS_32 = [
  '#ef4444', '#dc2626', '#f97316', '#ea580c', '#f59e0b', '#d97706', '#fbbf24', '#eab308',
  '#84cc16', '#65a30d', '#22c55e', '#16a34a', '#10b981', '#059669', '#14b8a6', '#0d9488',
  '#06b6d4', '#0891b2', '#38bdf8', '#0284c7', '#3b82f6', '#1d4ed8', '#6366f1', '#4338ca',
  '#8b5cf6', '#7c3aed', '#a855f7', '#ec4899', '#db2777', '#ffffff', '#94a3b8', '#0f172a'
];

// Color Popover Elements
const btnColorPaletteToggle = document.getElementById('btn-color-palette-toggle');
const activeColorSwatch = document.getElementById('active-color-swatch');
const palettePopover = document.getElementById('palette-popover');
const paletteGrid = document.getElementById('palette-grid');
const paletteCurrentHex = document.getElementById('palette-current-hex');

// Single Dot Stroke Slider Elements (1px to 16px)
const btnStrokeToggle = document.getElementById('btn-stroke-toggle');
const strokePopover = document.getElementById('stroke-popover');
const activeStrokeDot = document.getElementById('active-stroke-dot');
const inputStrokeSlider = document.getElementById('input-stroke-slider');
const strokeValBadge = document.getElementById('stroke-val-badge');
const strokePreviewLine = document.getElementById('stroke-preview-line');

// Text Size Popover Elements
const textSizePopover = document.getElementById('text-size-popover');
const inputTextSizeSlider = document.getElementById('input-text-size-slider');
const textSizeValBadge = document.getElementById('text-size-val-badge');
const textPreviewSample = document.getElementById('text-preview-sample');
const btnTextSmaller = document.getElementById('btn-text-smaller');
const btnTextLarger = document.getElementById('btn-text-larger');

// Glass Blur Popover Elements
const glassBlurPopover = document.getElementById('glass-blur-popover');
const inputBlurStrength = document.getElementById('input-blur-strength');
const blurValBadge = document.getElementById('blur-val-badge');
const blurPresetChips = document.querySelectorAll('.blur-preset-chip');

const btnUndo = document.getElementById('btn-undo');
const btnRedo = document.getElementById('btn-redo');
const btnClearAnnotations = document.getElementById('btn-clear-annotations');

// Compact Floating Tools Elements
const btnCompactToolsToggle = document.getElementById('btn-compact-tools-toggle');
const compactToolsPopover = document.getElementById('compact-tools-popover');
const compactActiveToolIcon = document.getElementById('compact-active-tool-icon');
const compactActiveColorDot = document.getElementById('compact-active-color-dot');
const btnCloseCompactTools = document.getElementById('btn-close-compact-tools');
const compactToolItems = document.querySelectorAll('.compact-tool-item');
const compactPaletteGrid = document.getElementById('compact-palette-grid');

const compactInputStroke = document.getElementById('compact-input-stroke');
const compactStrokeVal = document.getElementById('compact-stroke-val');
const compactInputTextSize = document.getElementById('compact-input-text-size');
const compactTextSizeVal = document.getElementById('compact-text-size-val');
const compactInputBlur = document.getElementById('compact-input-blur');
const compactBlurVal = document.getElementById('compact-blur-val');

const compactBtnUndo = document.getElementById('compact-btn-undo');
const compactBtnRedo = document.getElementById('compact-btn-redo');
const compactBtnClear = document.getElementById('compact-btn-clear');

// Settings Modal & Hotkey Recorder
const settingsModal = document.getElementById('settings-modal');
const hotkeyValBadge = document.getElementById('hotkey-val-badge');
const btnRecordHotkey = document.getElementById('btn-record-hotkey');
const recordBtnText = document.getElementById('record-btn-text');
const inputSavePath = document.getElementById('input-save-path');
const btnBrowseFolder = document.getElementById('btn-browse-folder');
const btnModalOpenFolder = document.getElementById('btn-modal-open-folder');
const toggleDarkMode = document.getElementById('toggle-dark-mode');
const toggleAutostart = document.getElementById('toggle-autostart');
const toggleAutocopy = document.getElementById('toggle-autocopy');
const presetButtons = document.querySelectorAll('.preset-btn');
const appRoot = document.getElementById('app-root');
const modalTabBtns = document.querySelectorAll('.modal-tab-btn');
const modalTabPanes = document.querySelectorAll('.modal-tab-pane');

// Help Modal (?)
const helpModal = document.getElementById('help-modal');
const btnOpenHelp = document.getElementById('btn-open-help');
const btnCloseHelp = document.getElementById('btn-close-help');
const btnDismissHelp = document.getElementById('btn-dismiss-help');

// Toast
const toast = document.getElementById('toast');
const toastMessage = document.getElementById('toast-message');

// Auto-Updater Elements
const spanCurrentAppVersion = document.getElementById('span-current-app-version');
const btnCheckUpdates = document.getElementById('btn-check-updates');
const btnInstallUpdate = document.getElementById('btn-install-update');
const iconCheckUpdates = document.getElementById('icon-check-updates');
const checkUpdatesText = document.getElementById('check-updates-text');
const updateStatusBox = document.getElementById('update-status-box');
const updateStatusTitle = document.getElementById('update-status-title');
const updateStatusDesc = document.getElementById('update-status-desc');
const updateProgressContainer = document.getElementById('update-progress-container');
const updateProgressBar = document.getElementById('update-progress-bar');
const updateProgressPercent = document.getElementById('update-progress-percent');
const updateProgressTransferred = document.getElementById('update-progress-transferred');
const updateProgressSpeed = document.getElementById('update-progress-speed');
const updateReleaseNotes = document.getElementById('update-release-notes');
const updateReleaseNotesBody = document.getElementById('update-release-notes-body');
const toggleAutoupdate = document.getElementById('toggle-autoupdate');
const globalUpdateBanner = document.getElementById('global-update-banner');
const gubTitle = document.getElementById('gub-title');
const gubDesc = document.getElementById('gub-desc');
const gubBtnAction = document.getElementById('gub-btn-action');
const gubBtnClose = document.getElementById('gub-btn-close');

// Uninstall Elements
const btnUninstallApp = document.getElementById('btn-uninstall-app');
const modalConfirmUninstall = document.getElementById('modal-confirm-uninstall');
const btnCancelUninstall = document.getElementById('btn-cancel-uninstall');
const btnConfirmUninstall = document.getElementById('btn-confirm-uninstall');

// ==========================================================================
// Application State
// ==========================================================================
let state = {
  currentScreenshot: null,
  settings: {
    hotkey: 'F10',
    saveDirectory: '',
    autoCopy: true,
    theme: 'dark'
  },
  history: [],
  zoom: 1,
  isRecordingHotkey: false,
  tempHotkey: '',

  // Variables / Tags list
  variables: ['Importante', 'Verificar', 'Aprovado', 'Atenção', 'Corrigir'],

  // Annotation Engine State
  activeTool: 'select',
  previousToolBeforeSpace: 'select',
  savedToolBeforeObjectSelect: null,
  isSpacePressed: false,
  activeColor: '#ef4444',
  activeStrokeWidth: 4,
  activeFontSize: 16,
  activeBlurStrength: 4.2,
  annotations: [],
  selectedId: null,
  activeHandle: null, // 'nw', 'n', 'ne', 'e', 'se', 's', 'sw', 'w', 'start', 'end', 'body'
  isDrawing: false,
  isPanning: false,
  panOffset: { x: 0, y: 0 },
  panStart: { mouseX: 0, mouseY: 0, initialPanX: 0, initialPanY: 0 },
  dragStartPos: { x: 0, y: 0 },
  currentDraft: null,
  undoStack: [],
  redoStack: []
};

// ==========================================================================
// Initialization
// ==========================================================================
async function initApp() {
  loadVariables();
  loadUserPreferences();
  await loadSettings();
  await loadHistory();
  setupEventListeners();
  setupAnnotationEngine();
  setupVariablesSidebar();
  setupAutoUpdaterUI();

  // Listen for incoming screenshots from main process
  window.electronAPI.onNewScreenshot((data) => {
    handleNewScreenshot(data);
  });

  window.electronAPI.onCaptureStatus((statusObj) => {
    if (statusObj.status === 'capturing') {
      statusText.textContent = 'Capturando...';
    } else {
      statusText.textContent = 'Pronto';
    }
  });
}

// Load and persist user tool settings (Color, Stroke, Font Size, Blur, Theme)
function loadUserPreferences() {
  try {
    const savedColor = localStorage.getItem('deerprint_active_color') || localStorage.getItem('screenshotmark_active_color') || '#ef4444';
    state.activeColor = savedColor;
    if (activeColorSwatch) activeColorSwatch.style.backgroundColor = savedColor;
    if (paletteCurrentHex) paletteCurrentHex.textContent = savedColor.toUpperCase();
    if (strokePreviewLine) strokePreviewLine.style.backgroundColor = savedColor;

    const savedStroke = localStorage.getItem('deerprint_stroke_width') || localStorage.getItem('screenshotmark_stroke_width') || '4';
    setActiveStrokeWidth(parseInt(savedStroke, 10));

    const savedFontSize = localStorage.getItem('deerprint_font_size') || localStorage.getItem('screenshotmark_font_size') || '16';
    updateTextSizeUI(parseInt(savedFontSize, 10));

    const savedBlur = localStorage.getItem('deerprint_blur_strength') || localStorage.getItem('screenshotmark_blur_strength') || '4.2';
    setBlurStrength(parseFloat(savedBlur));

    const savedTheme = localStorage.getItem('deerprint_theme') || localStorage.getItem('screenshotmark_theme') || 'dark';
    applyTheme(savedTheme);
  } catch (e) {
    console.warn('Erro ao carregar preferências:', e);
  }
}

// Apply selected visual theme (Sylvan Core Dark / Sylvan Core Light)
function applyTheme(themeId) {
  const normalizedTheme = themeId === 'light' ? 'light' : 'dark';
  state.settings.theme = normalizedTheme;
  if (appRoot) {
    appRoot.setAttribute('data-theme', normalizedTheme);
  }
  document.documentElement.setAttribute('data-theme', normalizedTheme);
  localStorage.setItem('deerprint_theme', normalizedTheme);

  if (toggleDarkMode) {
    toggleDarkMode.checked = normalizedTheme !== 'light';
  }
}

// ==========================================================================
// Auto-Save System (Overwrites file on disk & updates history in real time)
// ==========================================================================
let autoSaveTimer = null;
let isSaving = false;

async function flushAutoSave() {
  if (autoSaveTimer) {
    clearTimeout(autoSaveTimer);
    autoSaveTimer = null;
  }
  if (!state.currentScreenshot || !state.currentScreenshot.filePath) return;
  if (!activeImage.naturalWidth || !activeImage.naturalHeight) return;
  if (state.annotations.length === 0) return;

  try {
    isSaving = true;
    const compositeDataUrl = await renderCompositeDataUrl();
    const targetPath = state.currentScreenshot.filePath;
    const res = await window.electronAPI.saveActiveScreenshot(targetPath, compositeDataUrl);
    if (res && res.success) {
      const nowIso = res.timestamp || new Date().toISOString();
      const bust = Date.now();
      
      const histItem = state.history.find(h => h.filePath === targetPath);
      if (histItem) {
        histItem.fileSize = res.fileSize;
        histItem.timestamp = nowIso;
        histItem.cacheBust = bust;
      }
      if (state.currentScreenshot && state.currentScreenshot.filePath === targetPath) {
        state.currentScreenshot.fileSize = res.fileSize;
        state.currentScreenshot.timestamp = nowIso;
        state.currentScreenshot.cacheBust = bust;
      }
      renderHistoryList();
    }
  } catch (err) {
    console.warn('Erro ao finalizar auto-save:', err);
  } finally {
    isSaving = false;
  }
}

function triggerAutoSave() {
  if (!state.currentScreenshot || !state.currentScreenshot.filePath) return;
  if (autoSaveTimer) clearTimeout(autoSaveTimer);
  autoSaveTimer = setTimeout(async () => {
    try {
      const compositeDataUrl = await renderCompositeDataUrl();
      const targetPath = state.currentScreenshot.filePath;
      const res = await window.electronAPI.saveActiveScreenshot(targetPath, compositeDataUrl);
      if (res && res.success) {
        if (res.fileSize) {
          metaFilesize.textContent = formatBytes(res.fileSize);
        }
        statusText.textContent = '✓ Salvo automaticamente';

        const nowIso = res.timestamp || new Date().toISOString();
        const bust = Date.now();

        // Atualiza a entrada no histórico com cache-busting
        const histItem = state.history.find(h => h.filePath === targetPath);
        if (histItem) {
          histItem.fileSize = res.fileSize;
          histItem.timestamp = nowIso;
          histItem.cacheBust = bust;
        } else {
          state.history.unshift({
            ...state.currentScreenshot,
            fileSize: res.fileSize,
            timestamp: nowIso,
            cacheBust: bust
          });
        }
        renderHistoryList();

        // Se auto-copy estiver ativo, copia a versão editada para o clipboard
        if (state.settings.autoCopy !== false) {
          window.electronAPI.copyImageToClipboard(compositeDataUrl);
        }
      }
    } catch (err) {
      console.warn('Falha no auto-save:', err);
    }
  }, 200);
}

// ==========================================================================
// Variables Manager & Drag and Drop
// ==========================================================================
function loadVariables() {
  try {
    const saved = localStorage.getItem('deerprint_variables') || localStorage.getItem('screenshotmark_variables');
    if (saved) {
      state.variables = JSON.parse(saved);
    }
  } catch (e) {
    console.warn('Erro ao carregar variáveis:', e);
  }
  renderVariablesList();
}

function saveVariables() {
  try {
    localStorage.setItem('deerprint_variables', JSON.stringify(state.variables));
  } catch (e) {
    console.warn('Erro ao salvar variáveis:', e);
  }
}

let draggedVariableIndex = null;

function renderVariablesList() {
  variablesList.innerHTML = '';

  state.variables.forEach((item, index) => {
    const chip = document.createElement('div');
    chip.className = 'variable-chip';
    chip.setAttribute('draggable', 'true');
    chip.setAttribute('data-text', item);
    chip.setAttribute('data-index', index);
    chip.innerHTML = `
      <div class="chip-left">
        <span class="chip-grip" title="Arraste para mover ou reordenar">⋮⋮</span>
        <span class="chip-text">${escapeHtml(item)}</span>
      </div>
      <button class="btn-delete-var" title="Remover">&times;</button>
    `;

    chip.addEventListener('dragstart', (e) => {
      draggedVariableIndex = index;
      e.dataTransfer.setData('text/plain', item);
      e.dataTransfer.setData('application/x-var-index', index.toString());
      e.dataTransfer.setData('application/x-deerprint-variable', item);
      e.dataTransfer.setData('application/x-screenshotmark-variable', item);
      e.dataTransfer.effectAllowed = 'copyMove';
      chip.classList.add('dragging');

      // Create a nice styled badge preview drag image matching current color & font
      try {
        const ghost = document.createElement('div');
        ghost.style.position = 'fixed';
        ghost.style.top = '-9999px';
        ghost.style.left = '-9999px';
        ghost.style.background = state.activeColor || '#ef4444';
        ghost.style.color = '#ffffff';
        ghost.style.padding = '6px 14px';
        ghost.style.borderRadius = '6px';
        ghost.style.fontSize = `${state.activeFontSize || 16}px`;
        ghost.style.fontWeight = '700';
        ghost.style.fontFamily = "'Plus Jakarta Sans', sans-serif";
        ghost.style.boxShadow = '0 6px 16px rgba(0,0,0,0.4)';
        ghost.style.pointerEvents = 'none';
        ghost.style.zIndex = '99999';
        ghost.textContent = item;
        document.body.appendChild(ghost);
        e.dataTransfer.setDragImage(ghost, ghost.offsetWidth / 2, ghost.offsetHeight / 2);
        setTimeout(() => ghost.remove(), 60);
      } catch (err) {}
    });

    chip.addEventListener('dragover', (e) => {
      e.preventDefault();
      e.dataTransfer.dropEffect = 'move';
      const rect = chip.getBoundingClientRect();
      const midY = rect.top + rect.height / 2;
      if (e.clientY < midY) {
        chip.classList.add('drag-over-top');
        chip.classList.remove('drag-over-bottom');
      } else {
        chip.classList.add('drag-over-bottom');
        chip.classList.remove('drag-over-top');
      }
    });

    chip.addEventListener('dragleave', () => {
      chip.classList.remove('drag-over-top', 'drag-over-bottom');
    });

    chip.addEventListener('drop', (e) => {
      e.preventDefault();
      e.stopPropagation();
      chip.classList.remove('drag-over-top', 'drag-over-bottom');

      if (draggedVariableIndex !== null && draggedVariableIndex !== index) {
        const rect = chip.getBoundingClientRect();
        const midY = rect.top + rect.height / 2;
        const insertAfter = e.clientY >= midY;

        const movedItem = state.variables.splice(draggedVariableIndex, 1)[0];
        let targetIndex = state.variables.indexOf(item);
        if (targetIndex === -1) targetIndex = index;
        if (insertAfter) targetIndex++;

        state.variables.splice(targetIndex, 0, movedItem);
        saveVariables();
        renderVariablesList();
        showToast('Ordem das palavras atualizada!');
      }
      draggedVariableIndex = null;
    });

    chip.addEventListener('dragend', () => {
      chip.classList.remove('dragging', 'drag-over-top', 'drag-over-bottom');
      draggedVariableIndex = null;
    });

    chip.querySelector('.btn-delete-var').addEventListener('click', (e) => {
      e.stopPropagation();
      state.variables.splice(index, 1);
      saveVariables();
      renderVariablesList();
    });

    variablesList.appendChild(chip);
  });
}

function setupVariablesSidebar() {
  formAddVariable.addEventListener('submit', (e) => {
    e.preventDefault();
    const val = inputNewVariable.value.trim();
    if (val && !state.variables.includes(val)) {
      state.variables.push(val);
      saveVariables();
      renderVariablesList();
      inputNewVariable.value = '';
      showToast(`Adicionado: "${val}"`);
    }
  });

  btnToggleVariables.addEventListener('click', () => {
    variablesSidebar.classList.add('collapsed');
    btnOpenVariablesSidebar.classList.remove('hidden');
  });

  btnOpenVariablesSidebar.addEventListener('click', () => {
    variablesSidebar.classList.remove('collapsed');
    btnOpenVariablesSidebar.classList.add('hidden');
  });

  canvasWrapper.addEventListener('dragover', (e) => {
    e.preventDefault();
    e.dataTransfer.dropEffect = 'copy';
    canvasWrapper.classList.add('drop-target-active');
  });

  canvasWrapper.addEventListener('dragleave', (e) => {
    if (!canvasWrapper.contains(e.relatedTarget)) {
      canvasWrapper.classList.remove('drop-target-active');
    }
  });

  canvasWrapper.addEventListener('drop', (e) => {
    e.preventDefault();
    canvasWrapper.classList.remove('drop-target-active');

    // Valida se o drop veio exclusivamente da barra lateral de variáveis/palavras
    const isVariableDrop = e.dataTransfer.types.includes('application/x-deerprint-variable') || e.dataTransfer.types.includes('application/x-screenshotmark-variable') || e.dataTransfer.types.includes('application/x-var-index');
    if (!isVariableDrop) {
      return; // Ignora arrastes acidentais de texto da tela ou textarea
    }

    const text = e.dataTransfer.getData('application/x-deerprint-variable') || e.dataTransfer.getData('application/x-screenshotmark-variable') || e.dataTransfer.getData('text/plain');
    if (!text || !activeImage.naturalWidth) return;

    const pt = getCanvasPoint(e);
    const fontSize = state.activeFontSize || 16;

    // Calculate exact centered position based on font metrics
    const paddingX = Math.round(fontSize * 0.75);
    const paddingY = Math.round(fontSize * 0.4);
    const approxCharWidth = fontSize * 0.62;
    const estWidth = text.length * approxCharWidth + paddingX * 2;
    const estHeight = fontSize + paddingY * 2;

    const badgeX = Math.round(Math.max(0, pt.x - estWidth / 2));
    const badgeY = Math.round(Math.max(0, pt.y - estHeight / 2));

    const badge = {
      id: 'ann_' + Date.now(),
      type: 'text',
      x: badgeX,
      y: badgeY,
      text: text,
      fontSize: fontSize,
      color: '#ffffff',
      bgColor: state.activeColor || '#ef4444',
      isBadge: true
    };

    pushUndo();
    state.annotations.push(badge);
    state.selectedId = badge.id;
    updateTextSizeUI(badge.fontSize);
    redrawAnnotations();
    triggerAutoSave();
    showToast(`Palavra "${text}" inserida!`);
  });
}

// ==========================================================================
// Settings & History
// ==========================================================================
async function loadSettings() {
  try {
    const settings = await window.electronAPI.getSettings();
    state.settings = settings;
    state.tempHotkey = settings.hotkey;
    updateSettingsUI();
  } catch (err) {
    console.error('Erro ao carregar configurações:', err);
  }
}

function updateSettingsUI() {
  const displayHotkey = formatHotkeyDisplay(state.settings.hotkey);
  if (headerShortcutBadge) headerShortcutBadge.textContent = displayHotkey;
  if (emptyShortcutBadge) emptyShortcutBadge.textContent = displayHotkey;
  if (hotkeyValBadge) hotkeyValBadge.textContent = displayHotkey;
  if (footerShortcutBadge) footerShortcutBadge.textContent = displayHotkey;

  inputSavePath.value = state.settings.saveDirectory;
  footerSavePath.textContent = `Salvo em: ${state.settings.saveDirectory}`;
  if (toggleAutostart) {
    toggleAutostart.checked = state.settings.autoStart !== false;
  }
  if (toggleAutocopy) {
    toggleAutocopy.checked = state.settings.autoCopy !== false;
  }
  if (toggleAutoupdate) {
    toggleAutoupdate.checked = state.settings.autoCheckUpdates !== false;
  }
  if (toggleDarkMode) {
    toggleDarkMode.checked = state.settings.theme !== 'light';
  }
  
  if (state.settings.theme) {
    applyTheme(state.settings.theme);
  }
}

async function loadHistory() {
  try {
    const history = await window.electronAPI.getHistory();
    state.history = history;
    renderHistoryList();
  } catch (err) {
    console.error('Erro ao carregar histórico:', err);
  }
}

function renderHistoryList() {
  historyCountBadge.textContent = state.history.length;
  historyList.innerHTML = '';

  if (state.history.length === 0) {
    historyList.innerHTML = `
      <div style="text-align: center; padding: 40px 10px; color: var(--text-muted); font-size: 13px;">
        Nenhuma captura no histórico.
      </div>
    `;
    return;
  }

  state.history.forEach((item) => {
    const card = document.createElement('div');
    card.className = `history-card ${state.currentScreenshot && state.currentScreenshot.id === item.id ? 'active' : ''}`;
    
    const formattedDate = formatTime(item.timestamp);
    const formattedSize = formatBytes(item.fileSize);
    const bust = item.cacheBust || (item.timestamp ? new Date(item.timestamp).getTime() : Date.now());
    const cleanPath = item.filePath.replace(/\\/g, '/');
    const imgSrc = `file:///${cleanPath}?t=${bust}`;

    card.innerHTML = `
      <img src="${imgSrc}" class="history-thumb" alt="Miniatura">
      <div class="history-details">
        <div class="history-name" title="${item.fileName}">${item.fileName}</div>
        <div class="history-meta">
          <span>${item.width}×${item.height}</span>
          <span>•</span>
          <span>${formattedDate}</span>
          <span>•</span>
          <span>${formattedSize}</span>
        </div>
      </div>
      <div class="history-actions">
        <button class="history-action-btn copy-btn" title="Copiar Imagem">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect width="14" height="14" x="8" y="8" rx="2" ry="2"></rect><path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2"></path></svg>
        </button>
        <button class="history-action-btn reveal-btn" title="Revelar no Explorer">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg>
        </button>
        <button class="history-action-btn delete-btn" title="Excluir">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M3 6h18M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path></svg>
        </button>
      </div>
    `;

    card.addEventListener('click', async (e) => {
      if (e.target.closest('.history-actions')) return;
      if (state.currentScreenshot && state.currentScreenshot.id === item.id) return;
      await loadScreenshotToEditor(item);
    });

    card.querySelector('.copy-btn').addEventListener('click', (e) => {
      e.stopPropagation();
      copyImageFromHistory(item, imgSrc);
    });

    card.querySelector('.reveal-btn').addEventListener('click', (e) => {
      e.stopPropagation();
      window.electronAPI.openFileLocation(item.filePath);
    });

    card.querySelector('.delete-btn').addEventListener('click', async (e) => {
      e.stopPropagation();
      await window.electronAPI.deleteHistoryItem(item.id, item.filePath);
      state.history = state.history.filter(h => h.id !== item.id);
      renderHistoryList();
      showToast('Captura excluída.');
    });

    historyList.appendChild(card);
  });
}

// ==========================================================================
// Screenshot Handler & Workspace Management
// ==========================================================================
async function clearWorkspace() {
  if (state.currentScreenshot) {
    await flushAutoSave();
  }

  state.currentScreenshot = null;
  state.annotations = [];
  state.undoStack = [];
  state.redoStack = [];
  state.selectedId = null;
  state.panOffset = { x: 0, y: 0 };
  state.zoom = 1.0;
  activeImage.src = '';
  canvasWrapper.style.width = '';
  canvasWrapper.style.height = '';
  activeImage.style.width = '';
  activeImage.style.height = '';

  const ctx = annotationCanvas.getContext('2d');
  ctx.clearRect(0, 0, annotationCanvas.width, annotationCanvas.height);

  emptyState.classList.remove('hidden');
  canvasWrapper.classList.add('hidden');
  viewportControls.classList.add('hidden');
  fileInfoGroup.classList.add('hidden');
  btnCloseActiveImage.classList.add('hidden');

  statusText.textContent = 'Pronto';
  updateUndoRedoUI();
  showToast('Print removido do espaço de trabalho.');
}

async function handleNewScreenshot(data) {
  if (state.currentScreenshot) {
    await flushAutoSave();
  }

  state.currentScreenshot = data;
  state.annotations = [];
  state.undoStack = [];
  state.redoStack = [];
  state.selectedId = null;
  state.panOffset = { x: 0, y: 0 };
  updateUndoRedoUI();

  activeImage.src = data.dataUrl || `file:///${data.filePath.replace(/\\/g, '/')}`;
  
  activeImage.onload = () => {
    syncAnnotationCanvasSize();
    fitToScreen();
    redrawAnnotations();
  };

  emptyState.classList.add('hidden');
  canvasWrapper.classList.remove('hidden');
  viewportControls.classList.remove('hidden');
  fileInfoGroup.classList.remove('hidden');
  btnCloseActiveImage.classList.remove('hidden');

  metaFilename.textContent = data.fileName;
  metaFilename.title = data.filePath;
  metaDimensions.textContent = `${data.width} × ${data.height} px`;
  metaFilesize.textContent = formatBytes(data.fileSize);
  statusText.textContent = 'Salvo e copiado';

  fitToScreen();

  const existingIdx = state.history.findIndex(h => h.id === data.id);
  if (existingIdx >= 0) {
    state.history[existingIdx] = data;
  } else {
    state.history.unshift(data);
  }
  renderHistoryList();
  showToast('✓ Imagem capturada em alta resolução!');
}

async function loadScreenshotToEditor(item, imageSrc) {
  // Salva qualquer edição pendente no print atual antes de trocar de arquivo
  if (state.currentScreenshot && state.currentScreenshot.id !== item.id) {
    await flushAutoSave();
  }

  state.currentScreenshot = item;
  state.annotations = [];
  state.undoStack = [];
  state.redoStack = [];
  state.selectedId = null;
  state.panOffset = { x: 0, y: 0 };
  updateUndoRedoUI();

  const bust = item.cacheBust || (item.timestamp ? new Date(item.timestamp).getTime() : Date.now());
  const cleanPath = item.filePath.replace(/\\/g, '/');
  activeImage.src = `file:///${cleanPath}?t=${bust}`;
  activeImage.onload = () => {
    syncAnnotationCanvasSize();
    fitToScreen();
    redrawAnnotations();
  };

  emptyState.classList.add('hidden');
  canvasWrapper.classList.remove('hidden');
  viewportControls.classList.remove('hidden');
  fileInfoGroup.classList.remove('hidden');
  btnCloseActiveImage.classList.remove('hidden');

  metaFilename.textContent = item.fileName;
  metaFilename.title = item.filePath;
  metaDimensions.textContent = `${item.width} × ${item.height} px`;
  metaFilesize.textContent = formatBytes(item.fileSize);
  statusText.textContent = 'Carregado do histórico';

  fitToScreen();
  renderHistoryList();
  showToast(`Carregado: ${item.fileName}`);
}

function syncAnnotationCanvasSize() {
  if (activeImage.naturalWidth && activeImage.naturalHeight) {
    const w = activeImage.naturalWidth;
    const h = activeImage.naturalHeight;
    annotationCanvas.width = w;
    annotationCanvas.height = h;
    canvasWrapper.style.width = `${w}px`;
    canvasWrapper.style.height = `${h}px`;
    activeImage.style.width = `${w}px`;
    activeImage.style.height = `${h}px`;
  }
}

// ==========================================================================
// Annotation Engine: Drawing, Hand Panning, Glass, Transformation, Undo/Redo
// ==========================================================================
function setupAnnotationEngine() {
  // Setup 32 Preset Colors Popover Grid (must run here to attach click listeners)
  setupColorPalette();

  // Canvas Mouse Events
  annotationCanvas.addEventListener('mousedown', onCanvasMouseDown);
  window.addEventListener('mousemove', onCanvasMouseMove);
  window.addEventListener('mouseup', onCanvasMouseUp);
  annotationCanvas.addEventListener('dblclick', onCanvasDoubleClick);

  // Prevent inline text editor events from bubbling to canvas
  inlineTextEditor.addEventListener('mousedown', (e) => e.stopPropagation());
  inlineTextEditor.addEventListener('click', (e) => e.stopPropagation());
  inlineTextEditor.addEventListener('dragstart', (e) => {
    e.preventDefault();
    e.stopPropagation();
  });

  // Prevent browser context menu on canvas & viewport to allow right-click drag pan anywhere!
  annotationCanvas.addEventListener('contextmenu', (e) => e.preventDefault());
  viewport.addEventListener('contextmenu', (e) => e.preventDefault());

  viewport.addEventListener('mousedown', (e) => {
    if (e.button === 2 || e.button === 1 || state.activeTool === 'hand' || state.isSpacePressed) {
      e.preventDefault();
      e.stopPropagation();
      startPanning(e);
    }
  });

  window.addEventListener('keydown', (e) => {
    if (document.activeElement.tagName === 'INPUT' || document.activeElement.tagName === 'TEXTAREA') {
      return;
    }

    if (e.code === 'Space' && !state.isSpacePressed) {
      state.isSpacePressed = true;
      state.previousToolBeforeSpace = state.activeTool;
      canvasWrapper.classList.add('tool-hand');
    }
  });

  window.addEventListener('keyup', (e) => {
    if (e.code === 'Space' && state.isSpacePressed) {
      state.isSpacePressed = false;
      if (state.activeTool !== 'hand') {
        canvasWrapper.classList.remove('tool-hand');
      }
    }
  });
}

// Setup 32 Colors Palette Popover
function setupColorPalette() {
  if (paletteGrid) {
    paletteGrid.innerHTML = '';
    PRESET_COLORS_32.forEach(color => {
      const swatch = document.createElement('button');
      swatch.type = 'button';
      swatch.className = `palette-swatch ${color.toLowerCase() === state.activeColor.toLowerCase() ? 'active' : ''}`;
      swatch.style.backgroundColor = color;
      swatch.title = color.toUpperCase();
      swatch.setAttribute('data-color', color);
      
      if (color.toLowerCase() === '#ffffff') {
        swatch.style.border = '1.5px solid rgba(255, 255, 255, 0.4)';
      }

      swatch.addEventListener('click', (e) => {
        e.stopPropagation();
        setActiveColor(color);
        palettePopover.classList.add('hidden');
        btnColorPaletteToggle.classList.remove('active');
      });

      paletteGrid.appendChild(swatch);
    });
  }

  if (compactPaletteGrid) {
    compactPaletteGrid.innerHTML = '';
    PRESET_COLORS_32.forEach(color => {
      const swatch = document.createElement('button');
      swatch.type = 'button';
      swatch.className = `palette-swatch ${color.toLowerCase() === state.activeColor.toLowerCase() ? 'active' : ''}`;
      swatch.style.backgroundColor = color;
      swatch.title = color.toUpperCase();
      swatch.setAttribute('data-color', color);

      if (color.toLowerCase() === '#ffffff') {
        swatch.style.border = '1.5px solid rgba(255, 255, 255, 0.4)';
      }

      swatch.addEventListener('click', (e) => {
        e.stopPropagation();
        setActiveColor(color);
      });

      compactPaletteGrid.appendChild(swatch);
    });
  }

  if (btnColorPaletteToggle) {
    btnColorPaletteToggle.addEventListener('click', (e) => {
      e.stopPropagation();
      const isHidden = palettePopover.classList.contains('hidden');
      if (isHidden) {
        palettePopover.classList.remove('hidden');
        btnColorPaletteToggle.classList.add('active');
        if (paletteCurrentHex) paletteCurrentHex.textContent = state.activeColor.toUpperCase();
      } else {
        palettePopover.classList.add('hidden');
        btnColorPaletteToggle.classList.remove('active');
      }
    });
  }

  if (btnCompactToolsToggle) {
    btnCompactToolsToggle.addEventListener('click', (e) => {
      e.stopPropagation();
      const isHidden = compactToolsPopover.classList.contains('hidden');
      if (isHidden) {
        compactToolsPopover.classList.remove('hidden');
        btnCompactToolsToggle.classList.add('active');
      } else {
        compactToolsPopover.classList.add('hidden');
        btnCompactToolsToggle.classList.remove('active');
      }
    });
  }

  if (btnCloseCompactTools) {
    btnCloseCompactTools.addEventListener('click', (e) => {
      e.stopPropagation();
      compactToolsPopover.classList.add('hidden');
      btnCompactToolsToggle.classList.remove('active');
    });
  }

  window.addEventListener('click', (e) => {
    if (palettePopover && !palettePopover.contains(e.target) && !btnColorPaletteToggle.contains(e.target)) {
      palettePopover.classList.add('hidden');
      btnColorPaletteToggle.classList.remove('active');
    }
    if (compactToolsPopover && !compactToolsPopover.contains(e.target) && !btnCompactToolsToggle.contains(e.target)) {
      compactToolsPopover.classList.add('hidden');
      btnCompactToolsToggle.classList.remove('active');
    }
  });
}

function startPanning(e) {
  state.isPanning = true;
  state.panStart = {
    mouseX: e.clientX,
    mouseY: e.clientY,
    initialPanX: state.panOffset.x,
    initialPanY: state.panOffset.y
  };
  canvasWrapper.classList.add('is-panning');
}

function updateTextSizeUI(size) {
  size = Math.max(10, Math.min(64, Math.round(size)));
  state.activeFontSize = size;
  localStorage.setItem('deerprint_font_size', size);
  if (inputTextSizeSlider) inputTextSizeSlider.value = size;
  if (textSizeValBadge) textSizeValBadge.textContent = `${size}px`;
  if (compactInputTextSize) compactInputTextSize.value = size;
  if (compactTextSizeVal) compactTextSizeVal.textContent = `${size}px`;
  if (textPreviewSample) textPreviewSample.style.fontSize = `${Math.min(26, size)}px`;
}

function adjustSelectedTextSize(delta) {
  let currentSize = state.activeFontSize || 16;
  if (state.selectedId) {
    const shape = state.annotations.find(a => a.id === state.selectedId);
    if (shape && shape.type === 'text') {
      currentSize = shape.fontSize || 16;
    }
  }

  const targetSize = Math.max(10, Math.min(64, currentSize + delta));
  updateTextSizeUI(targetSize);

  if (state.selectedId) {
    const shape = state.annotations.find(a => a.id === state.selectedId);
    if (shape && shape.type === 'text') {
      pushUndo();
      shape.fontSize = targetSize;
      redrawAnnotations();
      triggerAutoSave();
    }
  }
}

function getBlurLabel(val) {
  if (val <= 2.8) return 'Leve';
  if (val <= 5.5) return 'Suave';
  if (val <= 8.5) return 'Médio';
  return 'Forte';
}

function setBlurStrength(val) {
  val = Math.max(1, Math.min(10, isNaN(parseFloat(val)) ? 4.2 : parseFloat(val)));
  state.activeBlurStrength = val;
  localStorage.setItem('deerprint_blur_strength', val);
  if (inputBlurStrength) inputBlurStrength.value = val;
  const label = getBlurLabel(val);
  if (blurValBadge) blurValBadge.textContent = label;
  if (compactInputBlur) compactInputBlur.value = val;
  if (compactBlurVal) compactBlurVal.textContent = label;

  blurPresetChips.forEach(chip => {
    const chipBlur = parseFloat(chip.getAttribute('data-blur'));
    const isCurrent = Math.abs(chipBlur - val) <= 0.8 || (chipBlur === 4.2 && Math.abs(val - 4.2) <= 1.0);
    chip.classList.toggle('active', isCurrent);
  });

  if (state.selectedId) {
    const shape = state.annotations.find(a => a.id === state.selectedId);
    if (shape && shape.type === 'glass') {
      pushUndo();
      shape.blurAmount = val;
      redrawAnnotations();
      triggerAutoSave();
    }
  }
}

function updateContextualToolbar() {
  // Toolbar items are now fully popover-based
}

const ALL_SHAPE_TOOLS = [
  'rect', 'rounded-rect', 'rect-fill', 'circle', 'circle-fill',
  'arrow', 'double-arrow', 'line', 'step', 'callout', 'pen', 'highlighter'
];

function setActiveTool(tool) {
  state.activeTool = tool;

  const isShapeTool = ALL_SHAPE_TOOLS.includes(tool);

  // Update direct tool buttons
  if (toolButtons.select) toolButtons.select.classList.toggle('active', tool === 'select');
  if (toolButtons.rect) toolButtons.rect.classList.toggle('active', tool === 'rect');
  if (toolButtons.arrow) toolButtons.arrow.classList.toggle('active', tool === 'arrow');
  if (toolButtons.text) toolButtons.text.classList.toggle('active', tool === 'text');
  if (toolButtons.glass) toolButtons.glass.classList.toggle('active', tool === 'glass');

  // Update shapes toggle button and active shape icon
  if (btnShapesToggle) {
    btnShapesToggle.classList.toggle('active', isShapeTool && tool !== 'rect' && tool !== 'arrow');
    if (isShapeTool && SHAPE_ICONS[tool] && activeShapeIcon) {
      activeShapeIcon.innerHTML = SHAPE_ICONS[tool];
    }
  }

  // Update active state in shapes popover
  shapeItemBtns.forEach(btn => {
    btn.classList.toggle('active', btn.getAttribute('data-shape') === tool);
  });

  // Update active state in compact floating tools panel
  compactToolItems.forEach(btn => {
    btn.classList.toggle('active', btn.getAttribute('data-tool') === tool);
  });

  // Update compact trigger button icon
  if (compactActiveToolIcon) {
    if (tool === 'select') {
      compactActiveToolIcon.innerHTML = `<svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2"><path d="m3 3 7.07 16.97 2.51-7.39 7.39-2.51L3 3z"></path></svg>`;
    } else if (tool === 'text') {
      compactActiveToolIcon.innerHTML = `<span style="font-family: 'Plus Jakarta Sans', sans-serif; font-size: 14px; font-weight: 800;">T</span>`;
    } else if (tool === 'glass') {
      compactActiveToolIcon.innerHTML = `<svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><rect width="18" height="18" x="3" y="3" rx="4" ry="4"></rect><line x1="14" y1="3" x2="3" y2="14"></line><line x1="20" y1="9" x2="9" y2="20"></line></svg>`;
    } else if (SHAPE_ICONS[tool]) {
      compactActiveToolIcon.innerHTML = SHAPE_ICONS[tool];
    }
  }

  canvasWrapper.classList.remove('tool-select');
  if (tool === 'select') {
    canvasWrapper.classList.add('tool-select');
  } else {
    state.selectedId = null;
    hideInlineEditor();
    redrawAnnotations();
  }

  updateContextualToolbar();
}

function setActiveColor(color) {
  state.activeColor = color;
  localStorage.setItem('deerprint_active_color', color);
  if (activeColorSwatch) activeColorSwatch.style.backgroundColor = color;
  if (compactActiveColorDot) compactActiveColorDot.style.backgroundColor = color;
  if (paletteCurrentHex) paletteCurrentHex.textContent = color.toUpperCase();
  if (strokePreviewLine) strokePreviewLine.style.backgroundColor = color;

  // Update active swatch state in both grids
  document.querySelectorAll('.palette-swatch').forEach(swatch => {
    swatch.classList.toggle('active', swatch.getAttribute('data-color').toLowerCase() === color.toLowerCase());
  });

  if (state.selectedId) {
    const shape = state.annotations.find(a => a.id === state.selectedId);
    if (shape) {
      pushUndo();
      if (shape.type === 'text') {
        if (shape.isBadge) {
          shape.bgColor = color;
        } else {
          shape.color = color;
        }
      } else if (shape.strokeColor !== undefined) {
        shape.strokeColor = color;
      }
      redrawAnnotations();
      triggerAutoSave();
    }
  }
}

function setActiveStrokeWidth(width) {
  width = Math.max(1, Math.min(16, width));
  state.activeStrokeWidth = width;
  localStorage.setItem('deerprint_stroke_width', width);

  if (inputStrokeSlider) inputStrokeSlider.value = width;
  if (strokeValBadge) strokeValBadge.textContent = `${width}px`;
  if (compactInputStroke) compactInputStroke.value = width;
  if (compactStrokeVal) compactStrokeVal.textContent = `${width}px`;

  if (strokePreviewLine) {
    strokePreviewLine.style.height = `${width}px`;
    strokePreviewLine.style.backgroundColor = state.activeColor || '#ef4444';
  }
  if (activeStrokeDot) {
    const dotSize = Math.max(3, Math.min(14, width));
    activeStrokeDot.style.width = `${dotSize}px`;
    activeStrokeDot.style.height = `${dotSize}px`;
  }

  if (state.selectedId) {
    const shape = state.annotations.find(a => a.id === state.selectedId);
    if (shape && shape.strokeWidth !== undefined) {
      pushUndo();
      shape.strokeWidth = width;
      redrawAnnotations();
      triggerAutoSave();
    }
  }
}

function pushUndo() {
  state.undoStack.push(JSON.parse(JSON.stringify(state.annotations)));
  state.redoStack = [];
  updateUndoRedoUI();
  triggerAutoSave();
}

function undo() {
  if (state.undoStack.length === 0) return;
  state.redoStack.push(JSON.parse(JSON.stringify(state.annotations)));
  state.annotations = state.undoStack.pop();
  state.selectedId = null;
  hideInlineEditor();
  updateContextualToolbar();
  redrawAnnotations();
  updateUndoRedoUI();
  triggerAutoSave();
}

function redo() {
  if (state.redoStack.length === 0) return;
  state.undoStack.push(JSON.parse(JSON.stringify(state.annotations)));
  state.annotations = state.redoStack.pop();
  state.selectedId = null;
  hideInlineEditor();
  updateContextualToolbar();
  redrawAnnotations();
  updateUndoRedoUI();
  triggerAutoSave();
}

function updateUndoRedoUI() {
  const isUndoDisabled = state.undoStack.length === 0;
  const isRedoDisabled = state.redoStack.length === 0;

  btnUndo.disabled = isUndoDisabled;
  btnRedo.disabled = isRedoDisabled;
  btnUndo.classList.toggle('disabled', isUndoDisabled);
  btnRedo.classList.toggle('disabled', isRedoDisabled);

  if (compactBtnUndo) {
    compactBtnUndo.disabled = isUndoDisabled;
    compactBtnUndo.classList.toggle('disabled', isUndoDisabled);
  }
  if (compactBtnRedo) {
    compactBtnRedo.disabled = isRedoDisabled;
    compactBtnRedo.classList.toggle('disabled', isRedoDisabled);
  }
}

function getCanvasPoint(e) {
  const rect = annotationCanvas.getBoundingClientRect();
  const scaleX = annotationCanvas.width / rect.width;
  const scaleY = annotationCanvas.height / rect.height;
  return {
    x: (e.clientX - rect.left) * scaleX,
    y: (e.clientY - rect.top) * scaleY
  };
}

// Canvas Mouse Handlers
function onCanvasMouseDown(e) {
  // Salva qualquer texto que estava sendo digitado antes de processar o clique
  if (!inlineTextEditor.classList.contains('hidden')) {
    commitActiveTextEditor();
  }

  // Right-click (button 2), Middle-click (button 1), Hand Tool or Spacebar = PAN
  if (e.button === 2 || e.button === 1 || state.activeTool === 'hand' || state.isSpacePressed) {
    e.preventDefault();
    e.stopPropagation();
    startPanning(e);
    return;
  }
  if (e.button !== 0) return; // Left click only for drawing/selecting

  const pt = getCanvasPoint(e);
  state.dragStartPos = pt;

  // --------------------------------------------------------------------------
  // CASO 1: Ferramenta de Seleção ('select')
  // Permite selecionar, mover alças ou mover o corpo de qualquer elemento
  // --------------------------------------------------------------------------
  if (state.activeTool === 'select') {
    state.isDrawing = true;

    // 1. Se já há uma forma selecionada, verifica se clicou em uma de suas alças
    if (state.selectedId) {
      const selected = state.annotations.find(a => a.id === state.selectedId);
      if (selected) {
        const handle = getHandleUnderCursor(pt.x, pt.y, selected);
        if (handle) {
          state.activeHandle = handle;
          state.initialShapeState = JSON.parse(JSON.stringify(selected));
          return;
        }
      }
    }

    // 2. Verifica se clicou diretamente sobre alguma forma existente
    const clickedShape = getShapeUnderCursor(pt.x, pt.y);
    if (clickedShape) {
      state.selectedId = clickedShape.id;
      state.activeHandle = 'body';
      state.initialShapeState = JSON.parse(JSON.stringify(clickedShape));
      if (clickedShape.fontSize) {
        updateTextSizeUI(clickedShape.fontSize);
      }
      if (clickedShape.type === 'glass' && clickedShape.blurAmount !== undefined) {
        inputBlurStrength.value = clickedShape.blurAmount;
        blurValBadge.textContent = `${clickedShape.blurAmount}px`;
        state.activeBlurStrength = clickedShape.blurAmount;
      }
      updateContextualToolbar();
      redrawAnnotations();
      return;
    }

    // 3. Clicou no espaço vazio com a ferramenta select: desseleciona
    if (state.selectedId) {
      state.selectedId = null;
      state.activeHandle = null;
      updateContextualToolbar();
      redrawAnnotations();
    }
    state.isDrawing = false;
    return;
  }

  // --------------------------------------------------------------------------
  // CASO 2: Ferramentas de Desenho (Seta, Retângulo, Texto, Círculo, etc.)
  // REGRA: Clicar para desenhar NUNCA seleciona nem move itens existentes!
  // Todo item anterior é desselecionado e o novo desenho inicia imediatamente.
  // --------------------------------------------------------------------------
  if (state.selectedId) {
    state.selectedId = null;
    state.activeHandle = null;
    updateContextualToolbar();
    redrawAnnotations();
  }

  // Ferramenta de Texto (T)
  if (state.activeTool === 'text') {
    state.isDrawing = false;
    const clickedText = getShapeUnderCursor(pt.x, pt.y);
    if (clickedText && clickedText.type === 'text') {
      showInlineEditor(clickedText.x, clickedText.y, clickedText);
      return;
    }
    showInlineEditor(pt.x, pt.y);
    return;
  }

  // Ferramenta de Passos Sequenciais (1, 2, 3...)
  if (state.activeTool === 'step') {
    state.isDrawing = false;
    const stepCount = state.annotations.filter(a => a.type === 'step').length;
    const newStep = {
      id: 'ann_' + Date.now(),
      type: 'step',
      x: Math.round(pt.x),
      y: Math.round(pt.y),
      radius: Math.max(14, Math.round((state.activeStrokeWidth || 4) * 2.2 + 6)),
      number: stepCount + 1,
      color: state.activeColor || '#ef4444'
    };
    pushUndo();
    state.annotations.push(newStep);
    state.selectedId = newStep.id;
    redrawAnnotations();
    triggerAutoSave();
    return;
  }

  // Demais ferramentas de desenho (Inicia rascunho com mousedown)
  state.isDrawing = true;
  const id = 'ann_' + Date.now();
  const BOX_TOOLS = ['rect', 'rounded-rect', 'rect-fill', 'circle', 'circle-fill', 'callout', 'glass'];

  if (BOX_TOOLS.includes(state.activeTool)) {
    state.currentDraft = {
      id,
      type: state.activeTool,
      x: pt.x,
      y: pt.y,
      width: 0,
      height: 0,
      strokeColor: state.activeColor,
      strokeWidth: state.activeStrokeWidth,
      blurAmount: state.activeBlurStrength || 16
    };
  } else if (['arrow', 'double-arrow', 'line'].includes(state.activeTool)) {
    state.currentDraft = {
      id,
      type: state.activeTool,
      x1: pt.x,
      y1: pt.y,
      x2: pt.x,
      y2: pt.y,
      strokeColor: state.activeColor,
      strokeWidth: state.activeStrokeWidth
    };
  } else if (state.activeTool === 'pen') {
    state.currentDraft = {
      id,
      type: 'pen',
      points: [{ x: pt.x, y: pt.y }],
      strokeColor: state.activeColor,
      strokeWidth: state.activeStrokeWidth
    };
  } else if (state.activeTool === 'highlighter') {
    state.currentDraft = {
      id,
      type: 'highlighter',
      points: [{ x: pt.x, y: pt.y }],
      strokeColor: state.activeColor,
      strokeWidth: (state.activeStrokeWidth || 4) * 3
    };
  }
}

function onCanvasMouseMove(e) {
  if (state.isPanning) {
    const dx = e.clientX - state.panStart.mouseX;
    const dy = e.clientY - state.panStart.mouseY;
    state.panOffset.x = state.panStart.initialPanX + dx;
    state.panOffset.y = state.panStart.initialPanY + dy;
    updateCanvasTransform();
    return;
  }

  if (!state.isDrawing) {
    const pt = getCanvasPoint(e);
    if (state.activeTool === 'select') {
      if (state.selectedId) {
        const selected = state.annotations.find(a => a.id === state.selectedId);
        if (selected) {
          const handle = getHandleUnderCursor(pt.x, pt.y, selected);
          if (handle) {
            updateCursorForHandle(handle);
            return;
          }
        }
      }

      const shapeHover = getShapeUnderCursor(pt.x, pt.y);
      if (shapeHover) {
        annotationCanvas.style.cursor = 'move';
        return;
      }

      annotationCanvas.style.cursor = 'default';
      return;
    }

    if (state.activeTool === 'hand') {
      annotationCanvas.style.cursor = 'grab';
    } else if (state.activeTool === 'text') {
      annotationCanvas.style.cursor = 'text';
    } else if (state.activeTool === 'step') {
      annotationCanvas.style.cursor = 'pointer';
    } else {
      annotationCanvas.style.cursor = 'crosshair';
    }
    return;
  }

  const pt = getCanvasPoint(e);
  const dx = pt.x - state.dragStartPos.x;
  const dy = pt.y - state.dragStartPos.y;

  const BOX_TOOLS = ['rect', 'rounded-rect', 'rect-fill', 'circle', 'circle-fill', 'callout', 'glass'];

  // Handle active resize or move of selected shape
  if (state.selectedId && state.initialShapeState && state.activeHandle) {
    const shape = state.annotations.find(a => a.id === state.selectedId);
    if (!shape) return;

    if (state.activeHandle === 'body') {
      if (BOX_TOOLS.includes(shape.type) || shape.type === 'text') {
        shape.x = state.initialShapeState.x + dx;
        shape.y = state.initialShapeState.y + dy;
      } else if (shape.type === 'step') {
        shape.x = state.initialShapeState.x + dx;
        shape.y = state.initialShapeState.y + dy;
      } else if (['arrow', 'double-arrow', 'line'].includes(shape.type)) {
        shape.x1 = state.initialShapeState.x1 + dx;
        shape.y1 = state.initialShapeState.y1 + dy;
        shape.x2 = state.initialShapeState.x2 + dx;
        shape.y2 = state.initialShapeState.y2 + dy;
      } else if (shape.type === 'pen' || shape.type === 'highlighter') {
        shape.points = state.initialShapeState.points.map(p => ({
          x: p.x + dx,
          y: p.y + dy
        }));
      }
    } else if (BOX_TOOLS.includes(shape.type)) {
      resizeRectByHandle(shape, state.initialShapeState, state.activeHandle, dx, dy);
    } else if (shape.type === 'text') {
      resizeTextByHandle(shape, state.initialShapeState, state.activeHandle, dx, dy);
    } else if (['arrow', 'double-arrow', 'line'].includes(shape.type)) {
      if (state.activeHandle === 'start') {
        shape.x1 = state.initialShapeState.x1 + dx;
        shape.y1 = state.initialShapeState.y1 + dy;
      } else if (state.activeHandle === 'end') {
        shape.x2 = state.initialShapeState.x2 + dx;
        shape.y2 = state.initialShapeState.y2 + dy;
      }
    }
    redrawAnnotations();
    return;
  }

  if (state.currentDraft) {
    if (BOX_TOOLS.includes(state.currentDraft.type)) {
      state.currentDraft.width = dx;
      state.currentDraft.height = dy;
    } else if (['arrow', 'double-arrow', 'line'].includes(state.currentDraft.type)) {
      state.currentDraft.x2 = pt.x;
      state.currentDraft.y2 = pt.y;
    } else if (state.currentDraft.type === 'pen' || state.currentDraft.type === 'highlighter') {
      state.currentDraft.points.push({ x: pt.x, y: pt.y });
    }
    redrawAnnotations();
  }
}

function onCanvasMouseUp(e) {
  if (state.isPanning) {
    state.isPanning = false;
    canvasWrapper.classList.remove('is-panning');
  }

  if (!state.isDrawing) return;
  state.isDrawing = false;

  // 1. If modifying or moving an existing selected shape
  if (state.selectedId && state.initialShapeState && state.activeHandle) {
    const shape = state.annotations.find(a => a.id === state.selectedId);
    if (shape) {
      const hasChanged = JSON.stringify(shape) !== JSON.stringify(state.initialShapeState);
      if (hasChanged) {
        state.undoStack.push(JSON.parse(JSON.stringify(
          state.annotations.map(a => a.id === shape.id ? state.initialShapeState : a)
        )));
        state.redoStack = [];
        updateUndoRedoUI();
        triggerAutoSave();
      }
    }
    state.activeHandle = null;
    state.initialShapeState = null;
    return;
  }

  const BOX_TOOLS = ['rect', 'rounded-rect', 'rect-fill', 'circle', 'circle-fill', 'callout', 'glass'];

  // 2. If finished drawing a new shape draft
  if (state.currentDraft) {
    let valid = false;
    if (BOX_TOOLS.includes(state.currentDraft.type)) {
      let { x, y, width, height } = state.currentDraft;
      if (width < 0) {
        x += width;
        width = Math.abs(width);
      }
      if (height < 0) {
        y += height;
        height = Math.abs(height);
      }
      if (width > 4 && height > 4) {
        state.currentDraft.x = x;
        state.currentDraft.y = y;
        state.currentDraft.width = width;
        state.currentDraft.height = height;
        valid = true;
      }
    } else if (['arrow', 'double-arrow', 'line'].includes(state.currentDraft.type)) {
      const dist = Math.hypot(state.currentDraft.x2 - state.currentDraft.x1, state.currentDraft.y2 - state.currentDraft.y1);
      if (dist > 6) {
        valid = true;
      }
    } else if (state.currentDraft.type === 'pen' || state.currentDraft.type === 'highlighter') {
      if (state.currentDraft.points.length > 1) {
        valid = true;
      }
    }

    if (valid) {
      pushUndo();
      state.annotations.push(state.currentDraft);
      // Immediately keep the newly created shape selected with active handles!
      state.selectedId = state.currentDraft.id;
    } else {
      state.selectedId = null;
    }

    state.currentDraft = null;
    redrawAnnotations();
    triggerAutoSave();
  }
}

function onCanvasDoubleClick(e) {
  const pt = getCanvasPoint(e);
  const shape = getShapeUnderCursor(pt.x, pt.y);
  if (shape && shape.type === 'text') {
    showInlineEditor(shape.x, shape.y, shape);
  }
}

let currentTextCommitFn = null;

function commitActiveTextEditor() {
  if (currentTextCommitFn) {
    const fn = currentTextCommitFn;
    currentTextCommitFn = null;
    fn();
  }
}

function showInlineEditor(x, y, existingShape = null) {
  // Se já havia um editor aberto com texto digitado, comita primeiro para não perder nada
  commitActiveTextEditor();

  if (existingShape) {
    x = existingShape.x;
    y = existingShape.y;
  }

  state.editingShapeId = existingShape ? existingShape.id : null;
  const fontSize = existingShape ? (existingShape.fontSize || 16) : (state.activeFontSize || 16);
  const color = existingShape ? (existingShape.color || state.activeColor) : state.activeColor;
  const lineHeight = Math.round(fontSize * 1.25);

  let posX = x;
  let posY = y;
  if (existingShape && existingShape.isBadge) {
    const paddingX = Math.round(fontSize * 0.75);
    const paddingY = Math.round(fontSize * 0.4);
    posX += paddingX;
    posY += paddingY;
  }

  // Alinha a caixa para que a ponta do cursor/letras comece exatamente no ponto clicado (x, y)
  inlineTextEditor.style.left = `${Math.max(0, Math.round(posX) - 4)}px`;
  inlineTextEditor.style.top = `${Math.max(0, Math.round(posY) - 2)}px`;
  inlineTextEditor.style.fontSize = `${fontSize}px`;
  inlineTextEditor.style.lineHeight = `${lineHeight}px`;
  inlineTextEditor.style.color = color;
  inlineTextEditor.value = existingShape ? existingShape.text : '';
  inlineTextEditor.classList.remove('hidden');

  if (existingShape) {
    state.selectedId = existingShape.id;
  }
  redrawAnnotations();

  // Expansão dinâmica de largura e altura conforme o usuário digita ou quebra linhas
  const updateSize = () => {
    const lines = inlineTextEditor.value.split('\n');
    const maxLen = Math.max(...lines.map(l => l.length), 4);
    inlineTextEditor.style.width = `${Math.max(80, Math.round(maxLen * fontSize * 0.7 + 24))}px`;
    inlineTextEditor.style.height = `${Math.max(Math.round(fontSize * 1.35), Math.round(lines.length * lineHeight + 8))}px`;
  };
  updateSize();
  inlineTextEditor.oninput = updateSize;

  setTimeout(() => {
    inlineTextEditor.focus();
    inlineTextEditor.select();
  }, 25);

  const commitText = () => {
    currentTextCommitFn = null;
    const text = inlineTextEditor.value.trim();
    state.editingShapeId = null;
    hideInlineEditor();

    if (text) {
      pushUndo();
      if (existingShape) {
        existingShape.text = text;
        existingShape.fontSize = fontSize;
        state.selectedId = existingShape.id;
      } else {
        // Texto puro com suporte a multilinhas (Ferramenta T)
        const newTextShape = {
          id: 'ann_' + Date.now(),
          type: 'text',
          x: Math.round(x),
          y: Math.round(y),
          text,
          fontSize: state.activeFontSize || 16,
          color: state.activeColor || '#ef4444',
          isBadge: false
        };
        state.annotations.push(newTextShape);
        state.selectedId = newTextShape.id;
      }
      redrawAnnotations();
      triggerAutoSave();
    } else if (existingShape) {
      pushUndo();
      state.annotations = state.annotations.filter(a => a.id !== existingShape.id);
      state.selectedId = null;
      redrawAnnotations();
      triggerAutoSave();
    }
  };

  currentTextCommitFn = commitText;
  inlineTextEditor.onblur = commitText;
  inlineTextEditor.onkeydown = (e) => {
    if (e.key === 'Enter') {
      if (e.ctrlKey || e.metaKey) {
        e.preventDefault();
        commitText();
      } else {
        // Deixa o Enter normal ou Shift+Enter quebrar linha e atualiza tamanho
        setTimeout(updateSize, 0);
      }
    } else if (e.key === 'Escape') {
      currentTextCommitFn = null;
      state.editingShapeId = null;
      hideInlineEditor();
      redrawAnnotations();
    }
  };
}

function hideInlineEditor() {
  currentTextCommitFn = null;
  state.editingShapeId = null;
  inlineTextEditor.classList.add('hidden');
  inlineTextEditor.onblur = null;
  inlineTextEditor.onkeydown = null;
  inlineTextEditor.oninput = null;
}

// ==========================================================================
// Rendering Engine (Hollow Rectangles, Frosted Glass, Crisp Pure Text)
// ==========================================================================
function redrawAnnotations() {
  const ctx = annotationCanvas.getContext('2d');
  ctx.clearRect(0, 0, annotationCanvas.width, annotationCanvas.height);

  state.annotations.forEach(shape => {
    renderShape(ctx, shape);
  });

  if (state.currentDraft) {
    renderShape(ctx, state.currentDraft);
  }

  if (state.selectedId) {
    const selected = state.annotations.find(a => a.id === state.selectedId);
    if (selected) {
      renderSelectionOutlineAndHandles(ctx, selected);
    }
  }
}

function renderShape(ctx, shape) {
  ctx.save();

  if (shape.type === 'rect') {
    ctx.strokeStyle = shape.strokeColor;
    ctx.lineWidth = shape.strokeWidth || 4;
    ctx.lineJoin = 'miter';
    ctx.strokeRect(shape.x, shape.y, shape.width, shape.height);
  } else if (shape.type === 'rounded-rect') {
    ctx.strokeStyle = shape.strokeColor;
    ctx.lineWidth = shape.strokeWidth || 4;
    drawRoundedRect(ctx, shape.x, shape.y, shape.width, shape.height, 10);
    ctx.stroke();
  } else if (shape.type === 'rect-fill') {
    ctx.fillStyle = shape.strokeColor;
    ctx.globalAlpha = 0.25;
    drawRoundedRect(ctx, shape.x, shape.y, shape.width, shape.height, 6);
    ctx.fill();
    ctx.globalAlpha = 1.0;
    ctx.strokeStyle = shape.strokeColor;
    ctx.lineWidth = shape.strokeWidth || 3;
    drawRoundedRect(ctx, shape.x, shape.y, shape.width, shape.height, 6);
    ctx.stroke();
  } else if (shape.type === 'circle') {
    const rx = Math.abs(shape.width) / 2;
    const ry = Math.abs(shape.height) / 2;
    const cx = shape.x + rx;
    const cy = shape.y + ry;
    ctx.strokeStyle = shape.strokeColor;
    ctx.lineWidth = shape.strokeWidth || 4;
    ctx.beginPath();
    ctx.ellipse(cx, cy, Math.max(1, rx), Math.max(1, ry), 0, 0, Math.PI * 2);
    ctx.stroke();
  } else if (shape.type === 'circle-fill') {
    const rx = Math.abs(shape.width) / 2;
    const ry = Math.abs(shape.height) / 2;
    const cx = shape.x + rx;
    const cy = shape.y + ry;
    ctx.beginPath();
    ctx.ellipse(cx, cy, Math.max(1, rx), Math.max(1, ry), 0, 0, Math.PI * 2);
    ctx.fillStyle = shape.strokeColor;
    ctx.globalAlpha = 0.25;
    ctx.fill();
    ctx.globalAlpha = 1.0;
    ctx.strokeStyle = shape.strokeColor;
    ctx.lineWidth = shape.strokeWidth || 3;
    ctx.stroke();
  } else if (shape.type === 'arrow') {
    drawArrow(ctx, shape.x1, shape.y1, shape.x2, shape.y2, shape.strokeColor, shape.strokeWidth || 4);
  } else if (shape.type === 'double-arrow') {
    drawDoubleArrow(ctx, shape.x1, shape.y1, shape.x2, shape.y2, shape.strokeColor, shape.strokeWidth || 4);
  } else if (shape.type === 'line') {
    ctx.strokeStyle = shape.strokeColor;
    ctx.lineWidth = shape.strokeWidth || 4;
    ctx.lineCap = 'round';
    ctx.beginPath();
    ctx.moveTo(shape.x1, shape.y1);
    ctx.lineTo(shape.x2, shape.y2);
    ctx.stroke();
  } else if (shape.type === 'step') {
    renderStepBadge(ctx, shape);
  } else if (shape.type === 'callout') {
    drawCallout(ctx, shape);
  } else if (shape.type === 'glass') {
    // Frosted Glass Effect (css.glass specification with 16px radius, specular shine & soft shadow)
    const rawBlur = shape.blurAmount !== undefined ? shape.blurAmount : (state.activeBlurStrength !== undefined ? state.activeBlurStrength : 4.2);
    const blur = Math.max(1, Math.min(10, isNaN(parseFloat(rawBlur)) ? 4.2 : parseFloat(rawBlur)));

    const { x, y, width, height } = shape;
    if (width <= 2 || height <= 2) {
      ctx.restore();
      return;
    }

    // border-radius: 16px (ajusta proporcionalmente se a caixa for pequena)
    const radius = Math.min(16, Math.max(3, Math.min(width, height) / 3));

    // 1. Box Shadow: 0 4px 30px rgba(0, 0, 0, 0.10)
    ctx.save();
    ctx.shadowColor = 'rgba(0, 0, 0, 0.18)';
    ctx.shadowBlur = 24;
    ctx.shadowOffsetX = 0;
    ctx.shadowOffsetY = 4;
    ctx.fillStyle = 'rgba(0, 0, 0, 0.01)';
    drawRoundedRect(ctx, x, y, width, height, radius);
    ctx.fill();
    ctx.restore();

    // 2. Clip to Glass Panel Bounds
    ctx.save();
    drawRoundedRect(ctx, x, y, width, height, radius);
    ctx.clip();

    // 3. Optical Refraction + Backdrop Filter Blur (4.2px no modo Suave)
    const cx = x + width / 2;
    const cy = y + height / 2;
    const distortionScale = 1.015; // 1.5% de refração ótica de lente

    ctx.save();
    ctx.translate(cx, cy);
    ctx.scale(distortionScale, distortionScale);
    ctx.translate(-cx, -cy);

    // backdrop-filter: blur(4.2px)
    ctx.filter = `blur(${blur}px) saturate(110%)`;
    ctx.drawImage(activeImage, 0, 0, annotationCanvas.width, annotationCanvas.height);
    ctx.restore();

    // 4. Background: rgba(255, 255, 255, 0.06)
    ctx.fillStyle = 'rgba(255, 255, 255, 0.06)';
    ctx.fillRect(x, y, width, height);

    // 5. Specular Glare / Light Reflection (Reflexo de luz suave 45° no vidro)
    const glareGrad = ctx.createLinearGradient(x, y, x + width * 0.85, y + height * 0.85);
    glareGrad.addColorStop(0, 'rgba(255, 255, 255, 0.28)');
    glareGrad.addColorStop(0.2, 'rgba(255, 255, 255, 0.08)');
    glareGrad.addColorStop(0.5, 'rgba(255, 255, 255, 0.01)');
    glareGrad.addColorStop(0.8, 'rgba(255, 255, 255, 0.04)');
    glareGrad.addColorStop(1, 'rgba(255, 255, 255, 0.14)');
    ctx.fillStyle = glareGrad;
    ctx.fillRect(x, y, width, height);

    // 6. Border: 1px solid rgba(255, 255, 255, 0.89)
    ctx.strokeStyle = 'rgba(255, 255, 255, 0.89)';
    ctx.lineWidth = 1.0;
    drawRoundedRect(ctx, x + 0.5, y + 0.5, width - 1.0, height - 1.0, radius);
    ctx.stroke();

    // 7. Top specular edge highlight
    ctx.strokeStyle = 'rgba(255, 255, 255, 0.65)';
    ctx.lineWidth = 1;
    ctx.beginPath();
    ctx.moveTo(x + radius, y + 1);
    ctx.lineTo(x + width - radius, y + 1);
    ctx.stroke();

    ctx.restore();
  } else if (shape.type === 'pen') {
    ctx.strokeStyle = shape.strokeColor;
    ctx.lineWidth = shape.strokeWidth || 4;
    ctx.lineCap = 'round';
    ctx.lineJoin = 'round';
    ctx.beginPath();
    shape.points.forEach((p, i) => {
      if (i === 0) ctx.moveTo(p.x, p.y);
      else ctx.lineTo(p.x, p.y);
    });
    ctx.stroke();
  } else if (shape.type === 'highlighter') {
    ctx.globalAlpha = 0.35;
    ctx.strokeStyle = shape.strokeColor;
    ctx.lineWidth = shape.strokeWidth || 16;
    ctx.lineCap = 'square';
    ctx.lineJoin = 'round';
    ctx.beginPath();
    shape.points.forEach((p, i) => {
      if (i === 0) ctx.moveTo(p.x, p.y);
      else ctx.lineTo(p.x, p.y);
    });
    ctx.stroke();
  } else if (shape.type === 'text') {
    if (state.editingShapeId && shape.id === state.editingShapeId) {
      ctx.restore();
      return;
    }
    renderTextBadge(ctx, shape);
  }

  ctx.restore();
}

function drawArrow(ctx, fromX, fromY, toX, toY, color, width) {
  const angle = Math.atan2(toY - fromY, toX - fromX);
  const headLength = Math.max(9, Math.min(20, width * 2.6 + 2));
  const headAngle = Math.PI / 7.5;

  ctx.save();
  ctx.strokeStyle = color;
  ctx.fillStyle = color;
  ctx.lineWidth = width;
  ctx.lineCap = 'round';
  ctx.lineJoin = 'miter';

  const shaftEndX = toX - Math.cos(angle) * (headLength * 0.4);
  const shaftEndY = toY - Math.sin(angle) * (headLength * 0.4);

  ctx.beginPath();
  ctx.moveTo(fromX, fromY);
  ctx.lineTo(shaftEndX, shaftEndY);
  ctx.stroke();

  ctx.beginPath();
  ctx.moveTo(toX, toY);
  ctx.lineTo(
    toX - headLength * Math.cos(angle - headAngle),
    toY - headLength * Math.sin(angle - headAngle)
  );
  ctx.lineTo(
    toX - (headLength * 0.7) * Math.cos(angle),
    toY - (headLength * 0.7) * Math.sin(angle)
  );
  ctx.lineTo(
    toX - headLength * Math.cos(angle + headAngle),
    toY - headLength * Math.sin(angle + headAngle)
  );
  ctx.closePath();
  ctx.fill();
  ctx.restore();
}

function drawDoubleArrow(ctx, fromX, fromY, toX, toY, color, width) {
  drawArrow(ctx, fromX, fromY, toX, toY, color, width);

  // Ponta oposta em (fromX, fromY)
  const revAngle = Math.atan2(fromY - toY, fromX - toX);
  const headLength = Math.max(9, Math.min(20, width * 2.6 + 2));
  const headAngle = Math.PI / 7.5;

  ctx.save();
  ctx.fillStyle = color;
  ctx.beginPath();
  ctx.moveTo(fromX, fromY);
  ctx.lineTo(
    fromX - headLength * Math.cos(revAngle - headAngle),
    fromY - headLength * Math.sin(revAngle - headAngle)
  );
  ctx.lineTo(
    fromX - (headLength * 0.7) * Math.cos(revAngle),
    fromY - (headLength * 0.7) * Math.sin(revAngle)
  );
  ctx.lineTo(
    fromX - headLength * Math.cos(revAngle + headAngle),
    fromY - headLength * Math.sin(revAngle + headAngle)
  );
  ctx.closePath();
  ctx.fill();
  ctx.restore();
}

function renderStepBadge(ctx, shape) {
  const r = shape.radius || 15;
  ctx.save();
  ctx.fillStyle = shape.color || state.activeColor || '#ef4444';
  ctx.shadowColor = 'rgba(0, 0, 0, 0.4)';
  ctx.shadowBlur = 8;
  ctx.shadowOffsetY = 2;

  ctx.beginPath();
  ctx.arc(shape.x, shape.y, r, 0, Math.PI * 2);
  ctx.fill();

  ctx.shadowColor = 'transparent';
  ctx.strokeStyle = '#ffffff';
  ctx.lineWidth = 2.2;
  ctx.stroke();

  ctx.fillStyle = '#ffffff';
  ctx.font = `800 ${Math.round(r * 1.05)}px 'Plus Jakarta Sans', sans-serif`;
  ctx.textAlign = 'center';
  ctx.textBaseline = 'middle';
  ctx.fillText(shape.number ? shape.number.toString() : '1', shape.x, shape.y + 0.5);
  ctx.restore();
}

function drawCallout(ctx, shape) {
  const { x, y, width, height, strokeColor, strokeWidth } = shape;
  const radius = 8;
  const w = Math.max(40, width);
  const h = Math.max(24, height);

  ctx.save();
  ctx.strokeStyle = strokeColor || state.activeColor || '#ef4444';
  ctx.fillStyle = strokeColor || state.activeColor || '#ef4444';
  ctx.lineWidth = strokeWidth || 3;
  ctx.lineJoin = 'round';

  ctx.globalAlpha = 0.18;
  drawRoundedRect(ctx, x, y, w, h, radius);
  ctx.fill();

  ctx.globalAlpha = 1.0;
  drawRoundedRect(ctx, x, y, w, h, radius);
  ctx.stroke();

  // Ponta indicativa
  ctx.beginPath();
  ctx.moveTo(x + 12, y + h);
  ctx.lineTo(x - 6, y + h + 14);
  ctx.lineTo(x + 24, y + h);
  ctx.closePath();
  ctx.globalAlpha = 0.25;
  ctx.fill();
  ctx.globalAlpha = 1.0;
  ctx.stroke();

  ctx.restore();
}

function renderTextBadge(ctx, shape) {
  const fontSize = shape.fontSize || 16;
  const lineHeight = fontSize * 1.25;
  ctx.font = `700 ${fontSize}px 'Plus Jakarta Sans', sans-serif`;
  
  const textStr = shape.text || '';
  const lines = textStr.split('\n');
  let maxLineWidth = 0;
  lines.forEach(l => {
    const w = ctx.measureText(l).width;
    if (w > maxLineWidth) maxLineWidth = w;
  });

  const textWidth = maxLineWidth;
  const totalTextHeight = Math.max(fontSize, lines.length * lineHeight);

  if (shape.isBadge) {
    // Badge Mode (for tags dragged from sidebar)
    const paddingX = Math.round(fontSize * 0.75);
    const paddingY = Math.round(fontSize * 0.4);
    const boxHeight = totalTextHeight + paddingY * 2;
    const boxWidth = textWidth + paddingX * 2;
    const radius = 6;

    shape.width = boxWidth;
    shape.height = boxHeight;

    ctx.fillStyle = shape.bgColor || '#ef4444';
    ctx.shadowColor = 'rgba(0, 0, 0, 0.4)';
    ctx.shadowBlur = 8;
    ctx.shadowOffsetY = 2;

    drawRoundedRect(ctx, shape.x, shape.y, boxWidth, boxHeight, radius);
    ctx.fill();

    ctx.shadowColor = 'transparent';
    ctx.fillStyle = shape.color || '#ffffff';
    ctx.textBaseline = 'top';
    lines.forEach((line, i) => {
      ctx.fillText(line, shape.x + paddingX, shape.y + paddingY + i * lineHeight);
    });
  } else {
    // Pure Clean Text Mode (T tool - no badge background, no shadow, full multiline support)
    shape.width = Math.max(20, textWidth);
    shape.height = Math.max(14, totalTextHeight);

    ctx.shadowColor = 'transparent';
    ctx.shadowBlur = 0;
    ctx.shadowOffsetX = 0;
    ctx.shadowOffsetY = 0;

    ctx.fillStyle = shape.color || state.activeColor || '#ef4444';
    ctx.textBaseline = 'top';
    lines.forEach((line, i) => {
      ctx.fillText(line, shape.x, shape.y + i * lineHeight);
    });
  }
}

function drawRoundedRect(ctx, x, y, width, height, radius) {
  ctx.beginPath();
  ctx.moveTo(x + radius, y);
  ctx.lineTo(x + width - radius, y);
  ctx.quadraticCurveTo(x + width, y, x + width, y + radius);
  ctx.lineTo(x + width, y + height - radius);
  ctx.quadraticCurveTo(x + width, y + height, x + width - radius, y + height);
  ctx.lineTo(x + radius, y + height);
  ctx.quadraticCurveTo(x, y + height, x, y + height - radius);
  ctx.lineTo(x, y + radius);
  ctx.quadraticCurveTo(x, y, x + radius, y);
  ctx.closePath();
}

const BOX_SHAPE_TYPES = ['rect', 'rounded-rect', 'rect-fill', 'circle', 'circle-fill', 'callout', 'glass', 'text'];

function renderSelectionOutlineAndHandles(ctx, shape) {
  ctx.save();
  ctx.strokeStyle = '#d4e9c2';
  ctx.lineWidth = 1.2;
  ctx.setLineDash([3, 3]);

  const handleRadius = 3; // Pontos de modificação discretos e elegantes

  if (BOX_SHAPE_TYPES.includes(shape.type)) {
    ctx.strokeRect(shape.x - 1, shape.y - 1, shape.width + 2, shape.height + 2);
    ctx.setLineDash([]);

    const handles = getRectHandles(shape);
    Object.values(handles).forEach(h => {
      ctx.fillStyle = '#ffffff';
      ctx.strokeStyle = '#394b2e';
      ctx.lineWidth = 1.4;
      ctx.beginPath();
      ctx.arc(h.x, h.y, handleRadius, 0, Math.PI * 2);
      ctx.fill();
      ctx.stroke();
    });
  } else if (shape.type === 'step') {
    ctx.setLineDash([]);
    const r = (shape.radius || 15) + 3;
    ctx.beginPath();
    ctx.arc(shape.x, shape.y, r, 0, Math.PI * 2);
    ctx.stroke();
  } else if (['arrow', 'double-arrow', 'line'].includes(shape.type)) {
    ctx.setLineDash([]);
    const pts = [
      { x: shape.x1, y: shape.y1 },
      { x: shape.x2, y: shape.y2 }
    ];
    pts.forEach(h => {
      ctx.fillStyle = '#ffffff';
      ctx.strokeStyle = '#394b2e';
      ctx.lineWidth = 1.4;
      ctx.beginPath();
      ctx.arc(h.x, h.y, handleRadius, 0, Math.PI * 2);
      ctx.fill();
      ctx.stroke();
    });
  }

  ctx.restore();
}

function getRectHandles(shape) {
  const x = shape.x;
  const y = shape.y;
  const w = shape.width;
  const h = shape.height;

  // Para badges e formas compactas, mostra apenas os 4 cantos para evitar poluição visual
  if (w < 45 || h < 25) {
    return {
      nw: { x, y },
      ne: { x: x + w, y },
      se: { x: x + w, y: y + h },
      sw: { x, y: y + h }
    };
  }

  return {
    nw: { x, y },
    n:  { x: x + w / 2, y },
    ne: { x: x + w, y },
    e:  { x: x + w, y: y + h / 2 },
    se: { x: x + w, y: y + h },
    s:  { x: x + w / 2, y: y + h },
    sw: { x, y: y + h },
    w:  { x, y: y + h / 2 }
  };
}

function getHandleUnderCursor(x, y, shape) {
  const hitRadius = 8;
  if (BOX_SHAPE_TYPES.includes(shape.type)) {
    const handles = getRectHandles(shape);
    for (const [key, h] of Object.entries(handles)) {
      if (Math.hypot(x - h.x, y - h.y) <= hitRadius) {
        return key;
      }
    }
  } else if (['arrow', 'double-arrow', 'line'].includes(shape.type)) {
    if (Math.hypot(x - shape.x1, y - shape.y1) <= hitRadius) return 'start';
    if (Math.hypot(x - shape.x2, y - shape.y2) <= hitRadius) return 'end';
  }
  return null;
}

function getShapeUnderCursor(x, y) {
  for (let i = state.annotations.length - 1; i >= 0; i--) {
    const s = state.annotations[i];
    if (BOX_SHAPE_TYPES.includes(s.type)) {
      if (x >= s.x - 4 && x <= s.x + s.width + 4 && y >= s.y - 4 && y <= s.y + s.height + 4) {
        return s;
      }
    } else if (s.type === 'step') {
      if (Math.hypot(x - s.x, y - s.y) <= (s.radius || 15) + 4) {
        return s;
      }
    } else if (['arrow', 'double-arrow', 'line'].includes(s.type)) {
      if (pointToLineDistance(x, y, s.x1, s.y1, s.x2, s.y2) <= (s.strokeWidth || 4) + 6) {
        return s;
      }
    } else if (s.type === 'pen' || s.type === 'highlighter') {
      for (let j = 0; j < s.points.length - 1; j++) {
        const p1 = s.points[j];
        const p2 = s.points[j + 1];
        if (pointToLineDistance(x, y, p1.x, p1.y, p2.x, p2.y) <= (s.strokeWidth || 4) + 6) {
          return s;
        }
      }
    }
  }
  return null;
}

function resizeRectByHandle(shape, initial, handle, dx, dy) {
  let { x, y, width, height } = initial;
  if (handle.includes('e')) width += dx;
  if (handle.includes('s')) height += dy;
  if (handle.includes('w')) {
    x += dx;
    width -= dx;
  }
  if (handle.includes('n')) {
    y += dy;
    height -= dy;
  }
  shape.x = x;
  shape.y = y;
  shape.width = width;
  shape.height = height;
}

function resizeTextByHandle(shape, initial, handle, dx, dy) {
  const initialFontSize = initial.fontSize || 16;
  let scale = 1;
  if (handle === 'se' || handle === 'e') {
    scale = 1 + (dx / Math.max(20, initial.width));
  } else if (handle === 'nw' || handle === 'w') {
    scale = 1 - (dx / Math.max(20, initial.width));
  } else if (handle === 'ne') {
    scale = 1 + (dx / Math.max(20, initial.width));
  } else if (handle === 'sw') {
    scale = 1 - (dx / Math.max(20, initial.width));
  } else if (handle === 's') {
    scale = 1 + (dy / Math.max(10, initial.height));
  } else if (handle === 'n') {
    scale = 1 - (dy / Math.max(10, initial.height));
  }

  const newFontSize = Math.max(10, Math.min(72, Math.round(initialFontSize * scale)));
  shape.fontSize = newFontSize;
  updateTextSizeUI(newFontSize);
}

function updateCursorForHandle(handle) {
  if (!handle) {
    annotationCanvas.style.cursor = 'default';
    return;
  }
  const cursorMap = {
    nw: 'nwse-resize',
    se: 'nwse-resize',
    ne: 'nesw-resize',
    sw: 'nesw-resize',
    n: 'ns-resize',
    s: 'ns-resize',
    e: 'ew-resize',
    w: 'ew-resize',
    start: 'crosshair',
    end: 'crosshair'
  };
  annotationCanvas.style.cursor = cursorMap[handle] || 'default';
}

function pointToLineDistance(px, py, x1, y1, x2, y2) {
  const l2 = (x2 - x1) ** 2 + (y2 - y1) ** 2;
  if (l2 === 0) return Math.hypot(px - x1, py - y1);
  let t = ((px - x1) * (x2 - x1) + (py - y1) * (y2 - y1)) / l2;
  t = Math.max(0, Math.min(1, t));
  return Math.hypot(px - (x1 + t * (x2 - x1)), py - (y1 + t * (y2 - y1)));
}

// Generate Composite High-Res Image (Base Image + Vector Annotations + Frosted Glass Blur)
async function renderCompositeDataUrl() {
  if (!inlineTextEditor.classList.contains('hidden')) {
    commitActiveTextEditor();
  }

  if (!activeImage.naturalWidth || !activeImage.naturalHeight) {
    return activeImage.src;
  }

  const canvas = document.createElement('canvas');
  canvas.width = activeImage.naturalWidth;
  canvas.height = activeImage.naturalHeight;
  const ctx = canvas.getContext('2d');
  ctx.imageSmoothingEnabled = false;

  // 1. Draw base screenshot image
  ctx.drawImage(activeImage, 0, 0);

  // 2. Draw all annotations at native resolution
  state.annotations.forEach(shape => {
    renderShape(ctx, shape);
  });

  return canvas.toDataURL('image/png');
}

// Save active image as new file (Choose name & location)
async function saveActiveImageAs() {
  if (!state.currentScreenshot) {
    showToast('Nenhuma imagem ativa para salvar.');
    return;
  }

  const compositeDataUrl = await renderCompositeDataUrl();
  const defaultName = state.currentScreenshot.fileName || 'screenshot.png';

  const res = await window.electronAPI.saveImageAs(compositeDataUrl, defaultName);
  if (res.success) {
    state.currentScreenshot.filePath = res.filePath;
    state.currentScreenshot.fileName = res.fileName;
    metaFilename.textContent = res.fileName;
    metaFilename.title = res.filePath;
    showToast(`✓ Imagem salva com sucesso: ${res.fileName}`);
  } else if (!res.canceled) {
    showToast('Erro ao salvar imagem.');
  }
}

// Copy active image with all annotations to clipboard
async function copyActiveImage() {
  if (!state.currentScreenshot) {
    showToast('Nenhuma imagem ativa no editor.');
    return;
  }
  
  const compositeDataUrl = await renderCompositeDataUrl();
  const res = await window.electronAPI.copyImageToClipboard(compositeDataUrl);
  if (res.success) {
    showToast('✓ Imagem anotada copiada em alta definição!');
  } else {
    showToast('Erro ao copiar imagem.');
  }
}

async function copyImageFromHistory(item, imgSrc) {
  const canvas = document.createElement('canvas');
  const img = new Image();
  img.crossOrigin = 'anonymous';
  img.onload = async () => {
    canvas.width = img.naturalWidth;
    canvas.height = img.naturalHeight;
    const ctx = canvas.getContext('2d');
    ctx.drawImage(img, 0, 0);
    const dataUrl = canvas.toDataURL('image/png');
    await window.electronAPI.copyImageToClipboard(dataUrl);
    showToast('✓ Imagem copiada para a área de transferência!');
  };
  img.src = imgSrc;
}

// ==========================================================================
// Zoom & Infinite Viewport Transform Controls
// ==========================================================================
function updateCanvasTransform() {
  canvasWrapper.style.transform = `translate(${state.panOffset.x}px, ${state.panOffset.y}px) scale(${state.zoom})`;
  zoomLevelText.textContent = `${Math.round(state.zoom * 100)}%`;
}

function updateZoom(newZoom) {
  state.zoom = Math.max(0.05, Math.min(newZoom, 8.0));
  updateCanvasTransform();
}

function fitToScreen() {
  if (!activeImage.naturalWidth || !activeImage.naturalHeight) {
    state.zoom = 1.0;
    state.panOffset = { x: 0, y: 0 };
    updateCanvasTransform();
    return;
  }
  const padding = 80;
  const availW = viewport.clientWidth - padding;
  const availH = viewport.clientHeight - padding;
  
  const scaleW = availW / activeImage.naturalWidth;
  const scaleH = availH / activeImage.naturalHeight;
  const fitScale = Math.min(1, Math.min(scaleW, scaleH));

  state.zoom = fitScale;
  state.panOffset = { x: 0, y: 0 };
  updateCanvasTransform();
}

// ==========================================================================
// Hotkey Recorder & Settings Modal
// ==========================================================================
function startRecordingHotkey() {
  state.isRecordingHotkey = true;
  btnRecordHotkey.classList.add('recording-active');
  recordBtnText.textContent = 'Pressione as teclas...';
  hotkeyValBadge.classList.add('recording-active');
  hotkeyValBadge.textContent = 'Gravando...';
}

function stopRecordingHotkey(capturedKey) {
  state.isRecordingHotkey = false;
  btnRecordHotkey.classList.remove('recording-active');
  recordBtnText.textContent = 'Gravar Novo Atalho';
  hotkeyValBadge.classList.remove('recording-active');

  if (capturedKey) {
    state.tempHotkey = capturedKey;
    hotkeyValBadge.textContent = formatHotkeyDisplay(capturedKey);
  } else {
    hotkeyValBadge.textContent = formatHotkeyDisplay(state.tempHotkey || state.settings.hotkey);
  }
}

function getAcceleratorFromEvent(e) {
  e.preventDefault();
  const key = e.key;
  const code = e.code;

  if (['Control', 'Shift', 'Alt', 'Meta'].includes(key)) {
    return null;
  }

  const modifiers = [];
  if (e.ctrlKey || e.metaKey) modifiers.push('CommandOrControl');
  if (e.altKey) modifiers.push('Alt');
  if (e.shiftKey) modifiers.push('Shift');

  let keyName = '';
  if (/^F[1-9]|F1[0-9]|F2[0-4]$/.test(key)) {
    keyName = key;
  } else if (code === 'PrintScreen' || key === 'PrintScreen') {
    keyName = 'PrintScreen';
  } else if (code === 'Space') {
    keyName = 'Space';
  } else if (key.length === 1) {
    keyName = key.toUpperCase();
  } else {
    keyName = key;
  }

  if (modifiers.length > 0) {
    return [...modifiers, keyName].join('+');
  }
  return keyName;
}

function formatHotkeyDisplay(accelerator) {
  if (!accelerator) return 'Nenhum';
  return accelerator
    .replace('CommandOrControl', 'Ctrl')
    .replace('+', ' + ');
}

// ==========================================================================
// Event Listeners Setup
// ==========================================================================
function setupEventListeners() {
  if (btnCaptureNow) {
    btnCaptureNow.addEventListener('click', async () => {
      await flushAutoSave();
      window.electronAPI.triggerCapture();
    });
  }
  if (btnEmptyCapture) {
    btnEmptyCapture.addEventListener('click', async () => {
      await flushAutoSave();
      window.electronAPI.triggerCapture();
    });
  }
  
  window.addEventListener('beforeunload', () => {
    flushAutoSave();
  });
  
  if (btnCloseActiveImage) {
    btnCloseActiveImage.addEventListener('click', clearWorkspace);
  }
  btnSaveAs.addEventListener('click', saveActiveImageAs);
  btnCopyClipboard.addEventListener('click', copyActiveImage);

  window.addEventListener('keydown', (e) => {
    if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === 'c' && !state.isRecordingHotkey) {
      if (document.activeElement.tagName !== 'INPUT' && document.activeElement.tagName !== 'TEXTAREA') {
        copyActiveImage();
      }
    }
  });

  btnOpenFolder.addEventListener('click', () => window.electronAPI.openSaveDirectory());
  btnModalOpenFolder.addEventListener('click', () => window.electronAPI.openSaveDirectory());

  btnToggleHistory.addEventListener('click', () => {
    const isCollapsed = historyDrawer.classList.toggle('collapsed');
    btnToggleHistory.classList.toggle('active', !isCollapsed);
  });
  btnCloseHistory.addEventListener('click', () => {
    historyDrawer.classList.add('collapsed');
    btnToggleHistory.classList.remove('active');
  });

  btnZoomIn.addEventListener('click', () => updateZoom(state.zoom + 0.15));
  btnZoomOut.addEventListener('click', () => updateZoom(state.zoom - 0.15));
  btnFitScreen.addEventListener('click', fitToScreen);
  btnActualSize.addEventListener('click', () => {
    state.zoom = 1.0;
    state.panOffset = { x: 0, y: 0 };
    updateCanvasTransform();
  });

  viewport.addEventListener('wheel', (e) => {
    e.preventDefault();
    if (e.ctrlKey || e.metaKey) {
      const zoomFactor = e.deltaY < 0 ? 1.15 : 0.85;
      updateZoom(state.zoom * zoomFactor);
    } else {
      state.panOffset.x -= e.deltaX;
      state.panOffset.y -= e.deltaY;
      updateCanvasTransform();
    }
  }, { passive: false });

  btnOpenSettings.addEventListener('click', () => {
    state.tempHotkey = state.settings.hotkey;
    updateSettingsUI();
    settingsModal.classList.remove('hidden');
  });
  
  const closeSettingsModal = () => {
    stopRecordingHotkey();
    settingsModal.classList.add('hidden');
  };

  btnCloseSettings.addEventListener('click', closeSettingsModal);
  btnCancelSettings.addEventListener('click', closeSettingsModal);

  btnRecordHotkey.addEventListener('click', () => {
    if (state.isRecordingHotkey) {
      stopRecordingHotkey();
    } else {
      startRecordingHotkey();
    }
  });

  window.addEventListener('keydown', (e) => {
    if (state.isRecordingHotkey) {
      const accelerator = getAcceleratorFromEvent(e);
      if (accelerator) {
        stopRecordingHotkey(accelerator);
      }
    }
  });

  presetButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      const key = btn.getAttribute('data-key');
      stopRecordingHotkey(key);
    });
  });

  // Tool buttons (Select, Rect, Arrow, Text, Glass)
  if (toolButtons.select) {
    toolButtons.select.addEventListener('click', () => {
      closeAllPopovers();
      setActiveTool('select');
    });
  }

  if (toolButtons.rect) {
    toolButtons.rect.addEventListener('click', () => {
      closeAllPopovers();
      setActiveTool('rect');
    });
  }

  if (toolButtons.arrow) {
    toolButtons.arrow.addEventListener('click', () => {
      closeAllPopovers();
      setActiveTool('arrow');
    });
  }

  // Tool button: Text & Size Popover
  if (toolButtons.text) {
    toolButtons.text.addEventListener('click', (e) => {
      e.stopPropagation();
      const isHidden = textSizePopover.classList.contains('hidden');
      closeAllPopovers();
      setActiveTool('text');
      if (isHidden) {
        textSizePopover.classList.remove('hidden');
      }
    });
  }

  if (inputTextSizeSlider) {
    inputTextSizeSlider.addEventListener('input', (e) => {
      const size = parseInt(e.target.value, 10);
      updateTextSizeUI(size);
      if (state.selectedId) {
        const shape = state.annotations.find(a => a.id === state.selectedId);
        if (shape && shape.type === 'text') {
          pushUndo();
          shape.fontSize = size;
          redrawAnnotations();
          triggerAutoSave();
        }
      }
    });
  }

  if (btnTextSmaller) {
    btnTextSmaller.addEventListener('click', (e) => {
      e.stopPropagation();
      adjustSelectedTextSize(-2);
    });
  }

  if (btnTextLarger) {
    btnTextLarger.addEventListener('click', (e) => {
      e.stopPropagation();
      adjustSelectedTextSize(+2);
    });
  }

  // Tool button: Glass & Blur Popover
  if (toolButtons.glass) {
    toolButtons.glass.addEventListener('click', (e) => {
      e.stopPropagation();
      const isHidden = glassBlurPopover.classList.contains('hidden');
      closeAllPopovers();
      setActiveTool('glass');
      if (isHidden) {
        glassBlurPopover.classList.remove('hidden');
      }
    });
  }

  if (inputBlurStrength) {
    inputBlurStrength.addEventListener('input', (e) => {
      const val = parseInt(e.target.value, 10);
      setBlurStrength(val);
    });
  }

  blurPresetChips.forEach(chip => {
    chip.addEventListener('click', (e) => {
      e.stopPropagation();
      const val = parseInt(chip.getAttribute('data-blur'), 10);
      setBlurStrength(val);
    });
  });

  // Shapes Popover Trigger & Selection
  if (btnShapesToggle) {
    btnShapesToggle.addEventListener('click', (e) => {
      e.stopPropagation();
      const isHidden = shapesPopover.classList.contains('hidden');
      closeAllPopovers();
      if (isHidden) {
        shapesPopover.classList.remove('hidden');
        btnShapesToggle.closest('.shapes-picker-wrapper')?.classList.add('open');
      }
    });
  }

  shapeItemBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.stopPropagation();
      const shape = btn.getAttribute('data-shape');
      setActiveTool(shape);
      closeAllPopovers();
    });
  });

  // Stroke Slider Popover Trigger & Slider
  if (btnStrokeToggle) {
    btnStrokeToggle.addEventListener('click', (e) => {
      e.stopPropagation();
      const isHidden = strokePopover.classList.contains('hidden');
      closeAllPopovers();
      if (isHidden) {
        strokePopover.classList.remove('hidden');
        btnStrokeToggle.classList.add('active');
      }
    });
  }

  if (inputStrokeSlider) {
    inputStrokeSlider.addEventListener('input', (e) => {
      const width = parseInt(e.target.value, 10);
      setActiveStrokeWidth(width);
    });
  }

  // Color Palette: handled by setupColorPalette() in setupAnnotationEngine


  function closeAllPopovers() {
    if (shapesPopover) shapesPopover.classList.add('hidden');
    if (strokePopover) strokePopover.classList.add('hidden');
    if (palettePopover) palettePopover.classList.add('hidden');
    if (textSizePopover) textSizePopover.classList.add('hidden');
    if (glassBlurPopover) glassBlurPopover.classList.add('hidden');
    if (compactToolsPopover) compactToolsPopover.classList.add('hidden');
    btnShapesToggle?.closest('.shapes-picker-wrapper')?.classList.remove('open');
    btnStrokeToggle?.classList.remove('active');
    btnColorPaletteToggle?.classList.remove('active');
    btnCompactToolsToggle?.classList.remove('active');
  }

  document.addEventListener('click', (e) => {
    if (!e.target.closest('.shapes-picker-wrapper') &&
        !e.target.closest('.stroke-picker-wrapper') &&
        !e.target.closest('.color-picker-wrapper') &&
        !e.target.closest('.text-picker-wrapper') &&
        !e.target.closest('.glass-picker-wrapper') &&
        !e.target.closest('.tools-compact-wrapper')) {
      closeAllPopovers();
    }
  });

  // Compact Floating Tools listeners
  compactToolItems.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.stopPropagation();
      const tool = btn.getAttribute('data-tool');
      setActiveTool(tool);
    });
  });

  if (compactInputStroke) {
    compactInputStroke.addEventListener('input', (e) => {
      const width = parseInt(e.target.value, 10);
      setActiveStrokeWidth(width);
    });
  }

  if (compactInputTextSize) {
    compactInputTextSize.addEventListener('input', (e) => {
      const size = parseInt(e.target.value, 10);
      updateTextSizeUI(size);
      if (state.selectedId) {
        const shape = state.annotations.find(a => a.id === state.selectedId);
        if (shape && shape.type === 'text') {
          pushUndo();
          shape.fontSize = size;
          redrawAnnotations();
          triggerAutoSave();
        }
      }
    });
  }

  if (compactInputBlur) {
    compactInputBlur.addEventListener('input', (e) => {
      const val = parseInt(e.target.value, 10);
      setBlurStrength(val);
    });
  }

  if (compactBtnUndo) compactBtnUndo.addEventListener('click', undo);
  if (compactBtnRedo) compactBtnRedo.addEventListener('click', redo);
  if (compactBtnClear) {
    compactBtnClear.addEventListener('click', () => {
      if (state.annotations.length === 0) return;
      pushUndo();
      state.annotations = [];
      state.selectedId = null;
      hideInlineEditor();
      updateContextualToolbar();
      redrawAnnotations();
      triggerAutoSave();
      showToast('Anotações limpas!');
    });
  }

  // Undo / Redo / Clear Annotations
  if (btnUndo) btnUndo.addEventListener('click', undo);
  if (btnRedo) btnRedo.addEventListener('click', redo);
  if (btnClearAnnotations) {
    btnClearAnnotations.addEventListener('click', () => {
      if (state.annotations.length === 0) return;
      pushUndo();
      state.annotations = [];
      state.selectedId = null;
      hideInlineEditor();
      updateContextualToolbar();
      redrawAnnotations();
      triggerAutoSave();
      showToast('Anotações limpas!');
    });
  }

  // Global Keyboard Shortcuts (V, R, A, L, P, H, T, G, Ctrl+Z, Ctrl+Y, Delete, etc.)
  window.addEventListener('keydown', (e) => {
    if (state.isRecordingHotkey) return;
    const isInput = ['INPUT', 'TEXTAREA'].includes(document.activeElement.tagName) || !inlineTextEditor.classList.contains('hidden');

    if (e.key === 'Escape') {
      closeAllPopovers();
      closeSettingsModal();
      closeHelpModal();
      if (state.selectedId) {
        state.selectedId = null;
        updateContextualToolbar();
        redrawAnnotations();
      }
      return;
    }

    if (isInput) return;

    if (e.key === '?' || e.key === 'F1') {
      e.preventDefault();
      helpModal.classList.remove('hidden');
      return;
    }

    if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === 's') {
      e.preventDefault();
      saveActiveImageAs();
      return;
    }

    if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === 'z' && !e.shiftKey) {
      e.preventDefault();
      undo();
      return;
    }

    if (((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === 'y') || ((e.ctrlKey || e.metaKey) && e.shiftKey && e.key.toLowerCase() === 'z')) {
      e.preventDefault();
      redo();
      return;
    }

    if (e.key === 'Delete' || e.key === 'Backspace') {
      if (state.selectedId) {
        e.preventDefault();
        pushUndo();
        state.annotations = state.annotations.filter(a => a.id !== state.selectedId);
        state.selectedId = null;
        updateContextualToolbar();
        redrawAnnotations();
        triggerAutoSave();
        return;
      }
    }

    const key = e.key.toLowerCase();
    if (key === 'v') setActiveTool('select');
    else if (key === 'r') setActiveTool('rect');
    else if (key === 'u') setActiveTool('rounded-rect');
    else if (key === 'c') setActiveTool('circle');
    else if (key === 'a') setActiveTool('arrow');
    else if (key === 'd') setActiveTool('double-arrow');
    else if (key === 'l') setActiveTool('line');
    else if (key === 'n') setActiveTool('step');
    else if (key === 'b') setActiveTool('callout');
    else if (key === 'p') setActiveTool('pen');
    else if (key === 'h') setActiveTool('highlighter');
    else if (key === 't') setActiveTool('text');
    else if (key === 'g') setActiveTool('glass');
  });

  // Settings Modal Tabs
  modalTabBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const targetTabId = btn.getAttribute('data-tab');
      modalTabBtns.forEach(b => b.classList.remove('active'));
      modalTabPanes.forEach(pane => pane.classList.remove('active'));

      btn.classList.add('active');
      const targetPane = document.getElementById(targetTabId);
      if (targetPane) targetPane.classList.add('active');
    });
  });

  // Toggle Switch: Modo Escuro / Modo Claro
  if (toggleDarkMode) {
    toggleDarkMode.addEventListener('change', () => {
      const newTheme = toggleDarkMode.checked ? 'dark' : 'light';
      applyTheme(newTheme);
      showToast(toggleDarkMode.checked ? '🌙 Modo Escuro ativado!' : '☀️ Modo Claro ativado!');
    });
  }

  btnBrowseFolder.addEventListener('click', async () => {
    const res = await window.electronAPI.selectSaveDirectory();
    if (res.success) {
      inputSavePath.value = res.path;
      state.settings.saveDirectory = res.path;
      footerSavePath.textContent = `Salvo em: ${res.path}`;
      showToast('Pasta atualizada com sucesso!');
    }
  });

  btnSaveSettings.addEventListener('click', async () => {
    const updatedSettings = {
      hotkey: state.tempHotkey || state.settings.hotkey,
      saveDirectory: inputSavePath.value,
      autoCopy: toggleAutocopy ? toggleAutocopy.checked : true,
      autoStart: toggleAutostart ? toggleAutostart.checked : true,
      autoCheckUpdates: toggleAutoupdate ? toggleAutoupdate.checked : true,
      theme: (toggleDarkMode && !toggleDarkMode.checked) ? 'light' : 'dark'
    };

    const res = await window.electronAPI.saveSettings(updatedSettings);
    if (res.success) {
      state.settings = res.currentSettings;
      updateSettingsUI();
      closeSettingsModal();
      showToast('Configurações salvas com sucesso!');
    } else {
      showToast(res.message || 'Erro ao registrar atalho.');
    }
  });

  // Help Modal (?) Listeners
  if (btnOpenHelp) {
    btnOpenHelp.addEventListener('click', () => {
      if (helpModal) helpModal.classList.remove('hidden');
    });
  }

  const closeHelpModal = () => {
    if (helpModal) helpModal.classList.add('hidden');
  };

  if (btnCloseHelp) btnCloseHelp.addEventListener('click', closeHelpModal);
  if (btnDismissHelp) btnDismissHelp.addEventListener('click', closeHelpModal);

  // Uninstall App Listeners
  if (btnUninstallApp) {
    btnUninstallApp.addEventListener('click', () => {
      if (modalConfirmUninstall) modalConfirmUninstall.classList.remove('hidden');
    });
  }

  if (btnCancelUninstall) {
    btnCancelUninstall.addEventListener('click', () => {
      if (modalConfirmUninstall) modalConfirmUninstall.classList.add('hidden');
    });
  }

  if (btnConfirmUninstall) {
    btnConfirmUninstall.addEventListener('click', async () => {
      btnConfirmUninstall.disabled = true;
      btnConfirmUninstall.textContent = 'Iniciando...';
      try {
        await window.electronAPI.uninstallApp();
      } catch (err) {
        console.error('Erro ao desinstalar:', err);
        showToast('Erro ao iniciar desinstalador.');
        btnConfirmUninstall.disabled = false;
        btnConfirmUninstall.textContent = 'Sim, Desinstalar';
        if (modalConfirmUninstall) modalConfirmUninstall.classList.add('hidden');
      }
    });
  }
}

// ==========================================================================
// Auto-Updater Controller & Event Handling
// ==========================================================================
async function setupAutoUpdaterUI() {
  try {
    if (window.electronAPI.getAppVersion) {
      const ver = await window.electronAPI.getAppVersion();
      if (spanCurrentAppVersion && ver) {
        spanCurrentAppVersion.textContent = `v${ver}`;
      }
    }
  } catch (err) {
    console.warn('Erro ao obter versão do app:', err);
  }

  // Escuta status enviados pelo processo principal (electron-updater)
  if (window.electronAPI.onUpdaterStatus) {
    window.electronAPI.onUpdaterStatus((statusObj) => {
      handleUpdaterStatus(statusObj);
    });
  }

  // Botão manual de verificar atualizações
  if (btnCheckUpdates) {
    btnCheckUpdates.addEventListener('click', async () => {
      handleUpdaterStatus({ status: 'checking', message: 'Buscando atualizações...' });
      await window.electronAPI.checkForUpdates();
    });
  }

  // Botão de instalar e reiniciar
  if (btnInstallUpdate) {
    btnInstallUpdate.addEventListener('click', () => {
      window.electronAPI.quitAndInstallUpdate();
    });
  }

  // Banner Flutuante Global
  if (gubBtnAction) {
    gubBtnAction.addEventListener('click', () => {
      window.electronAPI.quitAndInstallUpdate();
    });
  }

  if (gubBtnClose) {
    gubBtnClose.addEventListener('click', () => {
      if (globalUpdateBanner) globalUpdateBanner.classList.add('hidden');
    });
  }
}

function formatUpdaterBytes(bytes) {
  if (!bytes || isNaN(bytes) || bytes <= 0) return '0 MB';
  const mb = bytes / (1024 * 1024);
  return `${mb.toFixed(1)} MB`;
}

function formatUpdaterSpeed(bytesPerSec) {
  if (!bytesPerSec || isNaN(bytesPerSec) || bytesPerSec <= 0) return '0 KB/s';
  if (bytesPerSec >= 1024 * 1024) {
    return `${(bytesPerSec / (1024 * 1024)).toFixed(1)} MB/s`;
  }
  return `${Math.round(bytesPerSec / 1024)} KB/s`;
}

function handleUpdaterStatus(statusObj) {
  if (!statusObj) return;

  const { status, info, progress, message, error } = statusObj;

  if (status === 'checking') {
    if (updateStatusBox) updateStatusBox.className = 'update-status-box status-checking';
    if (iconCheckUpdates) iconCheckUpdates.classList.add('spinning');
    if (checkUpdatesText) checkUpdatesText.textContent = 'Verificando...';
    if (btnCheckUpdates) btnCheckUpdates.disabled = true;
    if (updateStatusTitle) updateStatusTitle.textContent = 'Buscando atualizações...';
    if (updateStatusDesc) updateStatusDesc.textContent = 'Verificando se há novas versões disponíveis...';
    if (updateProgressContainer) updateProgressContainer.classList.add('hidden');
    if (updateReleaseNotes) updateReleaseNotes.classList.add('hidden');
  } else if (status === 'available') {
    if (updateStatusBox) updateStatusBox.className = 'update-status-box status-available';
    if (iconCheckUpdates) iconCheckUpdates.classList.remove('spinning');
    if (btnCheckUpdates) {
      btnCheckUpdates.disabled = false;
      btnCheckUpdates.classList.add('hidden');
    }
    const newVer = info ? info.version : '';
    if (updateStatusTitle) updateStatusTitle.textContent = `Nova versão disponível: v${newVer}!`;
    if (updateStatusDesc) updateStatusDesc.textContent = 'Baixando os arquivos da nova versão em segundo plano...';
    if (updateProgressContainer) updateProgressContainer.classList.remove('hidden');

    if (info && info.releaseNotes && updateReleaseNotes && updateReleaseNotesBody) {
      updateReleaseNotesBody.textContent = typeof info.releaseNotes === 'string' ? info.releaseNotes : JSON.stringify(info.releaseNotes);
      updateReleaseNotes.classList.remove('hidden');
    }
  } else if (status === 'downloading') {
    if (updateStatusBox) updateStatusBox.className = 'update-status-box status-downloading';
    if (updateProgressContainer) updateProgressContainer.classList.remove('hidden');
    const pct = progress ? progress.percent : 0;
    if (updateProgressBar) updateProgressBar.style.width = `${pct}%`;
    if (updateProgressPercent) updateProgressPercent.textContent = `${pct}%`;
    if (updateStatusTitle) updateStatusTitle.textContent = `Baixando atualização (${pct}%)...`;
    if (updateStatusDesc) updateStatusDesc.textContent = `Download em segundo plano. O app avisará quando estiver pronto para instalar.`;

    if (progress) {
      if (updateProgressTransferred) {
        updateProgressTransferred.textContent = `${formatUpdaterBytes(progress.transferred)} / ${formatUpdaterBytes(progress.total)}`;
      }
      if (updateProgressSpeed) {
        updateProgressSpeed.textContent = formatUpdaterSpeed(progress.bytesPerSecond);
      }
    }
  } else if (status === 'downloaded') {
    if (updateStatusBox) updateStatusBox.className = 'update-status-box status-downloaded';
    if (iconCheckUpdates) iconCheckUpdates.classList.remove('spinning');
    if (updateProgressContainer) updateProgressContainer.classList.add('hidden');
    if (btnCheckUpdates) btnCheckUpdates.classList.add('hidden');
    if (btnInstallUpdate) btnInstallUpdate.classList.remove('hidden');

    const newVer = info ? info.version : '';
    if (updateStatusTitle) updateStatusTitle.textContent = `Versão v${newVer} pronta para instalar!`;
    if (updateStatusDesc) updateStatusDesc.textContent = 'Clique no botão abaixo para reiniciar e aplicar a atualização automaticamente.';

    // Exibe banner flutuante global
    if (globalUpdateBanner) {
      if (gubTitle) gubTitle.textContent = `Atualização v${newVer} Pronta!`;
      if (gubDesc) gubDesc.textContent = `O download foi concluído. Clique para reiniciar.`;
      globalUpdateBanner.classList.remove('hidden');
    }
  } else if (status === 'not-available') {
    if (updateStatusBox) updateStatusBox.className = 'update-status-box status-idle';
    if (iconCheckUpdates) iconCheckUpdates.classList.remove('spinning');
    if (checkUpdatesText) checkUpdatesText.textContent = 'Verificar Atualizações';
    if (btnCheckUpdates) {
      btnCheckUpdates.disabled = false;
      btnCheckUpdates.classList.remove('hidden');
    }
    if (btnInstallUpdate) btnInstallUpdate.classList.add('hidden');
    if (updateProgressContainer) updateProgressContainer.classList.add('hidden');
    if (updateReleaseNotes) updateReleaseNotes.classList.add('hidden');
    if (updateStatusTitle) updateStatusTitle.textContent = 'Você já está na versão mais recente!';
    if (updateStatusDesc) updateStatusDesc.textContent = message || 'Não há atualizações pendentes no momento.';
  } else if (status === 'error') {
    if (updateStatusBox) updateStatusBox.className = 'update-status-box status-error';
    if (iconCheckUpdates) iconCheckUpdates.classList.remove('spinning');
    if (checkUpdatesText) checkUpdatesText.textContent = 'Verificar Novamente';
    if (btnCheckUpdates) {
      btnCheckUpdates.disabled = false;
      btnCheckUpdates.classList.remove('hidden');
    }
    if (btnInstallUpdate) btnInstallUpdate.classList.add('hidden');
    if (updateProgressContainer) updateProgressContainer.classList.add('hidden');
    if (updateReleaseNotes) updateReleaseNotes.classList.add('hidden');
    if (updateStatusTitle) updateStatusTitle.textContent = 'Verificação de Atualização';
    if (updateStatusDesc) updateStatusDesc.textContent = message || error || 'Não foi possível verificar atualizações no momento.';
  }
}

// ==========================================================================
// Utilities
// ==========================================================================
let toastTimer = null;
function showToast(message) {
  toastMessage.textContent = message;
  toast.classList.remove('hidden');
  
  if (toastTimer) clearTimeout(toastTimer);
  toastTimer = setTimeout(() => {
    toast.classList.add('hidden');
  }, 3500);
}

function escapeHtml(str) {
  return str.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
}

function formatTime(isoStr) {
  if (!isoStr) return '';
  const d = new Date(isoStr);
  return `${String(d.getHours()).padStart(2, '0')}:${String(d.getMinutes()).padStart(2, '0')}`;
}

function formatBytes(bytes) {
  if (!bytes || bytes === 0) return '0 B';
  const k = 1024;
  const sizes = ['B', 'KB', 'MB', 'GB'];
  const i = Math.floor(Math.log(bytes) / Math.log(k));
  return parseFloat((bytes / Math.pow(k, i)).toFixed(1)) + ' ' + sizes[i];
}

// Start app
document.addEventListener('DOMContentLoaded', initApp);
