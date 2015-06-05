"use strict";

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var projectSchema = new Schema({
    username: String,
    name: String
});

module.exports = mongoose.model('Project', projectSchema);