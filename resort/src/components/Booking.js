import React, { Component } from 'react'
import Title from "./Title";
import { GiBank } from "react-icons/gi";

export default class Services extends Component {

    state = {
        services: [
          {
            icon: <GiBank />,
            title: "UPI Pay",
            info:
              "Lorem ipsum, dolor sit amet consectetur adipisicing elit."
          },
          {
            icon: <GiBank />,
            title: "Google Pay",
            info:
              "Lorem ipsum, dolor sit amet consectetur adipisicing elit."
          },
          {
            icon: <GiBank />,
            title: "Paytm",
            info:
              "Lorem ipsum, dolor sit amet consectetur adipisicing elit."
          },
          {
            icon: <GiBank />,
            title: "Net Banking",
            info:
              "Lorem ipsum, dolor sit amet consectetur adipisicing elit."
          }
        ]
      };

    render() {
        return (
            <section className="services">
                <Title title="payment Modes" />
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
