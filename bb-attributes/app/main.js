var Backbone = require('backbone');
var $ = require('jquery-untouched');
Backbone.$ = $;
Backbone.attributes = require('backbone.attributes');
var _ = require('underscore');

var Movies = Backbone.Collection.extend({
});

var data = require('../movies.json');

var movies = new Movies(data);
_.defaults(movies, Backbone.Attributes);

var Monitor = require('./monitor');
var monitor = new Monitor(movies);

module.exports = movies;
