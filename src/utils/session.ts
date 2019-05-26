import { remote } from 'electron';

/**
 * Application
 */
const app = remote.app;
const fs = require('fs');
const basePath = `${app.getPath("documents")}\\Orb`;

export function fetchSession(sessionKey: string): any {
  let rawdata = fs.readFileSync(`${basePath}\\${sessionKey}\\session.json`);
  let json = JSON.parse(rawdata);

  return json;
}

export function listAll() {

  let sessions: {name: String, open: Boolean}[] = [];

  try {
    const basePath = `${app.getPath("documents")}\\Orb`;
    let files = fs.readdirSync(basePath);
    //alert(files);
    files.forEach((file: String) => {
      
      sessions.push({ name: file, open: true });
    });

  } catch (error) {}

  return sessions;
}