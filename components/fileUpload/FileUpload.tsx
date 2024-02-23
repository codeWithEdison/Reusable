import React, { useState } from "react";

const FileUploadPreview = () => {
  const [selectedFiles, setSelectedFiles] = useState<File[]>([]);

  const handleFileSelect = (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files;

    if (!files || files.length === 0) {
      return;
    }

    const newFiles = Array.from(files);

    setSelectedFiles((prevFiles) => [...prevFiles, ...newFiles]);
  };

  const removeFile = (index: number) => {
    setSelectedFiles((prevFiles) => prevFiles.filter((_, i) => i !== index));
  };

  return (
    <div>
      <input
        type="file"
        className="form-input"
        onChange={handleFileSelect}
        multiple
      />
      <div style={{ display: "flex", flexWrap: "wrap" }}>
        {selectedFiles.map((file: any, index: any) => (
          <div key={index} style={{ margin: "5px" }}>
            <img
              src={URL.createObjectURL(file)}
              alt={file.name}
              style={{ maxWidth: "100px", maxHeight: "100px" }}
            />
            <button onClick={() => removeFile(index)}>Remove</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FileUploadPreview;
