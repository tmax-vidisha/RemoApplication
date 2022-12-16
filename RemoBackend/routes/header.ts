import {Router} from "express";
import { prayerTime,getCurrency,getAmount } from "../controllers/header";
const router = Router();

router.route('/prayerTime').get(prayerTime)
router.route('/countryCodes/:token').get(getCurrency)
router.route('/countrycurrency').post(getAmount)
export default router;