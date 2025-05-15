import loginSelectors from "../e2e/login/login-selectors";
import { userA } from "../fixtures/user.mock";

declare global {
  namespace Cypress {
    interface Chainable {
      login(): Chainable<void>;
    }
  }
}

Cypress.Commands.add("login", () => {
  cy.visit("http://localhost:4200/connext/log-in");
  loginSelectors.loginNameInput().type(userA.name);
  loginSelectors.loginPasswordInput().type(userA.password, { force: true });
  loginSelectors.loginSubmitButton().click();
});

export {};
