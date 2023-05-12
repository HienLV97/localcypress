import cypress from "cypress"
import { Children } from "react"
//var devurl = "https://zingnews.vn/"
describe("home page", () => {
  it('use requests to navigation bar links', () => {
    const pages = ['blog', 'about', 'contacts']
    cy.visit('/')
    pages.forEach(page => {
      cy
        .contains(page)
        .then((link) => {
          cy.request(link.prop('href'))
        })

    })

  });
})