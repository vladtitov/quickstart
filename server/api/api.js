"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var apiGetAllPosts_1 = require("../archive/apiGetAllPosts");
var apiGetMenu_1 = require("../utils/apiGetMenu");
var path = require("path");
function initRestApi(app) {
    app.route("/api/app-config").get(function (req, res) {
        res.sendFile(path.join(__dirname, '../../pub', 'app-config.json'));
    });
    app.route("/api/posts").get(apiGetAllPosts_1.apiGetAllPosts);
    app.route("/api/menu/:stamp").get(apiGetMenu_1.apiGetMenu);
}
exports.initRestApi = initRestApi;
