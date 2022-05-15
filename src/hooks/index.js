import {useAuthState as useFirebaseAuthState} from "react-firebase-hooks/auth";
import {auth} from "../firebase/clientApp";
import axios from "axios";
import {useEffect, useState} from "react";

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
    const [signedUrl, setSignedUrl] = useState("");

    useEffect(() => {
        if (file instanceof File) {
            console.log("Subiendo file")
            console.log(file)
            const fetSignedUrl = async (filename) => {
                const res = await axios.get("/api/upload", {params: {filename}});
                setSignedUrl(res.data);
            };
            const uploadFile = async (url, form) =>
                await fetch(url, {
                    method: "PUT",
                    body: form,
                });

            fetSignedUrl(file.name).then(() => {
                console.log("URL conseguida", signedUrl);
                const form = new FormData();
                form.append(file.name, file, file.name);
                uploadFile(signedUrl, form).then(() => console.log("Subido"));
            });
            //
            // console.log("fetSignedUrl");
            // fetSignedUrl(file.name).then(() => {});
            // console.log("DESPUES fetSignedUrl", signedUrl);
            // const form = new FormData();
            // form.append(file.name, file, file.name);
            // console.log("Enviando Form");
            // uploadFile(signedUrl, form);
            // console.log("FOrm ENVIADO");
        }
    }, [file, signedUrl]);

    return {upload: setFile};
};

export {useAuthState, useSavedFiles, useUploader};