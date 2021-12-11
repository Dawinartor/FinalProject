import React from 'react';
import { Profile } from '../profile/Profile';

class MyFriends extends React.Component {
    render() {
      return (
        <div>
          <h1>My friends</h1>
          <Profile
            name="Jane Doe"
            profilePictureSrc="https://www.bra.nrw.de/system/files/styles/slider_main_16_9_1280/private/2021-03/AdobeStock_224482741.jpg?h=76dc5dac&itok=v52auUDQ"
          />
          <Profile name="John Smith" />
        </div>
      );
    }
  }