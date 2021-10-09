describe('La primera prueba', () => {
  it('Does not do much!', () => {
    expect(true).to.equal(true)
  })
})


describe('My First Test', () => {
  it('Visitando la pagina de prueba', () => {
    // cy.visit('https://example.cypress.io')
    cy.visit('http://localhost:3000')
  })
})


describe('My First Test', () => {
  it('buscando el contenido "type"', () => {
    cy.visit('https://example.cypress.io')

    cy.contains('type')
  })
})


describe('My First Test', () => {
  it('Gets, types and asserts', () => {
    cy.visit('https://example.cypress.io')

    cy.contains('type').click()

    // Should be on a new URL which includes '/commands/actions'
    cy.url().should('include', '/commands/actions')

    // Get an input, type into it and verify that the value has been updated
    cy.get('.action-email')
      .type('fake@email.com')
      .should('have.value', 'fake@email.com')
  })
})
