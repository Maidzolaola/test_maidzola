Dear Mba Tiara Alamanda,

untuk soal nomer 4, karena aku tidak ada apk Dev/Staging untuk aplikasi Mobile good Doctor, jadi aku membuat Web Automation Good Doctor versi Production ya mba. Semua data yang ku input dalam Automation ini berupa Dummy karena, credential production bersifat rahasia.

How to Running this Automation:
1. Clone This Repository 
2. Run NPM Install on Terminal
3. Run npx wdio run wdio.conf.js --cucumberOpts.tagExpression='@login' on Terminal
4. For Report nya install terlebih dahulu Allure Report -> npm install -g allure-commandline --save-dev
5. allure generate ./allure-results --clean
6. allure open



