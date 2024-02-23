// PdfPreview.tsx

import React, { useState } from 'react';
import { Worker, Viewer } from '@react-pdf-viewer/core';
import { pdfjs } from 'react-pdf';

interface PdfPreviewProps {
  file_url: string;
  class_name: string;
  frame_title: string;
  setLoadingFile: React.Dispatch<React.SetStateAction<boolean>>; // Updated type
  full_height?: boolean;
  style?: React.CSSProperties | undefined;
}

const PdfPreview: React.FC<PdfPreviewProps> = ({
  file_url,
  class_name,
  frame_title,
  setLoadingFile,
  full_height = false,
  style,
}) => {
  const [numPages, setNumPages] = useState<number | null>(null);

  function onDocumentLoadSuccess({ numPages }: { numPages: number }) {
    setNumPages(numPages);
    setLoadingFile(false); 
  }

  return (
    <div className={`${class_name} ${full_height ? 'full-height' : ''}`} style={style}>
      <Worker workerUrl={`https://unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.js`}>
        <Viewer fileUrl={file_url} />
      </Worker>
    </div>
  );
};

export default PdfPreview;
