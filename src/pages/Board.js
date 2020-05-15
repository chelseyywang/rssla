import React from 'react';
import './Board.css';
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
        <p id="description">
          16 students in 15 positions lead the Regents Scholar Society and all of its programs. 
          From event planning to budget balancing, our team is responsible for making sure that RSS is running effectively.
        </p>
      </div>

      <div className="grid-container">
        <div className="row">
          <BoardProfile name="Krista Yang" major="Psychobiology, 2020" img={Krista} title="PRESIDENT"/>
          <BoardProfile name="Kajal Maran" major="Bioengineering, 2020" img={Kajal} title="INTERNAL VICE PRESIDENT"/>
          <BoardProfile name="Alex Soohoo" major="Chemical Engineering, 2020" img={Alex} title="EXTERNAL VICE PRESIDENT"/>
          <BoardProfile name="Nilla Sivakumar" major="Neuroscience, 2020" img={Nilla} title="SECRETARY"/>
          <BoardProfile name="Chelsey Wang" major="Computer Science, 2022" img={Chelsey} title="ACTIVITIES DIRECTOR"/>
          <BoardProfile name="Pranit Kumaran" major="Neuroscience, 2022" img={Pranit} title="ACTIVITIES DIRECTOR"/>
          <BoardProfile name="Bryan Hu" major="Mathematics of Computation, 2020" img={Bryan} title={["ALUMNI RELATIONS &", <br/>,"INTER-UC DIRECTOR"]}/>
          <BoardProfile name="James Yoon" major="Chemistry, 2022" img={James} title="COMMUNICATIONS DIRECTOR"/>
          <BoardProfile name="Andrew Kang" major="Biochemistry, 2022" img={Andrew} title="COMMUNITY SERVICE DIRECTOR"/>
          <BoardProfile name="Aditya Guru" major="Microbiology, Immunology, and Molecular Genetics, 2022" img={Aditya} title="CORPORATE RELATIONS DIRECTOR"/>
          <BoardProfile name="Donya Mazdeyasnan" major="Psychobiology, 2022" img={Donya} title="EDUCATIONAL PROGRAMS DIRECTOR"/>
          <BoardProfile name="Maggie Bui" major="Molecular, Cell, and Developmental Biology, 2020" img={Maggie} title="L.A.M.P. DIRECTOR"/>
          <BoardProfile name="Rebecca Zhu" major="Business Economics and Linguistics &amp; CS, 2020" img={Becca} title="OUTREACH DIRECTOR"/>
          <BoardProfile name="Nikki Woo" major="Computer Science, 2021" img={Nikki} title="PUBLICITY DIRECTOR"/>
          <BoardProfile name="Raymond DeAngelo" major="English, 2020" img={Raymond} title={["TRANSFER AFFAIRS",<br/>,"DIRECTOR"]}/>
          <BoardProfile name="Jason Liu" major="Neuroscience, 2020" img={Jason} title="TREASURER"/>
        </div>
      </div>
    </div>
  ]);
}

function BoardProfile(props) {
  return (
    <div className="grid-item">
      <p className="title"><span className="highlight">{props.title}</span></p>
      <img src={props.img} alt={props.name} />
      <p className="name">{props.name}</p>
      <p className="major">{props.major}</p>
    </div>
  );
}

export default Board;
