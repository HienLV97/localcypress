import cypress from "cypress"
import { Children } from "react"
//var devurl = "https://zingnews.vn/"
describe("home page", () => {
  it('use requests to navigation bar links', () => {
    cy.visit('/')
    cy.get("h1").contains("Test")
    cy.get('[data-test="email-input"]').type("abc.def@mail")
    cy.getDatatest("submit-button").then(($btn) => {
      const cls = $btn.attr("class")
      cy.wrap($btn).click().should("contain","Subscribe")
    })
  })
})