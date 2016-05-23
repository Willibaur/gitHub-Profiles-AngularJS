githubUserSearch.factory('Search', ['$http', function($http) {

  var queryUrl      = 'https://api.github.com/search/users';
  var apiUrl        = 'https://api.github.com/users';
  var access_token  = '94cd83ca2460358470f86cecd23620b61f242a36';

  return {
    query: function(searchTerm) {
      return $http({
        url: queryUrl,
        method: 'GET',
        params: {
          'q': searchTerm,
          'access_token': access_token
        }
      });
    },
    getUser: function(username) {
      return $http({
        url: apiUrl + '/' + username,
        method: 'GET',
        params: {
          'access_token': access_token
        }
      });
    },
    getRepos: function(username) {
      return $http({
        url: apiUrl + '/' + username + '/repos',
        method: 'GET',
        params: {
          'access_token': access_token
        }
      });
    }
  };
}]);
