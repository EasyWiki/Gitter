import fs from 'betterfilesystem';
import { execSync } from 'child_process';
import path from 'path';

export class Gitter
{
    public static Gitter: Gitter;

    private _repo: string;
    private _tempFolder: string;

    constructor(repo: string, tempFolder: string)
    {
        Gitter.Gitter = this;

        this._repo = repo;
        this._tempFolder = tempFolder;
    }

    public Clone()
    {
        execSync("git clone \"" + this._repo + "\" \"" + this._tempFolder + "\"", {
            stdio: "ignore"
        });
    }

    public Move(subFolder: string, destFolder: string)
    {
        fs.CopyFolder(path.join(this._tempFolder, subFolder), destFolder, {
            overwrite: true,
            removeDest: true
        });
    }
    
    public RemoveTemp()
    {
        fs.RemoveFolder(this._tempFolder);
    }
}