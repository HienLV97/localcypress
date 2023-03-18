import { defineConfig } from "cypress";

export default defineConfig({
  

  e2e:  
  {
    env:{
     
    },
    baseUrl:'https://kamora:iamafriend@writersperhour.dev/',
    setupNodeEvents(on, config) {
      // implement node event listeners here
    
    },
  },
});
