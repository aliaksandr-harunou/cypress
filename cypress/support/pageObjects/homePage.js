/// <reference types = "Cypress"/>


class HomePage {
    
    open() {
        cy.visit("https://yandex.by");
    }

    openApp(nameOfApp) {
        cy.contains(nameOfApp).invoke('removeAttr', 'target')
        cy.contains(nameOfApp).click();
    }

    type(text) {
        cy.get("#text").clear().type(text)
    }

    findResults() {
        cy.get("[type='submit']").should("be.enabled").click()
    }
}

module.exports = HomePage;