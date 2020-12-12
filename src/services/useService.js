import http from "./httpService";

import config from "./config.json";

export const registerUser = user => {
    return http.post(`${config.localapi}/register.php`, JSON.stringify(user));
};

export const loginUser = user => {
    return http.post(`${config.localapi}/login.php`, JSON.stringify(user));
};