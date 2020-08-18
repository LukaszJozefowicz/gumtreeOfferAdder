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

    // let howManyToDelete = readTextFile.readSync('./ileOfertDoUsuniecia.txt');
    // let howMany = parseInt(howManyToDelete.trim());


Feature('Usuwanie wszystkich ogłoszeń na koncie \n' );

Scenario('Uruchamiam przeglądarkę', async (I) => {
    await I.deleteAllOffers(inp[18], inp[19]);
});

// After((I) => {
    
//     if (!fs.existsSync('wynik.txt')){
//       fs.writeFile('wynik.txt', 'Wyniki dodawania ofert:\n', (err) => {
//         if (err) throw err;
//         console.log('Utworzono plik z wynikami dodawania ofert');
//       });
//     }

    
// });