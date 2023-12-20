import { existsSync, readdirSync, rename, renameSync } from "node:fs";
import { cwd } from "node:process";
import { join, extname, basename } from 'node:path'

const root = cwd();
const dir = "/src/assets/simpleicon";
const folder = root + dir;

let files = readdirSync(folder);

files.forEach((file, index) => { 
  let fullPath = join(folder, file);
  let fileExtension = extname(file);
  let fileName = basename(file, fileExtension);

  let newFileName = "file" + index + fileExtension;
  console.log(newFileName);

  try {
    renameSync(fullPath, join(folder, newFileName));
  } catch (error) {
    console.error(error)
  }
});
