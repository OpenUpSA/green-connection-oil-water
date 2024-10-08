import { locales } from "i18n";

describe("Test home page with default locale", () => {
  it("passes", () => {
    const defaultLocale = locales[0];
    cy.readFile(`messages/${defaultLocale}.json`).then((messages) => {
      cy.visit("http://localhost:3000/");
      cy.get("h1").should("contain", messages.global.title);
    });
  });
});

describe("Test home page with available locales", () => {
  locales.map((locale) => {
    it("passes", () => {
      cy.readFile(`messages/${locale}.json`).then((messages) => {
        cy.visit(`http://localhost:3000/${locale}`);
        cy.get("h1").should("contain", messages.global.title);
      });
    });
  });
});

describe("Test scenarios with available locales", () => {
  it("passes", () => {
    locales.map((locale) => {
      cy.readFile(`messages/${locale}.json`).then((messages) => {
        messages.global.scenarios.map(
          (scenario: { slug: string; title: string; format: string }) => {
            cy.visit(
              `http://localhost:3000/${locale}/scenarios/${scenario.slug}`
            );
            if (scenario.format !== "bonus") {
              cy.get("h2").should("contain", scenario.title);
            }
          }
        );
      });
    });
  });
});
