function Footer(){
    return (
        <div className="footer container">
            <div>
                <a href="/" className="title mr-1">DTthon</a>
                <span>&copy; {new Date().getFullYear()}</span>
            </div>
            <div>
                <p className="title">Specisl Thanks to</p>
                <p className="li">React</p>
                <p className="li">Firebase</p>
                <p className="li">Github</p>
                <p className="li">Netlify</p>
            </div>
            <div>
                <p className="title">Find me on</p>
                <a href="https://github.com/anubhabguha1999" className="li">Github</a>
                <a href="https://www.facebook.com/anubhabagguha/" className="li">Facebook</a>
                <a href="https://twitter.com/AnubhabGuha2" className="li">Twitter</a>
                <a href="https://www.linkedin.com/in/anubhab-guha-478967201/" className="li">LinkedIn</a>
            </div>
        </div>
    )
}

export default Footer