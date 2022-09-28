function ImageList({images}){

    const imageItems = images.map(({id, information, source}) => (
      <li key={id}>
        <img id ={id} src={source} alt=""></img>
        <caption >{information}</caption>
      </li>
    ))
      return(
        <ul>

          {imageItems}
        </ul>
        
      );
  }

  export default ImageList;