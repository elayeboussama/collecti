import Register from "../components/Register"

const JoinUsSection = () => {
    return (
        <div className="hero py-28" id="login">
            <div className="flex-col pr-10 hero-content lg:flex-row-reverse pl-28">
                <div className="w-11/12 pl-24 text-center lg:text-left">
                    <h1 className="text-5xl font-bold">Join us Now!</h1>
                    <p className="py-6">Join us in supporting the next generation of leaders and innovators at our University.</p>
                </div>
                <Register showCloseButton={false} />
            </div>
        </div>

    )
}
export default JoinUsSection