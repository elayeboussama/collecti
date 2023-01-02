import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import { useState } from "react";
import { v4 } from 'uuid';
import { storage } from "../firebase";


export const useStorage = () => {
    const [error, setError] = useState(null);
    const [url, setUrl] = useState(null);
    const [isLoading, setIsLoading] = useState(false);

    const uploadFile = async (file) => {
        setIsLoading(true);
        try {
            const storageRef = ref(storage, file.name + v4());
            const response = await uploadBytes(storageRef, file)
            await getDownloadURL(response.ref).then((downloadedURL) => {
                setUrl(downloadedURL);
            })
        } catch (err) {
            setError(err);
        }
        setIsLoading(false);
    }

    return { url, error, uploadFile, isLoading };

};