'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function () {

  var settings = {},
      env = process.env.NODE_ENV || 'development';

  switch (env) {
    case 'production':
      settings.dbHost = 'sql.example.com';
      settings.dbPort = 3306;
      break;
    default:
      settings.dbHost = '127.0.0.1';
      settings.dbPort = 3306;
      break;
  }

  return settings;
};

exports.default['@singleton'] = true;

// function settings() {

  // var settings = {},
      // env = process.env.NODE_ENV || 'development';

  // switch (env) {
    // case 'production':
      // settings.dbHost = 'sql.example.com';
      // settings.dbPort = 3306;
      // break;
    // default:
      // settings.dbHost = '127.0.0.1';
      // settings.dbPort = 3306;
      // break;
  // }

  // return settings;
// };

// settings['@singleton'] = true;

// exports = module.exports
// exports.default = settings


// function settings() {
  // this.dbHost = 'sql.example.com';
  // this.dbPort = 3306;
// }

// settings['@singleton'] = true;
// module.exports = settings;

// function Desktop(keyboard, cpu, hdd) {
  // this.keyboard = keyboard;
  // this.cpu = cpu;
  // this.hdd = hdd;
// }
// Desktop['@require'] = ['devices/input/numerickeyboard', 'devices/cpu/x86', './storage/hdd'];

// module.exports = Desktop;
