import {Router} from "express";
import { prayerTime,getCurrency,getAmount,getUnReadEmails } from "../controllers/header";
const router = Router();

router.route('/prayerTime').get(prayerTime)
router.route('/countryCodes/:token').get(getCurrency)
router.route('/unreadmails/:token').get(getUnReadEmails)
router.route('/countrycurrency').post(getAmount)
export default router;