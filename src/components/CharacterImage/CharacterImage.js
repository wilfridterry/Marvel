import { Component } from "react";

class CharacterImage extends Component {
  state = {
    isAvailable: true,
  };

  handleLoad = (e) => {
    const img = e.currentTarget;

    if (img.src.search("image_not_available") !== -1) {
      this.setState({ isAvailable: false });
    }
  };

  render() {
    const { thumbnail, name, className } = this.props;

    return (
      <img
        src={thumbnail}
        alt={name}
        onLoad={this.handleLoad}
        className={className}
        style={{ objectFit: this.state.isAvailable ? "cover" : "contain" }}
      />
    );
  }
}

export default CharacterImage;
