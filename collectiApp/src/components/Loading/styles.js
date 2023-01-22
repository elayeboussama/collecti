import { StyleSheet } from "react-native";

const LoadStyles = StyleSheet.create({

    body: {
        minHeigh: "100vh",
        fontFamily: "Roboto, Arial",

        color: "#ADAFB6",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        background: "rgba(249, 251,255,0.6)"

    },

    boxes: {
        height: "32px",
        width: "32px",
        position: "relative",
        WebkitTransformStyle: "preserve-3d",
        transformStyle: "preserve-3d",
        WebkitTransformOrigin: "50% 50%",
        transformOrigin: "50% 50%",
        marginTop: "32px",
        WebkitTransform: "rotateX(60deg) rotateZ(45deg) rotateY(0deg) translateZ(0px)",
        transform: "rotateX(60deg) rotateZ(45deg) rotateY(0deg) translateZ(0px)"
    },
    boxes__box: {
        width: "32px",
        height: "32px",
        top: "0px",
        left: "0",
        position: "absolute",
        WebkitTransformStyle: "preserve-3d",
        transformStyle: "preserve-3d"
    },
    boxes__box_nth_child_1: {
        WebkitTransform: "translate(100%, 0)",
        transform: "translate(100%, 0) ",
        WebkitAnimation: "box1 1s linear infinite",
        animation: "box1 1s linear infinite"
    },
    boxes__box_nth_child_2: {
        WebkitTransform: "translate(0,100 % )",
        transform: "translate(0, 100 % )",
        WebkitAnimation: "box2 1s linear infinite",
        animation: "box2 1s linear infinite"
    },
    boxes__box_nth_child_3: {
        WebkitTransform: "translate(100%, 100 % )",
        transform: "translate(100%, 100 % )",
        WebkitAnimation: "box3 1s linear infinite",
        animation: "box3 1s linear infinite"
    },
    boxes__box_nth_child_4: {
        WebkitTransform: "translate(200%, 0)",
        transform: "translate(200%,  0) ",
        WebkitAnimation: "box4 1s linear infinite",
        animation: "box4 1s linear infinite"
    },
    boxes__box___div: {
        background: "#5C8DF6",
        translateZ: "15.5px",
        rotateY: "0deg",
        rotateX: "0deg",
        position: "absolute",
        width: "100%",
        height: "100%",
        top: "auto",
        right: "auto",
        bottom: "auto",
        left: "auto",
        WebkitTransform: "rotateY(var(--rotateY)) rotateX(var(--rotateX)) translateZ(var(--translateZ))",
        transform: "rotateY(var(--rotateY)) rotateX(var(--rotateX)) translateZ(var(--translateZ))"
    },
    boxes__box___div_nth_child_1: {
        top: "0",
        left: "0",
        background: "#5C8DF6"
    },
    boxes__box___div_nth_child_2: {
        background: "#145af2",
        right: "0",
        rotateY: "90deg"
    },
    boxes__box___div_nth_child_3: {
        background: "#447cf5",
        rotateX: "-90deg"
    },
    boxes__box___div_nth_child_4: {
        background: "#DBE3F4",
        top: "0",
        left: "0",
        translateZ: "-90px"
    }


})
export {
    LoadStyles
};