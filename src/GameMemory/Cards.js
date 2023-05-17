import { useState } from "react"
import Card from './Card'
import photoclouds from "./imagesforGM/cloud.png"
import photoleafs from "./imagesforGM/leaf.png"
import photomoons from "./imagesforGM/moon.png"
import photoplanets from "./imagesforGM/planet.png"
import photorains from "./imagesforGM/rain.png"
import photorainbows from "./imagesforGM/rainbow.png"
import photosnows from "./imagesforGM/snow.png"
import photosuns from "./imagesforGM/sun.png"



function Cards(){
    const [items, setItems] = useState([
        {id: 1, img:photoclouds, stat: ""},
        {id: 1, img:photoclouds, stat: ""},
        {id: 2, img: photoleafs, stat: ""},
        {id: 2, img: photoleafs, stat: ""},
        {id: 3, img: photomoons, stat: ""},
        {id: 3, img: photomoons, stat: ""},
        {id: 4, img: photoplanets, stat: ""},
        {id: 4, img: photoplanets, stat: ""},
        {id: 5, img: photorains, stat: ""},
        {id: 5, img: photorains, stat: ""},
        {id: 6, img: photorainbows, stat: ""},
        {id: 6, img: photorainbows, stat: ""},
        {id: 7, img: photosnows, stat: ""},
        {id: 7, img: photosnows, stat: ""},
        {id: 8, img: photosuns, stat: ""},
        {id: 8, img: photosuns, stat: ""},
    ].sort(() => Math.random() - 0.5))

    const [prev, setPrev] = useState(-1)

    function check(current){
        if(items[current].id == items[prev].id){
            items[current].stat = "correct"
            items[prev].stat = "correct"
            setItems([...items])
            setPrev(-1)
        }
        else{
            items[current].stat = "wrong"
            items[prev].stat = "wrong"
            setItems([...items])
            setTimeout(() => {
                items[current].stat = ""
                items[prev].stat = ""
                setItems([...items])
                setPrev(-1)
            }, 1000)
        }
    }

    function handleClick(id){
        if(prev == -1){
            items[id].stat = "active"
            setItems([...items])
            setPrev(id)
        }
        else{
            check(id)
        }
    }
    return(
        <div className="container">
            { items.map((item, index) => (
                <Card key={index} item={item} id={index} handleClick={handleClick}/>
            ))
            }
        </div>
    )
}

export default Cards;