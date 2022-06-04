import "react-dropzone-uploader/dist/styles.css";
import Dropzone from "react-dropzone-uploader";
import axios from "axios";
import { useAuthState } from "../../hooks";

// get date in format YYYY-MM-DD
const getDate = () => {
  const date = new Date();
  const year = date.getFullYear();
  const month = date.getMonth() + 1;
  const day = date.getDate();
  const hour = date.getHours();
  const minute = date.getMinutes();
  const seconds = date.getSeconds();
  return `${year}-${month < 10 ? `0${month}` : month}-${
    day < 10 ? `0${day}` : day
  }-${hour}-${minute}-${seconds}`;
};

const MyUploader = () => {
  const [user] = useAuthState();
  // specify upload params and url for your files
  const getUploadParams = async ({ file, meta }) => {
    const { name } = meta;
    const newName = `${user?.displayName || "no-name"}-${getDate()}-${name}`;
    const myRenamedFile = new File([file], newName);

    const res = await axios.get(
      "http://localhost:8888/.netlify/functions/upload",
      {
        params: { filename: newName },
      }
    );

    return {
      body: myRenamedFile,
      url: res.data.url,
      method: "put",
      meta: { ...meta, name: newName },
    };
  };

  // called every time a file's `status` changes
  const handleChangeStatus = ({ meta, file }, status) => {
    console.log(status, meta, file);
  };

  // receives array of files that are done uploading when submit button is clicked
  const handleSubmit = (files, allFiles) => {
    console.log(files.map((f) => f.meta));
    allFiles.forEach((f) => f.remove());
  };

  return (
    <Dropzone
      getUploadParams={getUploadParams}
      onChangeStatus={handleChangeStatus}
      onSubmit={handleSubmit}
      accept="image/*,audio/*,video/*"
    />
  );
};

export default MyUploader;
