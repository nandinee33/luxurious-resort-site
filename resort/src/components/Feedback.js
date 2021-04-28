import React, { Component } from 'react'
import Title from "./Title";
import img1 from "../images/teamNdTestimonials/1.jfif";
import img2 from "../images/teamNdTestimonials/2.jfif";
import img3 from "../images/teamNdTestimonials/5.jfif";
import img4 from "../images/teamNdTestimonials/10.jpg";
import img5 from "../images/teamNdTestimonials/6.png";
import img6 from "../images/teamNdTestimonials/7.png";
import img7 from "../images/teamNdTestimonials/8.png";
import img8 from "../images/teamNdTestimonials/9.jpg";


export default class Services extends Component {

    state = {
        services: [
          {
            icon: img7,
            title: "Nandinee Gupta",
            info:
              "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Alias molestias eius libero?"
          },
          {
            icon: img5,
            title: "Saumya Gupta",
            info:
              "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Alias molestias eius libero?"
          },
          {
            icon: img8,
            title: "Unnati Goyal",
            info:
              "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Alias molestias eius libero?"
          },
          {
            icon: img6,
            title: "Roshni Rawat",
            info:
              "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Alias molestias eius libero?"
          },
          {
            icon: img2,
            title: "Pankaj Kapoor",
            info:
              "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Alias molestias eius libero?"
          },
          {
            icon: img1,
            title: "Krishna Gupta",
            info:
              "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Alias molestias eius libero?"
          },
          {
            icon: img4,
            title: "Nitish Goyal",
            info:
              "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Alias molestias eius libero?"
          },
          {
            icon: img3,
            title: "Sachin Bansal",
            info:
              "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Alias molestias eius libero?"
          }
          
          
        ]
      };

    render() {
        return (
            <section className="services">
                <Title title="Testimonials" />
                <div className="services-center">
                {this.state.services.map(item => {
                    return (
                    <article key={`item-${item.title}`} className="service">
                      <div className="testimonial-imgs">
                        <img src={item.icon} />
                        </div>
                        
                        {/* <span>{item.icon}</span> */}
                        <h6>{item.title}</h6>
                        <p>{item.info}</p>
                    </article>
                    );
                })}
                </div>
            </section>
        )
    }
}
