// describe("home page", () => {
//   it("the h1 contains the correct text", () => {
//     cy.viewport(1440, 786)
//     cy.visit("http://localhost:3000")
//     cy.get("[data-test='hero-heading']").contains("Testing Next.js ")
//   })

//   it("The feature on the homepage are correct", () => {
//     cy.viewport(1440, 812)
//     cy.visit("http://localhost:3000")
//     cy.get("dt").eq(3).contains("4 courses")
//     cy.get("dt").eq(1).contains("25+ Lessons")
//     cy.get("dt").eq(11).contains("Free and Open Source")
//   })
//   it("The feature on the homepage are correct", () => {
//     cy.viewport(1440, 812)
//     cy.visit("http://localhost:3000")
//     cy.get("dt").eq(0).contains("4 Courses")
//     cy.get("dt").eq(1).contains("25+ Lessons")
//     cy.get("dt").eq(2).contains("Free and Open Source")
// })
// })
describe("home page", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000")
    cy.get("dt").eq(0).contains("4 Courses")
  })

  it("the h1 contains the correct text", () => {
    cy.visit("http://localhost:3000")
    cy.get("[data-test='hero-heading']").contains(
      "Testing Next.js Applications with Cypress"
    )
  })

  it("the features on the homepage are correct", () => {
    cy.get("dt").eq(0).contains("4 Courses")
    cy.get("dt").eq(1).contains("25+ Lessons")
    cy.get("dt").eq(2).contains("Free and Open Source")
  })
  it("the features on the homepage are correct", () => {
   cy.get("[data-test='hero-heading']").contains(
    "Testing Next.js Applications with Cypress")
  })
})