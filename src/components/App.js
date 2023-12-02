  // create your App component here
import react, { useEffect,useState } from "react";

  function App(){
    const[image,setimage]=useState(null)

    
    useEffect(()=>{
      fetch("https://dog.ceo/api/breeds/image/random")
      .then((response)=>response.json())
      .then((data)=>{
        setimage(data.message)
        console.log(data)
      })
  } ,[])

  if(!image){return <p>Loading</p>}

    return(
      <div>
        <img src={image} alt="A Random Dog" />

      </div>
    )
  }


  export default App