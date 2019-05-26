import { remote } from 'electron';

/**
 * Application
 */
const app = remote.app;
const fs = require('fs');
const basePath = `${app.getPath("documents")}\\Orb`;

export function fetchSession(sessionKey: string): any {
  alert("trying to read file");
  let rawdata = fs.readFileSync(`${basePath}\\${sessionKey}\\session.json`);
  let json = JSON.parse(rawdata);

  return json;
}

export function listAll() {

  fs.readdir(basePath, (err: any, files: any[]) => {
    files.forEach(file => {
      console.log(file);
    });
  });

  return [
    { "name": "fc-2020", "open": true},
    { "name": "fc-2019", "open": true},
    { "name": "fc-2018", "open": false},
    { "name": "fc-2017", "open": false},
    { "name": "fc-2016", "open": false},
  ];
}