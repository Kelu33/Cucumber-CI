import { Given, Then } from "cypress-cucumber-preprocessor/steps";

const url = 'https://duckduckgo.com'
Given('I open duckduckgo page', () => {
  cy.visit(url)
})
