cd\
cd gumtreeOfferAdder
taskkill /f /t /im 2.43-x64-chromedriver
npx codeceptjs run testFiles/deleteOffer.test.js --steps --debug
PAUSE