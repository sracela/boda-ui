import React, { useState } from "react";
import HeartDivider from "../HeartDivider/HeartDivider";
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
    <section id="main-slider" class="flexslider" style={{ height: "100vh" }}>
      {/* MAIN SLIDER TITLE OUTTER WRAPPER */}
      <div class="slide-title-coming-soon-outter-wrapper">
        {/* MAIN SLIDER TITLE INNER WRAPPER */}
        <div class="slide-title-coming-soon-inner-wrapper">
          {/* TITLE */}
          <div class="slide-title-coming-soon align-middle">
            <div class="container">
              <div class="row">
                <div class="col-md-offset-3 col-md-6 animation delay1 fadeInUp">
                  <HeartDivider />
                  <div className="container">
                    {/* <Formik
                      initialValues={{ files: [] }}
                      onSubmit={(values) => handleOnSubmit(values)}
                    >
                      {({ values, handleSubmit, setFieldValue }) => (
                        <form onSubmit={handleSubmit}>
                          <div className="form-group">
                            <label>Multiple files</label>
                            <MyDropzone setFieldValue={setFieldValue} />
                          </div>
                          <button type="submit" className="btn btn-primary">
                            Subir imágenes
                          </button>
                        </form>
                      )}
                    </Formik> */}
                    <MyUploader />
                    <br />
                    <br />
                    <div
                      style={{
                        display: "grid",
                        gridTemplateColumns: "1fr 1fr 1fr",
                        gap: "16px",
                      }}
                    >
                      {images.length !== 0 &&
                        images.map((image, idx) => (
                          <img
                            key={`image-${idx}`}
                            src={`data:image/jpeg;base64,${image}`}
                            alt={"imagesdsadas"}
                            style={{ maxWidth: "150px" }}
                          />
                        ))}
                      {/* {image && (
                        <img
                          src={`data:image/jpeg;base64,${image}`}
                          alt={"imagesdsadas"}
                          style={{ maxWidth: "100px" }}
                        />
                      )} */}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default UploadImages;
