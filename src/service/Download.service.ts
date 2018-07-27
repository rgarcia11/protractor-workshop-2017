import { existsSync, mkdirSync, createWriteStream } from 'fs';
import { get } from 'http';

const path = `${__dirname}/../../../temp`;

export class DownloadService {

  public async downloadFile(link, filename): Promise<void> {
    if (!existsSync(path)) {
      mkdirSync(path);
    }

    const file = createWriteStream(`${path}/${filename}`);
    get(link, response => response.pipe(file));
  }

    // public readFileFromTemp(filename: string): Buffer {
    //
    // }
}
