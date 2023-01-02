import React, { useState } from 'react';

// Import React FilePond
import { FilePond, registerPlugin } from 'react-filepond';

import 'filepond/dist/filepond.min.css';

import FilePondPluginImageExifOrientation from 'filepond-plugin-image-exif-orientation';
import FilePondPluginImagePreview from 'filepond-plugin-image-preview';
import FilePondPluginFileValidateType from 'filepond-plugin-file-validate-type';
import 'filepond-plugin-image-preview/dist/filepond-plugin-image-preview.css';

registerPlugin(FilePondPluginImageExifOrientation, FilePondPluginImagePreview, FilePondPluginFileValidateType);


const ImageUpload = ({ images, setImages }) => {
    return (
        <div className="App">
            <FilePond
                files={images}
                onupdatefiles={setImages}
                allowMultiple={true}
                maxFiles={10}
                instantUpload={false}
                name="files"
                acceptedFileTypes={['image/*']}
                labelIdle='Got some great images to share? 📸 drag & drop them or <span class="filepond--label-action">Browse</span>'
            />
        </div>
    );
}

export default ImageUpload