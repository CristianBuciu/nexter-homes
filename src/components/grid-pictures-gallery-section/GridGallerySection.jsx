//! Core
import React from 'react'
import "./GridGallerySection.scss"

//! Components
import gallery1 from "../../assets/gal-1.jpeg"
import gallery2 from "../../assets/gal-2.jpeg"
import gallery3 from "../../assets/gal-3.jpeg"
import gallery4 from "../../assets/gal-4.jpeg"
import gallery5 from "../../assets/gal-5.jpeg"
import gallery6 from "../../assets/gal-6.jpeg"
import gallery7 from "../../assets/gal-7.jpeg"
import gallery8 from "../../assets/gal-8.jpeg"
import gallery9 from "../../assets/gal-9.jpeg"
import gallery10 from "../../assets/gal-10.jpeg"
import gallery11 from "../../assets/gal-11.jpeg"
import gallery12 from "../../assets/gal-12.jpeg"
import gallery13 from "../../assets/gal-13.jpeg"
import gallery14 from "../../assets/gal-14.jpeg"
const GridGallerySection = () => {
   
    return (
        <section className="grid-gallery">
         <figure className="grid-gallery__image-container grid-gallery__image-container--1">
              <img className="grid-gallery__image"src={gallery1} alt="gallery-image"/>
         </figure>
         <figure className="grid-gallery__image-container grid-gallery__image-container--2">
              <img className="grid-gallery__image"src={gallery2} alt="gallery-image"/>
         </figure>
         <figure className="grid-gallery__image-container grid-gallery__image-container--3">
              <img className="grid-gallery__image"src={gallery3} alt="gallery-image"/>
         </figure>
         <figure className="grid-gallery__image-container grid-gallery__image-container--4">
              <img className="grid-gallery__image"src={gallery4} alt="gallery-image"/>
         </figure>
         <figure className="grid-gallery__image-container grid-gallery__image-container--5">
              <img className="grid-gallery__image"src={gallery5} alt="gallery-image"/>
         </figure>
         <figure className="grid-gallery__image-container grid-gallery__image-container--6">
              <img className="grid-gallery__image"src={gallery6} alt="gallery-image"/>
         </figure>
         <figure className="grid-gallery__image-container grid-gallery__image-container--7">
              <img className="grid-gallery__image"src={gallery7} alt="gallery-image"/>
         </figure>
         <figure className="grid-gallery__image-container grid-gallery__image-container--8">
              <img className="grid-gallery__image"src={gallery8} alt="gallery-image"/>
         </figure>
         <figure className="grid-gallery__image-container grid-gallery__image-container--9">
              <img className="grid-gallery__image"src={gallery9} alt="gallery-image"/>
         </figure>
         <figure className="grid-gallery__image-container grid-gallery__image-container--10">
              <img className="grid-gallery__image"src={gallery10} alt="gallery-image"/>
         </figure>
         <figure className="grid-gallery__image-container grid-gallery__image-container--11">
              <img className="grid-gallery__image"src={gallery11} alt="gallery-image"/>
         </figure>
         <figure className="grid-gallery__image-container grid-gallery__image-container--12">
              <img className="grid-gallery__image"src={gallery12} alt="gallery-image"/>
         </figure>
         <figure className="grid-gallery__image-container grid-gallery__image-container--13">
              <img className="grid-gallery__image"src={gallery13} alt="gallery-image"/>
         </figure>
         <figure className="grid-gallery__image-container grid-gallery__image-container--14">
              <img className="grid-gallery__image"src={gallery14} alt="gallery-image"/>
         </figure>
        </section>
    )
}

export default GridGallerySection
