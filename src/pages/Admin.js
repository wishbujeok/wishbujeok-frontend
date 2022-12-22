import React, { useState } from "react";
import axios from "axios";

export default function Admin() {
  const [imgList, setImgList] = useState([]);

  const handlePlusImage = (e) => {
    const file = e.target.files;
    let imgUrlFiles = [...imgList];

    setImgList(...imgList, file);
    const formData = new FormData();

    formData.append("uploadImage", imgList);
  };

  const handleServeImg = () => {
    console.log(imgList);
  };

  return (
    <div>
      <label htmlFor="uploadFile">사진 올리기</label>
      <input
        name="uploadFile"
        type="file"
        onClick={(e) => handlePlusImage(e)}
      />
      <button onClick={handleServeImg}>서버로 보내기</button>
    </div>
  );
}
