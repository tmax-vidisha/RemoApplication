import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

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

export const intranetApi = createApi({
  reducerPath: 'intranetApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'http://localhost:4000/intranet',
  }),
  endpoints: (builder) => ({
    getAllIntranet: builder.query<any, unknown>({
      query: () => '',
    }),
  }),
})
export const { useGetAllUsersQuery } = usersApi
export const { useGetAllIntranetQuery } = intranetApi



