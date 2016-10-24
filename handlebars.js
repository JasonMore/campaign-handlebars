'use strict';

var handlebars = require('handlebars');
var path = require('path');
var fs = require('fs');
var cache = {};

function read (file, done) {
  if (file in cache) {
    return process.nextTick(next);
  }

  fs.readFile(file, { encoding: 'utf8' }, function (err, template) {
    if (err) {
      done(err);
    } else {
      cache[file] = handlebars.compile(template);
      next();
    }
  });

  function next () {
    done(null, cache[file]);
  }
}

module.exports = {
  handlebars: handlebars,
  defaultLayout: path.join(__dirname, 'layout.mu'),
  render: function (file, model, done) {
    read(file, function (err, template) {
      if (err) {
        done(err);
      } else {
        done(null, template(model));
      }
    });
  },
  renderString: function (template, model, done) {
    done(null, template(model));
  }
};
