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
  const [filenames, setFilenames] = useState([]);
  const [images, setImages] = useState([]);
  const [newIMGUploaded, setNewIMGUploaded] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetSignedUrl = async () => {
      const res = await axios.get(".netlify/functions/list-images");
      setFilenames(res.data.map((a) => a.Key));
    };
    fetSignedUrl();
  }, []);

  useEffect(() => {
    if (filenames.length > 0) {
      const fetchImages = async (filenames) => {
        setLoading(true);
        const promises = await Promise.all(
          filenames.map((filename) =>
            axios.get(".netlify/functions/get-image", { params: { filename } })
          )
        );
        setImages(
          promises.map((p, idx) => ({ filename: filenames[idx], data: p.data }))
        );
        setLoading(false);
      };
      fetchImages(filenames);
    }
  }, [filenames]);

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
          <MyUploader onSuccess={() => setNewIMGUploaded(!newIMGUploaded)} />
        </div>
        <div
          style={{
            width: "100%",
            display: "flex",
            gap: "24px",
            flexWrap: "wrap",
          }}
        >
          {loading ? (
            <div>loading images</div>
          ) : (
            images.length !== 0 &&
            images.map((image, idx) => (
              <div
                style={{ maxWidth: "200px" }}
                key={`image-${image.filename}-${idx}`}
              >
                {image.data !== "error" && (
                  <img
                    src={`data:image/jpeg;base64,${image.data}`}
                    alt={"imagesdsadas"}
                    style={{ maxWidth: "100%" }}
                  />
                )}
              </div>
            ))
          )}
        </div>
      </div>
      {/* </div>
      </div> */}
    </section>
  );
}

export default UploadImages;
