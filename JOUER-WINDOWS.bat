@echo off
chcp 65001 >nul
title INBOX CONTROL - CBS 1997
cd /d "%~dp0"
where node >nul 2>nul
if %errorlevel%==0 (
  if not exist dist\index.html (
    echo Premiere execution : construction du jeu...
    call npm install || goto :err
    call npm run build || goto :err
  )
  node serve.mjs
  goto :eof
)
where python >nul 2>nul
if %errorlevel%==0 if exist dist\index.html (
  echo Node.js absent : utilisation de Python. Ouvrez http://localhost:4173/
  start "" http://localhost:4173/
  python -m http.server 4173 --bind 127.0.0.1 --directory dist
  goto :eof
)
echo Node.js est requis (https://nodejs.org, version LTS). Installez-le puis relancez ce fichier.
pause
goto :eof
:err
echo Erreur pendant l'installation. Verifiez votre connexion internet puis relancez.
pause
