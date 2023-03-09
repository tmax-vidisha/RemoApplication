import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { AccessToken } from '../App';
import {myAsync} from '../hooks/AccessToken'
export const usersApi = createApi({
  reducerPath: 'usersApi',
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
  endpoints: (builder) => ({
    getAllPrayers: builder.query<any, any>({
      // query: () => '/api/v1/onedrive/getAllRootItems',
      query: () => ({
        url: `/api/v1/header/prayerTime`,
        // headers:{ "authorization": `${AccessToken}` },
    }),
   
    }),
    getAllCountryCodes: builder.query<any, any>({
      // query: () => '/api/v1/onedrive/getAllRootItems',
      query: (id) => ({
        url: `/api/v1/header/countryCodes/${id}`,
        // headers:{ "authorization": `${AccessToken}` },
    }),
    
    }),
    getAllCountryCurrency: builder.mutation<any, any>({
      query: (data) => ({
          url: '/api/v1/header/countrycurrency',
          // headers:{ 'Content-Type': 'application/json' },
          method: "POST",
          body: data
      }),
      
  }),
  getAllUnReadMails: builder.query<any, any>({
    // query: () => '/api/v1/onedrive/getAllRootItems',
    query: (id) => ({
      url: `/api/v1/header/unreadmails/${id}`,
      // headers:{ "authorization": `${AccessToken}` },
  }),
  
  }),
  getAllUnReadMeetings: builder.query<any, any>({
    // query: () => '/api/v1/onedrive/getAllRootItems',
    query: (id) => ({
      url: `/api/v1/header/uncountmeetings/${id}`,
      // headers:{ "authorization": `${AccessToken}` },
  }),
  
  }),
  getAllUserInfo: builder.query<any, any>({
    // query: () => '/api/v1/onedrive/getAllRootItems',
    query: (id) => ({
      url: `/api/v1/header/userinfo/${id}`,
      // headers:{ "authorization": `${AccessToken}` },
  }),
  
  }),
  getWeather: builder.query<any, any>({
    // query: () => '/api/v1/onedrive/getAllRootItems',
    query: () => ({
      url: `/api/v1/header/weatherData`,
      // headers:{ "authorization": `${AccessToken}` },
  }),
 
  }),
  }),
})

export const oneDriveApi = createApi({
  reducerPath: 'oneDriveApi',
  baseQuery: fetchBaseQuery({
    // baseUrl: 'http://20.80.251.108/',
     baseUrl: 'http://localhost:4000/',
    // prepareHeaders: (headers, { getState }) => {
    //   // headers.set('Authorization', `Bearer ${access_token}`);
    //    headers.set('Content-Type', 'application/json');
    //   headers.set("authorization", `${AccessToken}`);
    //   //@ts-ignore
    //   //  console.log(Access,'lllldddlllllllllllll');
     
    //   // headers.set('Accept', 'application/json');
  
    //   return headers
    // },
    prepareHeaders: async (headers, query) => {
      const authResult = await myAsync();
      if (authResult ) {
          headers.set('authorization', authResult);
          headers.set("Access-Control-Allow-Origin", "*");
      }
      return headers;
  }
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
  deleteItemTrashed: builder.mutation<any, any>({
    query: (data) => ({
        url: '/api/v1/onedrive/deleteTrashedItem',
        // headers:{ 'Content-Type': 'application/json' },
        method: "POST",
        body: data
    }),
    
  }),
  deleteItemStarred: builder.mutation<any, any>({
    query: (data) => ({
        url: '/api/v1/onedrive/deleteStarredItem',
        // headers:{ 'Content-Type': 'application/json' },
        method: "POST",
        body: data
    }),
    
  }),
  copylinkOneDrive: builder.mutation<any, any>({
    query: (data) => ({
        url: '/api/v1/onedrive/copylinkOneDriveItem',
        // headers:{ 'Content-Type': 'application/json' },
        method: "POST",
        body: data
    }),
    
  }),
  getAllSharedItems: builder.query<any, any>({
    // query: () => '/api/v1/onedrive/getAllRootItems',
    query: (id) => ({
      url: `/api/v1/onedrive/getSharedItems/${id}`,
      // headers:{ "authorization": `${AccessToken}` },
  }),
  // providesTags : [ 'OneDriveRootItems'],
  }),
  getAllRecentItems: builder.query<any, any>({
    // query: () => '/api/v1/onedrive/getAllRootItems',
    query: (id) => ({
      url: `/api/v1/onedrive/getRecentFiles/${id}`,
      // headers:{ "authorization": `${AccessToken}` },
  }),
  // providesTags : [ 'OneDriveRootItems'],
  }),
  getAllStarredItems: builder.query<any, any>({
    // query: () => '/api/v1/onedrive/getAllRootItems',
    query: (id) => ({
      url: `/api/v1/onedrive/getStarred/${id}`,
      // headers:{ "authorization": `${AccessToken}` },
  }),
  // providesTags : [ 'OneDriveRootItems'],
  }),
  getAllTrashedItems: builder.query<any, any>({
    // query: () => '/api/v1/onedrive/getAllRootItems',
    query: (id) => ({
      url: `/api/v1/onedrive/getTrashed/${id}`,
      // headers:{ "authorization": `${AccessToken}` },
  }),
  // providesTags : [ 'OneDriveRootItems'],
  }),
  downloadUrlItemOneDrive: builder.mutation<any, any>({
    query: (data) => ({
        url: '/api/v1/onedrive/getRecentFiles/downloadurl',
        // headers:{ 'Content-Type': 'application/json' },
        method: "POST",
        body: data
    }),
    
  }),
  }),
  
})
export const { useGetAllPrayersQuery,useGetAllCountryCodesQuery,useGetAllCountryCurrencyMutation,useGetAllUnReadMailsQuery,useGetWeatherQuery,useGetAllUnReadMeetingsQuery,useGetAllUserInfoQuery } = usersApi
export const { 
                useUploadFileOneDriveMutation,
                useGetItemChildrenOneDriveMutation,
                useGetAllRootItemsOneDriveQuery,
                useDeleteItemOneDriveMutation,
                useCopylinkOneDriveMutation,
                useGetAllSharedItemsQuery,
                useGetAllRecentItemsQuery,
                useDownloadUrlItemOneDriveMutation,
                useGetAllStarredItemsQuery,
                useGetAllTrashedItemsQuery,
                useDeleteItemTrashedMutation,
                useDeleteItemStarredMutation
                
              
              
              } = oneDriveApi

