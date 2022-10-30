import React, {useEffect, useState} from "react"

function App(){
    const [dogImage, setDogImage] = useState('')

    const urlAPI = 'https://dog.ceo/api/breeds/image/random'

    useEffect(() => {
        fetch(urlAPI)
        .then(resp => resp.json())
        .then(data => setDogImage(data.message))
    },[])

    if(!dogImage){
        return <p>Loading...</p>
    }
    
    return (
        <div>
            <img src={dogImage} alt="A Random Dog"></img>
        </div>
    )
}

export default App