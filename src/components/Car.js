import React from 'react';

class Car extends React.Component {
  render() {
    return(
      <div>
        <div>
          <img
            src="https://cdn.pixabay.com/photo/2017/03/27/14/56/auto-2179220_1280.jpg"
            alt="Mercedes"
            width="300px"
          />
        </div>

        <div>
          <div>
            <h1>
              Mercedes
            </h1>

            <p>
              Luxury Vehicles
            </p>
          </div>
        </div>

      </div>
    );
  }
}

export default Car