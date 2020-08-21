import React, { Component } from 'react'
import '../css/imageModal.css';

class ImageModal extends Component {
  render() {
    return (
      <div id="myModal" class="image-modal">
        <span class="close" onClick={(e) => {
          e.preventDefault();
          document.getElementById('myModal').style.display = "none";
        }}>&times;</span>
        <img class="modal-content" id="modal-image" />

        <div id="caption"></div>
      </div>
    )
  }
}

export default ImageModal
