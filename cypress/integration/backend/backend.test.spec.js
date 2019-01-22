describe('Backend test', function () {
  it('should return simple first endpoint data', function () {
    cy.visit('https://tosad2018.herokuapp.com/');
    cy.contains('test test thies is an endpoint');
  });
});
