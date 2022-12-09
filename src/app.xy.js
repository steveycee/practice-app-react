/* eslint-disable no-undef */
describe("My First Test", () => {
  it("Does not do much!", () => {
    cy.visit("https://www.bbc.co.uk/news");
    cy.percySnapshot();
    expect(true).to.equal(true);
  });
});
