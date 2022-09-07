import express from "express";
import {Router} from "express";
import { uploadItemInOneDrive } from "../../controllers/onedrive/onedrive";
// import multer from 'multer'
const router = Router();
;
// const upload = multer({ dest: "../../uploads" });
//@ts-ignore
router.route('/uploadItem').post(uploadItemInOneDrive);


export default router;