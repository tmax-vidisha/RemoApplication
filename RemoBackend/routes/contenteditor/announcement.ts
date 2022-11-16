import express from "express";
import {Router} from "express";
import { postTableAnnouncement } from "../../controllers/contenteditor/announcement";

const router = Router();



router.route('/announcement/uploadItem').post(postTableAnnouncement);



export default router;