const fs = require('fs');
const path = require('path');
const { app } = require('electron');

class Store {
  constructor() {
    this.userDataPath = app.getPath('userData');
    this.configPath = path.join(this.userDataPath, 'settings.json');
    this.historyPath = path.join(this.userDataPath, 'history.json');
    
    // Default screenshots directory: User's Pictures/DeerPrint
    const defaultPicturesDir = path.join(app.getPath('pictures'), 'DeerPrint');
    
    this.defaultSettings = {
      hotkey: 'F10', // Default trigger key (supports F10, PrintScreen, Ctrl+Shift+S, etc.)
      saveDirectory: defaultPicturesDir,
      autoCopy: true,
      autoStart: true,
      autoCheckUpdates: true,
      playSound: true,
      openEditorOnCapture: true,
      theme: 'dark',
      buttonStyle: 'sharp'
    };

    this.settings = this.loadSettings();
    this.history = this.loadHistory();
    this.ensureDirectory(this.settings.saveDirectory);
  }

  ensureDirectory(dirPath) {
    try {
      if (!fs.existsSync(dirPath)) {
        fs.mkdirSync(dirPath, { recursive: true });
      }
    } catch (err) {
      console.error('Erro ao criar diretório de salvamento:', err);
    }
  }

  loadSettings() {
    try {
      if (fs.existsSync(this.configPath)) {
        const raw = fs.readFileSync(this.configPath, 'utf8');
        return { ...this.defaultSettings, ...JSON.parse(raw) };
      }
    } catch (err) {
      console.error('Erro ao ler settings.json, usando padrões:', err);
    }
    return { ...this.defaultSettings };
  }

  saveSettings(newSettings) {
    this.settings = { ...this.settings, ...newSettings };
    this.ensureDirectory(this.settings.saveDirectory);
    try {
      fs.writeFileSync(this.configPath, JSON.stringify(this.settings, null, 2), 'utf8');
      return true;
    } catch (err) {
      console.error('Erro ao salvar settings.json:', err);
      return false;
    }
  }

  getSettings() {
    return this.settings;
  }

  loadHistory() {
    try {
      if (fs.existsSync(this.historyPath)) {
        const raw = fs.readFileSync(this.historyPath, 'utf8');
        return JSON.parse(raw);
      }
    } catch (err) {
      console.error('Erro ao ler history.json:', err);
    }
    return [];
  }

  addHistoryEntry(entry) {
    // entry: { id, filePath, fileName, width, height, timestamp, fileSize }
    this.history.unshift(entry);
    // Limit to latest 100 entries
    if (this.history.length > 100) {
      this.history = this.history.slice(0, 100);
    }
    try {
      fs.writeFileSync(this.historyPath, JSON.stringify(this.history, null, 2), 'utf8');
    } catch (err) {
      console.error('Erro ao salvar history.json:', err);
    }
  }

  updateHistoryEntry(filePath, updates) {
    const idx = this.history.findIndex(item => item.filePath === filePath);
    if (idx !== -1) {
      this.history[idx] = { ...this.history[idx], ...updates };
      try {
        fs.writeFileSync(this.historyPath, JSON.stringify(this.history, null, 2), 'utf8');
      } catch (err) {
        console.error('Erro ao atualizar item do histórico:', err);
      }
    }
  }

  getHistory() {
    // Filter out items that no longer exist on disk
    this.history = this.history.filter(item => fs.existsSync(item.filePath));
    return this.history;
  }

  deleteHistoryEntry(id) {
    this.history = this.history.filter(item => item.id !== id);
    try {
      fs.writeFileSync(this.historyPath, JSON.stringify(this.history, null, 2), 'utf8');
    } catch (err) {
      console.error('Erro ao atualizar history.json após deleção:', err);
    }
  }
}

module.exports = Store;
