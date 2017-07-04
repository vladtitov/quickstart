

import {Request, Response} from 'express';
import * as _ from 'lodash';
import {updateLesson} from "../queries/updateLesson";
import {onSuccess} from "./com";
import {onError} from "./com";
import {databaseErrorHandler} from "./com";

export function apiPatchLesson(req:Request, res:Response) {

    const lessonId = req.params.id;

    updateLesson(lessonId, req.body)
        .then(_.partial(onSuccess, res))
        .catch(_.partial(databaseErrorHandler, res))
        .catch( _.partial(onError, res, "Could not update lesson") );

}