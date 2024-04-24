import { BsArrowLeftCircleFill, BsArrowRightCircleFill } from "react-icons/bs"
import { useState } from "react"
import Card from "../Card/Card"
import "./Carousel.css"

export default function Carousel ({data}) {
    const [slide, setSlide] = useState(0);
    const nextSlide = () => {
        setSlide(slide === Math.floor((data.length-1)/7) ? 0: slide + 1);
        console.log(slide);
    }
    const prevSlide = () => {
        setSlide(slide === 0 ? Math.floor((data.length-1)/7) : slide - 1);
        console.log(slide);
    }
    return (
        <div className="carousel">
            <BsArrowLeftCircleFill onClick={prevSlide} className={slide === 0 ? "arrow-hide arrow arrow-left" : "arrow arrow-left"} />
            {/* <img src={require("../../assets/LeftArrow.svg")} onClick={prevSlide} alt="left arrow" className="arrow arrow-left"/> */}
            <div className="container">
                {data.map((item, idx) => {
                    if(slide === Math.floor(idx/7)){
                        return <Card img={item.image} name={item.title} follows={item.follows} className={slide === Math.floor(idx/7) ? "slide" : "slide slide-hidden"} key={idx}/>
                    }
                })}
            </div>
            <BsArrowRightCircleFill onClick={nextSlide} className={slide === Math.floor((data.length-1)/7) ? "arrow-hide arrow arrow-right" : "arrow arrow-right"}/>
            {/* <img src={require("../../assets/RightArrow.svg")} onClick={nextSlide} alt="right arrow" className="arrow arrow-right"/> */}
        </div>
    )
}