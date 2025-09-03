import { Link } from "react-router"

const Navbar  = () =>{
    return (
        <nav className="navbar">
            <Link to="/">
            <p className="text-gradien font-bold text-2xl ">Analisador de cv</p>
            </Link>
            <Link to="/upload">
            <p className="primary-button w-fit ">Carregue um Currículo</p>
            </Link>
        </nav>
    )
}

export default Navbar