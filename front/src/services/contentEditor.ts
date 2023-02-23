import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { AccessToken } from '../App';




//@ts-ignore

export const contentEditorApi = createApi({
    reducerPath: 'contentEditorApi',
    baseQuery: fetchBaseQuery({
        // baseUrl: 'http://20.80.251.108/',
        baseUrl: 'http://localhost:4000/',
        prepareHeaders: (headers, { getState }) => {
            // headers.set('Authorization', `Bearer ${access_token}`);
            headers.set('Content-Type', 'application/json');
            headers.set("authorization", `${AccessToken}`);
            //@ts-ignore
            //  console.log(Access,'lllldddlllllllllllll');

            // headers.set('Accept', 'application/json');

            return headers
        },
    }),
    // tagTypes: ['OneDriveRootItems'],
    endpoints: (builder) => ({
        uploadItemInAnnouncement: builder.mutation<any, any>({
            query: (data) => ({
                url: '/api/v1/contentEditor/announcement/uploadItem',
                // headers:{ 'Content-Type': 'application/json' },
                method: "POST",
                body: data
            }),

        }),
        getLatestAnnouncement: builder.query<any, any>({
            // query: () => '/api/v1/onedrive/getAllRootItems',
            query: (id) => ({
                url: `/api/v1/contentEditor/announcementlatest/${id}`,
                // headers:{ "authorization": `${AccessToken}` },
            }),
            // providesTags: ['OneDriveRootItems'],
        }),
        uploadItemInHeroBanner: builder.mutation<any, any>({
            query: (data) => ({
                url: '/api/v1/contentEditor/heroBanner/uploadItem',
                headers:{ 'Content-Type': 'application/json' },
                method: "POST",
                body: data
            }),

        }),
        uploadItemInCeo: builder.mutation<any, any>({
            query: (data) => ({
                url: '/api/v1/contentEditor/ceoData/uploadItem',
                headers:{ 'Content-Type': 'application/json' },
                method: "POST",
                body: data
            }),

        }),
        uploadItemInEmployee: builder.mutation<any, any>({
            query: (data) => ({
                url: '/api/v1/contentEditor/employee/uploadItem',
                headers:{ 'Content-Type': 'application/json' },
                method: "POST",
                body: data
            }),

        }),
        uploadItemInRemoNews: builder.mutation<any, any>({
            query: (data) => ({
                url: '/api/v1/contentEditor/remonews/uploadItem',
                headers:{ 'Content-Type': 'application/json' },
                method: "POST",
                body: data
            }),

        }),
        uploadItemInRemoEvents: builder.mutation<any, any>({
            query: (data) => ({
                url: '/api/v1/contentEditor/remoevents/uploadItem',
                headers:{ 'Content-Type': 'application/json' },
                method: "POST",
                body: data
            }),

        }),

        uploadItemInRemoNavigation: builder.mutation<any, any>({
            query: (data) => ({
                url: '/api/v1/contentEditor/remonavigation/uploadItem',
                headers:{ 'Content-Type': 'application/json' },
                method: "POST",
                body: data
            }),

        }),
        uploadItemInRemoContentEditorMaster: builder.mutation<any, any>({
            query: (data) => ({
                url: '/api/v1/contentEditor/remocontentEditor/uploadItem',
                headers:{ 'Content-Type': 'application/json' },
                method: "POST",
                body: data
            }),

        }),
        uploadItemInRemoQuicklink: builder.mutation<any, any>({
            query: (data) => ({
                url: '/api/v1/contentEditor/remoquicklinks/uploadItem',
                headers:{ 'Content-Type': 'application/json' },
                method: "POST",
                body: data
            }),

        }),
        getGalleryRoot: builder.query<any, any>({
            // query: () => '/api/v1/onedrive/getAllRootItems',
            query: (id) => ({
                url: `/api/v1/contentEditor/galleryroot/${id}`,
                // headers:{ "authorization": `${AccessToken}` },
            }),
            // providesTags: ['OneDriveRootItems'],
        }),
        getItemInGallery: builder.mutation<any, any>({
            query: (data) => ({
                url: '/api/v1/contentEditor/getGalleryItemChildren',
                headers:{ 'Content-Type': 'application/json' },
                method: "POST",
                body: data
            }),

        }),
        uploadFolderRemoGallery: builder.mutation<any, any>({
            query: (data) => ({
                url: '/api/v1/contentEditor/remophotoGallery/uploadItem',
                headers:{ 'Content-Type': 'application/json' },
                method: "POST",
                body: data
            }),

        }),
        uploadFileRemoGallery: builder.mutation<any, any>({
            query: (data) => ({
                url: '/api/v1/contentEditor/remophotoGallery/uploadFileItem',
                headers:{ 'Content-Type': 'application/json' },
                method: "POST",
                body: data
            }),

        }),
        // deleteItemOneDrive: builder.mutation<any, any>({
        //     query: (data) => ({
        //         url: '/api/v1/onedrive/deleteOneDriveItem',
        //         // headers:{ 'Content-Type': 'application/json' },
        //         method: "POST",
        //         body: data
        //     }),

        // }),
        // copylinkOneDrive: builder.mutation<any, any>({
        //     query: (data) => ({
        //         url: '/api/v1/onedrive/copylinkOneDriveItem',
        //         // headers:{ 'Content-Type': 'application/json' },
        //         method: "POST",
        //         body: data
        //     }),

        // }),
        // getAllSharedItems: builder.query<any, any>({
        //     // query: () => '/api/v1/onedrive/getAllRootItems',
        //     query: (id) => ({
        //         url: `/api/v1/onedrive/getSharedItems/${id}`,
        //         // headers:{ "authorization": `${AccessToken}` },
        //     }),
        //     // providesTags : [ 'OneDriveRootItems'],
        // }),
        // getAllRecentItems: builder.query<any, any>({
        //     // query: () => '/api/v1/onedrive/getAllRootItems',
        //     query: (id) => ({
        //         url: `/api/v1/onedrive/getRecentFiles/${id}`,
        //         // headers:{ "authorization": `${AccessToken}` },
        //     }),
        //     // providesTags : [ 'OneDriveRootItems'],
        // }),
        // downloadUrlItemOneDrive: builder.mutation<any, any>({
        //     query: (data) => ({
        //         url: '/api/v1/onedrive/getRecentFiles/downloadurl',
        //         // headers:{ 'Content-Type': 'application/json' },
        //         method: "POST",
        //         body: data
        //     }),

        // }),
    }),

})

export const {
     useUploadItemInAnnouncementMutation,
     useGetLatestAnnouncementQuery,
     useUploadItemInHeroBannerMutation,
     useUploadItemInCeoMutation,
     useUploadItemInEmployeeMutation,
     useUploadItemInRemoNewsMutation,

     useUploadItemInRemoEventsMutation,
     useUploadItemInRemoNavigationMutation,
     useUploadItemInRemoContentEditorMasterMutation,
     useUploadItemInRemoQuicklinkMutation,
     useGetGalleryRootQuery,
     useGetItemInGalleryMutation,
     useUploadFolderRemoGalleryMutation,
     useUploadFileRemoGalleryMutation
    

    // useGetItemChildrenOneDriveMutation,
    // useGetAllRootItemsOneDriveQuery,
    // useDeleteItemOneDriveMutation,
    // useCopylinkOneDriveMutation,
    // useGetAllSharedItemsQuery,
    // useGetAllRecentItemsQuery,
    // useDownloadUrlItemOneDriveMutation



} = contentEditorApi