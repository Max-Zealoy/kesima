import React, { Component } from "react";

class DisplayImage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      image: ''
    };

    this.onImageChange = this.onImageChange.bind(this);
  }

  onImageChange = event => {
    if (event.target.files && event.target.files[0]) {
      let img = event.target.files[0];
      this.setState({
        image: URL.createObjectURL(img)
      });
    }
  };

  render() {
    return (
      <div>
        <div>
          <div>
            <img src={this.state.image} alt="product picture" />
            <h1>Select Image</h1>
            <input type="file" name="image" alt="image" class="btn btn-primary" onChange={this.onImageChange}  />
            
          </div>
        </div>
      </div>
    );
  }
}
export default DisplayImage;