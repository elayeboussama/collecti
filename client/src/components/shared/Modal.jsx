import { useSelector } from "react-redux";

const useModal = () => {

  const content = useSelector((state) => state.modal.content);

  return (
    <>
      <input type="checkbox" id="my-modal-4" className="modal-toggle" />
      <label htmlFor="my-modal-4" className="modal cursor-pointer">
        {content}
      </label>

    </>
  )
}

export default useModal