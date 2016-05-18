describe('GitUserSearchController', function () {
  beforeEach(module('GitUserSearch'));

  var ctrl;

  beforeEach(inject(function($controller) {
    ctrl = $controller('GitUserSearchController');
  }));

  it('initialises with an empty search result and term', function() {
    expect(ctrl.searchResult).toBeUndefined();
    expect(ctrl.searchTerm).toBeUndefined();
  });

  describe('when searching for a user', function() {

    var httpBackend;

    beforeEach(inject(function($httpBackend) {
      httpBackend = $httpBackend;

      httpBackend
        .when("GET", "https://api.github.com/search/users?q=gocardless")
        .respond(
          { items: items }
        );
    }));

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

    it('displays search results', function() {
      ctrl.searchTerm = 'gocardless';
      ctrl.doSearch();
      httpBackend.flush();
      expect(ctrl.searchResult.items).toEqual(items);
    });
  });
});
