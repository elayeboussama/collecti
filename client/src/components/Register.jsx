import { EyeIcon, EyeSlashIcon, XMarkIcon } from "@heroicons/react/24/outline"
import { useState } from "react"
import { useDispatch } from "react-redux"
import { setContent } from "../features/modalSlice"
import Login from "./Login"
import Button from './shared/Button'

const Register = () => {
    const dispatch = useDispatch()

    const [showPassword, setShowPassword] = useState(false);

    const toggleShowPassword = () => {
        setShowPassword(!showPassword);
    };

    return (
        <label className="relative max-w-sm p-0 modal-box lg:max-w-2xl bg-base-100">
            <div className="flex-shrink-0 mx-auto card">
                <label htmlFor="my-modal-4" className="absolute btn btn-circle btn-ghost right-2 top-2"><XMarkIcon className="w-6 h-6" /></label>
                <div className="flex flex-row items-center justify-around p-8">
                    <img className="hidden lg:block max-h-80" src="https://svgshare.com/i/oTj.svg" alt="login" />
                    <div className="flex-grow max-w-sm p-0 px-2 card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="text" placeholder="name" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="text" placeholder="email" className="input input-bordered" />
                        </div>
                        <label className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <div className="relative w-full">
                                <input type={showPassword ? "text" : "password"} placeholder="password" className="w-full input input-bordered" />
                                <button onClick={toggleShowPassword} className="absolute right-0 btn btn-ghost">
                                    {showPassword ? <EyeSlashIcon className="w-6 h-6" /> : <EyeIcon className="w-6 h-6" />}
                                </button>
                            </div>
                            <label className="label">
                                <span className="label-text-alt link link-hover">Forgot password?</span>
                            </label>
                        </label>
                        <div className="mt-6 form-control">
                            <Button primary>Sign up</Button>
                        </div>
                        <div className="flex text-sm">
                            <p className="mr-1 text-base-content/70 grow-0">Already have an account?</p><span onClick={() => dispatch(setContent(<Login />))} className="link link-hover">Login</span>
                        </div>
                    </div>
                </div>
            </div>
        </label>
    )
}

export default Register