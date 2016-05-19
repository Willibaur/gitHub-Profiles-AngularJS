describe('factory: Search', function() {
  beforeEach(module('GitUserSearch'));

  var search;
  var httpBackend;

  beforeEach(inject(function(Search) {
    search = Search;
  }));

  beforeEach(inject(function($httpBackend) {
    httpBackend = $httpBackend;
    httpBackend
    .expectGET("https://api.github.com/search/users?access_token=94cd83ca2460358470f86cecd23620b61f242a36&q=gocardless")
    .respond(
      { items: items }
    );
  }));

  afterEach(function() {
    httpBackend.verifyNoOutstandingExpectation();
    httpBackend.verifyNoOutstandingRequest();
  });


  var items = [
    {
      "login": "Willibaur",
      "avatar_url": "https://avatars.githubusercontent.com/u/12820932?v=3",
      "html_url": "https://github.com/Willibaur"
    },
    {
      "login": "gocardless",
      "avatar_url": "https://avatars.githubusercontent.com/u/790629?v=3",
      "html_url": "https://github.com/gocardless"
    }
  ];

  it('returns search results', function() {
    search.query('gocardless')
      .then(function(response) {
        expect(response.data.items).toEqual(items);
      });
    httpBackend.flush();
  });
});
