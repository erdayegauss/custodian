# Metaharvest

> A web3 custody service

## Start frondend service

```bash
npm install
npm start
```

## Database connection setup

`./server/app/config/db.config.js`

```javascript
module.exports = {
    HOST: ${DB_HOST},
    USER: ${DB_USER},
    PASSWORD: ${DB_PASSWORD},
    DB: ${DB_NAME},
    dialect: "mysql",
    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
    }
};
```

## Create initial data

```bash
node server/createInitData.js
```

## Start backend service

```bash
cd server
npm install
node server.js
```

## Testing user info

```bash
- email: user1   password: password1
- email: user2   password: password2
