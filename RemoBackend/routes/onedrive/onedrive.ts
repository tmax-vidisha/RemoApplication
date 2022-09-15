import express from "express";
import {Router} from "express";
import { uploadItemInOneDrive,getAllOneDriveItemsRoot } from "../../controllers/onedrive/onedrive";
// import multer from 'multer'
const router = Router();
;
// const upload = multer({ dest: "../../uploads" });
//@ts-ignore
router.route('/uploadItem').post(uploadItemInOneDrive);
router.route('/getAllRootItems/:token').get(getAllOneDriveItemsRoot);

export default router;