"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var fs = require("fs");
var path = require("path");
function apiSave(app) {
    app.route("/api/wallet/save").post(function (req, res) {
        console.log(req.body);
        var email = req.body.email;
        var payload = req.body.payload;
        var filename = email.replace('@', '-').replace('.', '_');
        fs.writeFile(path.join(__dirname, '../data/' + filename + '.dat'), payload, function (err) {
            console.log(arguments);
            if (err)
                res.json({ error: 'Error write file' });
            else
                res.json({ success: 'saved' });
        });
    });
    app.route("/api/wallet/get/:email").post(function (req, res) {
        var email = req.body.email;
        console.log(email);
        var filename = email.replace('@', '-').replace('.', '_');
        console.log(filename);
        fs.readFile(path.join(__dirname, '../data/' + filename + '.dat'), 'utf8', function (err, data) {
            if (err)
                res.json({ error: err });
            else
                res.json({ success: 'success', payload: data });
        });
    });
}
exports.apiSave = apiSave;
//# sourceMappingURL=api-save.js.map