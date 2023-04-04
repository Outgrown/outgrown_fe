describe('Marketplace spec', () => {
  beforeEach(() => {
    cy.intercept('POST', 'https://outgrown-be.herokuapp.com/graphql', (req) => {
      if(req.body.operationName.includes('findArticles')) {
        req.reply({ fixture: 'findArticles.json' })
      }
    }).as("testing");
    cy.visit('http://localhost:3000/marketplace')
  })

  it('passes another test', () => {
    cy.wait('@testing')
    cy.expect(true).to.eq(true)
  })
})