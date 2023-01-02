const Footer = () => {
    return (
        <footer className="flex flex-col-reverse flex-wrap items-center justify-around p-4 mt-auto border-t footer xl:flex-row text-base-content">
            <div className="items-center grid-flow-col">
                <img className="w-9 h-9" src="https://cdn.discordapp.com/attachments/311564936004370434/1059450581007224933/Untitled_3.svg" alt="black/white logo" />
                <p>Copyright © 2022 - All right reserved</p>
            </div>
            <div className="grid-flow-col gap-4 md:place-self-center md:justify-self-end">
                <a className="link link-hover">About us</a>
                <a className="link link-hover">Contact</a>
            </div>
            <div>
                <div className="form-control w-80">
                    <label className="label">
                        <span className="label-text">Subscribe to our Newsletter</span>
                    </label>
                    <div className="relative">
                        <input type="text" placeholder="username@site.com" className="w-full pr-16 input input-bordered" />
                        <button className="absolute top-0 right-0 rounded-l-none btn btn-primary">Subscribe</button>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer

// Todo: add routes to links 