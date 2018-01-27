const CryptoJS = require("crypto-js") // o node acha ele sozinho

var ALG = process.argv[2]
if(ALG == 'MD5')
{
   console.log(ALG + ' : ' +CryptoJS.MD5(ALG).toString(CryptoJS.enc.Base64))
}

if(ALG == 'SHA256')
{
    console.log( ALG + ' : ' +CryptoJS.SHA256(ALG).toString(CryptoJS.enc.Base64))
}