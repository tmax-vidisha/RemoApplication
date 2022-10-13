import express from "express";
import {Router} from "express";
import { uploadItemInOneDrive,
        getAllOneDriveItemsRoot,
        getOneDriveItemChildren,
        deleteOneDriveItem,
        copylinkDriveItem,
        getAllOneDriveSharedItems
    } from "../../controllers/onedrive/onedrive";
// import multer from 'multer'
const router = Router();
;
// const upload = multer({ dest: "../../uploads" });
//@ts-ignore
router.route('/uploadItem').post(uploadItemInOneDrive);
router.route('/getAllRootItems/:token').get(getAllOneDriveItemsRoot)
router.route('/getItemChildren').post(getOneDriveItemChildren);
router.route('/deleteOneDriveItem').post(deleteOneDriveItem);
router.route('/copylinkOneDriveItem').post(copylinkDriveItem);
router.route('/getSharedItems/:token').get(getAllOneDriveSharedItems)
export default router;