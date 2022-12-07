import Gallery from "./gallery-component";

it("uses custom text for the button label", () => {
  cy.mount(<Gallery />);
  cy.get("h2").should("contains.text", "Gallery Component");
  cy.percySnapshot();
});
