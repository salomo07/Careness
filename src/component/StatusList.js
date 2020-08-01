import React from 'react';
import {Link} from "react-router-dom";

function StatusList() {
  return (
    <div className="mb-3 card" style={{borderRadius:'10px'}}>
        <div className="card-header">
            <div className="media flex-wrap w-100 align-items-center">
                <img width="40px" height="auto" src="assets/images/avatars/3.jpg"
                    className="d-block ui-w-40 rounded-circle" alt=""/>
                <div className="media-body ml-3">
                    <a href="#">Allie Rodriguez</a>
                    <div className="text-muted small">3 days ago</div>
                </div>
                <div className="text-muted small ml-3">
                    <div>Member since <strong>01/12/2017</strong></div>
                    <div><strong>1,234</strong> posts</div>
                </div>
            </div>
        </div>
        <div className="card-body">
            <p>
                Aliquam varius euismod lectus, vel consectetur nibh tincidunt vitae. In non dignissim est. Sed eu
                ligula metus. Vivamus eget quam sit amet risus venenatis laoreet ut vel magna. Sed dui ligula,
                tincidunt in nunc eu, rhoncus
                iaculis nisi.
            </p>
            <p>
                Sed et convallis odio, vel laoreet tellus. Vivamus a leo eu metus porta pulvinar. Pellentesque
                tristique varius rutrum.
            </p>
            <p>
                Praesent sed lacinia erat. Proin efficitur pulvinar ante ullamcorper finibus. Mauris feugiat sapien
                quis porttitor lacinia. Curabitur finibus justo in elementum pellentesque. Morbi iaculis tortor vel
                justo porta, quis
                blandit velit bibendum. Donec eu leo dignissim, condimentum libero eu, dapibus odio. Etiam sodales
                venenatis posuere. Etiam condimentum nec velit eu scelerisque. Donec cursus tellus est, at hendrerit
                nulla commodo eu.
                Praesent euismod pellentesque tempor.
            </p>
            <p>
                Nulla mollis sem id tempus pharetra. Mauris finibus eros et leo ultricies volutpat. Nunc in lacus
                nec ex posuere gravida. Mauris metus nulla, mollis at felis vitae, congue ullamcorper velit. In
                vulputate dui sapien, in
                placerat tellus pellentesque ac. Duis pretium ex felis, sed vulputate orci efficitur id. Vivamus nec
                mauris ex. Nullam sed dolor id augue elementum ullamcorper. Donec sit amet consectetur erat.
            </p>
        </div>
        <div className="card-footer d-flex flex-wrap justify-content-between align-items-center px-0 pt-0 pb-3">
            <div className="px-4 pt-3">
                <a href="#" className="text-muted d-inline-flex align-items-center align-middle">
                    <i className="ion ion-ios-heart text-danger fsize-3"></i>&nbsp;
                    <span className="align-middle">48</span>
                </a>
                <span className="text-muted d-inline-flex align-items-center align-middle ml-4">
                    <i className="ion ion-ios-eye text-muted fsize-3"></i>&nbsp;
                    <span className="align-middle">1,203</span>
                </span>
            </div>
            <div className="px-4 pt-3">
                <button type="button" className="btn btn-primary">
                    <i className="ion ion-md-create"></i>&nbsp; Reply
                </button>
            </div>
        </div>
    </div>
  );
}

export default StatusList;
