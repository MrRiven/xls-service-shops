'use strict';

const Controller = require('egg').Controller;

class TestController extends Controller {
  async info() {
    const ctx = this.ctx;
    const test = await ctx.service.test.find();
    ctx.body = test;
  }
}

module.exports = TestController;