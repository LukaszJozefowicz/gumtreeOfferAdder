var readTextFile = require('read-text-file');
var fs = require('fs');

const contentsArray =     ['typ ogłoszenia:',       // 0
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
                          'pass:',                  // 19
                          'dzielnica:'];            // 20
    let content = readTextFile.readSync('./input.txt');
    let inp = content.split('|');
    for (let i = 0; i < contentsArray.length; i++){
      inp[i] = inp[i].replace(contentsArray[i], ' ');
      inp[i] = inp[i].trim();
    }
    //inp.forEach(element => console.log('element: '+element+' length: '+element.length));

Feature('Dodawanie nowego ogłoszenia: \n' + contentsArray[0] + ' ' + inp[0]+
                                      '\n' + contentsArray[2] + ' ' + inp[2] + ' ' + inp[20]+
                                      '\n' + contentsArray[9] + ' ' + inp[9]+
                                      '\n' + contentsArray[17] + ' ' + inp[17]);

Scenario('Uruchamiam przeglądarkę', async (I) => {
    
    await I.fillBasicInfo(inp[0], inp[1], inp[2], inp[20], inp[18], inp[19]);
    await I.fillOfferForm(inp[0], inp[3], inp[4], 
                    inp[5], inp[6], inp[7], 
                    inp[8], inp[9], inp[10], 
                    inp[11], inp[12], inp[13], 
                    inp[14], inp[15], inp[16], inp[17]);
});

Before((I) => {
  // try{
  //   console.log('Usuwam plik wynik.txt\n')
  //   fs.unlinkSync('wynik.txt')
  // } catch(err) {
  //   console.log('nie udało się usunąć pliku wynik.txt');
  // }
    
    if (!fs.existsSync('wynikiDodawaniaOfert.txt')){
      fs.writeFile('wynikiDodawaniaOfert.txt', 'Wyniki dodawania ofert:\n', (err) => {
        if (err) throw err;
        console.log('Utworzono plik z wynikami dodawania ofert');
      });
    }

    
});