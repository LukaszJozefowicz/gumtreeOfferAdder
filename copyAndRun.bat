xcopy input.txt C:\gumtreeOfferAdder /F/Y
if exist c:\gumtreeOfferAdder\pictures\1.jpg del /s /q c:\gumtreeOfferAdder\pictures\*
xcopy pictures C:\gumtreeOfferAdder\pictures /S/I/F/Y
cd c:\gumtreeOfferAdder
taskkill /f /t /im 2.43-x64-chromedriver
npx codeceptjs run testFiles/addOffer.test.js --steps --debug
PAUSE