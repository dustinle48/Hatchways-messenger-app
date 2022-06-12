const Sequelize = require("sequelize");
const db = require("../db");

const Group = db.define("group", {
    name: {
        type: Sequelize.STRING,
    },
    photoUrl: {
        type: Sequelize.STRING,
    },
    users: {
        type: Sequelize.JSONB,
        defaultValue: [
            {
                id: {
                    type: Sequelize.INTEGER,
                    allowNull: false,
                },
                role: {
                    type: Sequelize.STRING,
                    defaultValue: 'user',
                },
                lastReadTime: {
                    type: Sequelize.DATE,
                },
                onlineStatus: {
                    type: Sequelize.BOOLEAN,
                    defaultValue: false,
                }
            }
        ]
    },
    pinnedMessageId: {
        type: Sequelize.INTEGER,
    },
    bannedUserIds: {
        type: Sequelize.RANGE(Sequelize.INTEGER),
    },
})

module.exports = Group;