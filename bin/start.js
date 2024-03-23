#! /usr/bin/env node
"use strict";

let colors = require("colors");
const path = require("path");
const util = require("util");
const fs = require("fs");
const exec = util.promisify(require("child_process").exec);

async function runCmd(command, color) {
  try {
    const { stdout, stderr } = await exec(command);

    const coloredStdout =
      color && stdout
        ? colors[color](
            `---------------------------------------------------------------- \n${stdout}`
          )
        : stdout;
    const coloredStderr =
      color && stderr
        ? colors[color](
            `---------------------------------------------------------------- \n\n${stderr}`
          )
        : stderr;

    if (coloredStdout) console.log(coloredStdout);

    if (coloredStderr) console.log(coloredStderr);
  } catch (error) {
    console.log(`${error}`.red);
  }
}

if (process.argv.length < 3) {
  console.log();
  console.log(" ERROR ".bgRed);
  console.log(
    `
  *  You have to provide a name to your app\n
  *  For example: npx create-react-toolkit my-app\n`.red
  );
  process.exit(1);
}

const projectName = process.argv[2];
const currentPath = process.cwd();
const appPath = path.join(currentPath, projectName);
const git_repo = "https://github.com/4kauanmota/create-react-toolkit.git";

try {
  fs.mkdirSync(appPath);
} catch (error) {
  if (error.code === "EEXIST") {
    console.log(
      `The file ${projectName} already exist in the current directory, please give it another name`
    );
  } else {
    console.log(error);
  }
  process.exit(1);
}

async function main() {
  try {
    console.log();
    console.log(" Cloning boilrplate... ".bgCyan);
    console.log(
      `
    *  git clone --depth 1 ${git_repo} ${appPath}\n`.cyan
    );
    await runCmd(`git clone --depth 1 ${git_repo} \"${appPath}\"`, "cyan");

    process.chdir(appPath);

    console.log();
    console.log(" Installing dependencies... ".bgMagenta);
    console.log(
      `
    *  npm install\n`.magenta
    );
    await runCmd("npm install", "magenta");

    console.log();
    console.log(" Removing useless files... ".bgYellow.black);
    await runCmd("npx rimraf ./.git", "yellow");

    fs.rmSync(path.join(appPath, "bin"), { recursive: true });
    fs.rmSync(path.join(appPath, "README.md"));
    console.log(
      `
    *  Removing project bin\n
    *  Removing project README.md\n
    *  Removing .git\n`.yellow
    );

    console.log();
    console.log(" Installation successful ".bgGreen);
    console.log(
      `
    *  Check README.md to see more information\n
    *  You can type "cd ${projectName}" to enter in the project folder\n
    *  Thanks for installing and enjoy :)\n`.green
    );
  } catch (error) {
    console.log(error);
  }
}

main();
