var fs = require('fs');
var readTextFile = require('read-text-file');
const event = require('codeceptjs').event;

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

module.exports = function() {
    event.dispatcher.on(event.test.passed, function () {
        console.log('Event test pass');
        if (fs.existsSync('wynikiDodawaniaOfert.txt')){
              fs.appendFile('wynikiDodawaniaOfert.txt', '\nDodano: \"'+inp[9]+ '\"\n', (err) => {
                if (err) throw err;              
            });
        }
      });
    event.dispatcher.on(event.test.failed, function () {
        console.log('Event test fail');
        if (fs.existsSync('wynikiDodawaniaOfert.txt')){
                fs.appendFile('wynikiDodawaniaOfert.txt', '\nBłąd: \"'+inp[9]+'\n', (err) => {
                    if (err) throw err;              
                });
        }
    });
}
// module.exports = function() {
//       event.dispatcher.on(event.test.failed, function () {
//         console.log('Event test fail');
//         if (fs.existsSync('wynik.txt')){
//               fs.appendFile('wynik.txt', '\nBłąd przy dodawaniu oferty o tytule: \"'+inp[9]+ '\"', (err) => {
//                 if (err) throw err;              
//             });
//         }
//       });
// }