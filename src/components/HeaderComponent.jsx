import React, { Component } from 'react';

class HeaderComponent extends Component {
    constructor(props){
        super(props)
        this.state = {

        }
       
       
    }
   
   
    render() {
        return (
            <div>
                <header>
                    <nav className="navbar navbar-expand-md navbar-dark bg-dark">
                        <div> <a href="https://javaguides.net" className="navbar-brand">Employee Management app</a></div>
                        <div className ="row">
                            <button className = "btn btn-primary" onClick={this.addEmployee}>AddEmployee</button>
                         </div>
                    </nav>
                 </header>
            </div>
        );
    }
}

export default HeaderComponent;