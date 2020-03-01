module.exports = {
    myGumtree: {css: ".profile > a:nth-child(1) > span:nth-child(2)"},
    contextMenu: {css: "body > div.viewport > div.header > header > div > div > div.right > div.nav > nav > ul > li:nth-child(1) > a"},
    email: {css: "#login > input[type=email]:nth-child(3)"},
    pass: {css: "#login > input[type=password]:nth-child(5)"},
    loginButton: {css: '#login-button'},
    addOffer: {xpath: "//span[text()='Dodaj ogłoszenie']"},
    estates: {xpath: "//span[text()='Nieruchomości']"},
    sellHouses: {xpath: "//span[text()='mieszkania i domy - sprzedam']"},
    location: function(where){return "//span[text()='"+where+"']"}
}