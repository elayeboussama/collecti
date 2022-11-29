import { XMarkIcon } from "@heroicons/react/24/outline"
import { useDispatch } from "react-redux"
import { setContent } from "../features/modalSlice"
import Register from "./Register"

const Login = () => {
    const dispatch = useDispatch()

    return (
        <label className="modal-box  max-w-sm lg:max-w-2xl relative bg-base-100 p-0">
            <div className="card flex-shrink-0 mx-auto">
                <label htmlFor="my-modal-4" className="btn btn-circle btn-ghost absolute right-2 top-2"><XMarkIcon className="h-6 w-6" /></label>
                <div className="flex flex-row p-8 justify-around items-center">
                    <img className="hidden lg:block max-h-80" src="https://svgshare.com/i/oTj.svg" alt="login" />
                    <div className="card-body p-0 flex-grow max-w-sm px-2">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="text" placeholder="email" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="text" placeholder="password" className="input input-bordered" />
                            <label className="label">
                                <span className="label-text-alt link link-hover">Forgot password?</span>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-primary">Login</button>
                        </div>
                        <div className="flex text-sm">
                            <p className="text-base-content/70 grow-0 mr-1">Not yet registered?</p><span onClick={() => dispatch(setContent(<Register />))} className="link link-hover">Sign up</span>
                        </div>
                    </div>
                </div>
            </div>
        </label>

    )
}

export default Login

// Todo: add logo on top of the modal
// Todo: fix input on focus when card is clicked
