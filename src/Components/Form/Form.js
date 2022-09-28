
import {useState} from 'react';


function ImageForm({addImages}){
    const [source, setSource] = useState('');
    return(
      <form>
       <input type="text" value ="URL"  />
       < textarea type = "text" minLength={20}/>
       <button  >Submit</button>
      </form>
    )
};

export default ImageForm;
