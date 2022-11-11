import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { AccessToken } from '../App';






export const contentEditorApi = createApi({
    reducerPath: 'contentEditorApi',
    baseQuery: fetchBaseQuery({
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
        // getAllRootItemsOneDrive: builder.query<any, any>({
        //     // query: () => '/api/v1/onedrive/getAllRootItems',
        //     query: (id) => ({
        //         url: `/api/v1/onedrive/getAllRootItems/${id}`,
        //         // headers:{ "authorization": `${AccessToken}` },
        //     }),
        //     // providesTags: ['OneDriveRootItems'],
        // }),
        // getItemChildrenOneDrive: builder.mutation<any, any>({
        //     query: (data) => ({
        //         url: '/api/v1/onedrive/getItemChildren',
        //         // headers:{ 'Content-Type': 'application/json' },
        //         method: "POST",
        //         body: data
        //     }),

        // }),
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
    // useGetItemChildrenOneDriveMutation,
    // useGetAllRootItemsOneDriveQuery,
    // useDeleteItemOneDriveMutation,
    // useCopylinkOneDriveMutation,
    // useGetAllSharedItemsQuery,
    // useGetAllRecentItemsQuery,
    // useDownloadUrlItemOneDriveMutation



} = contentEditorApi
