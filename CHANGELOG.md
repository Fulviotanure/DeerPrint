# Changelog - DeerPrint 🦌

Todas as mudanças e lançamentos notáveis do **DeerPrint** são documentados neste arquivo.

---

## [3.1.0] - 2026-11-09
### 🧩 Área de Trabalho Livre (Mesa de Colagens de Prints)
- **Mesa Livre de Colagem**: Novo modo de espaço de trabalho livre e expansivo com navegação panorâmica (Pan) e zoom infinito de 10% a 500% para criação e composição de colagens com múltiplos prints.
- **Drag & Drop do Histórico para o Centro**: Arraste qualquer captura diretamente da gaveta lateral direita para o centro da mesa. O print é posicionado no ponto exato onde foi solto.
- **Redimensionamento Preciso ("Diminuir e Aumentar")**: Alças em 8 direções nos cantos e bordas com preservação proporcional de aspecto em tempo real e etiqueta de dimensões milimétricas.
- **Manipulação Completa de Elementos**: Movimentação livre, ordenação de camadas (trazer para frente / enviar para trás), rotação de 90° e duplicação rápida (`Ctrl+D`).
- **Colar da Área de Transferência (`Ctrl+V`)**: Suporte instantâneo para colar prints e imagens copiadas diretamente para a mesa de colagem.
- **Salvar como Novo Arquivo**: Botão "Salvar Novo Arquivo" em destaque com brilho neon que compõe a colagem em alta resolução, salva automaticamente na pasta de prints do DeerPrint, adiciona no topo do histórico e copia imediatamente para a área de transferência do Windows.
- **Opções de Fundo da Mesa**: Alternância rápida entre Grade Escura com pontos sutis, Transparente (PNG sem fundo), Escuro Sólido, Claro/Branco e Gradiente Studio.
- **Organização Automática**: Disposição em Grade Uniforme, Fileira Horizontal ou Coluna Vertical com 1 clique.

## [3.0.8] - 2026-09-04
### 🎯 Precisão de Desenho Livre & Posicionamento Exato do Texto
- **Desenho Livre Sem Interferência**: Ferramentas de desenho (Seta, Retângulo, Caneta, Círculo, etc.) agora iniciam o desenho imediatamente a partir do ponto clicado, sem selecionar nem arrastar objetos existentes por acidente ao iniciar perto de uma seta ou quadrado.
- **Itens Ativos para Edição & Desseleção Inteligente**: O elemento recém-desenhado ou selecionado permanece ativo com suas alças visíveis para troca imediata de cor, espessura ou exclusão com `Delete`, até que o usuário clique fora no vazio para desselecionar ou comece um novo desenho com clique e arraste.
- **Movimentação e Redimensionamento Exclusivos no Modo Seleção**: Apenas a ferramenta de Seleção (`V` / `tool-select`) é responsável por selecionar, mover e redimensionar elementos existentes.
- **Alinhamento e Posicionamento Perfeito da Caixa de Texto Livre**: Sincronização 1:1 entre as dimensões do wrapper e a resolução nativa da imagem com `flex-shrink: 0`, eliminando qualquer deslocamento da caixa de edição em qualquer nível de zoom ou proporção de tela.
- **Edição Direta de Texto**: Clicar em um texto existente com a ferramenta de Texto ativa abre o editor imediatamente para edição.

## [3.0.7] - 2026-08-31
### 🖥️ Captura em Telas Multi-Monitor & Suporte a Multilinhas no Texto
- **Captura Precisa em Notebooks & Multi-Monitor**: Correção de escala DPI e coordenadas de tela em configurações com múltiplos monitores e notebooks de alta resolução.
- **Texto Multilinha**: Suporte a quebras de linha com Enter/Shift+Enter no editor de texto e renderização precisa de múltiplas linhas no canvas.
### ⚡ Inicialização Instantânea & Execução Silenciosa na Bandeja (System Tray)
- **Lazy Window Creation no Boot**: O DeerPrint agora inicializa instantaneamente no boot do Windows sem criar a janela pesada Chromium na memória, eliminando a lentidão na inicialização do sistema e reduzindo o consumo inicial de memória para ~30MB.
- **Bandeja 100% Silenciosa**: Ao ligar o computador ou iniciar com a flag `--hidden`, o aplicativo permanece exclusivamente na área de notificação (System Tray) sem abrir nem minimizar qualquer janela na barra de tarefas.
- **Proteção do Evento `second-instance`**: Instâncias secundárias disparadas pelo sistema operacional não forçam mais a abertura indevida da janela principal.
- **Limpeza Automática do Registro do Windows**: Remoção de entradas legadas e de desenvolvimento (`electron.app.ScreenshotMark` e `electron.app.Electron`) da chave de inicialização `HKCU\Software\Microsoft\Windows\CurrentVersion\Run`.
- **Desacoplamento do Auto-Updater**: O serviço de atualizações opera normalmente em segundo plano sem exigir a janela aberta e respeita um intervalo de 12 segundos pós-boot para não disputar I/O e CPU com a inicialização do Windows.

## [3.0.5] - 2026-08-29
### 🌿 Harmonização Visual do Balão de Notificação & Limpeza da Aba de Atualizações
- **Redesign Sylvan Core do Balão de Notificação**: Substituição de todos os contornos e fundos azul-ciano do balão flutuante (`global-update-banner`) pelo design oficial *Midnight Forest* (`#181b18`) e *Pale Moss* (`#d4e9c2`).
- **Botão Reiniciar Padronizado**: Substituído o botão branco com emoji pelo botão primário oficial Sylvan Core com ícone SVG de reinicialização e tipografia refinada.
- **Remoção do Banner de Aviso Radical**: Limpeza da aba de atualizações, removendo a caixa de texto de transição de marca para um visual limpo e minimalista.
- **Mensagens de Status Simplificadas**: Mensagens de verificação diretas ("Buscando atualizações..." e "Verificando se há novas versões disponíveis...").
- **Badges e Ícones Orgânicos**: Ícone de download e tag "NOVA ATUALIZAÇÃO" reestilizados em tons suaves de verde musgo.

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
