/// <reference types = "Cypress"/>


class TranslatePage {
    changePageLanguageTo(lang) {
        cy.get("#langSwitcherButton").click()
        cy.contains(lang).click()
        cy.wait(3000)
    }
    
    transalteFrom(language) {
        cy.get("#srcLangButton").click()
        cy.contains(language).click()
    }

    transalteTo(language) {
        cy.get("#dstLangButton").click()
        cy.contains(language).click()
    }

    translate (word) {
        cy.get("#fakeArea").clear().type(word)
        cy.wait(3000)
    }

    verifyOutput (translatedWord) {
        cy.get("#translation > span > span").should("contain.text", translatedWord)
        cy.wait(3000)
    }
}

module.exports = TranslatePage;