import React from 'react';
import { FilePond, registerPlugin } from 'react-filepond';
import 'filepond/dist/filepond.min.css';
import FilePondPluginFileValidateType from 'filepond-plugin-file-validate-type';
import FilePondPluginImageExifOrientation from 'filepond-plugin-image-exif-orientation';
import FilePondPluginImagePreview from 'filepond-plugin-image-preview';
import 'filepond-plugin-image-preview/dist/filepond-plugin-image-preview.css';

registerPlugin(FilePondPluginImageExifOrientation, FilePondPluginImagePreview, FilePondPluginFileValidateType);


const CoverUpload = ({ handleChange, setFieldValue }) => {

    return (
        <FilePond
            onupdatefiles={fileItems => {
                setFieldValue("coverPhoto", fileItems.map(fileItem => fileItem.file))
            }}
            allowMultiple={false}
            maxFiles={1}
            instantUpload={false}
            name="files"
            acceptedFileTypes={['image/*']}
            onprocessfiles={handleChange}
            labelIdle='Add a cover photo 📸 drag & drop or <span class="filepond--label-action">Browse</span>'
        />
    );
}

export default CoverUpload