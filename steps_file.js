// in this file you can append custom step methods to 'I' object
let startPage = require('./pages/startPage.page.js');
let form = require('./pages/offerForm.page.js');

module.exports = function() {
  return actor({

    basicInfo: function(region, town){
      this.amOnPage('https://gumtree.pl'); 
      this.click(startPage.addOffer); 
      this.waitForClickable(startPage.estates, 5);
      this.click(startPage.estates);    
      this.waitForClickable(startPage.sellHouses, 2);
      this.click(startPage.sellHouses);  
      this.waitForClickable(startPage.location(region), 2);   
      this.click(startPage.location(region)); 
      this.waitForClickable(startPage.location(town), 2);     
      this.click(startPage.location(town));
      this.waitInUrl('/post.html', 5);
      
    },

    fillOfferForm: function(toSellBy, type, areaSize, 
                            numberOfRooms, numberOfBathrooms, parking, 
                            offerTitle, description, priceTypes, price, 
                            userName, email, phone, address, attachmentsNumber){

      this.waitForClickable(form.toSellBy, 5);
      this.selectOption(form.toSellBy, toSellBy);
      this.selectOption(form.type, type);
      this.fillField(form.areaSize, areaSize);
      this.selectOption(form.numberOfRooms, numberOfRooms);
      this.selectOption(form.numberOfBathrooms, numberOfBathrooms);
      this.selectOption(form.parking, parking);
      this.fillField(form.offerTitle, offerTitle);
      this.scrollTo(form.offerTitle);
      this.wait(2);
      within({frame: '#description-frame'}, () => {
        this.waitForClickable(form.description, 5);
        this.click(form.description);
        this.fillIframeField(description);
        this.wait(2);
      });
      this.scrollTo(form.addPictures);this.wait(2);
      this.say('attachmentsNumber: '+ attachmentsNumber );
      
      this.say('./pictures/'+attachmentsNumber+'.jpg');
      this.attachFile(form.addPictures, './pictures/'+attachmentsNumber+'.jpg');this.wait(5);
      
      this.selectOption(form.priceTypes, priceTypes);
      if(priceTypes === 'Cena'){
        this.fillField(form.price, price);
      }
      this.fillField(form.userName, userName);
      this.fillField(form.email, email);
      this.fillField(form.phone, phone);
      this.fillField(form.address, address);
      this.click(form.previewButton);
      pause();
    }

  });
}


// Po remoncie, częściowo umeblowane
// - 4 piętro w budynku z 1985 r
// - pokój dzienny 16,9 m2
// - sypialnia 12 m2
// - kuchnia osobna z oknem 9 m2
// - łazienka 4 m2
// - loggia
// - ogrzewanie miejskie.
// - niski czynsz i koszty eksploatacyjne /350+100/
// - spółdzielcze własnościowe z Księgą Wieczystą

// Istnieje możliwość połączenia kuchni z pokojem dziennym tworząc salon z aneksem kuchennym.

// Cicha i spokojna okolica z pełną infrastrukturą.
// W niewielkiej odległości znajduje się PKS, szkoła, sklepy, dla fanów piłki nożnej stadion z boiskiem, sklepy wielobranżowe. 
