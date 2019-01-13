/* feedreader.js
 *
 * Este é o aqruivo spec que o Jasmine irá ler
 * e contem todos os testes que serão rodados na aplicação.
 */

$(
    (function() {
      /* Essa suíte testa a variável allFeeds da aplicação
       */
      describe("RSS Feeds", function() {
        /* testa se a variável allFeeds está definida e não vazia
         */
  
        it("Estão definidos", function() {
          expect(allFeeds).toBeDefined();
          expect(allFeeds.length).not.toBe(0);
        });
  
        /* testa o se o atributo url não está vazio em cada feed.
         */
  
        it("URL definido e não vazio", function() {
          for (let i = 0; i < allFeeds.length; i++) {
            expect(allFeeds[i].url).toBeDefined();
            expect(allFeeds[i].url.length).not.toBe(0);
          }
        });
  
        /* testa o se o atributo name não está vazio em cada feed.
         */
  
        it("Name definido e não vazio", function() {
          for (let i = 0; i < allFeeds.length; i++) {
            expect(allFeeds[i].name).toBeDefined();
            expect(allFeeds[i].name.length).not.toBe(0);
          }
        });
      });
  
      /* Suíte de testes sobre o menu da aplicação */
      describe("O menu", function() {
        /* Testa se existe a classe menu-hidden dentro da tag body
         */
  
        it("Menu está escondido", function() {
          expect($("body").hasClass("menu-hidden")).toEqual(true);
        });
  
        /* Checa se a visibilidade do menu é alterada ao clicar no ícone
         * que o representa
         */
  
        it("Menu altera visibilidade quando clicado", function() {
          $(".menu-icon-link").trigger("click");
          expect($("body").hasClass("menu-hidden")).toEqual(false);
          $(".menu-icon-link").trigger("click");
          expect($("body").hasClass("menu-hidden")).toEqual(true);
        });
      });
  
      /* Suíte para as Entradas iniciais */
  
      describe("Entradas iniciais", function() {
        /* Assegura que a função loadFeed é chamada e termina seu trabalho.
         * verifica se há um elemento .entry
         */
        beforeEach(function(done) {
          loadFeed(0, done);
        });
        it("Feed tem pelo menos um elemento .entry", function() {
          expect($(".feed .entry").length).not.toBe(0);
        });
      });
  
      /* Suíte para testes sobre Nova seleção de feed" */
      
      describe("Nova seleção de feed", function() {
        let initalContent, newContent;
  
        /* Testa se a mudança de conteúdo no carregamento de um novo feed
         *
         */
  
        beforeEach(function(done) {
          loadFeed(0, function() {
            initalContent = $(".feed .entry").contents();
            loadFeed(1, function() {
              newContent = $(".feed .entry").contents();
              done();
            });
          });
        });
        it("Carregando novo feed", function() {
          expect(initalContent).not.toBe(newContent);
        });
      });
    })()
  );
  