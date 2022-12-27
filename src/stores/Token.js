import axios from "axios";

// 모든 요청에 대해서 헤더에 담아서 보내야해 알겠어?
export const setAuthorization = (token) => {
  axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
};

axios.defaults.headers.common[
  "Authorization"
] = `Bearer ${sessionStorage.getItem("accessToken")}`;

// request를 보낼 때 localStorage에 token 정보가 있다면
// 헤더에 토큰 정보를 저장하고 없다면 Null로 처리함.
axios.interceptors.request.use(function (config) {
  // const accessToken = sessionStorage.getItem("accessToken");
  // const refreshToken = sessionStorage.getItem("refreshToken");
  const user = localStorage.getItem("user");
  if (!user) {
    config.headers["accessToken"] = null;
    config.headers["refreshToken"] = null;
    // config.headers.common["Authorization"] = undefined;
    return config;
  }
  const { accessToken, refreshToken } = JSON.parse(user);
  config.headers["accessToken"] = accessToken;
  config.headers["refreshToken"] = refreshToken;
  return config;
});

// response를 받았을 때, error가 발생.
// 해당 error의 status가 401? =>
// 기존 originalRequest를 refreshToken 확인 url에 보내고 토큰을 재발급
// 여기서 401 이외의 오류다? 모두 실패.
// 재발급 받은 토큰은 다시 로컬스토리지에 저장하고 헤더부분에서 토큰 정보를 변경하고
// 다시 originalRequest를 보냄.
axios.interceptors.response.use(
  function (response) {
    return response;
  },
  async function (error) {
    if (error.response && error.response.status === 401) {
      // body를 실어서 줄 수 있잖아 ?
      if (
        error.response.JWT_ERROR === "expired"
        // &&
        // error.response.status === 403
      ) {
        try {
          console.log("실행됏나?");
          const originalRequest = error.config;
          const data = await axios.get(
            `${process.env.REACT_APP_BACKEND_URL}/auth/token`
          );
          if (data) {
            const { accessToken, refreshToken } = data.data;
            localStorage.removeItem("user");
            localStorage.setItem(
              "user",
              JSON.stringify(data.data, ["accessToken", "refreshToken"])
            );
            originalRequest.headers["accessToken"] = accessToken;
            originalRequest.headers["refreshToken"] = refreshToken;
            return await axios.request(originalRequest);
          }
        } catch (error) {
          localStorage.removeItem("user");
          console.log(error);
        }
        return Promise.reject(error);
      }
      return Promise.reject(error);
    }
    return Promise.reject(error);
  }
);
