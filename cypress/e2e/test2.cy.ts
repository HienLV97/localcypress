Cypress.config('baseUrl', 'https://kamora:iamafriend@writersperhour.dev/')
describe("User Sign-up and Login", () => {
  beforeEach(() => {
    cy.viewport(1440, 900)
    // cy.visit("/")

  })

  it("should allow a visitor to sign-up, login, and logout", () => {
    /*  cy.visit("https://www.duolingo.com")
     cy.screenshot('a') */
    cy.visit("https://writersperhour.com/")
    cy.wait(4000)
    //  cy.screenshot('a1')
   
  })
})
