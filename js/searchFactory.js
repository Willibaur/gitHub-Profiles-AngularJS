githubUserSearch.factory('Search', ['$http', function($http) {

  var queryUrl = 'https://api.github.com/search/users';
  var access_token = '94cd83ca2460358470f86cecd23620b61f242a36';

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
    }
  };
}]);
