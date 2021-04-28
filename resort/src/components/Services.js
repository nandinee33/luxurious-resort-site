import React, { Component } from 'react'
import Title from "./Title";
import { FaCocktail, FaSwimmer, FaShuttleVan, FaBeer } from "react-icons/fa";
import { IoIosFitness } from "react-icons/io";

export default class Services extends Component {

    state = {
        services: [
          {
            icon: <FaCocktail />,
            title: "Free Cocktails",
            info:
              "Happy Hour runs between 5:30pm-7:30pm in which you have some light snacks and wine."
          },
          {
            icon: <IoIosFitness />,
            title: "Gyming",
            info:
              "Our friendly, professional staff is trained to help you along your fitness journey."
          },   
          {
            icon: <FaShuttleVan />,
            title: "Free Shuttle",
            info:
              "Provided from resorts along with a guide to travel all the near side cites."
          },
          {
            icon: <FaSwimmer />,
            title: "Swimming",
            info:
              "Take a dip and relax while sipping your drinks and enjoying your tan on swimming pools."
          }
        ]
      };

    render() {
        return (
            <section className="services">
                <Title title="services" />
                <div className="services-center">
                {this.state.services.map(item => {
                    return (
                    <article key={`item-${item.title}`} className="service">
                        <span>{item.icon}</span>
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
