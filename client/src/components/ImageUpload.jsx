import React from 'react';
import { FilePond, registerPlugin } from 'react-filepond';
import 'filepond/dist/filepond.min.css';
import FilePondPluginFileValidateType from 'filepond-plugin-file-validate-type';
import FilePondPluginImageExifOrientation from 'filepond-plugin-image-exif-orientation';
import FilePondPluginImagePreview from 'filepond-plugin-image-preview';
import 'filepond-plugin-image-preview/dist/filepond-plugin-image-preview.css';

registerPlugin(FilePondPluginImageExifOrientation, FilePondPluginImagePreview, FilePondPluginFileValidateType);


const ImageUpload = ({ images, setImages }) => {
    return (
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
    );
}

export default ImageUpload