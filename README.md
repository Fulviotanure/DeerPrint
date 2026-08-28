# ScreenshotMark 📸

Aplicativo desktop moderno e veloz para captura de tela com atalho configurável, seleção de área intuitiva, cópia instantânea para a área de transferência, visualização no editor e salvamento automático em disco.

---

## ✨ Recursos

- ⌨️ **Atalho Global Configurável**: Defina qualquer tecla ou combinação no modal de configurações (`PrintScreen`, `F10`, `F9`, `Ctrl+Shift+S`, `Alt+Shift+S`, etc.).
- 📐 **Seleção de Área com Overlay**:
  - Arraste com o mouse para selecionar qualquer retângulo da tela.
  - Lente de aumento (Magnifier Loupe) com zoom e coordenadas em tempo real.
  - Duplo clique ou `Enter` para capturar a tela inteira.
  - Pressione `Esc` para cancelar a qualquer momento.
- 📋 **Cópia Instantânea para Área de Transferência**: O screenshot capturado é imediatamente copiado para a área de transferência do Windows (`Ctrl+V` em qualquer aplicativo).
- 💾 **Salvamento Automático em Pasta Local**: Cada captura é salva automaticamente em formato `.png` com carimbo de data e hora (ex: `screenshot_2026-08-24_15-30-00.png`).
- 🖼️ **Editor Visual Moderno**:
  - Cada novo screenshot substitui a imagem no centro do editor.
  - Zoom interativo (Fit to screen, 100%, Zoom In/Out, Ctrl + Scroll).
  - Barra de status com dimensões em pixels, tamanho do arquivo e caminho de gravação.
- 🗂️ **Gaveta de Histórico de Capturas**:
  - Painel retrátil com miniaturas de todas as capturas salvas.
  - Clique em qualquer miniatura para recarregar no editor.
  - Ações rápidas: copiar imagem, revelar no Windows Explorer ou excluir arquivo.
- 🛠️ **Arquitetura Modular**: Pronta para acoplamento das próximas ferramentas de edição e anotação (pincel, formas geométricas, texto, setas, etc.).

---

## 🚀 Como Iniciar

1. Certifique-se de que o **Node.js** está instalado.
2. Na pasta do projeto, inicie o app:
   ```bash
   npm start
   ```

---

## ⚙️ Configurações

Clique no ícone de engrenagem no topo direito do app para:
1. **Gravar novo atalho**: Pressione qualquer tecla ou combinação desejada.
2. **Alterar pasta de destino**: Escolha uma pasta personalizada no seu computador.
3. **Ativar/desativar cópia automática** para a área de transferência.
