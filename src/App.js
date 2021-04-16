import "./App.css";
import React from "react";
import Departments from "./Departments";
import logo from "./img/logo_mod.gif";

class App extends React.Component {
  render() {
    return (
      <div className="superContainer">
        <div className="grassContainer">
          <div className="hillImg">
            <header className="headerFormat">
              <figure className="logoCon">
                <img className="logo" src={logo} alt={"Logo CO2"}></img>
                <figcaption>Logo CO<sub>2</sub></figcaption>
              </figure>
              <nav className="navCon">
                <a href="#infoText">Info Text</a>
                <a href="#dataTable">Data Table</a>
              </nav>
            </header>
          </div>

          <div className="grass"></div>
        </div>
        <main className="pageContent">
          <article id="infoText" className="info box">
            <h2>Lorem ipsum dolor</h2>
            <p>
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
              nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
              erat, sed diam voluptua. At vero eos et accusam et justo duo
              dolores et ea rebum. Stet clita kasd gubergren, no sea takimata
              sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit
              amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor
              invidunt ut labore et dolore magna aliquyam erat, sed diam
              voluptua. At vero eos et accusam et justo duo dolores et ea rebum.
              Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum
              dolor sit amet.
            </p>
          </article>

          <article className="dataCon box" id="dataTable">
            <h2>San Francisco Municipal Greenhouse Gas Inventory</h2>
            <Departments></Departments>
          </article>
        </main>
        <footer>
          <div>&copy; Martin Elser</div>
          <div>
            Image sources: 
            
          </div><a href="https://de.freepik.com/fotos/hintergrund">
              Hintergrund Foto erstellt von jannoon028 - de.freepik.com
            </a>
        </footer>
      </div>
    );
  }
}

export default App;
