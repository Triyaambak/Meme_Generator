import React from "react";
import memes from "../memesData"

export default function Meme() {
    
    const handleClick = () => {
        const memesArray = memes.data.memes;
        const randomNumber = Math.floor(Math.random() * memesArray.length);
        const {url} = memesArray[randomNumber];
        console.log(url);
    }

    return (
        <div>
            <div className="meme-form">
                <div className="meme-form-ln1">
                    <div className="meme-form-input">
                        <label for="input1">Top text</label>
                        <input type="text" placeholder="Shut Up" id="toptext"></input>
                    </div>
                    <div className="meme-form-input">
                        <label for="bottomtext">Bottom text</label>
                        <input type="text" placeholder="And Take My Money" id="bottomtext"></input>
                    </div>
                </div>
                <div className="meme-form-ln2">
                    <button className="form-btn"  onClick={handleClick}>Get a new meme image 🖼</button>
                </div>
            </div>
        </div>
    )
}