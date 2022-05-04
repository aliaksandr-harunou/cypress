/// <reference types = "Cypress"/>

const HomePage = require("../../support/pageObjects/homePage")
const ResultsPage = require("../../support/pageObjects/resultsPage")
const TranslatePage = require("../../support/pageObjects/translatePage")
const CaptchaPage = require("../../support/pageObjects/captchaPage")
const homePage = new HomePage();
const captchaPage = new CaptchaPage();
const translatePage = new TranslatePage();
const resultsPage = new ResultsPage();

describe('Translator', () => {
    it('Should translate from ENG to RU', () => {
      homePage.open()
      // captchaPage.checkIamNotRobot()
      homePage.openApp("Переводчик")
      translatePage.changePageLanguageTo("ru") // be
      translatePage.transalteFrom("Английский")
      translatePage.transalteTo("Русский")
      translatePage.translate("Language")
      translatePage.verifyOutput("Язык")
    });
  });