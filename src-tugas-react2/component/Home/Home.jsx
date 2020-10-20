import React, { Component } from 'react';
class Home extends Component {
    render() {
        return (
            <div className="slider">
                <div className="container sliderimage">
                    <div className="row">
                        <img className="img-fluid rounded slide " alt="Responsive image" src={require('../../gambar/g1.jpg')} />
                    </div>
                </div>
            </div>
        );
    }
}

export default Home;