import { useSelector } from "react-redux";

const useModal = () => {

  const content = useSelector((state) => state.modal.content);

  return (
    <>
      <input type="checkbox" id="my-modal-4" className="modal-toggle" />
      <label htmlFor="my-modal-4" className="cursor-pointer modal">
        {content}
      </label>

    </>
  )
}

export default useModal