import { XMarkIcon } from "@heroicons/react/24/outline"

const Login = () => {
    return (
        <div className="card flex-shrink-0 mx-auto max-w-sm">
            <label htmlFor="my-modal-4" className="btn btn-circle btn-ghost absolute right-2 top-2"><XMarkIcon className="h-6 w-6" /></label>
            <div className="card-body">
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
                        <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                    </label>
                </div>
                <div className="form-control mt-6">
                    <button className="btn btn-primary">Login</button>
                </div>
                <div className="flex text-sm">
                    <p className="text-base-content/70 grow-0 mr-1">Already have an account?</p><a className="link link-hover">Sign up</a>
                </div>
            </div>
        </div>
    )
}

export default Login

// Todo: add logo on top of the modal
// Todo: fix input on focus when card is clicked
