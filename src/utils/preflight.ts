import { remote } from 'electron';

const app = remote.app;
const fs = require('fs');


export function checkAsync(): Promise<Boolean> {

  return new Promise<Boolean>((resolve, reject) => {
    try {
      const basePath = `${app.getPath("documents")}\\Orb`;
      
      // Ensure config path it exists
      if (!fs.existsSync(basePath)) {
        fs.mkdirSync(basePath);
      }

    } catch (error) {
      reject(reject);
    }
  });
  
}