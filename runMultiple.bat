if exist c:\gumtreeOfferAdder\wynikiDodawaniaOfert.txt del /s /q c:\gumtreeOfferAdder\wynikiDodawaniaOfert.txt
@echo off
for /f %%f in ('dir /ad /b') do (cd %~dp0 & cd %%f & echo.DODAWANIE OFERTY Z KATALOGU %%f & call %~dp0%%f\copyAndRun.bat & echo.KONIEC DODAWANIA Z KATALOGU %%f) 
PAUSE