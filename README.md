# Descrição

Projeto responsável por elaborar uma suíte de testes para aplicação pré-fornecida de Feeds RSS utilizando a ferramenta Jasmine. Submetido como segundo projeto ao Nano Degree de Front End Avançado da Udacity.

# Como executar

Clonar o projeto em sua máquina e abrir o arquivo index.html. Nele, será possível ter uma visão da aplicação e dos testes aos quais ela está sendo submetida.

O código da aplicação está app.js

O arquivo /jasmine/spec/feedreader.js contém os testes aos quais a aplicação está sendo submetida.


# Passos para elaboração do projeto

Para a realização deste projeto, os seguintes passos foram seguidos:

1. Faça o curso de testes em JavaScript
2. Baixe os recursos necessários ao projeto.
3. Analise a funcionalidade da aplicação em seu navegador.
4. Explore o HTML (./index.html), CSS (./css/style.css) e JavaScript (./js/app.js) da aplicação para entender como ela funciona.
5. Explore o arquivo de especificações do Jasmine, em ./jasmine/spec/feedreader.js, e analise sua documentação.
6. Edite a variável allFeeds, em ./js/app.js, para fazer o teste fornecido falhar e ver como o Jasmine visualiza essa falha em sua aplicação.
7. Retorne a variável allFeeds para um estado de passagem.
8. Elabore um teste que faça loop em cada feed no objeto allFeeds e garanta que ele tenha uma URL definida e não esteja vazia.
9. Elabore um teste que faça loop em cada feed no objeto allFeeds, e garanta que ele tenha um nome definido e não esteja vazio.
10.  Elabore uma nova suíte de testes, denominada "O menu".
11. Elabore um teste que garanta que o elemento de menu permaneça oculto por padrão. Você precisará analisar o HTML e o CSS para determinar como ocultaremos/mostraremos o elemento de menu.
12. Elabore um teste que garanta que o menu altere a visibilidade quando alguém clica no item de menu. Esse teste deve ter duas expectativas: o menu deve ser exibido quando alguém clica nele e ocultado quando mais um clique é feito.
13. Elabore uma suíte de testes denominada "Entradas iniciais".
14. Elabore um teste que garanta que, quando a função loadFeed for chamada e concluir seu trabalho, exista pelo menos um elemento .entry no contêiner .feed.
15. Elabore uma nova suíte de testes, denominada "Nova seleção de feed".
16. Elabore um teste que garanta que, quando um novo feed for carregado pela função loadFeed, o conteúdo realmente mude.
17. Nenhum teste deve depender dos resultados de outro.
18. Callbacks devem ser usados para garantir que feeds sejam carregados antes de serem testados.
19. Implemente a resolução de erros para variáveis não definidas e o acesso de array fora do limite.
20. Ao terminar - todos os seus testes devem ser aprovados.

# Feed-Reader-Testing
