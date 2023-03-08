import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { AccessToken } from '../App';
import { myAsync } from '../hooks/AccessToken';






export const galleryApi = createApi({
    reducerPath: 'galleryApi',
    baseQuery: fetchBaseQuery({
        // baseUrl: 'http://20.80.251.108/',
         baseUrl: 'http://localhost:4000/',
         prepareHeaders: async (headers, query) => {
            const authResult = await myAsync();
            if (authResult ) {
                headers.set('authorization', authResult);
                headers.set("Access-Control-Allow-Origin", "*");
            }
            return headers;
        }
    }),
    // tagTypes: ['OneDriveRootItems'],
    endpoints: (builder) => ({
        // uploadItemInAnnouncement: builder.mutation<any, any>({
        //     query: (data) => ({
        //         url: '/api/v1/contentEditor/announcement/uploadItem',
        //         // headers:{ 'Content-Type': 'application/json' },
        //         method: "POST",
        //         body: data
        //     }),

        // }),
        getAllRootItemSharePoint: builder.query<any, any>({
            // query: () => '/api/v1/onedrive/getAllRootItems',
            query: (id) => ({
                url: `/api/v1/gallery/getAllPictureFolders/${id}`,
                // headers:{ "authorization": `${AccessToken}` },
            }),
            // providesTags: ['OneDriveRootItems'],
        }),
        getPictureItemsSharePoint: builder.mutation<any, any>({
            query: (data) => ({
                url: '/api/v1/gallery/getAllFolderPictureItems',
                // headers:{ 'Content-Type': 'application/json' },
                method: "POST",
                body: data
            }),

        }),
        getImages: builder.query<any, any>({
            // query: () => '/api/v1/onedrive/getAllRootItems',
            query: (id) => ({
                url: `/api/v1/gallery/getImages/${id}`,
                // headers:{ "authorization": `${AccessToken}` },
            }),
            // providesTags: ['OneDriveRootItems'],
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
     useGetAllRootItemSharePointQuery,
     useGetPictureItemsSharePointMutation,
     useGetImagesQuery




} = galleryApi

