import React from "react";
import { useDropzone } from "react-dropzone";

const MyDropzone = (props) => {
  const { setFieldValue } = props;
  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    accept: "image/*,video/*",
    onDrop: (acceptedFiles) => {
      setFieldValue("files", acceptedFiles);
      console.log(
        JSON.stringify(
          {
            files: acceptedFiles.map((file) => ({
              fileName: file.name,
              type: file.type,
              size: `${file.size} bytes`,
            })),
          },
          null,
          2
        )
      );
      console.log("============================");
    },
  });

  return (
    <div {...getRootProps()}>
      <div
        style={{
          width: "100%",
          height: "auto",
          borderWidth: 2,
          borderColor: "rgb(196,24,24)",
          borderStyle: "dashed",
          borderRadius: 50,
        }}
      >
        <input {...getInputProps()} />
        {isDragActive ? (
          <p>Drop the files here ...</p>
        ) : (
          <p>Drag n drop some files here, or click to select files</p>
        )}
      </div>
    </div>
  );
};
export default MyDropzone;