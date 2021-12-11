// order summary component by frontend mentor
import React from 'react';
import ReactDOM from 'react-dom';
// upload image
import img0 from '../../Ben.jpg';

import './Ordersummary.css';


//TODO: Add either give Ordersumarry your img source or default 'img0'

let ret = 1;
const switchPicture = () => {
    ret == 0 ? ret++ : ret--;
    console.log(ret);
}

const changeColor = (event) => {
    event.target.style.backgroundColor = 'purple';
}

const strings = ['Home', 'Shop', 'About Me'];
const listItems = strings.map((lielement, i) => <li className={lielement} key={i}> {lielement}</li>);


// TODO: How to pass images to this component?
//! Through props it is easily possible to pass data to compoenents


export class Ordersummary extends React.Component {
    render() {
        
        return (
            <div className="orderSummary-Container" onMouseOver={changeColor}>
                <img className="upper-image" src={this.props.imageSrc} alt='custome image' onClick={switchPicture} />
                <ul>
                    {listItems}
                    {console.log(this.props.children)}
                </ul>
            </div>
        );
    }
}

Ordersummary.defaultProps = {
    imageSrc: img0
}