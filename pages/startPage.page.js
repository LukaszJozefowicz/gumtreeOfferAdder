module.exports = {
    myGumtree: {css: ".profile > a:nth-child(1) > span:nth-child(2)"},
    contextMenu: {css: "body > div.viewport > div.header > header > div > div > div.right > div.nav > nav > ul > li:nth-child(1) > a"},
    myAds: {xpath: "//a[@href = '/my/ads.html']"}, //moje ogłoszenia
    deleteFirst: {xpath: "//a[@class = 'delete action']"},
    //html/body/div[1]/div[4]/div[1]/div[2]/section/div/div[5]/div[2]/div[4]/div/a[2]'},
    email: {css: "#login > input[type=email]:nth-child(3)"},
    pass: {css: "#login > input[type=password]:nth-child(5)"},
    loginButton: {css: '#login-button'},
    addOffer: {xpath: "//span[contains(text(), 'Dodaj ogłoszenie')]"},
    estates: {xpath: "//span[text()='Nieruchomości']"},
    garden: {xpath: "//span[text()='Dom i Ogród']"},
    sellHouses: {xpath: "//span[text()='mieszkania i domy - sprzedam']"},
    plot: {xpath: "//span[text()='działki']"},
    office: {xpath: "//span[text()='lokal i biuro']"},
    location: function(where){return "//span[text()='"+where+"']"}
}