const Service = require('egg').Service;

class TestService extends Service {
  async find() {
    // const test = await this.app.mysql.select('test');
    const test = await this.app.mysql.query('select * from test')
    return test
  }
}

module.exports = TestService;