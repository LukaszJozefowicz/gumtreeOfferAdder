//const mainPage = include('./../pages/loginPage.js');
var readTextFile = require('read-text-file');

Feature('Dodaj ogłoszenie sprzedaży mieszkania');

Scenario('Dodawanie nowego ogłoszenia', (I, mainPage) => {
    
    let contentsArray = ['województwo:', 'miasto:', 'pizda:'];
    let content = readTextFile.readSync('./input.txt');
    let inputArray = content.split('|');
    for (let i = 0; i < contentsArray.length; i++){
      inputArray[i] = inputArray[i].replace(contentsArray[i], ' ');
      inputArray[i] = inputArray[i].trim();
    }
    inputArray.forEach(element => I.say('element: '+element+' length: '+element.length));
    
    
    I.addNewOffer(inputArray[0], inputArray[1]);
    // I.amOnPage('https://gumtree.pl');
    // I.wait(2);
    // I.moveCursorTo(mainPage.myGumtree);
    // I.click(mainPage.contextMenu);
    // I.waitInUrl('login.html', 5);
    // I.fillField(mainPage.email, array[0].trim());
    // I.wait(2);
    // I.fillField(mainPage.pass, secret(array[1].trim()));
    // I.wait(2);
    // I.click(mainPage.loginButton);
    // I.wait(2);
  });