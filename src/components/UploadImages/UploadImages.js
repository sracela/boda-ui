import HeartDivider from "../HeartDivider/HeartDivider";
import { Formik } from "formik";
import MyDropzone from "./MyDropzone";
import { useUploader } from "../../hooks";

function UploadImages() {
  const { upload } = useUploader();
  const handleOnSubmit = (values) => {
    console.log(values.files);
    // values.files.map(console.log);
    values.files.map((f) => upload(f));
  };
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
                    <Formik
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
                    </Formik>
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
