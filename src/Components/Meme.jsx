import React from "react";
import { useState } from "react";
import memes from "../memesData"
import memesData from "../memesData";

export default function Meme() {
    
     const [meme, setMeme] = React.useState({
        topText: "",
        bottomText: "",
        randomImage: "" 
     })
    
    const [allMemeImages, setAllMemeImages] = React.useState(memesData)
    
    function handleClick() {
        const memesArray = allMemeImages.data.memes
        const randomNumber = Math.floor(Math.random() * memesArray.length)
        const url = memesArray[randomNumber].url
        setMeme(prevMeme => ({
            ...prevMeme,
            randomImage: url
        }))
    }

    return (
        <div>
            <div className="meme-form">
                <div className="meme-form-ln1">
                    <div className="meme-form-input">
                        <label htmlFor="input1">Top text</label>
                        <input type="text" placeholder="Shut Up" id="toptext"></input>
                    </div>
                    <div className="meme-form-input">
                        <label htmlFor="bottomtext">Bottom text</label>
                        <input type="text" placeholder="And Take My Money" id="bottomtext"></input>
                    </div>
                </div>
                <div className="meme-form-ln2">
                    <button className="form-btn"  onClick={handleClick}>Get a new meme image 🖼</button>
                </div>
                <img src={meme.randomImage} alt="" className="meme-image"></img>
            </div>
        </div>
    )
}