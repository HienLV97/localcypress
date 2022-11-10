import cypress from "cypress"
import { Children } from "react"
describe("home page", () => {
  it("the h1 contains the correct text", () => {
    cy.visit('/signin', {
      auth: {
        username: 'kamora',
        password: 'iamafriend'
      }
    })
      cy.viewport(1440, 786)
    //   cy.get('.cb-enable').click()
    //  // cy.get('.p-service-faq__btn').click()
    //   //cy.get('.p-service-faq__btn')
    //   //cy.get('.p-footer-nav__list > :nth-child(2)').click()
    //   cy.get('.list-unstyled > :nth-child(1) > .d-block').click()
    //   //cy.location("pathname").should("eq","/privacy-policy")
    //   cy.getByData("course=0").eq(3).click()
    })
  })