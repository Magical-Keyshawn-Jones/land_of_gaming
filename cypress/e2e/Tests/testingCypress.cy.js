/// <reference types="cypress" />

describe('Server Tests', () => {

    it('Server Is Up', () => {
      cy.request('http://localhost:3000')
      // cy.should('have.length.above', 1) 
    })
  
  })