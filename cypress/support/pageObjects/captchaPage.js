/// <reference types = "Cypress"/>


class CaptchaPage {
    checkIamNotRobot() {
        cy.get('.CheckboxCaptcha-Button').click()
    }
}

module.exports = CaptchaPage;