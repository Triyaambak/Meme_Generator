import React from "react";
import { useState,useEffect } from "react";

export default function Meme() {
    
    useEffect(() => {
        fetch("https://api.imgflip.com/get_memes").then(res =>res.json()).then(data=>setAllMeme(data.data.memes))
    },[])

     const [meme, setMeme] = useState({
        topText: "",
        bottomText: "",
        randomImage: "" 
     })
    
    const [allMeme, setAllMeme] = useState()
    
    function handleClick() {
        const randomNumber = Math.floor(Math.random() * allMeme.length)
        const url = allMeme[randomNumber].url
        setMeme(prevMeme => ({
            ...prevMeme,
            randomImage: url
        }))
    }

    function handleChange(event) {
        const { name , value } = event.target;
        setMeme(prevMeme => ({
            ...prevMeme,
            [name]:value,
        }))
    }

    // console.log(meme);

    return (
        <div>
            <div className="meme-form">
                <div className="meme-form-ln1">
                    <div className="meme-form-input">
                        <label htmlFor="input1">Top text</label>
                        <input type="text" placeholder="Shut Up" id="toptext" name="topText" onChange={handleChange} value={meme.topText}></input>
                    </div>
                    <div className="meme-form-input">
                        <label htmlFor="bottomtext">Bottom text</label>
                        <input type="text" placeholder="And Take My Money" id="bottomtext" name="bottomText" onChange={handleChange} value={meme.bottomTextText}></input>
                    </div>
                </div>
                <div className="meme-form-ln2">
                    <button className="form-btn"  onClick={handleClick}>Get a new meme image</button>
                </div>
                <img src={meme.randomImage} alt="" className="meme-image"></img>
            </div>
        </div>
    )
}