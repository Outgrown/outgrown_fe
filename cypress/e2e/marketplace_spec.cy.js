import { constructJSON } from '../fixture_helper';

describe('Marketplace spec', () => {
  beforeEach(() => {
    cy.intercept('POST', 'https://outgrown-be.herokuapp.com/graphql', (req) => {
      const {articleType, ageGroup, gender} = req.body.variables
      if(req.body.operationName.includes('findArticles')) {
        req.reply(constructJSON(articleType, ageGroup, gender))
      }
    }).as('testing');
    cy.visit('http://localhost:3000/marketplace')
    cy.wait('@testing')
  })

  it('Should display a logo and navbar on page load', () => {
    cy.get('.logo').should('be.visible')
    cy.get('.nav-button').should('have.length', 5)
  })

  it('Should allow you to click on the logo to return to the home page', () => {
    cy.get('.logo').click()
    cy.url().should('eq', 'http://localhost:3000/')
  })

  it('Should display a nav link dropdown to change user on page load', () => {
    cy.get('.dropbutton').trigger('mouseover').get('.dropdown-options').children().should('have.length', 3)
  })

  it('Should display all available clothing on page load', () => {
    cy.get('.market-container').children().should('have.length', 4)
  })

  it('Should update the URL and filter clothing when selecting marketplace nav option', () => {
    cy.get('[data-cy="all-nav"]').click().url().should('include', 'all/all/all')
    cy.get('.market-container').children().should('have.length', 4)
  })

  it('Should filter different types for different navbar options', () => {
    cy.get('[data-cy="baby-nav"]').click().url().should('include', 'all/baby/all')
    cy.get('.market-container').children().should('have.length', 3)

    cy.get('[data-cy="toddler-nav"]').click().url().should('include', 'all/toddler/all')
    cy.get('.market-container').children().should('have.length', 1)

    cy.get('[data-cy="little-nav"]').click().url().should('include', 'all/little_kid/all')
    cy.get('.error-container').should('be.visible')
    cy.get('.error-container').contains('No options found for filters. Try a different combination!')

    cy.get('[data-cy="big-nav"]').click().url().should('include', 'all/big_kid/all')
    cy.get('.error-container').should('be.visible')
    cy.get('.error-container').contains('No options found for filters. Try a different combination!')
  })

  it('Should have information relating to a clothing item in each card', () => {
    cy.get('[data-cy="31"]').contains('Baby Boy Top')
    cy.get('[data-cy="31"]').contains('Size: Baby')
    cy.get('[data-cy="31"] img').should('be.visible')
  })

  it('Should display a form element to filter clothing items', () => {
    cy.get('.selects-form').should('be.visible')
    cy.get('.selects-form').contains('Article Types')
    cy.get('.selects-form').contains('Age Groups')
    cy.get('.selects-form').contains('Gender')
  })

  it('Should update the URL and filter clothes when a form element is changed', () => {
    cy.get('[data-cy="article"]').select('tops')
    cy.wait('@testing')
    cy.url().should('include', 'tops/all/all')
    cy.get('.market-container').children().should('have.length', 3)
    cy.get('[data-cy="article"]').contains('Tops/Tees')
  })

  it('Should allow for multiple options to be selected at once', () => {
    cy.get('[data-cy="article"]').select('tops')
    .get('[data-cy="age"]').select('baby')
    cy.wait('@testing')
    cy.url().should('include', 'tops/baby/all')
    cy.get('.market-container').children().should('have.length', 2)
  })

  it('Should allow for even more options to be selected at once', () => {
    cy.get('[data-cy="article"]').select('tops')
    .get('[data-cy="age"]').select('baby')
    .get('[data-cy="gender"]').select('unisex')
    cy.wait('@testing')
    cy.url().should('include', 'tops/baby/unisex')
    cy.get('.market-container').children().should('have.length', 1)
  })

  it('Should display a message if there are no articles that match a filter set', () => {
    cy.get('[data-cy="age"]').select('little_kid')
    cy.get('.error-container').contains('No options found for filters. Try a different combination!')
  })

  it('Should display an error message when there is a server malfunction', () => {
    cy.intercept('POST', 'https://outgrown-be.herokuapp.com/graphql', {statusCode: 500}).as('testing-1')
    cy.visit('http://localhost:3000/marketplace')
    cy.wait('@testing-1')
    cy.get('.error-container').contains('Response not successful: Received status code 500')
  })
})