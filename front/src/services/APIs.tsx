import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
// import { useState } from 'react';
// import { cacher } from "../rtkQueryCacheUtils";
// import useCustom from '../useCustom';
import { AccessToken } from "../App";
// import { Access } from '../useCustom';
import { Configuration, PublicClientApplication } from "@azure/msal-browser";
import { myAsync } from "../hooks/AccessToken";
import { Console } from "console";
// import { configuration } from "../index";
// console.log(AccessToken,'uyiyui76i76i')

const configuration: Configuration = {
  auth: {
    clientId: "892b55ac-991c-4cab-ac8f-453adc364567",
  },
};

//  const {token} = useCustom();
// console.log(token,'rrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrr')

// const accounts = pca.getAllAccounts();
// console.log(AccessToken,'tyttttttttttttttttttttttttttttttttttttttttttttt')
//@ts-ignore
// function s(){
// const acquireAccessToken = async () => {

// const activeAccount = msalInstance.getActiveAccount(); // This will only return a non-null value if you have logic somewhere else that calls the setActiveAccount API

// if (!activeAccount && accounts.length === 0) {
//     /*
//     * User is not signed in. Throw error or wait for user to login.
//     * Do not attempt to log a user in outside of the context of MsalProvider
//     */
// }

//    const  authResult =  msalInstance.acquireTokenSilent(request).then((res)=>{
//     return res
//    });
//  console.log(authResult,'kkkk')
// return authResult.accessToken
// };
// let myToken:string;
// async function getIngress() {

//     const msalInstance = new PublicClientApplication(configuration);
//     const activeAccount = msalInstance.getActiveAccount(); // This will only return a non-null value if you have logic somewhere else that calls the setActiveAccount API
// const accounts = msalInstance.getAllAccounts();
// const request = {
//     scopes: ["User.Read"],
//     account: activeAccount || accounts[0]
// };

// const authResult = await msalInstance.acquireTokenSilent(request);

//    myToken = authResult.accessToken
//    return myToken;
// }
// getIngress();

// async function b(){
// // const wrew:any;
//     const msalInstance = new PublicClientApplication(configuration);
//     const activeAccount = msalInstance.getActiveAccount(); // This will only return a non-null value if you have logic somewhere else that calls the setActiveAccount API
// const accounts = msalInstance.getAllAccounts();
// const request = {
//     scopes: ["User.Read"],
//     account: activeAccount || accounts[0]
// };
//     const q = await msalInstance.acquireTokenSilent(request)
// //    console.log(q.accessToken)
// // return q.accessToken
//  const  wrew = q.accessToken
// //    console.log(wrew)
//  return wrew
// }
// b();
// const {wrew} = b();
// console.log(wrew)

