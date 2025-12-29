import { MdOutlineDarkMode, MdOutlineLightMode } from "react-icons/md";

function Navbar({theme, setTheme}) {
    return(
        <nav className="navbar">
            <span className="logo">Erupass v0.9.0-alpha</span>
            <div className="nav-actions">
                <button
                    className="theme-toggle"
                    onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                    aria-label="Toggle theme"
                >
                    {theme === "dark" ? <MdOutlineLightMode size={20}/> : <MdOutlineDarkMode size={20}/>}
                </button>
                <a href="#download" className="nav-btn">Download</a>
            </div>

            
        </nav>
    )
}

export default Navbar;