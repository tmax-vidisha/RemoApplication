import express from "express";
import {Router} from "express";
import { getAllFoldersSharepointLibrary,getAllItemsInFolderSharepointLibrary } from "../../controllers/photoandvideo/photosandvideos";
const router = Router();

router.route('/getAllPictureFolders/:token').get(getAllFoldersSharepointLibrary);
router.route('/getAllFolderPictureItems').post(getAllItemsInFolderSharepointLibrary);

export default router;