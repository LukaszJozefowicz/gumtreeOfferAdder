var readTextFile = require('read-text-file');

Feature('Dodaj ogłoszenie sprzedaży mieszkania');

Scenario('Dodawanie nowego ogłoszenia', async (I) => {
    
    let contentsArray = [ 'typ ogłoszenia:',        // 0
                          'województwo:',           // 1
                          'miasto:',                // 2
                          'na sprzedaż przez:',     // 3
                          'rodzaj nieruchomości:',  // 4
                          'wielkość (m2):',         // 5
                          'liczba pokoi:',          // 6
                          'liczba łazienek:',       // 7
                          'parking:',               // 8
                          'tytuł ogłoszenia:',      // 9
                          'opis:',                  // 10
                          'wybór cena:',            // 11
                          'ile cena:',              // 12
                          'imię:',                  // 13
                          'email:',                 // 14
                          'telefon:',               // 15
                          'adres:',                 // 16
                          'ile załączników:',       // 17
                          'emailLogin:',            // 18
                          'pass:'];                 // 19
    let content = readTextFile.readSync('./input.txt');
    let inp = content.split('|');
    for (let i = 0; i < contentsArray.length; i++){
      inp[i] = inp[i].replace(contentsArray[i], ' ');
      inp[i] = inp[i].trim();
    }
    inp.forEach(element => I.say('element: '+element+' length: '+element.length));
    
    await I.fillBasicInfo(inp[0], inp[1], inp[2], inp[18], inp[19]);
    await I.fillOfferForm(inp[0], inp[3], inp[4], 
                    inp[5], inp[6], inp[7], 
                    inp[8], inp[9], inp[10], 
                    inp[11], inp[12], inp[13], 
                    inp[14], inp[15], inp[16], inp[17]);
  });