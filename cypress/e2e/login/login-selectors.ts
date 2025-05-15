const loginSelectors = {
  loginNameInput: () => cy.get('[data-test-id="login-name-input"]'),
  loginPasswordInput: () => cy.get('[data-test-id="login-password-input"]'),
  loginShowHidePasswordButton: () =>
    cy.get('[data-test-id="login-show-hide-password-button"]'),
  loginSubmitButton: () => cy.get('[data-test-id="login-submit-button"]'),
};

export default loginSelectors;
