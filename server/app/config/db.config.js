module.exports = {
    HOST: "localhost",
    USER: "root",
    PASSWORD: "password",
    DB: "testdb",
    dialect: "mysql",
    timezone: '+08:00',
    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
    }
};
