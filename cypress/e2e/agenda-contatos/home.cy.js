/// <reference types="cypress" />

describe('Testes para a home', () => {
    //Visitando site
    beforeEach(() => {
        cy.visit('https://agenda-contatos-react.vercel.app/')
    })

    //Verificando contatos pré-existentes
    it('Deve renderizar 3 contatos', () => {
        cy.get('.sc-eDDNvR').should('have.length', 3)
    })

    // Adicionando contato
    it('Deve adicionar contato', () => {
        cy.get('[type="text"]').type('Pedro Tibúrcio')
        cy.get('[type="email"]').type('pedroooo@gmail.com')
        cy.get('[type="tel"]').type('(83) 91234-5678')
        cy.get('.adicionar').click()

        cy.get('.sc-eDDNvR').should('have.length', 4).last().contains('Pedro Tibúrcio')
        cy.get('.sc-eDDNvR').last().contains('pedroooo@gmail.com')
        cy.get('.sc-eDDNvR').last().contains('(83) 91234-5678')
        // 
        // should('have.text', 'Pedro Tibúrcio')
    })

    //Editando último contato
    it('Deve editar contato', () => {
        cy.get('.edit').last().click()

        cy.get('[type="text"]').clear()
        cy.get('[type="text"]').type('Pedro de Araújo Tibúrcio')

        cy.get('[type="email"]').clear()
        cy.get('[type="email"]').type('pedrotiburcio10@gmail.com')

        cy.get('[type="tel"]').clear()
        cy.get('[type="tel"]').type('(83) 12345-6789')

        cy.get('.alterar').click()

        cy.get('.sc-eDDNvR').last().contains('Pedro de Araújo Tibúrcio')
        cy.get('.sc-eDDNvR').last().contains('pedrotiburcio10@gmail.com')
        cy.get('.sc-eDDNvR').last().contains('(83) 12345-6789')
    })

    //Removendo primeiro contato
    it('Deve remover contato', () => {
        cy.get('.delete').first().click()
        cy.get('.sc-eDDNvR').should('have.length', 3)
    })
})