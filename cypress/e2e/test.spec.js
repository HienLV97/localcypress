describe('Check all pages for 404', () => {
    beforeEach(() => {
      cy.visit('/')
    })
  
    it('should not have 404 error', () => {
      cy.get('a').each(($el) => {
        const link = $el.attr('href')
        if (link && !Cypress.dom.isStubbed(link)) {
          cy.request(link).its('status').should('not.equal', 404)
        }
      })
    })
  })