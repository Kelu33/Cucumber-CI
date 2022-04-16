import { Given, Then } from "cypress-cucumber-preprocessor/steps";

const url = 'https://google.com'
Given('I open google page', () => {
  cy.visit(url)
})
