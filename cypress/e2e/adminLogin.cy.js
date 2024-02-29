const login = require('../fixtures/login.json');
const selectors= require('../fixtures/selectors.json);

describe('Login to admin page', () => {
  beforeEach(() => {
    cy.visit("/admin/");
  });

  it('should login successfully', () => {
    cy.fixture('login').then((loginData) => {
      const user = loginData[0];
      cy.get(selectors.emailInput).type(user.username);
      cy.get(selectors.passwordInput).click().type(user.password);
      cy.get(selectors.loginButton).click();
    });
    cy.contains(selectors.successMessage).should("be.visible");
  });

  it('should not login with incorrect email ', () => {
    cy.fixture('login').then((loginData) => {
      const user = loginData[1];
      cy.get(selectors.emailInput).type(user.username);
      cy.get(selectors.passwordInput).type(user.password);
      cy.get(selectors.loginButton).click();
    });
    cy.contains(selectors.errorMessage).should("be.visible");
  });
});