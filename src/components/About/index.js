import React from "react";
import profileImage from "../../assets/Servicetitan photo.jpg";
function About() {
  return (
    <section id="about-me" className="my-5 intro">
      <div class="flex-row">
        <h1 id="about" className="section-title primary-border">
          About Me
        </h1>
      </div>
      <div className="flex-row">
        <div class="intro-info">
          <div class="intro-img">
            <img src={profileImage} style={{ width: "100%" }} alt="profile" />
          </div>
          <p>
          My name is Joey Raymond, I am a graduating student of UNH 6 Month Coding Bootcamp. I am currently searching for a full stack developer position, and I hope to show you why I am fully equipped to do so in my portfolio here.
          </p>
          <p>I graduated from Worcester State University in 2021 with a degree in Communication, which I value still as a great skill of mine being communicating with others</p>
          
          <p>I am also an avid reader and film fan, I tend to spend most of my free time either mountain biking, reading or watching a movie.</p>
        </div>
      </div>
    </section>
  );
}

export default About;