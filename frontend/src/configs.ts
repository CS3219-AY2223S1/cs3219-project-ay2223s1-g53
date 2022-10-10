const URI_USER_SVC = process.env.URI_USER_SVC || "http://localhost:3001";

const PREFIX_USER_SVC = "/auth/login";

export const URL_USER_SVC = URI_USER_SVC + PREFIX_USER_SVC;

export const URL_SIGNUP_SVC = URI_USER_SVC + "/users/register";
