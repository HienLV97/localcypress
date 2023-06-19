import cypress from "cypress"
import { Children } from "react"
//var devurl = "https://zingnews.vn/"
describe("home page", () => {
  it('use requests to navigation bar links', () => {
    cy.visit('/')
    cy.get("h1").contains("Test")
    // cy.get('[data-test="email-input"]').type("abc.def@mail")
    cy.get('[data-test="email-input"]').then(($input) => {
      cy.wrap($input).type("hien@gmail.com")
    })
    /*  cy.getDatatest("submit-button").then(($btn) => {
       cy.wrap($btn).click().should("contain","Subscribe")
     })
  */
    cy.getDatatest("submit-button")
      .as("Sub")
    cy.get("@Sub")
      .click()
  })
})