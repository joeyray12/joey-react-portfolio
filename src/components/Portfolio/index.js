import React from "react";

function Portfolio() {
    return (
      <div>
        <section id="work" className="jobs">
          <div className="flex-row">
            <h2 className="section-title secondary-border">Work</h2>
          </div>
  
          <div className="job">
            <div className="job-info">
              <div className="job-img">
                <a href="https://github.com/dhiduchick/Culinary-Canvas">
                  {" "}
                 
                </a>
              </div>
              <div className="job-text">
                <h4>Culinary Canvas</h4>
                <p>
                  Our 2nd project of the class, this was utilizing a back end server to be able to search recipes of several different meals and foods. You would have details of the dish displayed along with your saved searches.
                  
                </p>
              </div>
            </div>
          </div>
  
          <div className="job">
            <div className="job-info">
              <div className="job-img">
                <a href="https://github.com/joeyray12/nutrition-facts-project">
                  {" "}
                  
                </a>
              </div>
              <div className="job-text">
                <h4>Nutrition Calculator</h4>
                <p>
                  Our first project, this was focused on the front end utilizing HTML, CSS And JavaScript. You are able to search up different foods with this app which will then display the nutrition facts about each item. It would also save your searches to local storage.
                </p>
              </div>
            </div>
          </div>
  
          <div className="job">
            <div className="job-info">
              <div className="job-img">
                <a href="https://github.com/joeyray12/text-editor">
                  {" "}
            
                </a>
              </div>
              <div className="job-text">
                <h4>Text Editor</h4>
                <p>
                  This project was to utilize our understanding of using a server to be deployed with render. This could display text and track different lines of code.
                </p>
              </div>
            </div>
          </div>
  
          <div className="job">
            <div className="job-info">
              <div className="job-img">
                <a href="https://github.com/joeyray12/README-generator">
                  {" "}
                  
                </a>
              </div>
              <div className="job-text">
                <h4>README Generator</h4>
                <p>
                  This application allows you to use a backend server to create a readme from your terminal for any project.
                </p>
              </div>
            </div>
          </div>
  
          <div className="job">
            <div className="job-info">
              <div className="job-img">
                <a href="https://github.com/joeyray12/employee-tracker">
                  {" "}
                  
                </a>
              </div>
              <div className="job-text">
                <h4>Employee Tracker</h4>
                <p>
                  A backend database that allows you to keep track of employees and their roles within a company, you can also add additional roles and employees from the command line.
                </p>
              </div>
            </div>
          </div>
  
          <div className="job">
            <div className="job-info">
              <div className="job-img">
                <a href="https://github.com/joeyray12/logo-maker">
                  {" "}
                  
                </a>
              </div>
              <div className="job-text">
                <h4>Logo Maker</h4>
                <p>
                  This is an app that allows you to create an SVG file by adding in different commands into your terminal that each add a detail to customize your image.
                </p>
              </div>
            </div>
          </div>
  
          <div className="job">
            <div className="job-info">
              <div className="job-img">
                <a href="https://github.com/SPCSanti1990/Memory-Matcher">
                  {" "}
                  
                </a>
              </div>
              <div className="job-text">
                <h4>WIP Final Project Card Matcher</h4>
                <p>
                  This is currently still in progress as our final project for the bootcamp. This will be a memory matcher gamer involving cards being turned face up and matching them to their corresponding card.
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
  
  export default Portfolio;