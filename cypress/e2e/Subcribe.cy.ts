describe("Newsletter Subscribe Form", () =>{
    beforeEach(() =>{
        cy.visit("http://localhost:3000")
    })
    it("allow users to subscribe to the email list", () => {
        cy.getByData("email-input").type("abc@a.com")
        cy.getByData("submit-button").click()
        cy.getByData("success-message").should("exist").contains("abc@a.com")
    })
    it("does NOT allow a invalid email address", () =>{
        cy.getByData("email-input").type("abc")
        cy.getByData("submit-button").click()
        cy.getByData("success-message").should("not.exist")
    })
})