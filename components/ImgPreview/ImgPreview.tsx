import React, { useState } from 'react';

interface ImgProps {
    imgLocation: string;
}

const ImgPreview: React.FC<ImgProps> = ({ imgLocation }) => {
  return (
    <div>
      <img src={imgLocation}/>
    </div>
  );
};

export default ImgPreview;