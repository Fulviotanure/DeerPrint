# Changelog - DeerPrint 🦌

Todas as mudanças e lançamentos notáveis do **DeerPrint** são documentados neste arquivo.

---

## [3.0.4] - 2026-08-29
### 🎯 Precisão de Desenho, F10 Padrão & Refinamentos Visuais
- **Regra de Não-Interferência ao Desenhar**: Clicar sobre formas existentes (como retângulos, textos ou desfoques) enquanto uma ferramenta ativa estiver selecionada (como seta, linha, caneta ou retângulo) agora inicia o desenho a partir daquele ponto exato sem mover nem selecionar indevidamente o objeto de baixo.
- **Interação Exclusiva por Ferramenta**: O redimensionamento e movimento de anotações só ocorre quando a ferramenta de **Seleção (Cursor)** estiver ativa ou quando a ferramenta ativa for exatamente do mesmo tipo da forma.
- **Atalho Padrão F10**: Tecla de disparo padrão de novas capturas atualizada para **F10** (com suporte contínuo a personalização e atalhos rápidos).
- **Indicador de Atalho no Rodapé**: Adicionado badge dinâmico no rodapé da janela exibindo a tecla configurada para disparar prints.
- **Botão "Remover da Tela" Material Design 3**: Botão redesenhado com cantos arredondados, elevação sutil e paleta **Vermelho Pastel** (Coral suave `#ffb4ab` sobre superfície escura acolhedora).
- **Nome da Aparência Atualizado**: Atualizado de "Obsidian Studio" para **"🌙 Modo Escuro (Sylvan Core Dark)"** e **"☀️ Modo Claro (Alpine Mist)"**.
- **Alças de Redimensionamento Harmonizadas**: Linhas tracejadas e alças de ajuste atualizadas para o padrão *Pale Moss* e *Forest Green*.

## [3.0.3] - 2026-08-29
### 🌿 Harmonização Visual Sylvan Core no Painel de Atualizações
- **Remoção de Tons Azuis Legados**: Substituição de todos os contornos e fundos azuis do painel de atualizações pela paleta oficial Sylvan Core (Midnight Forest `#181b18`, Pale Moss `#d4e9c2` e Forest Green `#394b2e`).
- **Exibição Limpa do Ícone**: Remoção do fundo/glow azul em torno do logotipo na aba de atualizações, integrando o novo emblema perfeitamente com o design da interface.
- **Notificações & Badges de Status Reestilizados**: Indicadores de status (pronto, verificando, baixando e atualizado) harmonizados com as cores orgânicas do DeerPrint.

## [3.0.2] - 2026-08-29
### 🎨 Novo Logotipo & Ícone de Alto Contraste
- **Novo Emblema Oficial Sylvan**: Aplicação do novo logotipo com badge sólido verde floresta, cantos de recorte brancos nítidos e cervo imponente em destaque.
- **Ícones Renovados para Desktop**: Geração de `icon.ico`, `icon.png` e `tray-icon.png` com contraste aprimorado para máxima visibilidade na Área de Trabalho e barra de tarefas do Windows.

## [3.0.1] - 2026-08-29
### 🧹 Desinstalação Automática da Versão Legada (ScreenshotMark)
- **Desinstalação Silenciosa do ScreenshotMark**: Durante a instalação ou inicialização do DeerPrint, o desinstalador antigo é executado automaticamente em segundo plano.
- **Limpeza de Atalhos**: Remoção automática de atalhos e diretórios antigos do ScreenshotMark na Área de Trabalho e Menu Iniciar.
- **Instalador NSIS Aprimorado**: Inclusão de rotina `build/installer.nsh` para desinstalação e limpeza de chaves do registro do Windows.

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
