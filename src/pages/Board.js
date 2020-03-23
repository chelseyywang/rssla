import React from 'react';
import './Board.css';
import Banner from "./pictures/board_bg1.png"
import Aditya from './../eboard-pictures/aditya.jpg';
import Alex from './../eboard-pictures/alex.jpg';
import Andrew from './../eboard-pictures/andrew.jpg';
import Becca from './../eboard-pictures/becca.jpg';
import Bryan from './../eboard-pictures/bryan.jpg';
import Chelsey from './../eboard-pictures/chelsey.jpg';
import Donya from './../eboard-pictures/donya.jpg';
import James from './../eboard-pictures/james.jpg';
import Jason from './../eboard-pictures/jason.jpg';
import Kajal from './../eboard-pictures/kajal.jpg';
import Krista from './../eboard-pictures/krista.jpg';
import Maggie from './../eboard-pictures/maggie.JPG';
import Nikki from './../eboard-pictures/nikki.JPG';
import Nilla from './../eboard-pictures/nilla.png';
import Pranit from './../eboard-pictures/pranit.jpg';
import Raymond from './../eboard-pictures/Raymond.jpg';

function Board() {
  return ([
    <div>
      <div className="col">
        <p id="heading">EXECUTIVE BOARD</p>
        <p id="description">16 students in 15 positions lead the Regents Scholar Society and all of its programs. From event planning to budget balancing, our team is responsible for making sure that RSS is running effectively.</p>
      </div>

      <div className="grid-container">
        <div className="row">
          <div className="grid-item">

            <p className="title"><span className="highlight">PRESIDENT<br/></span></p>
            <img src={Krista} />
            <p className="name">Krista Yang</p>
            <p className="major">Psychobiology, 2020</p>
          </div>
          <div className="grid-item">
            <p className="title"><span className="highlight">INTERNAL VICE PRESIDENT</span></p>

            <img src={Kajal} />
            <p className="name">Kajal Maran</p>
            <p className="major">Bioengineering, 2020</p>
          </div>
          <div className="grid-item">
            <p className="title"><span className="highlight">EXTERNAL VICE PRESIDENT</span></p>

            <img src={Alex} />
            <p className="name">Alex Soohoo</p>
            <p className="major">Chemical Engineering, 2020</p>
          </div>
          <div className="grid-item">
            <p className="title"><span className="highlight">SECRETARY</span></p>

            <img src={Nilla} />
            <p className="name">Nilla Sivakumar</p>
            <p className="major">Neuroscience, 2020</p>
          </div>
        </div>
        <div className="row">
          <div className="grid-item">
            <p className="title"><span className="highlight">ACTIVITIES DIRECTOR</span></p>

            <img src={Chelsey} />
            <p className="name">Chelsey Wang</p>
            <p className="major">Computer Science, 2022</p>
          </div>
          <div className="grid-item">
            <p className="title"><span className="highlight">ACTIVITIES DIRECTOR</span></p>

            <img src={Pranit} />
            <p className="name">Pranit Kumaran</p>
            <p className="major">Neuroscience, 2022</p>
          </div>
          <div className="grid-item">
            <p className="title"><span className="highlight">ALUMNI RELATIONS &amp; <br/>INTER-UC DIRECTOR</span></p>

            <img src={Bryan} />
            <p className="name">Bryan Hu</p>
            <p className="major">Mathematics of Computation, 2020</p>
          </div>
          <div className="grid-item">
            <p className="title"><span className="highlight">COMMUNICATIONS DIRECTOR</span></p>

            <img src={James} />
            <p className="name">James Yoon</p>
            <p className="major">Chemistry, 2022</p>
          </div>
        </div>
        <div className="row">
          <div className="grid-item">
            <p className="title"><span className="highlight">COMMUNITY SERVICE DIRECTOR</span></p>
            <img src={Andrew} />
            <p className="name">Andrew Kang</p>
            <p className="major">Biochemistry, 2022</p>
          </div>
          <div className="grid-item">
            <p className="title"><span className="highlight">CORPORATE RELATIONS DIRECTOR</span></p>

            <img src={Aditya} />
            <p className="name">Aditya Guru</p>
            <p className="major">Microbiology, Immunology, and Molecular Genetics, 2022</p>
          </div>
          <div className="grid-item">
            <p className="title"><span className="highlight">EDUCATIONAL PROGRAMS DIRECTOR</span></p>
            <img src={Donya} />
            <p className="name">Donya Mazdeyasnan</p>
            <p className="major">Psychobiology, 2022</p>
          </div>
          <div className="grid-item">
            <p className="title"><span className="highlight">L.A.M.P. DIRECTOR</span></p>

            <img src={Maggie} />
            <p className="name">Maggie Bui</p>
            <p className="major">Molecular, Cell, and Developmental Biology, 2020</p>
          </div>
        </div>
        <div className="row">
          <div className="grid-item">
            <p className="title"><span className="highlight">OUTREACH DIRECTOR</span></p>

            <img src={Becca} />
            <p className="name">Rebecca Zhu</p>
            <p className="major">Business Economics and Linguistics & CS, 2020</p>

          </div>
          <div className="grid-item">
            <p className="title"><span className="highlight">PUBLICITY DIRECTOR</span></p>

            <img src={Nikki} />
            <p className="name">Nikki Woo</p>
            <p className="major">Computer Science, 2021</p>

          </div>
          <div className="grid-item">
            <p className="title"><span className="highlight">TRANSFER AFFAIRS <br/>DIRECTOR</span></p>

            <img src={Raymond} />
            <p className="name">Raymond DeAngelo</p>
            <p className="major">English, 2020</p>

          </div>
          <div className="grid-item">
            <p className="title"><span className="highlight">TREASURER</span></p>
            <img src={Jason} />
            <p className="name">Jason Liu</p>
            <p className="major">Neuroscience, 2020</p>
          </div>
        </div>
      </div>
    </div>
  ]);
}
export default Board;
