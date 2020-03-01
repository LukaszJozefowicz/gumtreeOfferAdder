//const mainPage = include('./../pages/loginPage.js');
var readTextFile = require('read-text-file');

Feature('Dodaj ogłoszenie sprzedaży mieszkania');

Scenario('Logowanie', (I, mainPage) => {
    let content = readTextFile.readSync('./input.txt');
    I.say(content);
    let array = content.split(',');
    I.say(array[0].trim() + ' length: ' + array[0].trim().length);
    I.say(array[1].trim() + ' length: ' + array[1].trim().length);
    I.amOnPage('https://gumtree.pl');
    I.wait(2);
    I.moveCursorTo(mainPage.myGumtree);
    I.click(mainPage.contextMenu);
    I.waitInUrl('login.html', 5);
    I.fillField(mainPage.email, array[0].trim());
    I.wait(2);
    I.fillField(mainPage.pass, secret(array[1].trim()));
    I.wait(2);
    I.click(mainPage.loginButton);
    I.wait(2);
  });