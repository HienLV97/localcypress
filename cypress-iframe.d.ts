declare namespace Cypress {
    interface Chainable<Subject> {
      /**
       * Custom command to select a DOM element within an iframe
       * @example
       * cy.iframe('iframe-selector').find('.some-class')
       */
      iframe(): Chainable<any>;
    }
  }
  