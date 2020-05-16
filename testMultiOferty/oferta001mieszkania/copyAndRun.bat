@echo off
echo.
echo 1. kopiuje input.txt z folderu %~dp0 do c:\gumtreeOfferAdder
echo.
xcopy input.txt C:\gumtreeOfferAdder /F/Y
echo.
echo 2. usuwam obrazki z c:\gumtreeOfferAdder i kopiuje z folderu %~dp0 do c:\gumtreeOfferAdder
echo.
if exist c:\gumtreeOfferAdder\pictures\1.jpg del /s /q c:\gumtreeOfferAdder\pictures\*
xcopy pictures C:\gumtreeOfferAdder\pictures /S/I/F/Y
cd c:\gumtreeOfferAdder
echo.
echo 3. zabijam proces chromedrivera
echo.
taskkill /f /t /im 2.43-x64-chromedriver
echo.
echo 4. uruchamiam dodanie oferty
echo.
npx codeceptjs run testFiles/addOffer.test.js
PAUSE