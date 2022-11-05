describe("Newsletter Subscribe Form", () => {
    beforeEach(() => {
        cy.visit("http://localhost:3000")
        //cy.viewport(1440, 812)
    })
    context("hero section", () => {
        it("allow users to subscribe to the email list", () => {
            cy.getByData("email-input").type("abc@a.com")
            cy.getByData("course-0").find("a")
        })
    })
})