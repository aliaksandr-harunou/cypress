/// <reference types = "Cypress"/>


class ResultsPage {
    
    openFirstResult() {
        cy.get("#search-result > li:nth-child(3) > div > div.Organic.organic.Typo.Typo_text_m.Typo_line_s.i-bem > div.VanillaReact.OrganicTitle.OrganicTitle_wrap.Typo.Typo_text_l.Typo_line_m.organic__title-wrapper > a > h2 > span").click()
    }

}

module.exports = ResultsPage;