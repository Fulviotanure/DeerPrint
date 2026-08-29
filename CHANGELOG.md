# Changelog - DeerPrint 🦌

Todas as mudanças e lançamentos notáveis do **DeerPrint** são documentados neste arquivo.

---

## [3.0.0] - 2026-08-29
### 🦌 Grande Lançamento DeerPrint v3.0.0 (Nova Marca & Ícones Renovados)
- **Ícones Oficiais Renovados**:
  - Geração de novo `icon.ico` multi-resolução para Windows (16x16 até 256x256) aplicado ao executável, atalho na área de trabalho e instalador.
  - Ícone de alta definição `icon.png` (1024x1024) com proporções equilibradas e fundo transparente.
  - Ícone da bandeja de notificações (`tray-icon.png`) renovado e otimizado para o sistema de tarefas do Windows.
- **Identidade DeerPrint**:
  - Novo aplicativo de captura de alta precisão com suporte a anotações vetoriais, zoom loupe e desfoque tipo vidro fosco (glass blur).
  - Design System Sylvan Core (Dark & Light) com tipografia Manrope & Work Sans.
- **Instalador & Atualização Automática**:
  - Compilação do instalador interativo NSIS `DeerPrint-Setup-1.0.0.exe`.
  - Integração contínua e distribuição automatizada com GitHub Actions e GitHub Releases.
- **Novo Nome Oficial**: Transição completa da identidade do aplicativo para **DeerPrint** (`deerprint`).
- **Novo Logotipo**: Ícone e ilustrações do cervo com retículo de precisão verde-oliva aplicados no cabeçalho e na tela inicial do editor.
- **Design System Sylvan Core**:
  - Implementação dos modos **Sylvan Core Dark** (*Midnight Forest* `#121412`, *Pale Moss* `#d4e9c2` / `#b8cda7`, *Toasted Clay* `#e8bea2`) e **Sylvan Core Light** (*Alpine Mist* `#f9faf6`, *Forest Green* `#394b2e` / `#506344`, *Earthy Brown* `#785841`).
  - Fontes oficiais **Manrope** (Headlines & Títulos) e **Work Sans** (Corpo, UI, Labels e Metadados).
  - Geometria quadrada e estruturada com foco em alta produtividade no desktop.
- **Aviso de Atualização Radical**: Notificação contextual no menu de atualizações e sobre o app.
- **Ajustes de Segurança no DOM**: Proteção contra referências nulas e persistência resiliente com suporte a migração de configurações anteriores.
