import { useState } from "react";
import { storage } from "../firebase";
import { useId } from 'react';


export const useStorage = (file) => {
    const [progress, setProgress] = useState(0);
    const [error, setError] = useState(null);
    const [url, setUrl] = useState(null);

    const id = useId();

    const uploadFile = (file) => {
        const storageRef = storage.ref(file.name + id);
        storageRef.put(file).on(
            "state_changed",
            (snap) => {
                let percentage = Math.round((snap.bytesTransferred / snap.totalBytes) * 100);
                setProgress(percentage);
            },
            (err) => {
                setError(err);
            },
            async () => {
                const downloadUrl = await storageRef.getDownloadURL();
                setUrl(downloadUrl);
            }
        );
    }

    return { progress, url, error, uploadFile };

};