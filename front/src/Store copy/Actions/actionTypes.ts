/* eslint-disable */
export enum ActionType {
  GET_ROOT_SITES_REQUEST = "GET_ROOT_SITES_REQUEST",
  GET_ROOT_SITES_SUCCESS = "GET_ROOT_SITES_SUCCESS",
  GET_ROOT_SITES_FAILED = "GET_ROOT_SITES_FAILED",

  GET_ROOT_DRIVES_REQUEST = "GET_ROOT_DRIVES_REQUEST",
  GET_ROOT_DRIVES_SUCCESS = "GET_ROOT_DRIVES_SUCCESS",
  GET_ROOT_DRIVES_FAILED = "GET_ROOT_DRIVES_FAILED",

  GET_ROOT_FOLDER_REQUEST = "GET_ROOT_FOLDER_REQUEST",
  GET_ROOT_FOLDER_SUCCESS = "GET_ROOT_FOLDER_SUCCESS",
  GET_ROOT_FOLDER_FAILED = "GET_ROOT_FOLDER_FAILED",

  GET_FOLDER_CHILDREN_REQUEST = "GET_FOLDER_CHILDREN_REQUEST",
  GET_FOLDER_CHILDREN_SUCCESS = "GET_FOLDER_CHILDREN_SUCCESS",
  GET_FOLDER_CHILDREN_FAILED = "GET_FOLDER_CHILDREN_FAILED",

  CREATE_FOLDER_REQUEST = "CREATE_FOLDER_REQUEST",
  CREATE_FOLDER_SUCCESS = "CREATE_FOLDER_SUCCESS",
  CREATE_FOLDER_FAILED = "CREATE_FOLDER_FAILED",

  SET_BREADCRUMBS = "SET_BREADCRUMBS",
  UPDATE_BREADCRUMBS = "UPDATE_BREADCRUMBS",

  SET_DRIVE_ID = "SET_DRIVE_ID",
  UPDATE_DRIVE_ID = "UPDATE_DRIVE_ID",

  RENAME_FILE_REQUEST = 'RENAME_FILE_REQUEST',
  RENAME_FILE_SUCCESS = 'RENAME_FILE_SUCCESS',
  RENAME_FILE_FAILED = 'RENAME_FILE_FAILED',

  SHARE_FILE_REQUEST = 'SHARE_FILE_REQUEST',
  SHARE_FILE_SUCCESS = 'SHARE_FILE_SUCCESS',
  SHARE_FILE_FAILED = 'SHARE_FILE_FAILED',

  DOWNLOAD_FILE_REQUEST = 'DOWNLOAD_FILE_REQUEST',
  DOWNLOAD_FILE_SUCCESS = 'DOWNLOAD_FILE_SUCCESS',
  DOWNLOAD_FILE_FAILED = 'DOWNLOAD_FILE_FAILED',

  DELETE_FILE_REQUEST = 'DELETE_FILE_REQUEST',
  DELETE_FILE_SUCCESS = 'DELETE_FILE_SUCCESS',
  DELETE_FILE_FAILED = 'DELETE_FILE_FAILED',
}
