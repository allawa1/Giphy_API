import React from 'react';





class ImageCard extends React.Component {



    componentDidMount() {
        console.log("I'm showing up on the screen")
    }

    componentDidUpdate() {
        console.log(" Updated")
    }

    render() {
        return (
            <div className="card" style={{ width: this.props.width, padding: "20px" }}>
                <img src={this.props.url} className="card-img-top" alt="..." />
            </div>
        )
    }
}

export default ImageCard;