import {Router} from "express";
import { prayerTime,getCurrency } from "../controllers/header";
const router = Router();

router.route('/prayerTime').get(prayerTime)
router.route('/countryCodes/:token').get(getCurrency)

export default router;