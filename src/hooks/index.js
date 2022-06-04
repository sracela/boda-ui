import { useAuthState as useFirebaseAuthState } from "react-firebase-hooks/auth";
import { auth } from "../firebase/clientApp";
import axios from "axios";
import { useEffect, useState } from "react";

const useAuthState = () => useFirebaseAuthState(auth);

const useSavedFiles = () => {
  const [files, setFiles] = useState([]);

  useEffect(() => {
    const fetchImages = async () => {
      const res = await axios.get("/api/list");
      setFiles(res.data);
    };

    fetchImages();
  }, []);

  return [files];
};

const useUploader = () => {
  const [file, setFile] = useState();
  //   const [signedUrl, setSignedUrl] = useState("");

  const fetSignedUrl = async (filename) => {
    const res = await axios.get(".netlify/functions/upload", {
      params: { filename },
    });
    // setSignedUrl(res.data.url);
    return res.data.url;
  };
  const uploadFile = async (url, form) => {
    return await fetch(url, {
      method: "PUT",
      body: form,
    });
  };

  useEffect(() => {
    if (file instanceof File) {
      console.log("Subiendo file");
      console.log(file);
      try {
        fetSignedUrl(file.name).then((signedUrl) => {
          console.log("URL conseguida", signedUrl);
          const form = new FormData();
          form.append(file.name, file, file.name);
          console.log("form", form);
          uploadFile(signedUrl, form);
          console.log("Subido");
        });
      } catch (error) {
        console.log("Error", error);
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [file]);

  return { upload: setFile };
};

export { useAuthState, useSavedFiles, useUploader };
