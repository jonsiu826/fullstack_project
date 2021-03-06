import React from 'react';
import { Link } from 'react-router-dom';

class Header extends React.Component{
    constructor(props){
        super(props)

        
    }

    render(){

        return(
            <nav className="header-nav">
                <div>
                    <Link className="header-logo" to="/" href="#">HYPED</Link>
                </div>
                 <ul className="header-list">
                    <Link to="/">
                        <span className="header-discover">Discover</span>
                    </Link>
                    <Link to="/sneakers">
                        <span className="header-shopall">Shop All</span>
                    </Link>
                    <Link to="/styles">
                        <span className="header-shopall">Styles</span>
                    </Link>
                    <Link to="/search">
                        <span className="header-search"><i className="fas fa-search"></i></span>
                    </Link>
                    <li>
                        <span onClick={() => this.props.openModal('login_signup')} className="header-bars"><i className="fas fa-bars"></i></span>
                    </li>
                </ul>
            </nav>
        )
    }
}
export default Header