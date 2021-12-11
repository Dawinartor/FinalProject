import React from 'react';
import ReactDOM from 'react-dom';
// upload image
import img1 from '.././src/Room.jpg';
// import my component
import { Ordersummary } from './component/ordersummary/Ordersummary.js';
import { EstablishConn } from './component/connDBtoNodeJS/EstablishConn.js';

// multi line components in brackets
const myList = (
    <ul>
        <li>{ 5 * 7 }</li>
        <li>{ 5 * 3 }</li>
        <li>{ 5 * 5 }</li>
    </ul>);

// single line components without brackets
const example = <h1 id="example">JSX Attributes</h1>;

let baby = false;
let age = 33;

const tasty = (
    <ul>
      <li>Applesauce</li>
      { !baby && <li>Pizza</li> }
      { age > 15 && <li>Brussels Sprouts</li> }
      { age > 20 && <li>Oysters</li> }
      { age > 25 && <li>Grappa</li> }
    </ul>
  );

// When rendered, this JSX expression...
const heading = <h1 className="large-heading">Codecademy</h1>;
// ...will be rendered as this HTML
// => <h1 class="large-heading">Codecademy</h1>

/* Several ways to use if-conditions in React */

// 1) using ternary operator
let drinkingAge = 18;
const headline = (
    <h1>
        { age >= drinkingAge ? 'Buy Drink' : 'Do Teen Stuff' }
    </h1>
)

// 2) using if/else outside of JSX
let text;
if (age <= drinkingAge) {text = 'Buy Drink'}
else { text = 'Do Fucking Teen Stuff AGAIN'}

// 3) using && operator
const unreadMessage = ['hello?', 'remember me!'];
const update = (
    <div>
        {unreadMessage.length > 0 &&
            <h1>        {/* array length = 2 */}
                You have {unreadMessage.length} unread messages. <br></br>
                You have { Math.random() } unread messages.
            </h1>
        }
    </div>
);

const handleClick = () => {
    alert('Bin da wer noch?');
}

const button = <button onClick={handleClick}>Click here</button>

const handleImageClick = () => {
    console.log("click!");
}

// order summary component by frontend mentor
 const myComp = <Ordersummary />;


// functional component
function myFunctionComponent() {
    return <h1>Hello from a function component</h1>
}

// React components have to start with capital letter
class MyClassComponent extends React.Component {
    render() {
        return (
          <blockquote>
            <p>Be the change you wish to see in the world.</p>
            <cite>
              <a
                target="_blank"
                href="https://en.wikipedia.org/wiki/Mahatma_Gandhi"
              >
                Mahatma Gandhi
              </a>
            </cite>
          </blockquote>
        );
      }
}

class Integer extends React.Component {
    render() {
      const value = 3.14;
      const asInteger = Math.round(value);
      return <p>{asInteger}</p>;
    }
  }


const amazingCat = {
    title: 'a beautyful Cat',
    src: 'https://images.pexels.com/photos/20787/pexels-photo.jpg?auto=compress&cs=tinysrgb&h=350',
    alt: 'Sea Anemones',
    width: '300px',
};

class SeaAnemones extends React.Component {
    render() {
      return (
        <div>
          <h1>{amazingCat.title}</h1>
          <img
            src={amazingCat.src}
            alt={amazingCat.alt}
            width={amazingCat.width}
          />
        </div>
      );
    }
}

class DatabaseData extends React.Component {
  render() {
    let tableKeys = EstablishConn.orderReservation();
    return (
      <div>
        <h1>{tableKeys}</h1>
      </div>
    );
  }
}



ReactDOM.render(
    <DatabaseData />, document.getElementById('root')
);