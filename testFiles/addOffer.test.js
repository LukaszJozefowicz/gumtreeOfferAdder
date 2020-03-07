var readTextFile = require('read-text-file');

Feature('Dodaj ogłoszenie sprzedaży mieszkania');

Scenario('Dodawanie nowego ogłoszenia', async (I) => {
    
    let contentsArray = [ 'województwo:',           // 0
                          'miasto:',                // 1
                          'na sprzedaż przez:',     // 2
                          'rodzaj nieruchomości:',  // 3
                          'wielkość (m2):',         // 4
                          'liczba pokoi:',          // 5
                          'liczba łazienek:',       // 6
                          'parking:',               // 7
                          'tytuł ogłoszenia:',      // 8
                          'opis:',                  // 9
                          'wybór cena:',            // 10
                          'ile cena:',              // 11
                          'imię:',                  // 12
                          'email:',                 // 13
                          'telefon:',               // 14
                          'adres:',                 // 15
                          'ile załączników:',       // 16
                          'emailLogin:',            // 17
                          'pass:'];                 // 18
    let content = readTextFile.readSync('./input.txt');
    let inp = content.split('|');
    for (let i = 0; i < contentsArray.length; i++){
      inp[i] = inp[i].replace(contentsArray[i], ' ');
      inp[i] = inp[i].trim();
    }
    inp.forEach(element => I.say('element: '+element+' length: '+element.length));
    
    await I.fillBasicInfo(inp[0], inp[1], inp[17], inp[18]);
    await I.fillOfferForm(inp[2], inp[3], inp[4], 
                    inp[5], inp[6], inp[7], 
                    inp[8], inp[9], inp[10], 
                    inp[11], inp[12], inp[13], 
                    inp[14], inp[15], inp[16]);
  });