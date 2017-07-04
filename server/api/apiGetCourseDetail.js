"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var onSuccess_1 = require("./onSuccess");
var onError_1 = require("./onError");
var findCourseDetail_1 = require("../queries/findCourseDetail");
var _ = require("lodash");
function apiGetCourseDetail(req, res) {
    var courseId = parseInt(req.params.id);
    findCourseDetail_1.findCourseDetail(courseId)
        .then(_.partial(onSuccess_1.onSuccess, res))
        .catch(_.partial(onError_1.onError, res, "Could not find course detail for id " + courseId));
}
exports.apiGetCourseDetail = apiGetCourseDetail;
//# sourceMappingURL=apiGetCourseDetail.js.map