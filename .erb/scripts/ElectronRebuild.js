/*
 * @Author: your name
 * @Date: 2020-12-23 10:29:27
 * @LastEditTime: 2020-12-24 15:03:01
 * @LastEditors: your name
 * @Description: In User Settings Edit
 * @FilePath: \antd-pro-test\.erb\scripts\ElectronRebuild.js
 */
import path from 'path';
import { execSync } from 'child_process';
import fs from 'fs';
import { dependencies } from '../../app/package.json';

const nodeModulesPath = path.join(__dirname, '../../app/node_modules');

if (
  Object.keys(dependencies || {}).length > 0 &&
  fs.existsSync(nodeModulesPath)
) {
  const electronRebuildCmd =
    '../node_modules/.bin/electron-rebuild --parallel --force --types prod,dev,optional --module-dir .';
  const cmd =
    process.platform === 'win32'
      ? electronRebuildCmd.replace(/\//g, '\\')
      : electronRebuildCmd;
  execSync(cmd, {
    cwd: path.join(__dirname, '../../app'),
    stdio: 'inherit',
  });
}
