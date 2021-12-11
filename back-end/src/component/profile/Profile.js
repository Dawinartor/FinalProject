import React from 'react';

export class Profile extends React.Component {
    render() {
      return (
            <div>
                <img src={this.props.profilePictureSrc} alt="" />
                <h2>{this.props.name}</h2>
            </div>
      );
    }
}


Profile.defaultProps = {
    profilePictureSrc: 'https://www.bra.nrw.de/system/files/styles/slider_main_16_9_1280/private/2021-03/Umwelt_AdobeStock_248703773.jpg?h=4e788856&itok=-vK_Ggtk',
};