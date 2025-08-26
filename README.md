# Site Romântico - Cronômetro do Amor

Este é um site romântico com cronômetro analógico que mostra o tempo de namoro.

## Como personalizar:

### 1. Alterar a data de início do namoro:
- Abra o arquivo `script.js`
- Na linha 3, altere a data no seguinte formato:
  ```javascript
  const startDate = new Date(ANO, MÊS-1, DIA, HORA, MINUTO, SEGUNDO);
  ```
  Exemplo: Para 15 de fevereiro de 2023 às 20:30:
  ```javascript
  const startDate = new Date(2023, 1, 15, 20, 30, 0);
  ```
  **Importante:** O mês deve ser o número do mês menos 1 (Janeiro = 0, Fevereiro = 1, etc.)

### 2. Trocar as fotos:
- Substitua os arquivos `placeholder1.jpg`, `placeholder2.jpg` e `placeholder3.jpg` pelas suas fotos
- Mantenha os mesmos nomes dos arquivos ou altere as referências no arquivo `index.html`

### 3. Personalizar cores:
- Abra o arquivo `style.css`
- Altere as cores nas variáveis CSS conforme desejado
- As principais cores estão definidas em:
  - `#c62828` - Vermelho escuro (cabeçalho e rodapé)
  - `#ef9a9a` - Vermelho médio (seção do cronômetro)
  - `#ffcdd2` - Vermelho claro (seção das fotos)
  - `#ffebee` - Rosa muito claro (fundo da página)

## Arquivos inclusos:
- `index.html` - Estrutura principal do site
- `style.css` - Estilos e design
- `script.js` - Lógica do cronômetro
- `placeholder1.jpg`, `placeholder2.jpg`, `placeholder3.jpg` - Imagens de exemplo
- `README.md` - Este arquivo de instruções

## Como usar:
1. Abra o arquivo `index.html` em qualquer navegador web
2. O cronômetro começará a funcionar automaticamente
3. O relógio analógico mostra a hora atual
4. O texto abaixo mostra o tempo total de namoro

Aproveite seu site romântico! ❤️

