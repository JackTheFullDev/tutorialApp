export const ImagePicker = ({ fileSelectedHandler }) => {
  return (
    <div className="upload-image-content-add-section">
      <input
        className="image-picker"
        type="file"
        onChange={fileSelectedHandler}
      ></input>
    </div>
  );
};
