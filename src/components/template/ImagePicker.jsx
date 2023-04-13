export const ImagePicker = ({ fileSelectedHandler, selectedImage }) => {
  return (
    <div className="upload-image-content-add-section">
      <input
        className="image-picker"
        type="file"
        onChange={fileSelectedHandler}
      ></input>
      <img className="tutorial-image" src={selectedImage} />
    </div>
  );
};
