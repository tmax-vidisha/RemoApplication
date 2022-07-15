import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'
// import { cacher } from "../rtkQueryCacheUtils";

// Define a service using a base URL and expected endpoints
export const graphApi = createApi({
    reducerPath: 'pokemonApi',


      


    baseQuery: fetchBaseQuery({baseUrl: 'http://localhost:4000/'}),
   



     


    tagTypes: ['CeoMsg','Hero','Emp','Announcement','News','Events','Navigation','Quicklink','Recent'],
    // keepUnusedDataFor: 30,
    // tagTypes: [...cacher.defaultTags, "User"],
    endpoints: (builder) => ({
        getPokemonByName: builder.query<void, string>({
            query: () => ({
                url: `me`,
                method: 'GET',
               
            }),
        }),

        
        getIntranet: builder.query<void, string>({
            query: () => `SiteId`,
            transformResponse: (response: any) => {
                const w = response.value
                let SID;
                {w.map((i:any)=>{
                    
                SID = i.id
                    
                })}
                return SID;
              }

        }),
        getListInformation: builder.query<any, any>({
            query: () => `listInfo`,
            transformResponse: (response: any) => {
               const resp =response.value 
               let t;
              resp.filter((p:any) => p.displayName === "CEO Message").map((f:any) => (
                   
                  t = f.id
                   

              ))
              return t
              
              }
        }),
        getListInfoAnouncementId: builder.query<any, any>({
            query: () => `listInfo`,
            transformResponse: (response: any) => {
               const resp =response.value 
               let t;
              resp.filter((p:any) => p.displayName === "Announcements").map((f:any) => (
                   
                  t = f.id
                   

              ))
              return t
              
              }
        }),
        
        getCeoMessage: builder.query<any, any>({
            query: () => `CeoMessage`,
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
                const resp = response.value 
                return resp
               }
        }),
        getListInfoQuickLinksId: builder.query<any, any>({
            query: () => `listInfo`,
            transformResponse: (response: any) => {
               const resp =response.value 
               let t;
              resp.filter((p:any) => p.displayName === "External Quick Links").map((f:any) => (
                   
                  t = f.id
                   

              ))
              return t
              
              }
        }),
        getQuickLinks: builder.query<any, any>({
            query: () => `QuickLinks`,
            transformResponse: (response: any) => {
                // let y;
                const resp =response.value 
                return resp
               }
        }),
        getListEmployeeHighlightId: builder.query<any, any>({
            query: () => `listInfo`,
            transformResponse: (response: any) => {
               const resp =response.value 
               let t;
              resp.filter((p:any) => p.displayName === "EmpHighlights").map((f:any) => (
                   
                  t = f.id
                   

              ))
              return t
              
              }
        }),
        getEmployeeHighLight: builder.query<any, any>({
            query: () => `employeehighlight`,
            transformResponse: (response: any) => {
                // let y;
                const resp =response
                return resp
               }
        }),
        getListNewsId: builder.query<any, any>({
            query: () => `listInfo`,
            transformResponse: (response: any) => {
               const resp =response.value 
               let t;
              resp.filter((p:any) => p.displayName === "RemoNews").map((f:any) => (
                   
                  t = f.id
                   

              ))
              return t
              
              }
        }), 
        getNews: builder.query<any, any>({
            query: () => `News`,
            transformResponse: (response: any) => {
                // let y;
                const resp = response
               
                return resp
               }
        }),
        getEventsId: builder.query<any, any>({
            query: () => `listInfo`,
            transformResponse: (response: any) => {
               const resp =response.value 
               let t;
              resp.filter((p:any) => p.displayName === "Events").map((f:any) => (
                   
                  t = f.id
                   

              ))
              return t
              
              }
        }), 
        getEvents: builder.query<any, any>({
            query: () => `Events`,
            transformResponse: (response: any) => {
                // let y;
                const resp = response.value 
                return resp
               }
        }),
        getHeroImageId: builder.query<any, any>({
            query: () => `listInfo`,
            transformResponse: (response: any) => {
               const resp =response.value 
               let t;
              resp.filter((p:any) => p.displayName === "HeroImages").map((f:any) => (
                   
                  t = f.id
                   

              ))
              return t
              
              }
        }),  
        getHeroImage: builder.query<any, any>({
            query: () => `HeroImage`,
            transformResponse: (response: any) => {
                // let y;
                const resp = response
                return resp
               }
        }), 
        getHeroImageInput: builder.query<any, any>({
            query: () => `HeroImage`,
            transformResponse: (response: any) => {
                // let y;
                const resp = response.value
                return resp
               }
        }), 
        getPhotoGalleryId: builder.query<any, any>({
            query: () => `listInfo`,
            transformResponse: (response: any) => {
               const resp =response.value 
               let t;
              resp.filter((p:any) => p.displayName === "Photo Gallery").map((f:any) => (
                   
                  t = f.id
                   

              ))
              return t
              
              }
        }),   
        getPhotoGallery: builder.query<any, any>({
            query: () => `PhotoGallery`,
            transformResponse: (response: any) => {
                // let y;
                const resp = response.value 
                return resp
               }
        }),
        getNavigationId: builder.query<any, any>({
            query: () => `listInfo`,
            transformResponse: (response: any) => {
                const resp =response.value 
                let t;
               resp.filter((p:any) => p.displayName === "Navigation").map((f:any) => (
                    
                   t = f.id
                    
 
               ))
               return t
               
               }


            
        }),
        getTopNavigation: builder.query<any, any>({
            query: () => `Navigation`,
            transformResponse: (response: any) => {
                // let y;
                const resp = response.value 
                return resp
               }
        }),
        getRecentFiles: builder.query<any, any>({
            query: () => `RecentFiles`,
            transformResponse: (response: any) => {
                // let y;
                const resp = response.value 
                return resp
               }
        }),
        createListItem: builder.mutation<any, any>({
            query: (data) => ({
                url: 'list/listItem',
                headers:{ 'Content-Type': 'application/json' },
                method: "POST",
                body: data
            }),
            
        }),
        getAllUserQuickLinks: builder.query<any, any>({
            query: () => `alluserquicklinks`,
            transformResponse: (response: any) => {
                // let y;
                const resp = response.value 
                return resp
               }
        }),
        postGlobalListId: builder.mutation<any, any>({
            query: (data) => ({
                url: '/list/globalid',
                headers:{ 'Content-Type': 'application/json' },
                method: "POST",
                body: data
            }),
            
        }),
        createCeoMessage: builder.mutation<any, any>({
            query: (data) => ({
                url: 'newceo',
                headers:{ 'Content-Type': 'application/json' },
                method: "POST",
                body: data
            }),
            
        }),
        createAnnouncement: builder.mutation<any, any>({
            query: (data) => ({
                url: 'announcementinput',
                headers:{ 'Content-Type': 'application/json' },
                method: "POST",
                body: data
            }),
            
        }),
        createEvent: builder.mutation<any, any>({
            query: (data) => ({
                url: 'eventinput',
                headers:{ 'Content-Type': 'application/json' },
                method: "POST",
                body: data
            }),
            
        }),
        createHero: builder.mutation<any, any>({
            query: (data) => ({
                url: 'heroinput',
                headers:{ 'Content-Type': 'application/json' },
                method: "POST",
                body: data
            }),
            
        }),
        createEmployeeHighlight: builder.mutation<any, any>({
            query: (data) => ({
                url: 'employeeInput',
                headers:{ 'Content-Type': 'application/json' },
                method: "POST",
                body: data
            }),
            
        }),
        createNewsInput: builder.mutation<any, any>({
            query: (data) => ({
                url: 'newsInput',
                headers:{ 'Content-Type': 'application/json' },
                method: "POST",
                body: data
            }),
            
        }),
        getUnReadMails: builder.query<any, any>({
            query: () => `unreadmails`,
            transformResponse: (response: any) => {
                // let y;
                const resp = response.value
                return resp
               }
        }), 
        getAllSubSites: builder.query<any, any>({
            query: () => `allSubSites`,
            transformResponse: (response: any) => {
                // let y;
                const resp = response.value
                return resp
               }
        }), 
        getImage: builder.query<any, any>({
            query: () => `image`,
            transformResponse: (response: any) => {
                // let y;
                const resp = response
                return resp
               }
        }),
        getDrives: builder.query<any, any>({
            query: () => `getDrivesofSites`,
            transformResponse: (response: any) => {
                // let y;
                const resp = response.value
                return resp
               }
        }),
        getFolders: builder.query<any, any>({
            query: () => `getFolder`,
            transformResponse: (response: any) => {
                // let y;
                const resp = response.value
                return resp
               }
        }),
        getSubFolders: builder.query<any, any>({
            query: () => `getsubFolder`,
            transformResponse: (response: any) => {
                // let y;
                const resp = response.value
                return resp
               }
        }),
        createsubSite: builder.mutation<any, any>({
            query: (data) => ({
                url: 'subsite',
                headers:{ 'Content-Type': 'application/json' },
                method: "POST",
                body: data
            }),
            
        }),
        createDrive: builder.mutation<any, any>({
            query: (data) => ({
                url: 'drive',
                headers:{ 'Content-Type': 'application/json' },
                method: "POST",
                body: data
            }),
            
        }),
        updateToken: builder.mutation<any, any>({
            query: (id) => ({
                url: `/api/v1/token/folder/${id}`,
                method: 'PATCH',
                body: id
            }),
            transformResponse: (response: any) => {
                // let y;
                const resp = response
                return resp
               }
            // invalidatesTags: ['ObjectiveDescription']
        }),
        getAllEvents: builder.query<any, any>({
            query: (id) => ({
                url: `/api/v1/token/folder/${id}`,
               
            }),
            // //@ts-ignore
            // providesTags: cacher.providesList("User"),
            //  keepUnusedDataFor: 5,
             providesTags : [ 'Events'],
        }),
        updateQuicklinkToken: builder.mutation<any, any>({
            query: (id) => ({
                url: `/api/v1/token/quicklink/${id}`,
                method: 'PATCH',
                body: id
            }),
            transformResponse: (response: any) => {
                // let y;
                const resp = response
                return resp
               }
            // invalidatesTags: ['ObjectiveDescription']
        }),
        getAllQuickLink: builder.query<any, any>({
            query: (id) => ({
                url: `/api/v1/token/quicklink/${id}`
            }),
            // //@ts-ignore
            // providesTags: cacher.providesList("User"),
            // keepUnusedDataFor: 5,
             providesTags : [ 'Quicklink'],
        }),
        updateRecentFilesToken: builder.mutation<any, any>({
            query: (id) => ({
                url: `/api/v1/token/recentfiles/${id}`,
                method: 'PATCH',
                body: id
            }),
            transformResponse: (response: any) => {
                // let y;
                const resp = response
                return resp
               }
            // invalidatesTags: ['ObjectiveDescription']
        }),
        getAllRecentFiles: builder.query<any, any>({
            query: (id) => ({
                url: `/api/v1/token/recentfiles/${id}`
            }),
            // //@ts-ignore
            // providesTags: cacher.providesList("User"),
            //  keepUnusedDataFor: 5,
             providesTags : [ 'Recent'],
        }),

        updateAnnouncementToken: builder.mutation<any, any>({
            query: (id) => ({
                url: `/api/v1/token/announcement/${id}`,
                method: 'PATCH',
                body: id
            }),
            transformResponse: (response: any) => {
                // let y;
                const resp = response
                return resp
               }
            // invalidatesTags: ['ObjectiveDescription']
        }),
        getAllAnnoncements: builder.query<any, any>({
            query: (id) => ({
                url: `/api/v1/token/announcement/${id}`
            }),
            // //@ts-ignore
            // providesTags: cacher.providesList("User"),
            //  keepUnusedDataFor: 5,
             providesTags : [ 'Announcement'],
        }),

        updateNavigationToken: builder.mutation<any, any>({
            query: (id) => ({
                url: `/api/v1/token/navigation/${id}`,
                method: 'PATCH',
                body: id
            }),
            transformResponse: (response: any) => {
                // let y;
                const resp = response
                return resp
               }
            // invalidatesTags: ['ObjectiveDescription']
        }),
        getAllNavigation: builder.query<any, any>({
            query: (id) => ({
                url: `/api/v1/token/navigation/${id}`
            }),
            // //@ts-ignore
            // providesTags: cacher.providesList("User"),
            // keepUnusedDataFor: 5,
             providesTags : [ 'Navigation'],
        }),
        updateCeoMsgToken: builder.mutation<any, any>({
            query: (id) => ({
                url: `/api/v1/token/ceomsg/${id}`,
                method: 'PATCH',
                body: id
            }),
            transformResponse: (response: any) => {
                // let y;
                const resp = response
                return resp
               }
            // invalidatesTags: ['ObjectiveDescription']
        }),
        getAllCeoMsg: builder.query<any, any>({
            query: (id) => ({
                url: `/api/v1/token/ceomsg/${id}`
            }),
            // //@ts-ignore
            // providesTags: cacher.providesList("User"),
            //  keepUnusedDataFor: 5,
             providesTags : [ 'CeoMsg'],
        }),
        updateNewsToken: builder.mutation<any, any>({
            query: (id) => ({
                url: `/api/v1/token/news/${id}`,
                method: 'PATCH',
                body: id
            }),
            transformResponse: (response: any) => {
                // let y;
                const resp = response
                return resp
               }
            // invalidatesTags: ['ObjectiveDescription']
        }),
        getAllNews: builder.query<any, any>({
            query: (id) => ({
                url: `/api/v1/token/news/${id}`
            }),
            // //@ts-ignore
            // providesTags: cacher.providesList("User"),
            //  keepUnusedDataFor: 5,
            providesTags : [ 'News'],
        }),
        updateEmpToken: builder.mutation<any, any>({
            query: (id) => ({
                url: `/api/v1/token/emp/${id}`,
                method: 'PATCH',
                body: id
            }),
            transformResponse: (response: any) => {
                // let y;
                const resp = response
                return resp
               }
            // invalidatesTags: ['ObjectiveDescription']
        }),
        getAllEmp: builder.query<any, any>({
            query: (id) => ({
                url: `/api/v1/token/emp/${id}`
            }),
            // //@ts-ignore
            // providesTags: cacher.providesList("User"),
            //  keepUnusedDataFor: 5,
             providesTags : [ 'Emp'],
        }),
        updateHeroToken: builder.mutation<any, any>({
            query: (id) => ({
                url: `/api/v1/token/hero/${id}`,
                method: 'PATCH',
                body: id
            }),
            transformResponse: (response: any) => {
                // let y;
                const resp = response
                return resp
               }
            // invalidatesTags: ['ObjectiveDescription']
        }),
        getAllHero: builder.query<any, any>({
            query: (id) => ({
                url: `/api/v1/token/hero/${id}`
            }),
            // //@ts-ignore
            // providesTags: cacher.providesList("User"),
            //  keepUnusedDataFor: 5,
            providesTags : [ 'Hero'],
        }),
        getData: builder.query<any, any>({
            query: (id) => `/api/v1/token/folder`,
            transformResponse: (response: any) => {
                // let y;
                const resp = response.value
                return resp
               }
        }),
        createResponse: builder.mutation<any, any>({
            query: (data) => ({
                url: 'api/v1/token/folder',
                mode:"no-cors",
                // headers:{ 'Content-Type': 'application/json' },
                method: "POST",
                body: data
            }),
            transformResponse: (response: any) => {
                // let y;
                const resp = response
                return resp
               }
            // invalidatesTags: ['Calender'],
        }),
        createTokenwithData: builder.mutation<any, any>({
            query: (data) => ({
                url: 'api/v1/lists/data',
                headers:{ 'Content-Type': 'application/json' },
                method: "POST",
                body: data
            }),
            
        }),
        createTokenwithEventData: builder.mutation<any, any>({
            query: (data) => ({
                url: 'api/v1/lists/eventdata',
                headers:{ 'Content-Type': 'application/json' },
                method: "POST",
                body: data
            }),
            
        }),
        createTokenwithHeroData: builder.mutation<any, any>({
            query: (data) => ({
                url: 'api/v1/lists/herodata',
                headers:{ 'Content-Type': 'application/json' },
                method: "POST",
                body: data
            }),
            
        }),
        createTokenwithCeoData: builder.mutation<any, any>({
            query: (data) => ({
                url: 'api/v1/lists/ceodata',
                headers:{ 'Content-Type': 'application/json' },
                method: "POST",
                body: data
            }),
            
        }),
        createTokenwithNewsData: builder.mutation<any, any>({
            query: (data) => ({
                url: 'api/v1/lists/newsdata',
                headers:{ 'Content-Type': 'application/json' },
                method: "POST",
                body: data
            }),
            
        }),
        createTokenwithEmpData: builder.mutation<any, any>({
            query: (data) => ({
                url: 'api/v1/lists/empdata',
                headers:{ 'Content-Type': 'application/json' },
                method: "POST",
                body: data
            }),
            
        }),
        createTokenwithUserQuickData: builder.mutation<any, any>({
            query: (data) => ({
                url: 'api/v1/lists/userquicklinkdata',
                headers:{ 'Content-Type': 'application/json' },
                method: "POST",
                body: data
            }),
            
        }),
        getAllsubSites: builder.query<any, any>({
            query: (id) => ({
                url: `/api/v1/sites/subSites/${id}`
            }),
            // //@ts-ignore
            // providesTags: cacher.providesList("User"),
            //  keepUnusedDataFor: 5,
            // providesTags : [ 'Hero'],
        }),
        createTokenwithDrivesOfSubSites: builder.mutation<any, any>({
            query: (data) => ({
                url: '/api/v1/sites/subSites/drives',
                headers:{ 'Content-Type': 'application/json' },
                method: "POST",
                body: data
            }),
            transformResponse: (response: any) => {
                // let y;
                // const resp = response
                return response
            }
            
        }),
        createTokenwithSubSitesOfItems: builder.mutation<any, any>({
            query: (data) => ({
                url: '/api/v1/sites/subSites/drives/root',
                headers:{ 'Content-Type': 'application/json' },
                method: "POST",
                body: data
            }),
            transformResponse: (response: any) => {
                // let y;
                // const resp = response
                return response
            }
            
        }),
        createTokenwithSubSitesofItemsId: builder.mutation<any, any>({
            query: (data) => ({
                url: '/api/v1/sites/subSites/drives/items/id',
                headers:{ 'Content-Type': 'application/json' },
                method: "POST",
                body: data
            }),
            transformResponse: (response: any) => {
                // let y;
                // const resp = response
                return response
            }
            
        }),
        createTokenwithDataWorkspace: builder.mutation<any, any>({
            query: (data) => ({
                url: 'api/v1/sites/subSites',
                headers:{ 'Content-Type': 'application/json' },
                method: "POST",
                mode:'no-cors',
                body: data
            }),
            
        }),
    }),
})

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
    useGetListInformationQuery,
    useCreateListItemMutation,
    useGetAllUserQuickLinksQuery,
    usePostGlobalListIdMutation,
    useCreateCeoMessageMutation,
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
    useUpdateCeoMsgTokenMutation,
    useUpdateNewsTokenMutation,
    useUpdateEmpTokenMutation,
    useUpdateHeroTokenMutation,
    useGetAllEventsQuery,
    useGetAllQuickLinkQuery,
    useGetAllRecentFilesQuery,
    useGetAllAnnoncementsQuery,
    useGetAllNavigationQuery,
    useGetAllCeoMsgQuery,
    useGetAllNewsQuery,
    useGetAllEmpQuery,
    useGetAllHeroQuery

    
    
   
} = graphApi