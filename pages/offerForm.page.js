module.exports = {
    toSellBy: {xpath: "//select[@name='DwellingForSaleBy']"},
    type: {xpath: "//select[@name='DwellingType']"},
    areaSize: {xpath: "//input[@name='AreaInMeters']"},
    numberOfRooms: {xpath: "//select[@name='NumberRooms']"},
    numberOfBathrooms: {xpath: "//select[@name='NumberBathrooms']"},
    parking: {xpath: "//select[@name='Parking']"},
    offerTitle: {xpath: "//input[@name='Title']"},
    description: "//body[@id = 'rte']/ancestor::html",
    addPictures: {css: "#pictures"},
    priceTypes: {xpath: "//select[@name='priceTypes']"},
    price: {xpath: "//input[@name='Price']"},
    userName: {xpath: "//input[@name='UserName']"},
    email: {xpath: "//input[@name='Email']"},
    phone: {xpath: "//input[@name='Phone']"},
    address: {xpath: "//input[@name='Address']"},
    previewButton: {css: '#postPreview'}
    //location: function(where){return "//span[text()='"+where+"']"}
}