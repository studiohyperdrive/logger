### BUILD

printf "\e[94m 🚀\tBuilding @studiohyperdrive/logger\e[39m\n\n"

printf "\e[96m 🗑\tCleaning dist folder\e[39m\n"
rm -rf dist
mkdir dist
cp typings.ts dist/shd-logger.d.ts
printf "\n\e[92m 🎉\tDist folder has been successfully cleaned\e[39m\n\n"

# Browser
printf "\e[96m 📦\tBuilding browser bundle\e[39m\n"
cd browser
npm run build
cd ..
printf "\n\e[92m 🎉\tBrowser bundle has been successfully built\e[39m\n\n"

# Node.js
printf "\e[96m 📦\tBuilding Node.js bundle\e[39m\n"
cd nodejs
npm run build
cd ..
printf "\n\e[92m 🎉\tNode.js bundle has been successfully built\e[39m\n\n"

printf "\e[92m 🎉\t@studiohyperdrive/logger has been successfully built\e[39m\n\n"
