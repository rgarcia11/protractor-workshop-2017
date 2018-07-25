import { existsSync, mkdirSync } from "fs";
import { get } from 'http';
import { createWriteStream } from 'fs';

export class DownloadService {
    public async downloadFile(link: string, filename): Promise<void> {
        if (!existsSync(`${__dirname}/../../../temp`)){
            mkdirSync(`${__dirname}/../../../temp`);
        }

        var file = createWriteStream(`${__dirname}/../../../temp/${filename}`)
        get(link, function(response) {
            response.pipe(file);
        });
    }

    //public readFileFromTemp(filename: string): Buffer {
    //
    //}
}