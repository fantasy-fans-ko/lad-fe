// export const API_BASE_URL = "http://54.180.86.197:8080";
export const API_BASE_URL = "http://localhost:8080";

export const ACCESS_TOKEN = "AT";

// export const OAUTH2_REDIRECT_URI = "http://3.36.75.11:3000/oauth2/redirect";
export const OAUTH2_REDIRECT_URI = "http://localhost:3000/oauth2/redirect";

export const KAKAO_OAUTH_URL = `${API_BASE_URL}/oauth2/authorization/kakao?redirect_uri=${OAUTH2_REDIRECT_URI}`;
