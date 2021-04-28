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


export default class Feedback extends Component {

    state = {
        feedback: [
          {
            icon: img7,
            title: "Nandinee Gupta",
            info:
              "The UI is user friendly and and the room in which I stayed in was hygiene, well-maintained. The food in the hotel was also delicious with reasonable prices and room delivery is available."
          },
          {
            icon: img5,
            title: "Saumya Gupta",
            info:
              "I didn't pre-book a room still I got negotiable rate. The bathroom and restroom was clean. Also customer service. Maybe that's why I was spared from being scammed."
          },
          {
            icon: img8,
            title: "Unnati Goyal",
            info:
              "I like Luxurious resort because it has changed the way you book hotels to stay. You don't need to worry about the quality, they ensures the quality. The promotions are too good that one can get Rooms at unbelievable price. ❤"
          },
          {
            icon: img6,
            title: "Roshni Rawat",
            info:
              "The hotel stay was very pleasant and comfortable. The staff was very polite and helpful, the location was very convenient for getting around and many activities"
          },
          {
            icon: img2,
            title: "Pankaj Kapoor",
            info:
              "Website is convenient, and easy to use. The stay at the location is also good, staffs are friendly, and accommodating. Will definitely use the website again"
          },
          {
            icon: img1,
            title: "Krishna Gupta",
            info:
              "Easy to navigate and the rates are very friendly. They offer discounted rates which will surely make you book for it."
          },
          {
            icon: img4,
            title: "Nitish Goyal",
            info:
              "Nice location, walking distance to BGC district. The hotel its clean, with nice amenities on the roof. Front desk 24/7 with very friendly staff. The room it's clean and good for two person, with own CR, Aircon. Nice experience"
          },
          {
            icon: img3,
            title: "Sachin Bansal",
            info:
              "Exceptional experience..The platform is ultra simple and all kinds of rooms available..ty oyo for the service."
          }
          
          
        ]
      };

    render() {
        return (
            <section className="services">
                <Title title="Testimonials" />
                <div className="services-center">
                {this.state.feedback.map(item => {
                    return (
                    <article key={`item-${item.title}`} className="service">
                      <div className="testimonial-imgs">
                        <img src={item.icon} alt="customers"/>
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
