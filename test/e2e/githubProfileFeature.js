describe('Github Profile finder', function() {

  var searchBox = element(by.model('searchTerm'));
  var searchButton = element(by.className('btn'));

  beforeEach(function() {
    browser.get('http://localhost:8080');
  });

  it('has a title', function() {
    expect(browser.getTitle()).toEqual('Github Profiles');
  });

  it('retrieves profiles', function() {
    searchBox.sendKeys('Williba');
    searchButton.click();

    var profiles = element.all(by.repeater('user in searchCtrl.searchResult.itmes'));
    expect(profiles.getText()).toContain('Willibaur');
  });
});
