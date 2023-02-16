import express from "express";
import {Router} from "express";
import { getAllRoot } from "../../controllers/contenteditor/gallery";

const router = Router();



// router.route('/announcement/uploadItem').post(postTableAnnouncement);
router.route('/galleryroot/:token').get(getAllRoot);


export default router;