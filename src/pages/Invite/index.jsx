import React from 'react';
import ReactPlayer from 'react-player/youtube';

function Invite() {
    document.body.style = 'background: #A7A7A7;';

    return (
        <div className="container">
            <div className="row">

                <div className="col-12 mb-5">
                    <div className="videoWrapper">
                        <ReactPlayer width="100%" height="100%" url="https://youtu.be/EeLky93kLNs" />
                    </div>
                    <div className="videoDecoration" />
                </div>

                <div className="col-12 d-flex flex-column justify-content-center align-items-center">
                    <img className="logo" src="/logo-preto.png" />
                    <div className="separator" />
                    <div className="address">
                        <p>AV. Itororó, 1079</p>
                    </div>
                </div>

            </div>
        </div>
    );
}

export default Invite;