// let we = getIngress().then((res)=> {return res})
// console.log(myToken,'kkkretreyt')
// const ac = s();
// console.log(ac,'kkk')
// Define a service using a base URL and expected endpoints
export const graphApi = createApi({
  reducerPath: "pokemonApi",

  // baseQuery: fetchBaseQuery({baseUrl: 'http://20.80.251.108/',
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:4000/",
    // prepareHeaders: (headers, { getState }) => {
    //     // headers.set('Authorization', `Bearer ${access_token}`);
    //     headers.set('Content-Type', 'application/json');
    //     headers.set("authorization", `${AccessToken}`);
    //     //@ts-ignore
    //     //  console.log(Access,'lllldddlllllllllllll');

    //     // headers.set('Accept', 'application/json');

    //     return headers
    //   },
    prepareHeaders: async (headers, query) => {
      const authResult = await myAsync();
      if (authResult) {
        headers.set("authorization", authResult);
        headers.set("Access-Control-Allow-Origin", "*");
      }
      return headers;
    },
  }),

  tagTypes: [
    "CeoMsg",
    "Hero",
    "Emp",
    "Announcement",
    "News",
    "Events",
    "Navigation",
    "Quicklink",
    "Recent",
    "Meetings",
    "Policy",
    "OrgChart",
    "DepartmentMaster",
  ],
  // keepUnusedDataFor: 30,
  // tagTypes: [...cacher.defaultTags, "User"],
  endpoints: (builder) => ({
    getPokemonByName: builder.query<void, string>({
      query: () => ({
        url: `me`,
        method: "GET",
      }),
    }),

    getIntranet: builder.query<void, string>({
      query: () => `SiteId`,
      transformResponse: (response: any) => {
        const w = response.value;
        let SID;
        {
          w.map((i: any) => {
            SID = i.id;
          });
        }
        return SID;
      },
    }),
    getListInformation: builder.query<any, any>({
      query: () => `listInfo`,
      transformResponse: (response: any) => {
        const resp = response.value;
        let t;
        resp
          .filter((p: any) => p.displayName === "CEO Message")
          .map((f: any) => (t = f.id));
        return t;
      },
    }),
    getListInfoAnouncementId: builder.query<any, any>({
      query: () => `listInfo`,
      transformResponse: (response: any) => {
        const resp = response.value;
        let t;
        resp
          .filter((p: any) => p.displayName === "Announcements")
          .map((f: any) => (t = f.id));
        return t;
      },
    }),

    getCeoMessage: builder.query<any, any>({
      query: () => `CeoMessage`,
      // transformResponse: (response: any) => {
      //     // let y;
      //     const resp =response.value
      //     return resp
      //    }
    }),
    getDepartmentMaster: builder.query<any, any>({
      query: () => `DepartmentMaster`,
      // transformResponse: (response: any) => {
      //     // let y;
      //     const resp =response.value
      //     return resp
      //    }
    }),
    getAnnouncementInfo: builder.query<any, any>({
      query: () => `Announcement`,
      transformResponse: (response: any) => {
        // let y;
        const resp = response.value;
        return resp;
      },
    }),
    getListInfoQuickLinksId: builder.query<any, any>({
      query: () => `listInfo`,
      transformResponse: (response: any) => {
        const resp = response.value;
        let t;
        resp
          .filter((p: any) => p.displayName === "External Quick Links")
          .map((f: any) => (t = f.id));
        return t;
      },
    }),
    getQuickLinks: builder.query<any, any>({
      query: () => `QuickLinks`,
      transformResponse: (response: any) => {
        // let y;
        const resp = response.value;
        return resp;
      },
    }),
    getListEmployeeHighlightId: builder.query<any, any>({
      query: () => `listInfo`,
      transformResponse: (response: any) => {
        const resp = response.value;
        let t;
        resp
          .filter((p: any) => p.displayName === "EmpHighlights")
          .map((f: any) => (t = f.id));
        return t;
      },
    }),
    getEmployeeHighLight: builder.query<any, any>({
      query: () => `employeehighlight`,
      transformResponse: (response: any) => {
        // let y;
        const resp = response;
        return resp;
      },
    }),
    getListNewsId: builder.query<any, any>({
      query: () => `listInfo`,
      transformResponse: (response: any) => {
        const resp = response.value;
        let t;
        resp
          .filter((p: any) => p.displayName === "RemoNews")
          .map((f: any) => (t = f.id));
        return t;
      },
    }),
    getNews: builder.query<any, any>({
      query: () => `News`,
      transformResponse: (response: any) => {
        // let y;
        const resp = response;

        return resp;
      },
    }),
    getEventsId: builder.query<any, any>({
      query: () => `listInfo`,
      transformResponse: (response: any) => {
        const resp = response.value;
        let t;
        resp
          .filter((p: any) => p.displayName === "Events")
          .map((f: any) => (t = f.id));
        return t;
      },
    }),
    getEvents: builder.query<any, any>({
      query: () => `Events`,
      transformResponse: (response: any) => {
        // let y;
        const resp = response.value;
        return resp;
      },
    }),
    getHeroImageId: builder.query<any, any>({
      query: () => `listInfo`,
      transformResponse: (response: any) => {
        const resp = response.value;
        let t;
        resp
          .filter((p: any) => p.displayName === "HeroImages")
          .map((f: any) => (t = f.id));
        return t;
      },
    }),
    getHeroImage: builder.query<any, any>({
      query: () => `HeroImage`,
      transformResponse: (response: any) => {
        // let y;
        const resp = response;
        return resp;
      },
    }),
    getHeroImageInput: builder.query<any, any>({
      query: () => `HeroImage`,
      transformResponse: (response: any) => {
        // let y;
        const resp = response.value;
        return resp;
      },
    }),
    getPhotoGalleryId: builder.query<any, any>({
      query: () => `listInfo`,
      transformResponse: (response: any) => {
        const resp = response.value;
        let t;
        resp
          .filter((p: any) => p.displayName === "Photo Gallery")
          .map((f: any) => (t = f.id));
        return t;
      },
    }),
    getPhotoGallery: builder.query<any, any>({
      query: () => `PhotoGallery`,
      transformResponse: (response: any) => {
        // let y;
        const resp = response.value;
        return resp;
      },
    }),
    getPolicyId: builder.query<any, any>({
      query: () => `listInfo`,
      transformResponse: (response: any) => {
        const resp = response.value;
        let t;
        resp
          .filter((p: any) => p.displayName === "Policy")
          .map((f: any) => (t = f.id));
        return t;
      },
    }),
    getPolicy: builder.query<any, any>({
      query: () => `Policy`,
      transformResponse: (response: any) => {
        // let y;
        const resp = response.value;
        return resp;
      },
      // query: (id) => ({
      //   url: `/api/v1/onedrive/getPolicy/${id}`,
      //   headers: { authorization: `${AccessToken}` },
      // }),
      // //@ts-ignore
      // providesTags: cacher.providesList("User"),
      //  keepUnusedDataFor: 5,
      //providesTags: ["Policy"],
    }),
    getNavigationId: builder.query<any, any>({
      query: () => `listInfo`,
      transformResponse: (response: any) => {
        const resp = response.value;
        let t;
        resp
          .filter((p: any) => p.displayName === "Navigation")
          .map((f: any) => (t = f.id));
        return t;
      },
    }),
    getTopNavigation: builder.query<any, any>({
      query: () => `Navigation`,
      transformResponse: (response: any) => {
        // let y;
        const resp = response.value;
        return resp;
      },
    }),
    getRecentFiles: builder.query<any, any>({
      query: () => `RecentFiles`,
      transformResponse: (response: any) => {
        // let y;
        const resp = response.value;
        return resp;
      },
    }),
    createListItem: builder.mutation<any, any>({
      query: (data) => ({
        url: "list/listItem",
        headers: { "Content-Type": "application/json" },
        method: "POST",
        body: data,
      }),
    }),
    getAllUserQuickLinks: builder.query<any, any>({
      query: () => `alluserquicklinks`,
      transformResponse: (response: any) => {
        // let y;
        const resp = response.value;
        return resp;
      },
    }),
    postGlobalListId: builder.mutation<any, any>({
      query: (data) => ({
        url: "/list/globalid",
        headers: { "Content-Type": "application/json" },
        method: "POST",
        body: data,
      }),
    }),
    createCeoMessage: builder.mutation<any, any>({
      query: (data) => ({
        url: "newceo",
        headers: { "Content-Type": "application/json" },
        method: "POST",
        body: data,
      }),
    }),
    createDepartmentMaster: builder.mutation<any, any>({
      query: (data) => ({
        url: "newDepartment",
        headers: { "Content-Type": "application/json" },
        method: "POST",
        body: data,
      }),
    }),
    createAnnouncement: builder.mutation<any, any>({
      query: (data) => ({
        url: "announcementinput",
        headers: { "Content-Type": "application/json" },
        method: "POST",
        body: data,
      }),
    }),
    createEvent: builder.mutation<any, any>({
      query: (data) => ({
        url: "eventinput",
        headers: { "Content-Type": "application/json" },
        method: "POST",
        body: data,
      }),
    }),
    createPolicy: builder.mutation<any, any>({
      query: (data) => ({
        url: "policyinput",
        headers: { "Content-Type": "application/json" },
        method: "POST",
        body: data,
      }),
    }),
    createHero: builder.mutation<any, any>({
      query: (data) => ({
        url: "heroinput",
        headers: { "Content-Type": "application/json" },
        method: "POST",
        body: data,
      }),
    }),
    createEmployeeHighlight: builder.mutation<any, any>({
      query: (data) => ({
        url: "employeeInput",
        headers: { "Content-Type": "application/json" },
        method: "POST",
        body: data,
      }),
    }),
    createNewsInput: builder.mutation<any, any>({
      query: (data) => ({
        url: "newsInput",
        headers: { "Content-Type": "application/json" },
        method: "POST",
        body: data,
      }),
    }),
    getUnReadMails: builder.query<any, any>({
      query: () => `unreadmails`,
      transformResponse: (response: any) => {
        // let y;
        const resp = response.value;
        return resp;
      },
    }),
    getAllSubSites: builder.query<any, any>({
      query: () => `allSubSites`,
      transformResponse: (response: any) => {
        // let y;
        const resp = response.value;
        return resp;
      },
    }),
    getImage: builder.query<any, any>({
      query: () => `image`,
      transformResponse: (response: any) => {
        // let y;
        const resp = response;
        return resp;
      },
    }),
    getDrives: builder.query<any, any>({
      query: () => `getDrivesofSites`,
      transformResponse: (response: any) => {
        // let y;
        const resp = response.value;
        return resp;
      },
    }),
    getFolders: builder.query<any, any>({
      query: () => `getFolder`,
      transformResponse: (response: any) => {
        // let y;
        const resp = response.value;
        return resp;
      },
    }),
    getSubFolders: builder.query<any, any>({
      query: () => `getsubFolder`,
      transformResponse: (response: any) => {
        // let y;
        const resp = response.value;
        return resp;
      },
    }),
    createsubSite: builder.mutation<any, any>({
      query: (data) => ({
        url: "subsite",
        headers: { "Content-Type": "application/json" },
        method: "POST",
        body: data,
      }),
    }),
    createDrive: builder.mutation<any, any>({
      query: (data) => ({
        url: "drive",
        headers: { "Content-Type": "application/json" },
        method: "POST",
        body: data,
      }),
    }),
    updateToken: builder.mutation<any, any>({
      query: (id) => ({
        url: `/api/v1/token/folder/${id}`,
        method: "PATCH",
        body: id,
      }),
      transformResponse: (response: any) => {
        // let y;
        const resp = response;
        return resp;
      },
      // invalidatesTags: ['ObjectiveDescription']
    }),
    getAllEvents: builder.query<any, any>({
      query: (id) => ({
        url: `/api/v1/token/folder/${id}`,
        // method: 'GET',
        headers: { authorization: `${AccessToken}` },
      }),
      // //@ts-ignore
      // providesTags: cacher.providesList("User"),
      //  keepUnusedDataFor: 5,
      providesTags: ["Events"],
    }),
    getAllEvt: builder.query<any, any>({
      query: () => ({
        url: "/api/v1/token/folder/events",
        //   headers:{ "authorization": `${Access}` },
      }),
      providesTags: ["Events"],
    }),
    updateQuicklinkToken: builder.mutation<any, any>({
      query: (id) => ({
        url: `/api/v1/token/quicklink/${id}`,
        method: "PATCH",
        body: id,
      }),
      transformResponse: (response: any) => {
        // let y;
        const resp = response;
        return resp;
      },
      // invalidatesTags: ['ObjectiveDescription']
    }),
    getAllQuickLink: builder.query<any, any>({
      query: (id) => ({
        url: `/api/v1/token/quicklink/${id}`,
        headers: { authorization: `${AccessToken}` },
      }),
      // //@ts-ignore
      // providesTags: cacher.providesList("User"),
      // keepUnusedDataFor: 5,
      providesTags: ["Quicklink"],
    }),
    getAllOrgChart: builder.query<any, any>({
      query: (id) => ({
        url: `/api/v1/token/orgChart/${id}`,
        headers: { authorization: `${AccessToken}` },
      }),
      // //@ts-ignore
      // providesTags: cacher.providesList("User"),
      // keepUnusedDataFor: 5,
      providesTags: ["OrgChart"],
    }),
    updateRecentFilesToken: builder.mutation<any, any>({
      query: (id) => ({
        url: `/api/v1/token/recentfiles/${id}`,
        method: "PATCH",
        body: id,
      }),
      transformResponse: (response: any) => {
        // let y;
        const resp = response;
        return resp;
      },
      // invalidatesTags: ['ObjectiveDescription']
    }),
    getAllRecentFiles: builder.query<any, any>({
      query: (id) => ({
        url: `/api/v1/token/recentfiles/${id}`,
        headers: { authorization: `${AccessToken}` },
      }),
      // //@ts-ignore
      // providesTags: cacher.providesList("User"),
      //  keepUnusedDataFor: 5,
      providesTags: ["Recent"],
    }),

    updateAnnouncementToken: builder.mutation<any, any>({
      query: (id) => ({
        url: `/api/v1/token/announcement/${id}`,
        method: "PATCH",
        body: id,
      }),
      transformResponse: (response: any) => {
        // let y;
        const resp = response;
        return resp;
      },
      // invalidatesTags: ['ObjectiveDescription']
    }),
    getAllAnnoncements: builder.query<any, any>({
      query: (id) => ({
        url: `/api/v1/token/announcement/${id}`,
        headers: { authorization: `${AccessToken}` },
      }),
      // //@ts-ignore
      // providesTags: cacher.providesList("User"),
      //  keepUnusedDataFor: 5,
      providesTags: ["Announcement"],
    }),

    updateNavigationToken: builder.mutation<any, any>({
      query: (id) => ({
        url: `/api/v1/token/navigation/${id}`,
        method: "PATCH",
        body: id,
      }),
      transformResponse: (response: any) => {
        // let y;
        const resp = response;
        return resp;
      },
      // invalidatesTags: ['ObjectiveDescription']
    }),
    getAllNavigation: builder.query<any, any>({
      query: (id) => ({
        url: `/api/v1/token/navigation/${id}`,
        headers: { authorization: `${AccessToken}` },
      }),
      // //@ts-ignore
      // providesTags: cacher.providesList("User"),
      // keepUnusedDataFor: 5,
      providesTags: ["Navigation"],
    }),
    updateCeoMsgToken: builder.mutation<any, any>({
      query: (id) => ({
        url: `/api/v1/token/ceomsg/${id}`,
        method: "PATCH",
        body: id,
      }),
      transformResponse: (response: any) => {
        // let y;
        const resp = response;
        return resp;
      },
      // invalidatesTags: ['ObjectiveDescription']
    }),
    updateDepartmentMasterToken: builder.mutation<any, any>({
      query: (id) => ({
        url: `/api/v1/token/DepartmentMaster/${id}`,
        method: "PATCH",
        body: id,
      }),
      transformResponse: (response: any) => {
        // let y;
        const resp = response;
        return resp;
      },
      // invalidatesTags: ['ObjectiveDescription']
    }),
    getAllCeoMsg: builder.query<any, any>({
      query: (id) => ({
        url: `/api/v1/token/ceomsg/${id}`,
        headers: { authorization: `${AccessToken}` },
      }),
      // //@ts-ignore
      // providesTags: cacher.providesList("User"),
      //  keepUnusedDataFor: 5,
      providesTags: ["CeoMsg"],
    }),
    getAllDepartmentMaster: builder.query<any, any>({
      query: (id) => ({
        url: `/api/v1/token/DepartmentMaster/${id}`,
        headers: { authorization: `${AccessToken}` },
      }),

      // //@ts-ignore
      // providesTags: cacher.providesList("User"),
      //  keepUnusedDataFor: 5,
      providesTags: ["DepartmentMaster"],
    }),
    updateNewsToken: builder.mutation<any, any>({
      query: (id) => ({
        url: `/api/v1/token/news/${id}`,
        method: "PATCH",
        body: id,
      }),
      transformResponse: (response: any) => {
        // let y;
        const resp = response;
        return resp;
      },
      // invalidatesTags: ['ObjectiveDescription']
    }),
    getAllNews: builder.query<any, any>({
      query: (id) => ({
        url: `/api/v1/token/news/${id}`,
        headers: { authorization: `${AccessToken}` },
      }),
      // //@ts-ignore
      // providesTags: cacher.providesList("User"),
      //  keepUnusedDataFor: 5,
      providesTags: ["News"],
    }),
    updateEmpToken: builder.mutation<any, any>({
      query: (id) => ({
        url: `/api/v1/token/emp/${id}`,
        method: "PATCH",
        body: id,
      }),
      transformResponse: (response: any) => {
        // let y;
        const resp = response;
        return resp;
      },
      // invalidatesTags: ['ObjectiveDescription']
    }),
    getAllEmp: builder.query<any, any>({
      query: (id) => ({
        url: `/api/v1/token/emp/${id}`,
        headers: { authorization: `${AccessToken}` },
      }),
      // //@ts-ignore
      // providesTags: cacher.providesList("User"),
      //  keepUnusedDataFor: 5,
      providesTags: ["Emp"],
    }),
    updateHeroToken: builder.mutation<any, any>({
      query: (id) => ({
        url: `/api/v1/token/hero/${id}`,
        method: "PATCH",
        body: id,
      }),
      transformResponse: (response: any) => {
        // let y;
        const resp = response;
        return resp;
      },
      // invalidatesTags: ['ObjectiveDescription']
    }),
    getAllHero: builder.query<any, any>({
      query: (id) => ({
        url: `/api/v1/token/hero/${id}`,
        headers: { authorization: `${AccessToken}` },
      }),
      // //@ts-ignore
      // providesTags: cacher.providesList("User"),
      //  keepUnusedDataFor: 5,
      providesTags: ["Hero"],
    }),
    getAllMeetings: builder.query<any, any>({
      query: (id) => ({
        url: `/api/v1/token/mymeetings/${id}`,
        headers: { authorization: `${AccessToken}` },
      }),
      // //@ts-ignore
      // providesTags: cacher.providesList("User"),
      //  keepUnusedDataFor: 5,
      providesTags: ["Meetings"],
    }),
    getData: builder.query<any, any>({
      query: (id) => `/api/v1/token/folder`,
      transformResponse: (response: any) => {
        // let y;
        const resp = response.value;
        return resp;
      },
    }),
    createResponse: builder.mutation<any, any>({
      query: (data) => ({
        url: "api/v1/token/folder",
        mode: "no-cors",
        // headers:{ 'Content-Type': 'application/json' },
        method: "POST",
        body: data,
      }),
      transformResponse: (response: any) => {
        // let y;
        const resp = response;
        return resp;
      },
      // invalidatesTags: ['Calender'],
    }),
    createTokenwithData: builder.mutation<any, any>({
      query: (data) => ({
        url: "api/v1/lists/data",
        // headers:{ 'Content-Type': 'application/json' },
        method: "POST",
        body: data,
      }),
    }),
    createTokenwithEventData: builder.mutation<any, any>({
      query: (data) => ({
        url: "api/v1/lists/eventdata",
        // headers:{ 'Content-Type': 'application/json' },
        method: "POST",
        body: data,
      }),
    }),
    createTokenwithEventDataOne: builder.mutation<any, any>({
      query: (data) => ({
        url: "api/v1/lists/eventdataOne",
        // headers:{ 'Content-Type': 'application/json' },
        method: "POST",
        body: data,
      }),
    }),
    createTokenwithEventDataLanding: builder.mutation<any, any>({
      query: (data) => ({
        url: "api/v1/lists/eventdataLanding",
        // headers:{ 'Content-Type': 'application/json' },
        method: "POST",
        body: data,
      }),
    }),
    createTokenwithHeroData: builder.mutation<any, any>({
      query: (data) => ({
        url: "api/v1/lists/herodata",
        // headers:{ 'Content-Type': 'application/json' },
        method: "POST",
        body: data,
      }),
    }),
    createTokenwithCeoData: builder.mutation<any, any>({
      query: (data) => ({
        url: "api/v1/lists/ceodata",
        // headers:{ 'Content-Type': 'application/json' },
        method: "POST",
        body: data,
      }),
    }),
    createTokenwithDepartmentMasterData: builder.mutation<any, any>({
      query: (data) => ({
        url: "api/v1/lists/DepartmentMasterdata",
        // headers:{ 'Content-Type': 'application/json' },
        method: "POST",
        body: data,
      }),
    }),
    createTokenwithNewsData: builder.mutation<any, any>({
      query: (data) => ({
        url: "api/v1/lists/newsdata",
        // headers:{ 'Content-Type': 'application/json' },
        method: "POST",
        body: data,
      }),
    }),
    createTokenwithEmpData: builder.mutation<any, any>({
      query: (data) => ({
        url: "api/v1/lists/empdata",
        // headers:{ 'Content-Type': 'application/json' },
        method: "POST",
        body: data,
      }),
    }),
    createTokenwithEmpDataItemId: builder.mutation<any, any>({
      query: (data) => ({
        url: "api/v1/lists/empItemdata",
        // headers:{ 'Content-Type': 'application/json' },
        method: "POST",
        body: data,
      }),
    }),
    createTokenwithUserQuickData: builder.mutation<any, any>({
      query: (data) => ({
        url: "api/v1/lists/userquicklinkdata",
        // headers:{ 'Content-Type': 'application/json' },
        method: "POST",
        body: data,
      }),
    }),
    postRemoUserQuickLinkData: builder.mutation<any, any>({
      query: (data) => ({
        url: "api/v1/lists/userRemoquicklinkdata",
        // headers:{ 'Content-Type': 'application/json' },
        method: "POST",
        body: data,
      }),
    }),
    getAllsubSites: builder.query<any, any>({
      query: (id) => ({
        url: `/api/v1/sites/subSites/${id}`,
        headers: { authorization: `${AccessToken}` },
      }),
      // //@ts-ignore
      // providesTags: cacher.providesList("User"),
      //  keepUnusedDataFor: 5,
      // providesTags : [ 'Hero'],
    }),
    createTokenwithDrivesOfSubSites: builder.mutation<any, any>({
      query: (data) => ({
        url: "/api/v1/sites/subSites/drives",
        // headers:{ 'Content-Type': 'application/json' },
        method: "POST",
        body: data,
      }),
      transformResponse: (response: any) => {
        // let y;
        // const resp = response
        return response;
      },
    }),
    createTokenwithSubSitesOfItems: builder.mutation<any, any>({
      query: (data) => ({
        url: "/api/v1/sites/subSites/drives/root",
        // headers:{ 'Content-Type': 'application/json' },
        method: "POST",
        body: data,
      }),
      transformResponse: (response: any) => {
        // let y;
        // const resp = response
        return response;
      },
    }),
    createTokenwithSubSitesofItemsId: builder.mutation<any, any>({
      query: (data) => ({
        url: "/api/v1/sites/subSites/drives/items/id",
        // headers:{ 'Content-Type': 'application/json' },
        method: "POST",
        body: data,
      }),
      transformResponse: (response: any) => {
        // let y;
        // const resp = response
        return response;
      },
    }),
    createTokenwithDataWorkspace: builder.mutation<any, any>({
      query: (data) => ({
        url: "api/v1/sites/subSites",
        // headers:{ 'Content-Type': 'application/json' },
        method: "POST",
        mode: "no-cors",
        body: data,
      }),
    }),
    getAllContentEditor: builder.query<any, any>({
      query: (id) => ({
        url: `/api/v1/token/contenteditormaster/${id}`,
        headers: { authorization: `${AccessToken}` },
      }),
      // //@ts-ignore
      // providesTags: cacher.providesList("User"),
      //  keepUnusedDataFor: 5,
      // providesTags : [ 'News'],
    }),
    getAllRemoQuickLinkData: builder.query<any, any>({
      query: (id) => ({
        url: `/api/v1/token/quicklinksdata/${id}`,
        headers: { authorization: `${AccessToken}` },
      }),
      // //@ts-ignore
      // providesTags: cacher.providesList("User"),
      //  keepUnusedDataFor: 5,
      // providesTags : [ 'News'],
    }),
    getAllRemoEvents: builder.query<any, any>({
      query: (id) => ({
        url: `/api/v1/token/events/${id}`,
        headers: { authorization: `${AccessToken}` },
      }),
      // //@ts-ignore
      // providesTags: cacher.providesList("User"),
      //  keepUnusedDataFor: 5,
      // providesTags : [ 'News'],
    }),
    getAllUserSpecificQuiclinks: builder.query<any, any>({
      query: (id) => ({
        url: `/api/v1/token/userSpecificQuicklinks/${id}`,
        headers: { authorization: `${AccessToken}` },
      }),
      // //@ts-ignore
      // providesTags: cacher.providesList("User"),
      //  keepUnusedDataFor: 5,
      // providesTags : [ 'News'],
    }),
  }),
});

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const {
  useGetPokemonByNameQuery,
  // useGetImageCeoQuery,
  useGetListInfoAnouncementIdQuery,
  useGetListInfoQuickLinksIdQuery,
  useGetAnnouncementInfoQuery,
  useGetIntranetQuery,
  useGetListEmployeeHighlightIdQuery,
  useGetEmployeeHighLightQuery,
  useGetListNewsIdQuery,
  useGetQuickLinksQuery,
  useGetEventsIdQuery,
  useGetNavigationIdQuery,
  useGetHeroImageIdQuery,
  useGetHeroImageQuery,
  useGetHeroImageInputQuery,
  useGetPhotoGalleryIdQuery,
  useGetPhotoGalleryQuery,
  useGetRecentFilesQuery,
  useGetTopNavigationQuery,
  useGetNewsQuery,
  useGetEventsQuery,
  useGetCeoMessageQuery,
  useGetDepartmentMasterQuery,
  useGetListInformationQuery,
  useCreateListItemMutation,
  useGetAllUserQuickLinksQuery,
  usePostGlobalListIdMutation,
  useCreateCeoMessageMutation,
  useCreateDepartmentMasterMutation,
  useCreateAnnouncementMutation,
  useCreateEventMutation,
  useGetImageQuery,
  useGetUnReadMailsQuery,
  useCreateHeroMutation,
  useCreateEmployeeHighlightMutation,
  useCreateNewsInputMutation,
  useGetAllSubSitesQuery,
  useCreatesubSiteMutation,
  useGetDrivesQuery,
  useCreateDriveMutation,
  useGetFoldersQuery,
  useGetSubFoldersQuery,
  useUpdateTokenMutation,
  useGetDataQuery,
  useCreateResponseMutation,
  useCreateTokenwithDataMutation,
  useCreateTokenwithEventDataMutation,
  useCreateTokenwithHeroDataMutation,
  useCreateTokenwithCeoDataMutation,
  useCreateTokenwithDepartmentMasterDataMutation,
  useCreateTokenwithNewsDataMutation,
  useCreateTokenwithEmpDataMutation,
  useCreateTokenwithUserQuickDataMutation,
  useGetAllsubSitesQuery,
  useCreateTokenwithDrivesOfSubSitesMutation,
  useCreateTokenwithSubSitesOfItemsMutation,
  useCreateTokenwithSubSitesofItemsIdMutation,
  useCreateTokenwithDataWorkspaceMutation,
  useUpdateQuicklinkTokenMutation,
  useUpdateRecentFilesTokenMutation,
  useUpdateAnnouncementTokenMutation,
  useUpdateNavigationTokenMutation,
  // useUpdateDepartmentTokenMutation,
  useUpdateCeoMsgTokenMutation,
  useUpdateDepartmentMasterTokenMutation,
  useUpdateNewsTokenMutation,
  useUpdateEmpTokenMutation,
  useUpdateHeroTokenMutation,
  useGetAllEventsQuery,
  useGetAllEvtQuery,
  useGetAllQuickLinkQuery,
  useGetAllRecentFilesQuery,
  useGetAllAnnoncementsQuery,
  useGetAllNavigationQuery,
  useGetAllCeoMsgQuery,
  useGetAllDepartmentMasterQuery,
  useGetAllNewsQuery,
  useGetAllEmpQuery,
  useGetAllHeroQuery,
  useGetPolicyQuery,
  useGetAllMeetingsQuery,
  useCreateTokenwithEmpDataItemIdMutation,
  useCreateTokenwithEventDataOneMutation,
  useCreateTokenwithEventDataLandingMutation,
  useGetAllContentEditorQuery,
  useGetAllRemoEventsQuery,
  useGetAllRemoQuickLinkDataQuery,
  useGetAllOrgChartQuery,
  usePostRemoUserQuickLinkDataMutation,
  useGetAllUserSpecificQuiclinksQuery,
} = graphApi;

