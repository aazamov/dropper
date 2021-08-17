import { useDropzone } from "react-dropzone";
import { useState } from "react";

const App = () => {
  const [files, setFiles] = useState([]);

  const { getRootProps, getInputProps } = useDropzone({
    accept: "image/*",
    onDrop: (acceptedFiles) => {
      setFiles(
        acceptedFiles.map((file) =>
          Object.assign(file, {
            preview: URL.createObjectURL(file),
          })
        )
      );
    },
  });

  const images = files.map((file) => (
    <div key={file.name}>
      <div>
        <img src={file.preview} alt="preview" style={{ width: "200px" }} />
      </div>
    </div>
  ));

  return (
    <div className="App">
      <div {...getRootProps()}>
        <input {...getInputProps()} />
        <p>Drop Files here</p>
      </div>
      <div>{images}</div>
    </div>
  );
};

export default App;
