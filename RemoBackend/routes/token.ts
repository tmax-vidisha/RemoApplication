// const express = require("express");
import express from "express";
import { Router } from "express";
import {
  getToken,
  createToken,
  getEventData,
  getQuicklinkData,
  getRecentFilesData,
  getAnnouncementData,
  getNavigationData,
  getCeoMsgData,
  getDepartmentListData,
  getNewsData,
  getEmpData,
  getHeroData,
  getEventsMeetings,
  getRemoNews,
  getRemoHero,
  getRemoPolicy,
  getRemoContentEditorMaster,
  getRemoEvents,
  getRemoQuickLinkData,
  getOrgChartData,
  getUserSpecificQuickLink,
} from "../controllers/token";

const router = Router();
router.route("/").get(getToken).post(createToken);

// router.route('/events').get(getEventData)
router.route("/folder/:token").get(getEventData);
// router.route('/folder/events').get(getEventData)
router.route("/quicklink/:token").get(getQuicklinkData);
router.route("/recentfiles/:token").get(getRecentFilesData);
router.route("/announcement/:token").get(getAnnouncementData);
router.route("/navigation/:token").get(getNavigationData);
router.route("/quicklinksdata/:token").get(getRemoQuickLinkData);
router.route("/orgChart/:token").get(getOrgChartData);
router.route("/ceomsg/:token").get(getCeoMsgData); 
router.route("/DepartmentMaster/:token").get(getDepartmentListData);
router.route("/news/:token").get(getRemoNews);
router.route("/emp/:token").get(getEmpData);
router.route("/hero/:token").get(getRemoHero);
router.route("/mymeetings/:token").get(getEventsMeetings);
router.route("/contenteditormaster/:token").get(getRemoContentEditorMaster);
router.route("/events/:token").get(getRemoEvents);
router.route("/getPolicy/:token").get(getRemoPolicy);
router.route("/userSpecificQuicklinks/:token").get(getUserSpecificQuickLink);
// router.route('/folder').post(getFolderData)
// router.route('/recent').get(createRequset);
// router.route('/ssss').get(sendData)

//  router.route('/folder').get(getFolderData)

// module.exports = router
export default router;