export const BASE_URL = `https://graph.microsoft.com/v1.0/sites`;
export const siteId =
  "tmxin.sharepoint.com,39018770-3534-4cef-a057-785c43b6a200,47c126a5-33ee-420a-a84a-c8430a368a43";
export const driveId =
  "b!cIcBOTQ170ygV3hcQ7aiAKUmwUfuMwpCqErIQwo2ikNps-KrSiBRRaQqH-cwLSeg";
export const folderPath = "root/children";

const documentUrl = `${BASE_URL}/${siteId}/drives/${driveId}/${folderPath}`;

// const siteId = "tmxin.sharepoint.com,39018770-3534-4cef-a057-785c43b6a200";
// const listId = "47c126a5-33ee-420a-a84a-c8430a368a43";
const accessToken =
  "eyJ0eXAiOiJKV1QiLCJub25jZSI6IkswTGI1OUJFb0JRdHRyRmdRRks2MFd4WTQyNnk2VUVxUEJvalZTUnRTcDAiLCJhbGciOiJSUzI1NiIsIng1dCI6Ii1LSTNROW5OUjdiUm9meG1lWm9YcWJIWkdldyIsImtpZCI6Ii1LSTNROW5OUjdiUm9meG1lWm9YcWJIWkdldyJ9.eyJhdWQiOiIwMDAwMDAwMy0wMDAwLTAwMDAtYzAwMC0wMDAwMDAwMDAwMDAiLCJpc3MiOiJodHRwczovL3N0cy53aW5kb3dzLm5ldC83NzdjZmVmZi04MmVmLTQ1YTktYTJiOC1iNzhhODMwMTM4ZDIvIiwiaWF0IjoxNjg1NDY3Mjc1LCJuYmYiOjE2ODU0NjcyNzUsImV4cCI6MTY4NTU1Mzk3NSwiYWNjdCI6MCwiYWNyIjoiMSIsImFpbyI6IkFWUUFxLzhUQUFBQVRyLzcvRlArL0xaVVFzUUdiZDVLcG1xMFVSYW1teC83YTVjbWp3MHRvbVJKdHpFZHhValo1REU1OFcvQnYwY2RJMS8yanhlTWt1UUNCc3RUcjF2K0lsM0Uvd2pCRE5ZZ1RwMXhQNEZ6bGhjPSIsImFtciI6WyJwd2QiLCJtZmEiXSwiYXBwX2Rpc3BsYXluYW1lIjoiR3JhcGggRXhwbG9yZXIiLCJhcHBpZCI6ImRlOGJjOGI1LWQ5ZjktNDhiMS1hOGFkLWI3NDhkYTcyNTA2NCIsImFwcGlkYWNyIjoiMCIsImZhbWlseV9uYW1lIjoiS2hhdHVuIiwiZ2l2ZW5fbmFtZSI6IkphaGFuYXJhIiwiaWR0eXAiOiJ1c2VyIiwiaXBhZGRyIjoiMTE1LjE4Ny40My40MiIsIm5hbWUiOiJKYWhhbmFyYSBLaGF0dW4iLCJvaWQiOiI1Njc5ODg4My0zMDI1LTRhZjctYjE5Yi04Njc3OTk2OTE3NzgiLCJwbGF0ZiI6IjMiLCJwdWlkIjoiMTAwMzIwMDFDODRBODEwNSIsInB3ZF9leHAiOiI1ODE5ODUiLCJwd2RfdXJsIjoiaHR0cHM6Ly9wb3J0YWwubWljcm9zb2Z0b25saW5lLmNvbS9DaGFuZ2VQYXNzd29yZC5hc3B4IiwicmgiOiIwLkFWTUFfXzU4ZC0tQ3FVV2l1TGVLZ3dFNDBnTUFBQUFBQUFBQXdBQUFBQUFBQUFCVEFCOC4iLCJzY3AiOiJBY2Nlc3NSZXZpZXcuUmVhZC5BbGwgQWNjZXNzUmV2aWV3LlJlYWRXcml0ZS5BbGwgQWNjZXNzUmV2aWV3LlJlYWRXcml0ZS5NZW1iZXJzaGlwIEFQSUNvbm5lY3RvcnMuUmVhZC5BbGwgQVBJQ29ubmVjdG9ycy5SZWFkV3JpdGUuQWxsIENhbGVuZGFycy5SZWFkLlNoYXJlZCBDaGFubmVsLlJlYWRCYXNpYy5BbGwgQ2hhbm5lbFNldHRpbmdzLlJlYWQuQWxsIENoYW5uZWxTZXR0aW5ncy5SZWFkV3JpdGUuQWxsIEN1c3RvbUF1dGhlbnRpY2F0aW9uRXh0ZW5zaW9uLlJlYWQuQWxsIEN1c3RvbUF1dGhlbnRpY2F0aW9uRXh0ZW5zaW9uLlJlYWRXcml0ZS5BbGwgQ3VzdG9tU2VjQXR0cmlidXRlQXNzaWdubWVudC5SZWFkLkFsbCBDdXN0b21TZWNBdHRyaWJ1dGVBc3NpZ25tZW50LlJlYWRXcml0ZS5BbGwgQ3VzdG9tU2VjQXR0cmlidXRlRGVmaW5pdGlvbi5SZWFkLkFsbCBDdXN0b21TZWNBdHRyaWJ1dGVEZWZpbml0aW9uLlJlYWRXcml0ZS5BbGwgRGlyZWN0b3J5LkFjY2Vzc0FzVXNlci5BbGwgRGlyZWN0b3J5LlJlYWQuQWxsIERpcmVjdG9yeS5SZWFkV3JpdGUuQWxsIEZpbGVzLlJlYWQgRmlsZXMuUmVhZC5BbGwgRmlsZXMuUmVhZFdyaXRlIEZpbGVzLlJlYWRXcml0ZS5BbGwgR3JvdXAuUmVhZC5BbGwgR3JvdXAuUmVhZFdyaXRlLkFsbCBJZGVudGl0eVJpc2t5VXNlci5SZWFkLkFsbCBJZGVudGl0eVJpc2t5VXNlci5SZWFkV3JpdGUuQWxsIG9wZW5pZCBwcm9maWxlIFJlcG9ydHMuUmVhZC5BbGwgU2l0ZXMuUmVhZC5BbGwgU2l0ZXMuUmVhZFdyaXRlLkFsbCBUZWFtLlJlYWRCYXNpYy5BbGwgVGVhbXNBY3Rpdml0eS5SZWFkIFRlYW1zQWN0aXZpdHkuU2VuZCBUZWFtc0FwcC5SZWFkIFRlYW1zQXBwLlJlYWQuQWxsIFRlYW1zQXBwLlJlYWRXcml0ZSBUZWFtc0FwcC5SZWFkV3JpdGUuQWxsIFRlYW1zQXBwSW5zdGFsbGF0aW9uLlJlYWRGb3JDaGF0IFRlYW1zQXBwSW5zdGFsbGF0aW9uLlJlYWRGb3JUZWFtIFRlYW1zQXBwSW5zdGFsbGF0aW9uLlJlYWRGb3JVc2VyIFRlYW1zQXBwSW5zdGFsbGF0aW9uLlJlYWRXcml0ZUZvckNoYXQgVGVhbXNBcHBJbnN0YWxsYXRpb24uUmVhZFdyaXRlRm9yVGVhbSBUZWFtc0FwcEluc3RhbGxhdGlvbi5SZWFkV3JpdGVGb3JVc2VyIFRlYW1zQXBwSW5zdGFsbGF0aW9uLlJlYWRXcml0ZVNlbGZGb3JDaGF0IFRlYW1zQXBwSW5zdGFsbGF0aW9uLlJlYWRXcml0ZVNlbGZGb3JUZWFtIFRlYW1zQXBwSW5zdGFsbGF0aW9uLlJlYWRXcml0ZVNlbGZGb3JVc2VyIFRlYW1TZXR0aW5ncy5SZWFkLkFsbCBUZWFtU2V0dGluZ3MuUmVhZFdyaXRlLkFsbCBUZWFtc1RhYi5DcmVhdGUgVGVhbXNUYWIuUmVhZC5BbGwgVGVhbXNUYWIuUmVhZFdyaXRlLkFsbCBUZWFtc1RhYi5SZWFkV3JpdGVGb3JDaGF0IFRlYW1zVGFiLlJlYWRXcml0ZUZvclRlYW0gVGVhbXNUYWIuUmVhZFdyaXRlRm9yVXNlciBVc2VyLlJlYWQgVXNlci5SZWFkLkFsbCBVc2VyLlJlYWRCYXNpYy5BbGwgVXNlci5SZWFkV3JpdGUgVXNlci5SZWFkV3JpdGUuQWxsIGVtYWlsIiwic2lnbmluX3N0YXRlIjpbImttc2kiXSwic3ViIjoiUXhtTGZQaVdCRmRLdHRJMExIY1A5WFE1LTc1cE9VRWtLY0t6aUc0NEM2RSIsInRlbmFudF9yZWdpb25fc2NvcGUiOiJBUyIsInRpZCI6Ijc3N2NmZWZmLTgyZWYtNDVhOS1hMmI4LWI3OGE4MzAxMzhkMiIsInVuaXF1ZV9uYW1lIjoiamFoYW5hcmEua0B0bWF4LmluIiwidXBuIjoiamFoYW5hcmEua0B0bWF4LmluIiwidXRpIjoidFFoMUNaaWRBVTZ6TzJZbVNhLVJBQSIsInZlciI6IjEuMCIsIndpZHMiOlsiYjc5ZmJmNGQtM2VmOS00Njg5LTgxNDMtNzZiMTk0ZTg1NTA5Il0sInhtc19jYyI6WyJDUDEiXSwieG1zX3NzbSI6IjEiLCJ4bXNfc3QiOnsic3ViIjoiOXhJR05COWFuUXlCeUczc0d2a0pIN1d4YUR4U01lanFqd3gzckRQT3E5MCJ9LCJ4bXNfdGNkdCI6MTU0ODA0NDQ3MH0.bsv1jiz-9ZtCh0YnZy4x0mS3AF51R4S0L3PvWqOwY1t71ZKaY8HJcsp1SJa7wvM4_dF4dd7MTdNSdYdOTJk4YjGnWUKL8AnGwRnpRGesU8EZ3CoKb0eHlo-XMq5yNBVSh8CZTcUQkszZiwXM2Abe_whsg_8Wrv70tfgodON9-LnSiirZks3ej21cuNy8qm5dREJ6ngpEaQlj_1BFgyBTvynEUa0sjdsbAl-pY9Diqv1RYjroh9SQGACwgNlyaF7AtuI7fA_r8v8A4Mb0OXSOPeg2M9htZgi6WwPcb_7CTuEIO4kGoU5BOvF9tliCoBDfsO-AK_gR6WfOkDNdxwwR7A";

fetch(
  `https://graph.microsoft.com/v1.0/sites/${siteId}/drives/${driveId}/${folderPath}`,
  {
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  }
)
  .then((response) => response.json())
  .then((data) => {
    // Handle the retrieved data
    console.log(data, "Document Library");
  })
  .catch((error) => {
    // Handle error
    console.error(error);
  });
