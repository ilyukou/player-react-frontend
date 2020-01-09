// Backend API url
export const BACKEND_API_URL = "http://localhost:8080";

// FileController
const FileControllerUrl = BACKEND_API_URL+"/music";
export const UPLOAD_FILE = FileControllerUrl+"/upload";
export const DOWNLOAD_FILE = FileControllerUrl+"/get";
export const GET_FILE_TYPE = FileControllerUrl+"/getType";

// SearchController
const SearchControllerUrl = BACKEND_API_URL+"/search";
export const SEARCH_URL = SearchControllerUrl+"/get";