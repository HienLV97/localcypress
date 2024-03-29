describe("Newsletter Subscribe Form", () => {
    beforeEach(() => {
        cy.visit("http://localhost:3001")
        //cy.viewport(1440, 812)
    })
    context("hero section", () => {
        it("allow users to subscribe to the email list", () => {
            //cy.getByData("email-input").type("abc@a.com")
            cy.getByData("course-0").find("a").eq(3).click()
            // cy.location("pathname").should("eq","/testing-your-first-application")
            //cy.getByData("course-0").eq(3).click()
            cy.getByData("next-lesson-button").click()
            cy.get('#app-install--overview').contains("App Install & Overview")
            cy.getByData("challenge-answer-0").click()
            cy.getByData("next-lesson-button").click()
            cy.get('#installing-cypress-and-writing-our-first-test').contains("Installing Cypress and writing our first test")
            cy.getByData("challenge-answer-0").click()
            cy.getByData("next-lesson-button").click()
            cy.get('#setting-up-data-before-each-test').contains("Setting up Data Before Each Test")
            cy.getByData("challenge-answer-0").click()
            cy.getByData("next-lesson-button").click()
            cy.getByData("hero-heading").contains("Testing Next.js Applications with Cypress")
        })
    })
})
