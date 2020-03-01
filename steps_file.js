// in this file you can append custom step methods to 'I' object
let startPage = require('./pages/startPage.js');

module.exports = function() {
  return actor({

    addNewOffer: function(region, town){
      this.amOnPage('https://gumtree.pl');
      this.wait(2);
      this.click(startPage.addOffer);
      this.wait(2);
      this.click(startPage.estates);
      this.wait(2);
      this.click(startPage.sellHouses);
      this.wait(2);
      this.click(startPage.location(region));
      this.wait(2);
      this.click(startPage.location(town));
      this.waitInUrl('/post.html', 5);
      this.wait(2);
    }

  });
}
