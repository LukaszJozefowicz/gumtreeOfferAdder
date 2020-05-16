// in this file you can append custom step methods to 'I' object
let startPage = require('./pages/startPage.page.js');
let form = require('./pages/offerForm.page.js');
const selenium = require('selenium-standalone');
let isLogged = false;

module.exports = function() {
  return actor({

    login: function(email, pass){ 
      this.moveCursorTo(startPage.myGumtree);
      this.waitForClickable(startPage.myGumtree, 5);
      this.click(startPage.contextMenu);
      this.waitInUrl('login.html', 5);
      this.fillField(startPage.email, email);
      this.wait(1);
      this.fillField(startPage.pass, secret(pass));
      this.waitForClickable(startPage.loginButton, 5);
      this.click(startPage.loginButton);
      this.wait(2);
    },

    fillBasicInfo: async function(offerType, region, town, login, pass){
      this.amOnPage('https://gumtree.pl'); 
      this.say('isLogged before check: '+ isLogged);
      let checkIfLogged = await this.grabTextFrom(startPage.myGumtree);
      this.say('checkIfLogged: '+ checkIfLogged+ ' length: ' +checkIfLogged.length);
      if(checkIfLogged.trim() === 'Moje Gumtree'){
        this.login(login, pass);
        isLogged = true;
      }
      this.say('isLogged after check: '+ isLogged);
      this.wait(1);
      this.click(startPage.addOffer); 
      this.wait(1);
      this.waitForClickable(startPage.estates, 5);
      this.wait(1);
      this.click(startPage.estates);    
      
      switch(offerType){
        case 'mieszkania i domy - sprzedam':
            this.waitForClickable(startPage.sellHouses, 2);
            this.wait(1);
            this.click(startPage.sellHouses);
            break;
        case 'działki':
            this.waitForClickable(startPage.plot, 2);
            this.wait(1);
            this.click(startPage.plot);
            break;
        case 'lokal i biuro':
            this.waitForClickable(startPage.plot, 2);
            this.wait(1);
            this.click(startPage.office);
            break;
      }

      this.waitForClickable(startPage.location(region), 2);   
      this.wait(1);
      this.click(startPage.location(region)); 
      this.waitForClickable(startPage.location(town), 2);     
      this.wait(1);
      this.click(startPage.location(town));
      this.waitInUrl('/post.html', 5);
      
    },

    fillOfferForm: async function(offerType, toSellBy, type, areaSize, 
                            numberOfRooms, numberOfBathrooms, parking, 
                            offerTitle, description, priceTypes, price, 
                            userName, email, phone, address, attachmentsNumber){

      if (offerType === 'lokal i biuro'){
          this.waitForClickable(form.forRentBy, 5);
          this.selectOption(form.forRentBy, toSellBy);
      } else {
          this.waitForClickable(form.toSellBy, 5);
          this.selectOption(form.toSellBy, toSellBy);
      }
      if (offerType === 'mieszkania i domy - sprzedam'){
          this.selectOption(form.type, type);
          this.fillField(form.areaSize, areaSize);
          this.selectOption(form.numberOfRooms, numberOfRooms);
          this.selectOption(form.numberOfBathrooms, numberOfBathrooms);
          this.selectOption(form.parking, parking);
      }
      if (offerType === 'lokal i biuro'){
          this.fillField(form.areaSize, areaSize);
      }

      this.fillField(form.offerTitle, offerTitle);
      this.scrollTo(form.offerTitle);
      this.wait(2);
      within({frame: '#description-frame'}, () => {
        this.waitForClickable(form.description, 5);
        this.fillIframeField(description);
        this.wait(2);
      });
      this.scrollTo(form.addPictures);this.wait(2);
      this.say('attachmentsNumber: '+ attachmentsNumber );
      attachmentsNumber++;
      for(let i = 1; i < attachmentsNumber; i++){
        this.say('./pictures/'+i+'.jpg');
        await this.attachFile(form.addPictures, './pictures/'+i+'.jpg');
        this.wait(2);
      }
      this.selectOption(form.priceTypes, priceTypes);
      if(priceTypes === 'Cena'){
        this.fillField(form.price, price);
      }
      this.fillField(form.userName, userName);
      this.say('isLogged: '+ isLogged);
      if(isLogged === false){  
        this.fillField(form.email, email);
      }
      this.fillField(form.phone, phone);
      this.fillField(form.address, address);
      this.click(form.addOfferButton);
      this.wait(3);
    },
  });
}