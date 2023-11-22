import fs from 'fs';
import express from 'express';
import {PythonShell} from 'python-shell'

PythonShell.run("index.py", null).then(() => {
    console.log("Script Finished");
})
const app = express();
app.get("/:file", (req, res) => {
    const {file} = req.params;
    fs.readFile(file, (err, data) => {
        if(err){
            res.writeHead(404, {'content-type': "text/plain"});
            return res.end("404, not found");
        }
        res.writeHead(200, {'content-type': "text/plain"});
        res.write(data);
        res.end();
    })
}).listen(8080, () => console.log("http://127.0.0.1:8080/index.txt"));