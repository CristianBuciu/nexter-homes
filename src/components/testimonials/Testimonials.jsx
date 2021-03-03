import React from "react";
import "./Testimonials.scss";
//!=========================================================
const Testimonials = () => {
  return (
    <section className="testimonials">
      <h1 className="testimonials-header">TESTIMONIALS</h1>
      <div className="testimonial">
        <div className="testimonial__image-container">
          <img
            className="testimonial__image"
            src="https://images.unsplash.com/photo-1597223557154-721c1cecc4b0?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1400&q=80"
            alt=""
          />
        </div>

        <blockquote>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis
          tempore delectus eligendi quidem veritatis omnis corporis suscipit, et
          veniam doloremque enim vero quis ad fugiat consequuntur corrupti
          minima. Non dignissimos minus reiciendis.
        </blockquote>
        <p className="testimonial__name">Jessica Jones</p>
      </div>
      <div className="testimonial">
        <div className="testimonial__image-container">
          {" "}
          <img
            className="testimonial__image"
            src="https://images.unsplash.com/photo-1569466896818-335b1bedfcce?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1400&q=80"
            alt=""
          />
        </div>

        <blockquote>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iusto
          maxime, quod voluptatum odio modi suscipit dicta tenetur voluptatibus
          velit aperiam vitae perspiciatis rem quos, deleniti recusandae omnis
          nostrum libero aut sunt maiores! Recusandae beatae fugiat voluptatem
          debitis iusto, deserunt molestiae magni vel!
        </blockquote>
        <p className="testimonial__name">Frank Castle</p>
      </div>
      <div className="testimonial">
        <div className="testimonial__image-container">
          <img
            className="testimonial__image"
            src="https://images.unsplash.com/photo-1595152452543-e5fc28ebc2b8?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1400&q=80"
            alt=""
          />
        </div>

        <blockquote>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo rem
          dolor minus. Nam, officiis. Necessitatibus repudiandae inventore
          aperiam nulla totam iste corrupti nobis autem impedit aliquam.
        </blockquote>
        <p className="testimonial__name">Matt Murdock</p>
      </div>
    </section>
  );
};

export default Testimonials;
