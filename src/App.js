import React, { Component } from "react";
import Diagram from "./Diagram";

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="intro-section">
          <h1>Dom's Wall</h1>
        </div>

        <div className={"notes-section--wrapper"}>
          <div className={"notes-section"}>
            <h3 className={"notes-section--header"}>Outstanding questions:</h3>
            <ul>
              <li>
                Do we add the triangular edge? In which case we need more
                PLywood.
                <br />
                <img
                  className="responsive-img"
                  src="/img/corner.png"
                  alt="climbing wall holes grid pattern"
                />
              </li>
              <li>
                Do we add the Board right up to the rafters? In which case more
                Plywood.
              </li>
              <li>
                Do we put a board up across the first set of rafters for a roof
                section? More Plywood.
              </li>
              <li>Who is getting the materials needed?</li>
            </ul>

            <h3 className={"notes-section--header"}>Notes:</h3>
            <ul className={"notes-section--list"}>
              <li className={"notes-section--listItem"}>
                Paul's awesome 3D Sketchup (snapshot only):
                <img
                  className="responsive-img"
                  src="/img/paul-sketchup.png"
                  alt="Paul's Sketchup 3D model"
                />
              </li>

              <li className={"notes-section--listItem"}>
                We need to keep the wooden uprights away from the wall because
                the wall is damp. Suggest using a few plastic washers at each
                screw point.{" "}
                <a
                  href="https://www.travisperkins.co.uk/4TRADE-3-4in-Tap-Washer-%28Pack-of-10%29/p/281849"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Something like this.
                </a>
              </li>
              <li className={"notes-section--listItem"}>
                <a
                  href="https://www.alpinetrek.co.uk/base-camp/diy-bouldering-wall/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Holes pattern
                </a>
                <br />
                <img
                  className="responsive-img"
                  src="/img/diy-bouldering-wall-pattern.jpg"
                  alt="climbing wall holes grid pattern"
                />
              </li>
              {/* <li className={"notes-section--listItem"}>
                I've just thought we could fill in the corner section of the
                overhang to create more interest (Paul).
                <br />
                <img
                  className="responsive-img"
                  src="/img/corner.png"
                  alt="climbing wall holes grid pattern"
                />
              </li> */}
              <li className={"notes-section--listItem"}>
                <a
                  href="https://www.ukclimbing.com/articles/features/build_your_own_indoor_wall-7"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  This article
                </a>{" "}
                is much more for your standard DIYer - it has some good options
                for the top and bottom of the overhang. Will make it much easier
                to attach with these options (Paul).
              </li>
            </ul>
          </div>
        </div>

        <Diagram />
      </div>
    );
  }
}

export default App;
