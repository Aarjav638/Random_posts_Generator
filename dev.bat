@echo off

REM Step 1 and Step 2 combined
npx prisma db push && (npm run dev || yarn dev)

pause
