/// <reference types="cypress" />
Cypress.Commands.add("getByData", (selector) => {
  return cy.get(`[data-test=${selector}]`)
})
Cypress.Commands.add("getlink", (selector) => {
  return cy.get(`[link=${selector}]`)
})
Cypress.Commands.add("getDatatest", (selector) => {
  return cy.get(`[data-test=${selector}]`)
})
Cypress.Commands.add("getClass", (selector) => {
  return cy.get(`[class=${selector}]`)
})


// Cypress.Commands.add('clickLink', (link) => {
//   cy.get('a').contains(link).click()
// })

