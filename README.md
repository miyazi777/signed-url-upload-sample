# 概要
AWS S3の署名付きURLを使用したアップロードのサンプル

## server
npm init -y
npm i npm i aws-sdk express cors

### 起動
node server.js

## client
npx create-react-app .

### 起動
npm start

## AWS S3
CORS setting
```
[
    {
        "AllowedHeaders": [
            "*"
        ],
        "AllowedMethods": [
            "GET",
            "PUT",
            "HEAD"
        ],
        "AllowedOrigins": [
            "*"
        ],
        "ExposeHeaders": [],
        "MaxAgeSeconds": 3000
    }
]
```

