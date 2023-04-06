import { constructJSON } from "../fixture_helper";

describe('Home page spec', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/')
  })

  it('Should display a logo on page load', () => {
    cy.get('.logo').should('be.visible')
  })

  it('Should display a navbar with different categories on it', () => {
    cy.get('.nav-bar').contains('MARKETPLACE')
    cy.get('.nav-bar').contains('BABY')
    cy.get('.nav-bar').contains('TODDLER')
    cy.get('.nav-bar').contains('LITTLE KID')
    cy.get('.nav-bar').contains('CHANGE USER')
  })

  it('Should display a call to action', () => {
    cy.get('.cta').contains('Gently used clothes for all ages and sizes')
  })

  it('Should include a link to the marketplace in the cta', () => {
    cy.intercept('POST', 'https://outgrown-be.herokuapp.com/graphql', (req) => {
      if(req.body.operationName.includes('findArticles')) {
        req.reply(constructJSON(req.body.variables.articleType, req.body.variables.ageGroup, req.body.variables.gender))
      }}).as("marketplace")
    cy.viewport('iphone-x')
    cy.get('.cta-hidden a').click().url().should('include', '/marketplace/all/all/all')
  })

  it('Should have a nav section for each age group option', () => {
    cy.get('.cat-container').contains('Style for every stage')
    cy.get('[data-cy="baby-cat"]').contains('Baby (0 - 2)')
    cy.get('[data-cy="toddler-cat"]').contains('Toddler (2 - 4)')
    cy.get('[data-cy="littlekid-cat"]').contains('Little Kid (5 - 7)')
    cy.get('[data-cy="bigkid-cat"]').contains('Big Kid (8+)')
  })

  it('Should link to a specific marketplace category when clicking on one of the age group categories', () => {
    cy.intercept('POST', 'https://outgrown-be.herokuapp.com/graphql', (req) => {
      if(req.body.operationName.includes('findArticles')) {
        req.reply(constructJSON(req.body.variables.articleType, req.body.variables.ageGroup, req.body.variables.gender))
      }}).as("marketplace");
    cy.get('[data-cy="baby-cat"]').click().url().should('include', '/marketplace/all/baby/all')
    cy.get('.logo').click()
    cy.get('[data-cy="toddler-cat"]').click().url().should('include', '/marketplace/all/toddler/all')
    cy.get('.logo').click()
    cy.get('[data-cy="littlekid-cat"]').click().url().should('include', '/marketplace/all/little_kid/all')
    cy.get('.logo').click()
    cy.get('[data-cy="bigkid-cat"]').click().url().should('include', '/marketplace/all/big_kid/all')
  })

  it('Should show a nav section to filter by article type', () => {
    cy.get('.art-container').contains('Browse by article type')
    cy.get('[data-cy="Tops/Tees"]').contains('Tops/Tees')
    cy.get('[data-cy="Bottoms"]').contains('Bottoms')
    cy.get('[data-cy="Activewear"]').contains('Activewear')
    cy.get('[data-cy="Formal"]').contains('Formal')
    cy.get('[data-cy="Onesies"]').contains('Onesies')
    cy.get('[data-cy="Other"]').contains('Other')
  })

  it('Should navigate to the marketplace and select the desired article option when clicking on an article panel', () => {
    cy.intercept('POST', 'https://outgrown-be.herokuapp.com/graphql', (req) => {
      if(req.body.operationName.includes('findArticles')) {
        req.reply(constructJSON(req.body.variables.articleType, req.body.variables.ageGroup, req.body.variables.gender))
      }}).as("marketplace");
    cy.get('[data-cy="Tops/Tees"]').click().url().should('include', '/tops/all/all')
    cy.get('.logo').click()
    cy.get('[data-cy="Bottoms"]').click().url().should('include', '/pants/all/all')
    cy.get('.logo').click()
    cy.get('[data-cy="Activewear"]').click().url().should('include', '/activewear/all/all')
    cy.get('.logo').click()
    cy.get('[data-cy="Formal"]').click().url().should('include', '/formal/all/all')
    cy.get('.logo').click()
    cy.get('[data-cy="Onesies"]').click().url().should('include', '/onesies/all/all')
    cy.get('.logo').click()
    cy.get('[data-cy="Other"]').click().url().should('include', '/other/all/all')
  })

})