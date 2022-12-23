import axios from "axios";
// import { useDispatch } from "react-redux";
// import { loginAccount } from "../reducer/Reducer";

// 에러를 보내주면 token
// export const setAuthorization = (token) => {
//   axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
// };

// export const refreshAccessToken = async (refreshToken) => {
//   return await axios
//     .post(`${process.env.BACKEND_URL}/api/user/token/refresh/`, {
//       refresh: refreshToken,
//     })
//     .then((res) => {
//       sessionStorage.setItem("accessToken", res.data.access);
//       setAuthorization(res.data.access);
//       return res.data.access;
//     })
//     .catch((err) => {
//       console.log(err);
//     });
// };

// export const checkAccessToken = async (refreshToken) => {
//   await refreshAccessToken(refreshToken);
// };

// if (axios.defaults.headers.common["Authorization"] === undefined) {
//   setAuthorization(sessionStorage.getItem("access_token"));
// }

// 요청을 보내는 baseURL을 설정.
const client = axios.create({
  // 수정해야할듯! 이거는 그냥 정말 baseUrl
  baseURL: `${process.env.BACKEND_URL}`,
});

// 모든 요청에 대해서 헤더에 담아서 보내야해 알겠어?
export const setAuthorization = (token) => {
  // const dispatch = useDispatch();
  client.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  console.log("Token " + token);
};

// request를 보낼 때 localStorage에 token 정보가 있다면
// 헤더에 토큰 정보를 저장하고 없다면 Null로 처리함.
client.interceptors.request.use(function (config) {
  const user = localStorage.getItem("user");
  if (!user) {
    config.headers["accessToken"] = null;
    config.headers["refreshToken"] = null;
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
client.interceptors.response.use(
  function (response) {
    return response;
  },
  async function (error) {
    if (error.response && error.response.status === 401) {
      // body를 실어서 줄 수 있잖아 ?
      if (error.response.JWT_ERROR === "expired") {
        try {
          const originalRequest = error.config;
          const data = await client.get(
            `${process.env.BACKEND_URL}/auth/token`
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
            return await client.request(originalRequest);
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
