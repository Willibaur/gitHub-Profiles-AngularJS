githubUserSearch.controller('GitUserSearchController', [function() {

  var self = this;

  self.doSearch = function() {
    self.searchResult = {
      "items": [
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
      ]
    };
  };
}]);
