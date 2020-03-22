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
            <img src={Krista} />
            <p className="name">KRISTA YANG</p>
            <p className="major">Psychobiology, 2020</p>
            <p className="title">president</p>
          </div>
          <div className="grid-item">
            <img src={Kajal} />
            <p className="name">KAJAL MARAN</p>
            <p className="major">Bioengineering, 2020</p>
            <p className="title">internal vice president</p>
          </div>
          <div className="grid-item">
            <img src={Alex} />
            <p className="name">ALEX SOOHOO</p>
            <p className="major">Chemical Engineering, 2020</p>
            <p className="title">external vice president</p>
          </div>
          <div className="grid-item">
            <img src={Nilla} />
            <p className="name">NILLA SIVAKUMAR</p>
            <p className="major">Neuroscience, 2020</p>
            <p className="title">secretary</p>
          </div>
        </div>
        <div className="row">
          <div className="grid-item">
            <img src={Chelsey} />
            <p className="name">CHELSEY WANG</p>
            <p className="major">Computer Science, 2022</p>
            <p className="title">activities director</p>
          </div>
          <div className="grid-item">
            <img src={Pranit} />
            <p className="name">PRANIT KUMARAN</p>
            <p className="major">Neuroscience, 2022</p>
            <p className="title">activities director</p>
          </div>
          <div className="grid-item">
            <img src={Bryan} />
            <p className="name">BRYAN HU</p>
            <p className="major">Mathematics of Computation, 2020</p>
            <p className="title">alumni relations and inter-UC director</p>
          </div>
          <div className="grid-item">
            <img src={James} />
            <p className="name">JAMES YOON</p>
            <p className="major">Chemistry, 2022</p>
            <p className="title">communications director</p>
          </div>
        </div>
        <div className="row">
          <div className="grid-item">
            <img src={Andrew} />
            <p className="name">ANDREW KANG</p>
            <p className="major">Biochemistry, 2022</p>
            <p className="title">community service director</p>
          </div>
          <div className="grid-item">
            <img src={Aditya} />
            <p className="name">ADITYA GURU</p>
            <p className="major">Microbiology, Immunology, and Molecular Genetics, 2022</p>
            <p className="title">corporate relations director</p>
          </div>
          <div className="grid-item">
            <img src={Donya} />
            <p className="name">DONYA MAZDEYASNAN</p>
            <p className="major">Psychobiology, 2022</p>
            <p className="title">educational programs director</p>
          </div>
          <div className="grid-item">
            <img src={Maggie} />
            <p className="name">MAGGIE BUI</p>
            <p className="major">Molecular, Cell, and Developmental Biology, 2020</p>
            <p className="title">L.A.M.P. director</p>
          </div>
        </div>
        <div className="row">
          <div className="grid-item">
            <img src={Becca} />
            <p className="name">REBECCA ZHU</p>
            <p className="major">Business Economics and Linguistics & CS, 2020</p>
            <p className="title">outreach director</p>

          </div>
          <div className="grid-item">
            <img src={Nikki} />
            <p className="name">NIKKI WOO</p>
            <p className="major">Computer Science, 2021</p>
            <p className="title">publicity director</p>

          </div>
          <div className="grid-item">
            <img src={Raymond} />
            <p className="name">RAYMOND DEANGELO</p>
            <p className="major">English, 2020</p>
            <p className="title">transfer affairs director</p>

          </div>
          <div className="grid-item">
            <img src={Jason} />
            <p className="name">JASON LIU</p>
            <p className="major">Neuroscience, 2020</p>
            <p className="title">treasurer</p>
          </div>
        </div>
      </div>
    </div>
  ]);
}
export default Board;
