describe("home page", () => {
  beforeEach(() => {
    cy.viewport(1440, 786)
    cy.visit("http://localhost:3000")
  })

  context("Hero section", () => {
    it("the h1 contains the correct text", () => {
      cy.get("h1").contains("Testing Next.js ")
    })

    it("The feature on the homepage are correct", () => {
      cy.get("dt").eq(0).contains("4 Courses")
      cy.get("dt").eq(1).contains("25+ Lessons")
      cy.get("dt").eq(2).contains("Free and Open Source")
    })
  })
  context('Course section', () =>{
    it('Cousre section: Testing Your First Next.js Application', () => {
      cy.getByData("course-0").find("a").eq(3).click()
      cy.location('pathname').should('eq', '/testing-your-first-application')
    })
    
    it('Cousre section: Testing Foundations', () => {
      cy.getByData("course-1").find("a").eq(3).click()
      cy.location('pathname').should('eq', '/testing-foundations')
    }) 
    
    it('Cousre section: Cypress Fundamentals', () => {
      cy.getByData("course-2").find("a").eq(3).click()
      cy.location('pathname').should('eq', '/cypress-fundamentals')
    })
  })
})
