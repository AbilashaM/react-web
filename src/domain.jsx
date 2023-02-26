import React from "react";
import "./index.css";
import ARVR from "./ARVR.png";
import web from "./web.png";
import ad from "./appdev.png";
import crop from "./corporate.png";
import dsml from "./dsml.png";
import cre from "./creatives.png";



   


function Domain(){
    return(
        <div className="a">
            <h1> DOMAINS</h1>
       <div className="b">
        
      
        <div className="wrapper">
        <i id="left"><b> &#8249;</b></i>
        
            <div className="carousel">
                
                <img ClassName="myslides" src={ARVR}></img>
                <img ClassName="myslides" src={web}></img>
                <img ClassName="myslides" src={dsml}></img>
                <img ClassName="myslides" src={ad}></img>
                <img ClassName="myslides" src={cre}></img>
                <img ClassName="myslides" src={crop}></img>
           
                
                
            </div>
            <i id="right" ><b>&#8250;</b></i>
            
        </div>
      
        </div>


        </div>

      

  
    );
}







export default Domain ;

let slideIndex = 1;
function plusSlides(n) {
  showSlides(slideIndex += n);
}
function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("mySlides"); 
    if (n > slides.length) {slideIndex = 1}
    if (n < 1) {slideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
    }
    
    slides[slideIndex-1].style.display = "block";
    
  }


const carousel = document.querySelector(".carousel"),
firstImg = carousel.querySelectorAll("img")[0],
arrowIcons = document.querySelectorAll(".wrapper i");
let isDragStart = false, isDragging = false, prevPageX, prevScrollLeft, positionDiff;
const showHideIcons = () => { 
    let scrollWidth = carousel.scrollWidth - carousel.clientWidth;
    arrowIcons[0].style.display = carousel.scrollLeft == 0 ? "none" : "block";
    arrowIcons[1].style.display = carousel.scrollLeft == scrollWidth ? "none" : "block";
}
arrowIcons.forEach(icon => {
    icon.addEventListener("click", () => {
        let firstImgWidth = firstImg.clientWidth + 14;
        carousel.scrollLeft += icon.id == "left" ? -firstImgWidth : firstImgWidth;
        setTimeout(() => showHideIcons(), 60); 
    });
});


