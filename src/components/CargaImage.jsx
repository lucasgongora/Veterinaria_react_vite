
import React, { useState } from 'react';

function PhotoUploader() {
  const [previewImages, setPreviewImages] = useState([]);

  const handleFileInputChange = (event) => {
    setPreviewImages(Array.from(event.target.files));
  };

  return (
    <div className='mx-5 my-10 bg-white shadow-md px-5  py-10 rounded-xl'>
      <label htmlFor="file-input" className="block mb-2 text-gray-700 font-medium">
        Select photos to upload:
      </label>
      <input type="file" id="file-input" className="border border-gray-400 p-2 rounded-md mb-4" onChange={handleFileInputChange} multiple />

      <div id="image-container" className="flex flex-wrap">
        {previewImages.map((image) => (
          <div key={image.name} className="image-preview mr-4 mb-4">
            <img src={URL.createObjectURL(image)} alt={image.name} />
          </div>
        ))}
      </div>

    </div>
  );
}

export default PhotoUploader;
