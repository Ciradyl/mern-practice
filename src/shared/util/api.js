const YOUR_PLACE_BASE_BE_URL = "http://localhost:5000";
const YOUR_PLACE_BASE_FE_URL = "/";
const YOUR_PLACE_BASE_USERS_URL = "/api/users";
const YOUR_PLACE_BASE_PLACES_URL = "/api/places";

export const YOUR_PLACE_API_URLS = {
  BE: `${YOUR_PLACE_BASE_BE_URL}/`,

  HOME: `${YOUR_PLACE_BASE_FE_URL}`,
  LOGIN: `${YOUR_PLACE_BASE_BE_URL}${YOUR_PLACE_BASE_USERS_URL}/login`,
  SIGNUP: `${YOUR_PLACE_BASE_BE_URL}${YOUR_PLACE_BASE_USERS_URL}/signup`,
  USERS: `${YOUR_PLACE_BASE_BE_URL}${YOUR_PLACE_BASE_USERS_URL}`,

  PLACES: `${YOUR_PLACE_BASE_BE_URL}${YOUR_PLACE_BASE_PLACES_URL}`,
  PLACES_GET_BY_ID: `${YOUR_PLACE_BASE_BE_URL}${YOUR_PLACE_BASE_PLACES_URL}/`,
  PLACES_GET_BY_USER_ID: `${YOUR_PLACE_BASE_BE_URL}${YOUR_PLACE_BASE_PLACES_URL}/user/`,
};
