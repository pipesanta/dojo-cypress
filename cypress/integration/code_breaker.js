describe('La primera prueba de code breaker', () => {
  it('E2E full', () => {
    expect(true).to.equal(true)
    cy.visit('http://localhost:3000');

    cy.url().should('include', '/game');

    cy.get("#number-input")
      .type("1234")
      .should("have.value", "1234")

    cy.get("#submit_btn")
      .click()

    cy.get("#number-result")
      .should("have.text", "result...")

  })
})
