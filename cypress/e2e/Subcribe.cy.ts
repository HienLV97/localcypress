describe("Newsletter Subscribe Form", () => {
    beforeEach(() => {
        cy.visit("http://localhost:3000")
        //cy.viewport(1440, 812)
    })
    // context("hero section", () => {
    //     it("allow users to subscribe to the email list", () => {
    //         cy.getByData("email-input").type("abc@a.com")
    //         cy.getByData("submit-button").click()
    //         cy.getByData("success-message").should("exist").contains("abc@a.com")
    //     })
    //     it("does NOT allow a invalid email address", () => {
    //         cy.getByData("email-input").type("abc")
    //         cy.getByData("submit-button").click()
    //         cy.getByData("success-message").should("not.exist")
    //     })
    // })
    // context("Test button", () => {
    //     it("Testcase 1:",() =>{
    //         cy.getByData("email-input").type("test")
    //         cy.getByData("submit-button").click()
    //         cy.getByData("succes-message").should("not.exist")           
    //     })
    // })
    context("Test case 2",() => {

        it("TC1",() =>{
            cy.getByData("course-2").find("a")//.eq(3).click()       
        })
    })
})
