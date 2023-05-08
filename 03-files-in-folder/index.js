// fs.readFile('secret-folder', 'utf8', (err, data) => {
//     if (err) throw err;

//     console.log(data);
// });
import { openSync, closeSync, appendFileSync } from 'node:fs';

let fd;

try {
    fd = openSync('secret-folder', 'a');
    appendFileSync(fd, 'data to append', 'utf8');
} catch (err) {
    /* Handle the error */
} finally {
    if (fd !== undefined)
        closeSync(fd);
}