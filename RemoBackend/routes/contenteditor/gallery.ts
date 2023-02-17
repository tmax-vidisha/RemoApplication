import express from "express";
import {Router} from "express";
import { getAllRoot,getGalleryChildren } from "../../controllers/contenteditor/gallery";

const router = Router();




router.route('/galleryroot/:token').get(getAllRoot);
router.route('/getGalleryItemChildren').post(getGalleryChildren);

export default router;