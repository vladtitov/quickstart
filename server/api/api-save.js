"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var fs = require("fs");
var path = require("path");
function apiSave(app) {
    app.route("/api/wallet/save").post(function (req, res) {
        var email = req.body.email;
        var payload = req.body.payload;
        var filename = email.replace('@', '-').replace('.', '+');
        fs.writeFile(path.join(__dirname, '../../data/' + filename + '.dat'), payload, function (err, res) {
            console.log(arguments);
            if (err)
                res.json({ error: 'Error write file' });
            else
                res.json({ success: 'saved' });
        });
    });
    app.route("/api/wallet/get/:email").get(function (req, res) {
        var email = req.params.email;
        var filename = email.replace('@', '-').replace('.', '+');
        res.sendFile(path.join(__dirname, '../../data', +filename + '.dat'));
    });
}
exports.apiSave = apiSave;
//# sourceMappingURL=api-save.js.map