import React, { useState } from 'react';

interface FileUploadProps {
  onFileUpload: (file: File) => void;
  accept: string;
}

const FileUpload: React.FC<FileUploadProps> = (props) => {
  const [isDragOver, setDragOver] = useState(false);

  const handleDragEnter = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setDragOver(true);
  };

  const handleDragLeave = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setDragOver(false);
  };

  const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setDragOver(false);

    const files = e.dataTransfer.files;

    if (files && files.length > 0) {
      const file = files[0];
      props.onFileUpload(file);
    }
  };

  const handleFileInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (files && files.length > 0) {
      const file = files[0];
      props.onFileUpload(file);
    }
  };

  return (
    <div
      className={`border-dashed border-2 p-4 ${
        isDragOver ? 'border-blue-500' : 'border-gray-300'
      }`}
      onDragEnter={handleDragEnter}
      onDragOver={handleDragEnter}
      onDragLeave={handleDragLeave}
      onDrop={handleDrop}
    >
      <input
        type="file"
        accept={props.accept}
        onChange={handleFileInput}
        className="hidden"
      />
      <p className="text-gray-500">
        Drag and drop your file here, or click to select a file.
      </p>
    </div>
  );
};

export default FileUpload;
