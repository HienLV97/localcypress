
import cypress from "cypress"
import { beforeEach } from "mocha"
describe('Test Login with authenticated token', () => {
  beforeEach(() => {
    cy.viewport(1440, 819)
  })
  it("homepage", () => {
    cy.visit('/')
  })
  it("sign in", () => {
    cy.visit('/signin')
  })  
  it("signup", () => {
    cy.visit('/signup')
  })
    it('should not have 404 error', () => {
      cy.get('a').each(($el) => {
        const link = $el.attr('href')
        if (link && !Cypress.dom.isStubbed(link)) {
          cy.request(link).its('status').should('not.equal', 404)
        }
      })
  })
})