const [selectedImage,setSelectedImage]=useState(uploadImg);
   const fileSelectedHandler = (event) =>
  {
    const file=event.target.files[0];
    const reader=new FileReader();
    reader.onload =() =>{
      setSelectedImage(reader.result);
    }
    reader.readAsDataURL(file);
  

export const ImagePicker = () =>
{
    return(
        <p></p>
    )
}