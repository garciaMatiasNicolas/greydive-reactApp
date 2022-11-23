import { Link } from "react-router-dom"

const Header = () => {
  return (
    <div>
        <nav className="navbar navbar-expand-lg bg-transparent">
            <div className="container-fluid">
                <Link style={{marginLeft:'5%'}} to={'/'}>
                    <img className="m-4" width={'170'} src="https://uploads-ssl.webflow.com/612fcc289671bc539ecd004e/612ff6936ef1a98f2a9b29cf_logo-greydive-gris.png" alt="logo"/>
                </Link>
            </div>
        </nav>
    </div>
  )
}

export default Header