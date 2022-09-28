
import './App.css';
import React, {useState, usRef} from 'react';
import ImageList from '../Images/ImageList';
import ImageForm from '../Form/Form';


const LOAD_IMAGES =[{id:1, source:"https://cdn.pixabay.com/photo/2021/09/14/10/36/sea-lion-6623606_960_720.jpg", information: "Sea Lion"},
{id: 2, source: "https://cdn.pixabay.com/photo/2022/03/03/02/15/man-7044425_960_720.jpg", information: "Man under street light"}]

function App() {
  // as a user I can
  // I can view pictures
  // read information about the picture
  //add picture
  // add information about he picture

  const [images, setImages] =useState(LOAD_IMAGES);

  const addImages = (newImages) => {
    setImages([...images, newImages]);
  }


// function ImageBoard(){
//     return(
//       <div>
      
//         <ImageForm />
//         <ImageList />
//       </div>
//     )
// }
  return (
    <div className="App">
      <header className="App-header">
      <img src=" https://cdn.pixabay.com/photo/2022/03/03/02/15/man-7044425_960_720.jpg"></img>
      <div>
      
      <ImageForm />
      <ImageList />
    </div>
     
      </header>
    </div>
  );
}

export default App;
