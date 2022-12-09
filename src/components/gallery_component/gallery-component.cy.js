/* eslint-disable no-undef */
import Gallery from "./gallery-component";

describe("Demo mounting component testing", function () {
  it("Mounts the gallery component and takes a screenshot", function () {
    cy.mount(<Gallery />);
    cy.get("h2").should("contains.text", "Gallery Component");
    cy.percySnapshot();
  });
});
