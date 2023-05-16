import { defineConfig } from "cypress";

export default defineConfig({
  

  e2e:  
  {
    env:{
     
    },
    baseUrl:'http://localhost:3000',
    setupNodeEvents(on, config) {
      // implement node event listeners here
    
    },
  },
});

//   e2e:  
//   {
//     env:{
     
//     },
//     baseUrl:'https://kamora:iamafriend@writersperhour.dev/',
//     setupNodeEvents(on, config) {
//       // implement node event listeners here
    
//     },
//   },
// });
