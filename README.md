## Bootcamp II - Contador de cliques

## Funcionalidades

- Botão no popup que incrementa um contador.
- Contador persiste entre sessões.
- Serviço de background (service worker) gerenciando o estado.
- Estrutura modular e organizada para facilitar aprendizado e manutenção.

---

## Instalação local

1. Clone ou faça o download do repositório.
2. Abra o Chrome e acesse `chrome://extensions`.
3. Ative o **Modo do desenvolvedor**.
4. Clique em **“Carregar sem compactação”** e selecione a pasta do projeto.
5. O ícone da extensão aparecerá na barra de ferramentas do Chrome.
6. Clique no ícone para abrir o popup e começar a contar cliques.

O contador é armazenado localmente no navegador, então os dados persistem entre reinicializações do Chrome.

## Uso

1. Abra o popup da extensão.
2. Clique no botão **“Clique aqui”**.
3. O total de cliques será atualizado imediatamente.
4. O service worker gerencia os dados e responde a mensagens do popup (`GET_COUNT` e `INCREMENT_COUNT`).

## Estrutura do projeto

1. src -> Diretorio raiz do projeto
2. popup -> Html, lógica e estilização do popup
3. contet
4. background -> service worker responsavel pelo contador
5. assets -> logo em svg
6. styles -> CSS global
7. icons -> icones utilizados
8. docs -> Github Pages

