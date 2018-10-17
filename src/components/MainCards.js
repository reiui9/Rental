import React from 'react';
import { browserHistory, Link } from 'react-router';

class MainCards extends React.Component {
  render() {
    return (
      <div className="row">
        <Link to={`/wall/Drone`}>
          <div className="col s3 container memo">
            <div className="card">
              <div className="info header center">
                <a className="username">Drone</a>
              </div>
              <div className="center info">
                <img className="small" src="/images/main/drone.png" />
              </div>
            </div>
          </div>
        </Link>

        <Link to={`/wall/Segway`}>
          <div className="col s3 container memo">
            <div className="card">
              <div className="info header center">
                <a className="username">Segway</a>
              </div>
              <div className="center info">
                <img className="small" src="/images/main/segway.png" />
              </div>
            </div>
          </div>
        </Link>

        <Link to={`/wall/GoPro`}>
          <div className="col s3 container memo">
            <div className="card">
              <div className="info header center">
                <a className="username">GoPro</a>
              </div>
              <div className="center info">
                <img className="small" src="/images/main/gopro.png" />
              </div>
            </div>
          </div>
        </Link>

        <Link to={`/wall/PlayStation`}>
          <div className="col s3 container memo">
            <div className="card">
              <div className="info header center">
                <a className="username">PlayStation</a>
              </div>
              <div className="center info">
                <img className="small" src="/images/main/playstation.png" />
              </div>
            </div>
          </div>
        </Link>
      </div>
    );
  }
}

export default MainCards;
