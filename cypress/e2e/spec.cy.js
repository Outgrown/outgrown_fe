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
});