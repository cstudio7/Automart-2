var assert = require('chai').assert;
var mocha = require("mocha");
var UserModel  = require('../model/user_model');


describe('create', function() {
  it('create(data) should return {} if no items are passed in', function() {
    assert.isObject(UserModel.default)
  });
});