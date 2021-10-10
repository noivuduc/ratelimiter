# Introduction

A simple rate limiter service using Token Bucket algorithm. System is designed by following SOLID principle and it's scalable.

# Tech stack
- Typescript ^4.43
- Node.js 14

## Installation

Use the package manager npm to install the application.

```bash
npm install

npm install -G nodemon
```

## Usage

```bash
# start application
npm start
```
By default, server will limit 3 requests per 5 seconds, but you can change.
### Success Request
`GET /data`
    curl -i -H 'Accept: application/json' http://localhost:3000/data
#### Response

    HTTP/1.1 200 OK
    Status: 200 OK
    Connection: close
    Content-Type: application/json
    Content-Length: 2

### Failed Request
`GET /data`
    curl -i -H 'Accept: application/json' http://localhost:3000/data
### Response

    HTTP/1.1 429 Too many request
    Connection: close
    Content-Type: application/json
    Content-Length: 35

   ## License
[MIT](https://choosealicense.com/licenses/mit/)