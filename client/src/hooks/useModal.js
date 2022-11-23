import { useState } from "react";

const useModal = () => {
    const [isShowing, setIsShowing] = useState(false);
    const [modalContent, setModalContent] = useState(null);

    function toggle() {
        setIsShowing(!isShowing);
    }

    return {
        isShowing,
        toggle,
        modalContent,
        setModalContent
    };
}

export default useModal;