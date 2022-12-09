/* eslint-disable no-undef */
// describe("Full Page Screenshot demo", () => {
//   it("Takes a screenshot", () => {
//     cy.visit("https://www.bbc.co.uk/news");
//     expect(true).to.equal(true);
//     cy.percySnapshot();
//   });
// });

describe("Integration test with visual testing", function () {
  it("Loads the homepage", function () {
    // Load the page or perform any other interactions with the app.
    cy.visit("https://www.bbc.co.uk/news");

    // Take a snapshot for visual diffing
    cy.percySnapshot();
  });
});
