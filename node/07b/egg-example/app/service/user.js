const Service = require('egg').Service

class UserService extends Service {
    async getAll() {
        return [{
            name: 'jerry'
        }]
    }
}

module.exports = UserService