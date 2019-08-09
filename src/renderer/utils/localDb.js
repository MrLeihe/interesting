const low = require('lowdb');
const FileSync = require('lowdb/adapters/FileSync'); // 同步模块
const path = require('path');
const os = require('os');

console.log("-----------------------os.homedir()os.homedir()",os.homedir())
const adapter = new FileSync(path.join(os.homedir()+"/projects/electron-spider", 'datastore.json')); // 存储在本地目录

let db = low(adapter)

db.defaults({ info: [], isActivated: false }).write();

module.exports = db; 