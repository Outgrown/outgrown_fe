import { detailJSON } from "../fixture_helper";
import { constructJSON } from "../fixture_helper";

describe('Marketplace spec', () => {
  beforeEach(() => {
    cy.intercept('POST', 'https://outgrown-be.herokuapp.com/graphql', (req) => {
      if(req.body.operationName.includes('findArticles')) {
        req.reply(constructJSON(req.body.variables.articleType, req.body.variables.ageGroup, req.body.variables.gender))
      }
    }).as("testing");
    cy.visit('http://localhost:3000/marketplace')
  })

  it('passes another test', () => {
    cy.wait('@testing')
    cy.expect(true).to.eq(true)
  })
  it('Should allow a user to pick a piece of clothing', () => {
      
    cy.intercept('POST', 'https://outgrown-be.herokuapp.com/graphql', (req) => {
      if(req.body.operationName === 'findArticle') {
        req.reply(detailJSON((req.body.variables.id)))
      }
    }).as("testing");
    cy.get('[href="/details/31/Baby Boy Top"] > .card > img').click()
    cy.url().should('eq','http://localhost:3000/details/31/Baby%20Boy%20Top')
  })

  it('Should display the project title', () => {
    cy.intercept('POST', 'https://outgrown-be.herokuapp.com/graphql', (req) => {
      if(req.body.operationName === 'findArticle') {
        req.reply(detailJSON((req.body.variables.id)))
      }
    }).as("testing");
    cy.get('[href="/details/31/Baby Boy Top"] > .card > img').click()
    cy.url().should('eq','http://localhost:3000/details/31/Baby%20Boy%20Top')
    cy.get('.logo').should('be.visible')
  })
  
  it('Should display the navigation bar', ()=> {
        cy.intercept('POST', 'https://outgrown-be.herokuapp.com/graphql', (req) => {
        if(req.body.operationName === 'findArticle') {
          req.reply(detailJSON((req.body.variables.id)))
        }
      }).as("testing");
      cy.get('[href="/details/31/Baby Boy Top"] > .card > img').click()
      cy.url().should('eq','http://localhost:3000/details/31/Baby%20Boy%20Top')
      cy.get('.nav-bar').should('be.visible')
  })
  
  it('Should display and image of an article of clothing', () => {
        cy.intercept('POST', 'https://outgrown-be.herokuapp.com/graphql', (req) => {
        if(req.body.operationName === 'findArticle') {
          req.reply(detailJSON((req.body.variables.id)))
        }
      }).as("testing");
      cy.get('[href="/details/31/Baby Boy Top"] > .card > img').click()
      cy.url().should('eq','http://localhost:3000/details/31/Baby%20Boy%20Top')
      cy.get('.article-img').should('have.attr','src',"https://ih1.redbubble.net/image.1232366750.7238/ra,kids_tee,x900,FFFFFF:97ab1c12de,front-pad,750x1000,f8f8f8.jpg")
  })
  it('Should have an area to display import article information', () => {
        cy.intercept('POST', 'https://outgrown-be.herokuapp.com/graphql', (req) => {
        if(req.body.operationName === 'findArticle') {
          req.reply(detailJSON((req.body.variables.id)))
        }
      }).as("testing");
      cy.get('[href="/details/31/Baby Boy Top"] > .card > img').click()
      cy.url().should('eq','http://localhost:3000/details/31/Baby%20Boy%20Top')
      cy.get('.vital-info').within(() => {
        cy.get('h2').contains('Baby Boy Top')
        cy.get('h3').should('have.length',2)
        cy.get('h4').contains('$3')
      })
  })
  it('Should have an section display descriptive information on article', () => {
      cy.intercept('POST', 'https://outgrown-be.herokuapp.com/graphql', (req) => {
        if(req.body.operationName === 'findArticle') {
          req.reply(detailJSON((req.body.variables.id)))
        }
      }).as("testing");
      cy.get('[href="/details/31/Baby Boy Top"] > .card > img').click()
      cy.url().should('eq','http://localhost:3000/details/31/Baby%20Boy%20Top')
      cy.get('.info-wrap').within(() => {
        cy.get('.trait-wrap').should('have.length',5)
        cy.get('.age-d').contains('baby')
        cy.get('.gender-d').contains('boy')
        cy.get('.type-d').contains('tops')
        cy.get('.condition-d').contains('great')
        cy.get('.color-d').contains('white')
      })
  })

  it("Should have a provided description of article", () => {
      cy.intercept('POST', 'https://outgrown-be.herokuapp.com/graphql', (req) => {
        if(req.body.operationName === 'findArticle') {
          req.reply(detailJSON((req.body.variables.id)))
        }
      }).as("testing");
      cy.get('[href="/details/31/Baby Boy Top"] > .card > img').click()
      cy.url().should('eq','http://localhost:3000/details/31/Baby%20Boy%20Top')
      cy.get('.desc-area').within(() => {
        cy.get('.desc-d').should('contain','A White t-shirt')
      })
  })
  it("Should have a button that will state add to profile or add to market place",() => {
     cy.intercept('POST', 'https://outgrown-be.herokuapp.com/graphql', (req) => {
        if(req.body.operationName === 'findArticle') {
          req.reply(detailJSON((req.body.variables.id)))
        }
      }).as("testing");
      cy.get('[href="/details/31/Baby Boy Top"] > .card > img').click()
      cy.url().should('eq','http://localhost:3000/details/31/Baby%20Boy%20Top')
      cy.get('.details-btn').should('contain','Add To Market')
  })
   
 
})









