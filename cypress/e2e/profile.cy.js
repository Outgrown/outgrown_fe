import { userJSON } from "../fixture_helper";
import { detailJSON } from "../fixture_helper";


describe('template spec', () => {
  beforeEach(() => {
    cy.intercept('POST', 'https://outgrown-be.herokuapp.com/graphql', (req) => {
      if(req.body.operationName.includes('findUser')) {
        req.reply(userJSON(req.body.variables.id))
      }
    }).as("getUser");

    cy.intercept('POST', 'https://outgrown-be.herokuapp.com/graphql', (req) => {
      if(req.body.operationName === 'findArticle') {
        req.reply(detailJSON((req.body.variables.id)))
      }
    }).as("details");

    cy.visit('http://localhost:3000/profile/7')
  })

  it('displays the header which includes a page title, icon, and the user name', () => {
    cy.get('.top-container').get('h2').should('contain', 'My Wardrobe')

    cy.get('.wardrobe-icon').should('be.visible')

    cy.get('.username-display').should('contain', 'Tien Gislason')
  })

  it('displays clothing on the profile page', () => {
    cy.wait("@getUser")

    cy.get('.listings-container')
      .children('a').children('div').should('have.class', 'card')
  })

  it('directs users to the details page when clicking on a listing', ()=> {
    cy.wait("@getUser")

    cy.get('[href="/details/31/Baby Boy Top"] > .card > img').click()

    cy.wait('@details')
    cy.url().should('eq', 'http://localhost:3000/details/31/Baby%20Boy%20Top')

  })

  it('should display a dropdown to sort listings by status', () => {
    cy.wait("@getUser")

    cy.get('.filter-dropdown').select('Available').should('have.value', 'available')
  })

  it.only('should correctly filter items as the filter changes to', () => {
    cy.wait("@getUser")

    cy.get('.filter-dropdown').select('Available')
    cy.get('.listings-container').children('a').should('have.length', 3)

    cy.get('.filter-dropdown').select('Unavailable')
    cy.get('.listings-container').children('a').should('have.length', 2)

    cy.get('.filter-dropdown').select('Pending')
    cy.get('.listings-container').children('a').should('have.length', 1)

  })
})