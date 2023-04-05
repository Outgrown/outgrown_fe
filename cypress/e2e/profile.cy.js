import { userJSON } from "../fixture_helper";


describe('template spec', () => {
  beforeEach(() => {
    cy.intercept('POST', 'https://outgrown-be.herokuapp.com/graphql', (req) => {
      if(req.body.operationName.includes('findUser')) {
        req.reply(userJSON(req.body.variables.id))
      }
    }).as("getUser");
    cy.visit('http://localhost:3000/profile/7')
  })

  it('passes', () => {
    cy.wait("@getUser")
  })
})