/**
 * Created by Vlad on 7/16/2017.
 */
import {Application, Response, Request} from "express";
import * as fs from 'fs';
import * as path from 'path'

export function apiSave(app:Application){

  app.route("/api/wallet/save").post(function (req: Request, res: Response) {

    let email = req.body.email;
    let payload = req.body.payload;

    let filename = email.replace('@','-').replace('.','+');

    fs.writeFile(path.join(__dirname, '../../data/'+filename+'.dat'),payload, function (err, res) {
      console.log(arguments)
      if(err) res.json({error:'Error write file'})
      else res.json({success:'saved'});
    })

  })

  app.route("/api/wallet/get/:email").get(function (req: Request, res: Response) {

    let email = req.params.email;

    let filename = email.replace('@','-').replace('.','+');

    res.sendFile(path.join(__dirname, '../../data', +filename+'.dat'));

  })


}