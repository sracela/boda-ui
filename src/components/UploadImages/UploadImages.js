import React, { useState } from "react";
import MyUploader from "./MyUploader";
import { useEffect } from "react";
import axios from "axios";

function UploadImages() {
  // const { upload } = useUploader();
  // const handleOnSubmit = (values) => {
  //   console.log(values.files);
  //   values.files.map((f) => upload(f));
  // };
  const [images, setImages] = useState([]);

  const fetSignedUrl = async () => {
    const res = await axios.get(".netlify/functions/list-images");
    return res.data;
  };

  useEffect(() => {
    fetSignedUrl().then((data) => {
      setImages([...data]);
    });
  }, []);

  return (
    <section style={{ height: "100vh", width: "100%" }}>
      <div
        style={{
          width: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          textAlign: "center",
          gap: "100px",
        }}
      >
        <div>
          <h1>Comparte tus fotos</h1>
          <div style={{ width: "100%", display: "flex" }}></div>
          <MyUploader />
        </div>
        <div
          style={{
            width: "100%",
            display: "flex",
            gap: "24px",
            flexWrap: "wrap",
          }}
        >
          {images.length !== 0 &&
            images.map((image, idx) => (
              <div style={{ maxWidth: "200px" }}>
                <img
                  key={`image-${idx}`}
                  src={`data:image/jpeg;base64,${image}`}
                  alt={"imagesdsadas"}
                  style={{ maxWidth: "100%" }}
                />
              </div>
            ))}
        </div>
      </div>
      {/* </div>
      </div> */}
    </section>
  );
}

export default UploadImages;
