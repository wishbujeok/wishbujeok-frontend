// import cryptoJs from "crypto-js";

// // 백엔드랑 맞춰야 함. secretKey를 근데 이걸 어떻게 또 숨기냐 이말이다..
// const secretKey = process.env.REACT_APP_REST_API_KEY;

// // 암호화
// export const encrypt = (val) => {
//   // 암호화할 값이 Number값이라면 String화 시켜야 함.
//   let text = val.toString();

//   const data = {
//     id: text,
//   };

//   const encrypted = cryptoJs.AES.encrypt(JSON.stringify(data), secretKey);

//   let result = encrypted.toString();
//   // javascript 기본 내장 함수 encodeURIComponent를 사용해 url 인코딩을 해서 넘겨주면 됨.
//   return encodeURIComponent(result);
// };

// // 복호화
// export const decrypt = (encrypted) => {
//   let decrypted = cryptoJs.AES.decrypt(encrypted, secretKey);

//   return decrypted;
// };
