import { existsSync, mkdirSync, createWriteStream } from 'fs';
import { get } from 'http';

export class DownloadService {
  public async downloadFile(link: string, filename): Promise<void> {
    if (!existsSync(`${__dirname}/../../../temp`)) {
      mkdirSync(`${__dirname}/../../../temp`);
    }

    const file = createWriteStream(`${__dirname}/../../../temp/${filename}`);
    get(link, response => response.pipe(file));
  }

    // public readFileFromTemp(filename: string): Buffer {
    //
    // }
}
