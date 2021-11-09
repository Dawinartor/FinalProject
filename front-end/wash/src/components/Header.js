import React from 'react';
import './Header.css';


class Header extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            subPages: ["The experiance", "Accommodation", "Events", "Contact", "Blog", "Book a stay"]
        };
    }

    render() {

        return (
            <div className="dr-header">
                <li>
                    <ul>
                        
                    </ul>
                </li>
            </div>
        );

    }

}