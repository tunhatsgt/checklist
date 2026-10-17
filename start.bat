@echo off
chcp 65001 >nul
cd /d %~dp0
if not exist node_modules call npm install
echo Dang chay... Giu cua so nay mo de moi nguoi truy cap.
node server.js
pause
