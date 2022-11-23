import cn from "classnames"

const useModal = ({ isShowing, hide, content }) => {

    const modalClass = cn({
        "modal modal-bottom sm:modal-middle": true,
        "modal-open": isShowing,
    });

    return isShowing && (
        <div className={modalClass}>
            <div className="modal-box">{content}</div>
        </div>
    )
}

export default useModal

// ? How to use a modal
// const { isShowing, toggle } = useModal();
/* <button className="btn btn-primary" onClick={toggle}>
        Hello
      </button>
      <Modal isShowing={isShowing} content={
        <>
          <h3 className="font-bold text-lg">
            Congratulations random Internet user!
          </h3>
          <p className="py-4">
            You havve been selected for a chance to get one year of subscription
            to use Wikipedia for free!
          </p>
          <div className="modal-action">
            {/* closes the modal *///}
    //         <button className="btn" onClick={toggle}>
    //           Yay!
    //         </button>
    //       </div>
    //     </>
    //   }>
    //   </Modal> */}