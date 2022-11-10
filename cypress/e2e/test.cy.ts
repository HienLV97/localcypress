import cypress from "cypress"
import { Children } from "react"
//var devurl = "https://zingnews.vn/"
describe("home page", () => {
  it("the h1 contains the correct text", () => {
    cy.visit("/signin",{
        auth: {
            username: 'kamora',
            password: 'iamafriend'
          }
    })
      cy.viewport(1440, 786)
      cy.get('.cb-enable').click()
    cy.get('layout-form__input w-100').type("abc")
    })
  })