import "react-dropzone-uploader/dist/styles.css";
import Dropzone from "react-dropzone-uploader";
import axios from "axios";
import { useMediaQuery } from "react-responsive";
import { IS_MOBILE_MAX_WIDTH } from "../../utils/common";
import Nav from "../Nav/Nav";
import HeartDivider from "../HeartDivider/HeartDivider";
import { useNavigate } from "react-router-dom";

// get date in format YYYY-MM-DD
// const getDate = () => {
//   const date = new Date();
//   const year = date.getFullYear();
//   const month = date.getMonth() + 1;
//   const day = date.getDate();
//   const hour = date.getHours();
//   const minute = date.getMinutes();
//   const seconds = date.getSeconds();
//   return `${year}-${month < 10 ? `0${month}` : month}-${
//     day < 10 ? `0${day}` : day
//   }-${hour}-${minute}-${seconds}`;
// };

const MyUploader = ({ onSuccess }) => {
  const username = localStorage.getItem("username");
  const isMobile = useMediaQuery(IS_MOBILE_MAX_WIDTH);
  const navigate = useNavigate();

  const uploadThumbnail = async (file, name, meta) => {
    const newName = "thumbnails/" + name;

    var canvas = document.getElementById("myCanvas");
    var ctx = canvas.getContext("2d");

    const res = await axios.get(
      `${process.env.PUBLIC_URL}/.netlify/functions/upload`,
      {
        params: { filename: newName },
      }
    );

    var reader = new FileReader();
    reader.onload = function (event) {
      var img = new Image();
      img.onload = function () {
        canvas.width = img.width;
        canvas.height = img.height;
        ctx.drawImage(img, 0, 0);

        var MAX_WIDTH = 300;
        var MAX_HEIGHT = 300;
        var width = img.width;
        var height = img.height;

        if (width > height) {
          if (width > MAX_WIDTH) {
            height *= MAX_WIDTH / width;
            width = MAX_WIDTH;
          }
        } else {
          if (height > MAX_HEIGHT) {
            width *= MAX_HEIGHT / height;
            height = MAX_HEIGHT;
          }
        }
        canvas.width = width;
        canvas.height = height;
        var ctx2 = canvas.getContext("2d");
        ctx2.drawImage(img, 0, 0, width, height);
        canvas.toBlob(async (blob) => {
          let myRenamedFile = new File([blob], newName, { type: meta.type });

          const form = new FormData();
          form.append(newName, myRenamedFile, newName);
          const response = await fetch(res.data.url, {
            method: "PUT",
            body: myRenamedFile,
          });
          console.log("thumb res", response);
        }, meta.type);
      };
      img.src = event.target.result;
    };
    reader.readAsDataURL(file);
  };
  // specify upload params and url for your files
  const getUploadParams = async ({ file, meta }) => {
    const { name } = meta;
    let newName = "";
    if (name.split("-")[0] === username) {
      newName = name;
    } else {
      newName = `${username || "anonymous"}/${name}`;
    }
    const myRenamedFile = new File([file], newName, { type: meta.type });

    const res = await axios.get(
      `${process.env.PUBLIC_URL}/.netlify/functions/upload`,
      {
        params: { filename: newName },
      }
    );

    await uploadThumbnail(myRenamedFile, newName, meta);

    return {
      body: myRenamedFile,
      url: res.data.url,
      method: "put",
      meta: { ...meta, name: newName },
    };
    // return null;
  };

  // called every time a file's `status` changes
  const handleChangeStatus = ({ meta, file }, status) => {
    console.log(status, meta, file);
  };

  // receives array of files that are done uploading when submit button is clicked
  const handleSubmit = (files, allFiles) => {
    console.log(files.map((f) => f.meta));
    allFiles.forEach((f) => f.remove());
    navigate("/sube-tus-fotos");
  };

  if (!!!username) navigate("/sube-tus-fotos");

  return (
    <section id="my-uploader">
      {!isMobile && <Nav isDefault />}

      <div className="container">
        <div className="row">
          <div className="col-md-12 text-center">
            <div className="section-title animation fadeInUp"></div>
            <HeartDivider />
            <h2>¿LISTO PARA COMPARTIRNOS TUS FOTOS?</h2>
            <p>
              Nos hace mucha ilusión ver el evento desde todos los ángulos
              posibles, así que sólo podemos agradecerte tu ayuda.
            </p>
            <p>Puedes añadir las fotos haciendo click justo aquí debajo:</p>
            <div style={{ overflowY: "scroll", marginBottom: "54px" }}>
              <Dropzone
                getUploadParams={getUploadParams}
                onChangeStatus={handleChangeStatus}
                onSubmit={handleSubmit}
                accept="image/*,audio/*,video/*"
                inputContent={
                  <div style={{ padding: 0, margin: 0 }}>
                    <h1 style={{ padding: 0, margin: 0 }}>+</h1>
                    <p style={{ padding: 0, margin: 0 }}>
                      Haz click aquí para añadir tus fotos
                    </p>
                  </div>
                }
                submitButtonContent="¡Listo por ahora!"
                inputWithFilesContent="+ Añadir más fotos"
                styles={{
                  dropzone: {
                    borderStyle: "dashed",
                    padding: "16px",
                    minHeight: "300px",
                    overflow: "auto",
                  },
                  inputLabel: {
                    color: "#035959",
                    fontSize: "2rem",
                    width: "100%",
                    height: "100%",
                  },
                  submitButton: {
                    background: "#035959",
                    color: "white",
                  },
                  inputLabelWithFiles: {
                    color: "#035959",
                  },
                }}
              />
            </div>
          </div>
        </div>
      </div>

      <canvas id="myCanvas" style={{ visibility: "hidden" }}></canvas>
      {isMobile && <Nav />}
    </section>
  );
};

export default MyUploader;
