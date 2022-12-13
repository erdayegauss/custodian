module.exports = (sequelize, Sequelize) => {
    const Whitelist = sequelize.define("whitelist", {
        adminUserId: {
            type: Sequelize.INTEGER,
            primaryKey: true,
        },
        adminUserName: {
            type: Sequelize.STRING
        },
        targetUserId: {
            type: Sequelize.INTEGER,
            primaryKey: true,
        },
        targetUserName: {
            type: Sequelize.STRING
        },
        status: {
            type: Sequelize.STRING
        },
        statusBg: {
            type: Sequelize.STRING
        }
    });

    return Whitelist;
};