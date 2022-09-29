import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { AccessToken } from '../App';

export const usersApi = createApi({
  reducerPath: 'usersApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'http://localhost:4000/me',
  }),
  endpoints: (builder) => ({
    getAllUsers: builder.query<any, unknown>({
      query: () => '',
    }),
  }),
})

export const oneDriveApi = createApi({
  reducerPath: 'oneDriveApi',
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
  tagTypes: ['OneDriveRootItems'],
  endpoints: (builder) => ({
    uploadFileOneDrive: builder.mutation<any, any>({
      query: (data) => ({
          url: '/api/v1/onedrive/uploadItem',
          // headers:{ 'Content-Type': 'application/json' },
          method: "POST",
          body: data
      }),
      
  }),
  getAllRootItemsOneDrive: builder.query<any, any>({
    // query: () => '/api/v1/onedrive/getAllRootItems',
    query: (id) => ({
      url: `/api/v1/onedrive/getAllRootItems/${id}`,
      // headers:{ "authorization": `${AccessToken}` },
  }),
  providesTags : [ 'OneDriveRootItems'],
  }),
  getItemChildrenOneDrive: builder.mutation<any, any>({
    query: (data) => ({
        url: '/api/v1/onedrive/getItemChildren',
        // headers:{ 'Content-Type': 'application/json' },
        method: "POST",
        body: data
    }),
    
  }),
  deleteItemOneDrive: builder.mutation<any, any>({
    query: (data) => ({
        url: '/api/v1/onedrive/deleteOneDriveItem',
        // headers:{ 'Content-Type': 'application/json' },
        method: "POST",
        body: data
    }),
    
  }),
  }),
})
export const { useGetAllUsersQuery } = usersApi
export const { 
                useUploadFileOneDriveMutation,
                useGetItemChildrenOneDriveMutation,
                useGetAllRootItemsOneDriveQuery,
                useDeleteItemOneDriveMutation
              
              
              
              } = oneDriveApi



