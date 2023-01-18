import FilePondPluginFileValidateType from 'filepond-plugin-file-validate-type';
import FilePondPluginImageCrop from 'filepond-plugin-image-crop';
import FilePondPluginImageEdit from 'filepond-plugin-image-edit';
import FilePondPluginImageExifOrientation from 'filepond-plugin-image-exif-orientation';
import FilePondPluginImagePreview from 'filepond-plugin-image-preview';
import 'filepond-plugin-image-preview/dist/filepond-plugin-image-preview.css';
import FilePondPluginImageResize from 'filepond-plugin-image-resize';
import FilePondPluginImageTransform from 'filepond-plugin-image-transform';
import 'filepond/dist/filepond.min.css';
import React from 'react';
import { FilePond, registerPlugin } from 'react-filepond';

registerPlugin(
    FilePondPluginFileValidateType,
    FilePondPluginImageExifOrientation,
    FilePondPluginImagePreview,
    FilePondPluginImageCrop,
    FilePondPluginImageResize,
    FilePondPluginImageTransform,
    FilePondPluginImageEdit
)


const AvatarUpload = ({ setFieldValue, handleChange }) => {

    return (
        <FilePond
            onupdatefiles={fileItems => {
                setFieldValue("avatar", fileItems.map(fileItem => fileItem.file))
            }}
            maxFiles={1}
            instantUpload={false}
            name="files"
            imagePreviewHeight={170}
            acceptedFileTypes={['image/*']}
            stylePanelLayout="compact circle"
            imageCropAspectRatio="1:1"
            styleLoadIndicatorPosition='center bottom'
            styleButtonRemoveItemPosition='center bottom'
            onprocessfiles={handleChange}
            labelIdle='Add an avatar 📸 drag & drop them or <span class="filepond--label-action">Browse</span>'
        />
    );
}

export default AvatarUpload