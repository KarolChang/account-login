# Account Login
帳密檢查機制

## Features - 產品功能
1. 使用者可使用測試帳號登入
2. 成功登入後，將於下次造訪網頁時自動進入登入成功的畫面
3. 測試帳號如下 :
> firstName: 'Tony',
email: 'tony@stark.com',
password: 'iamironman'

>firstName: 'Steve',
email: 'captain@hotmail.com',
password: 'icandothisallday'

>firstName: 'Peter',
email: 'peter@parker.com',
password: 'enajyram'

>firstName: 'Natasha',
email: 'natasha@gamil.com',
password: '*parol#@$!'

>firstName: 'Nick',
email: 'nick@shield.com',
password: 'password'

### 首頁
![](./pictures/index.png)
### login success頁面
![](./pictures/success.png)
### email wrong頁面
![](./pictures/email-wrong.png)
### password wrong頁面
![](./pictures/password-wrong.png)

## Installing - 專案安裝流程
1. 開啟終端機，執行以下指令 :
> `git clone https://github.com/KarolChang/account-login.git`

2. 進入專案資料夾
> `cd account-login`

3. 安裝 npm & 透過 npm 安裝以下套件
> `npm install`
> `npm i express express-handlebars body-parser cookie-parser`

4. 安裝nodemon
> `npm install -g nodemon`

5. 啟動專案
> `nodemon app.js`
> 在瀏覽器進入 http://localhost:3000

## Environment & Tools - 環境&使用工具
* [Visual Studio Code編輯器](https://code.visualstudio.com/)
* [Node.js (v10.15.0)](https://nodejs.org/en/)
* [express框架](https://www.npmjs.com/package/express)
* [express handlebars模板引擎](https://www.npmjs.com/package/express-handlebars)
* [body-parser](https://www.npmjs.com/package/body-parser)
* [cookie-parser](https://www.npmjs.com/package/cookie-parser)