import React, { Component } from 'react';
import Link from '../../utils/ActiveLink';
  

 class Navbar extends Component {

    // Search Form
    state = {
        searchForm: false,
    };
    handleSearchForm = () => {
        this.setState( prevState => {
            return {
                searchForm: !prevState.searchForm
            };
        });
    }

    // Navbar
    _isMounted = false;
    state = {
        display: false,
        collapsed: true
    };
    toggleNavbar = () => {
        this.setState({
            collapsed: !this.state.collapsed,
        });
    }
    componentDidMount() {
        let elementId = document.getElementById("navbar");
        document.addEventListener("scroll", () => {
            if (window.scrollY > 170) {
                elementId.classList.add("is-sticky");
            } else {
                elementId.classList.remove("is-sticky");
            }
        });
        window.scrollTo(0, 0);
    }
    componentWillUnmount() {
        this._isMounted = false;
    }

    render() {
        const { collapsed } = this.state;
        const classOne = collapsed ? 'collapse navbar-collapse' : 'collapse navbar-collapse show';
        const classTwo = collapsed ? 'navbar-toggler navbar-toggler-right collapsed' : 'navbar-toggler navbar-toggler-right';

        return (
            <React.Fragment>
               <div id="navbar" className="navbar-area">
                    <div className="main-nav">
                        <div className="container">
                            <nav className="navbar navbar-expand-md navbar-light">
                                <Link href="/">
                                    <a className="navbar-brand">
                                        {/* <img src={require("../../images/logo/logo-color.png")} className="main-logo" alt="logo" width="150" />
                                        <img src={require("../../images/logo/logo-color.png")} className="optional-logo" alt="logo"  width="100" /> */}
                                    </a>
                                </Link>

                                <button 
                                    onClick={this.toggleNavbar} 
                                    className={classTwo}
                                    type="button" 
                                    data-toggle="collapse" 
                                    data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" 
                                    aria-expanded="false" 
                                    aria-label="Toggle navigation"
                                >
                                    <span className="icon-bar top-bar"></span>
                                    <span className="icon-bar middle-bar"></span>
                                    <span className="icon-bar bottom-bar"></span>
                                </button>

                                <div className={classOne} id="navbarSupportedContent">
                                    <ul className="navbar-nav">
                                    <li className="nav-item">
                                            <Link href="/" activeClassName="active">
                                                <a className="nav-link">Accueil</a>
                                            </Link>
                                        </li>

                                        <li className="nav-item">
                                            <Link href="/qui-sommes-nous" activeClassName="active">
                                                <a className="nav-link">A propos</a>
                                            </Link>
                                        </li>
  
                                        

                                      
                                    </ul>
                                    
                                    <div className="others-options">
                                        <div className="option-item">
                                            <i 
                                                onClick={this.handleSearchForm} 
                                                className="search-btn flaticon-search"
                                                style={{
                                                    display: this.state.searchForm ? 'none' : 'block'
                                                }}
                                            ></i>

                                            <i 
                                                onClick={this.handleSearchForm} 
                                                className={`close-btn fas fa-times ${this.state.searchForm ? 'active' : ''}`}
                                            ></i>
                                            
                                            <div 
                                                className="search-overlay search-popup"
                                                style={{
                                                    display: this.state.searchForm ? 'block' : 'none'
                                                }}
                                            >
                                                <div className='search-box'>
                                                    <form className="search-form">
                                                        <input className="search-input" name="search" placeholder="Search" type="text" />
                                                        <button className="search-button" type="submit">
                                                            <i className="fas fa-search"></i>
                                                        </button>
                                                    </form>
                                                </div>
                                            </div>
                                        </div>
                                    
                                       
                                    </div>
                                </div>
                            </nav>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}

export default Navbar;
