describe('template spec', () => {
  it('passes', () => {
    cy.visit('https://example.cypress.io')
  })

  it('passes another test', () => {
    cy.expect(true).to.eq(true)
  })
})