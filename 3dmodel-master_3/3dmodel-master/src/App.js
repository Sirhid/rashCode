import './App.css';
import { useEffect, useState } from 'react';
import r1 from "../src/imgs/RAM(1).jpg"
import r2 from "../src/imgs/RAM(2).jpg"
import r3 from "../src/imgs/RAM(3).jpg"
import r4 from "../src/imgs/RAM(4).jpg"
import r5 from "../src/imgs/RAM(5).jpg"
import r6 from "../src/imgs/RAM(6).jpg"
import r7 from "../src/imgs/RAM(7).jpg"
import r8 from "../src/imgs/RAM(8).jpg"
import r9 from "../src/imgs/RAM(9).jpg"
import r10 from "../src/imgs/RAM(10).jpg"
import r11 from "../src/imgs/RAM(11).jpg"
import r12 from "../src/imgs/RAM(12).jpg"
import r13 from "../src/imgs/RAM(13).jpg"
import r14 from "../src/imgs/RAM(14).jpg"
import r15 from "../src/imgs/RAM(15).jpg"
import r16 from "../src/imgs/RAM(16).jpg"
import r17 from "../src/imgs/RAM(17).jpg"
import r18 from "../src/imgs/RAM(18).jpg"
import r19 from "../src/imgs/RAM(19).jpg"
import r20 from "../src/imgs/RAM(20).jpg"
import r21 from "../src/imgs/RAM(21).jpg"
import r22 from "../src/imgs/RAM(22).jpg"
import r23 from "../src/imgs/RAM(23).jpg"
import r24 from "../src/imgs/RAM(24).jpg"
import r25 from "../src/imgs/RAM(25).jpg"
import r26 from "../src/imgs/RAM(26).jpg"
import r27 from "../src/imgs/RAM(27).jpg"
import r28 from "../src/imgs/RAM(28).jpg"
import r29 from "../src/imgs/RAM(29).jpg"
import r30 from "../src/imgs/RAM(30).jpg"
import r31 from "../src/imgs/RAM(31).jpg"
import r32 from "../src/imgs/RAM(32).jpg"
import r33 from "../src/imgs/RAM(33).jpg"
import r34 from "../src/imgs/RAM(34).jpg"
import r35 from "../src/imgs/RAM(35).jpg"
import r36 from "../src/imgs/RAM(36).jpg"
import r37 from "../src/imgs/RAM(37).jpg"
import r38 from "../src/imgs/RAM(38).jpg"
import r39 from "../src/imgs/RAM(39).jpg"
import r40 from "../src/imgs/RAM(40).jpg"
import r41 from "../src/imgs/RAM(41).jpg"
import r42 from "../src/imgs/RAM(42).jpg"
import r43 from "../src/imgs/RAM(43).jpg"
import r44 from "../src/imgs/RAM(44).jpg"
import r45 from "../src/imgs/RAM(45).jpg"
import r46 from "../src/imgs/RAM(46).jpg"
import r47 from "../src/imgs/RAM(47).jpg"
import r48 from "../src/imgs/RAM(48).jpg"
import r49 from "../src/imgs/RAM(49).jpg"
import r50 from "../src/imgs/RAM(50).jpg"
import r51 from "../src/imgs/RAM(51).jpg"
import r52 from "../src/imgs/RAM(52).jpg"
import r53 from "../src/imgs/RAM(53).jpg"
import r54 from "../src/imgs/RAM(54).jpg"
import r55 from "../src/imgs/RAM(55).jpg"
import r56 from "../src/imgs/RAM(56).jpg"
import r57 from "../src/imgs/RAM(57).jpg"
import r58 from "../src/imgs/RAM(58).jpg"
import r59 from "../src/imgs/RAM(59).jpg"
import r60 from "../src/imgs/RAM(60).jpg"
import r61 from "../src/imgs/RAM(61).jpg"
import r62 from "../src/imgs/RAM(62).jpg"
import r63 from "../src/imgs/RAM(63).jpg"
import r64 from "../src/imgs/RAM(64).jpg"
import r65 from "../src/imgs/RAM(65).jpg"
import r66 from "../src/imgs/RAM(66).jpg"
import r67 from "../src/imgs/RAM(67).jpg"
import r68 from "../src/imgs/RAM(68).jpg"
import r69 from "../src/imgs/RAM(69).jpg"
import r70 from "../src/imgs/RAM(70).jpg"
import r71 from "../src/imgs/RAM(71).jpg"
import r72 from "../src/imgs/RAM(72).jpg"
import r73 from "../src/imgs/RAM(73).jpg"
import r74 from "../src/imgs/RAM(74).jpg"
import r75 from "../src/imgs/RAM(75).jpg"
import r76 from "../src/imgs/RAM(76).jpg"
import r77 from "../src/imgs/RAM(77).jpg"
import v1 from "../src/imgs/vertical (1).jpg"
import v2 from "../src/imgs/vertical (2).jpg"
import v3 from "../src/imgs/vertical (3).jpg"
import v4 from "../src/imgs/vertical (4).jpg"
import v5 from "../src/imgs/vertical (5).jpg"
import v6 from "../src/imgs/vertical (6).jpg"
import v7 from "../src/imgs/vertical (7).jpg"
import v8 from "../src/imgs/vertical (8).jpg"
import v9 from "../src/imgs/vertical (9).jpg"
import v10 from "../src/imgs/vertical (10).jpg"
import v11 from "../src/imgs/vertical (11).jpg"

function App() {
  const imagesH = [r1, r2, r3, r4, r5, r6, r7, r8, r9, r10, r11, r12, r13, r14, r15, r16, r17, r18, r19, r20, r21, r22, r23, r24, r25, r26, r27, r28, r29, r30, r31, r32, r33, r34, r35, r36, r37, r38, r39, r40, r41, r42, r43, r44, r45, r46, r47, r48, r49, r50, r51, r52, r53, r54, r55, r56, r57, r58, r59, r60, r61, r62, r63, r64, r65, r66, r67, r68, r69, r70, r71, r72, r73, r74, r75, r76, r77]
  const imagesV = [v1, v2, v3, v4, v5, v6, v7, v8, v9, v10, v11]

  const [current, setCurrent] = useState(0)
  const [vert, setVert] = useState(0)
  const horizontalMax = imagesH.length - 1
  const verticalMax = imagesV.length - 1

  const [target, setTarget] = useState(`${imagesH[current]}`)
  const [alt, setAlt] = useState(0)

  const [direction, setDirection] = useState('horizontal');
  const [move, setMove] = useState(false);

  // const prev = () => {
  //   if (current === 0) {
  //     setCurrent(horizontalMax)
  //     setAlt(horizontalMax)
  //   } else {
  //     setCurrent(current - 1)
  //     setAlt(current - 1)
  //   }
  //   console.log("changed")
  //   setTarget(`${imagesH[current]}`)
  // }

  // const next = () => {
  //   if (current === horizontalMax) {
  //     setCurrent(0)
  //     console.log(current + 1)
  //     setAlt(0)
  //   } else {
  //     setCurrent(current + 1)
  //     setAlt(current + 1)
  //   }
  //   console.log("changed")
  //   setTarget(`${imagesH[current]}`)
  // }

  // const up = () => {
  //   if (vert === verticalMax) {
  //     setVert(0)
  //     setAlt(0)
  //   } else {
  //     setVert(vert + 1)
  //     setAlt(vert + 1)
  //   }
  //   setTarget(`${imagesV[vert]}`)
  // }

  // const down = () => {
  //   if (vert === 0) {
  //     setVert(verticalMax)
  //     setAlt(verticalMax)
  //   } else {
  //     setVert(vert - 1)
  //     setAlt(vert - 1)
  //   }
  //   setTarget(`${imagesV[vert]}`)
  // }

  const handleDirectionChange = (e) => {
    console.log("Target Value: ",e.target.value);
    setDirection(e.target.value);    
  }

  const handleMovement = () => {
    setMove((prevIsRunning) => !prevIsRunning)
  }

  useEffect(() => {
    console.log("Moving 1")
    const interval = setInterval(() => {
      if (move){
        console.log("Moving 2")
        if (direction === "horizontal") {
          console.log("Moving right...");
          if (current === horizontalMax) {
            setCurrent(0)
            setAlt(0)
          } else {
            setCurrent(current + 1)
            console.log("Current +", current + 1)
            setAlt(current + 1)
          }
          console.log("changed")
        } else if (direction === "vertical") {
          console.log("Moving up...");
          if (vert === verticalMax) {
            setVert(0);
            setAlt(0);
          } else {
            setVert(vert + 1);
            console.log(vert)
            console.log(vert + 1)
            setAlt(vert + 1);
          }
        }
        if (direction === "horizontal") {
          console.log("Current ",current)
          setTarget(`${imagesH[current]}`)
        } else if (direction === "vertical") {
          console.log("Vert ",vert)
          setTarget(`${imagesV[vert]}`)
        }
        console.log(target);
      }
    }, 1000); 
    return () => {
      clearInterval(interval); 
    };
  }, [move, direction, target, current, vert, verticalMax, horizontalMax])

  return (
    <div className="App">
      <h1 className='heading'>Augmented Reality Prototype<br/><span>3D Pickup Truck Model</span></h1>
      <div className='image'>
        <img src={`${target}`} alt={alt} />
      </div>
      {/* <div className='left'><img width="50" height="50" src="https://img.icons8.com/ios-filled/50/ffe4b5/circled-left-2.png" alt="circled-left-2" className='direction' onClick={prev}/><p>Flip model left</p></div>
      <div className='middle'>
        <h1 className='heading'>Augmented Reality Prototype<br/><span>3D Pickup Truck Model</span></h1>
        <div className='up'><img width="50" height="50" src="https://img.icons8.com/ios-filled/50/ffe4b5/circled-up-2.png" alt="circled-left-2" className='direction' onClick={up}/><p>Flip model up</p></div>
        <div className='image'>
          <img src={`${target}`} alt={alt} />
        </div>
        <div className='down'><img width="50" height="50" src="https://img.icons8.com/ios-filled/50/ffe4b5/circled-down-2.png" alt="circled-left-2" className='direction' onClick={down}/><p>Flip model down</p></div>
      </div>
      <div className='right'><img width="50" height="50" src="https://img.icons8.com/ios-filled/50/ffe4b5/circled-right-2.png" alt="circled-left-2" className='direction' onClick={next}/><p>Flip model right</p></div> */}
      <div className='controlPane'>
        {/* <p><strong>Control Pane</strong></p> */}
        <div>
          <label htmlFor='direction'>Direction: </label>
          <select 
            name='direction'
            id='direction'
            value={direction}
            onChange={handleDirectionChange}>
            <option value='horizontal'>Horizontal</option>
            <option value='vertical'>Vertical</option>
          </select>
        </div>
        <div>
          <button type='button' className='mvBtn' onClick={handleMovement}> {move ? "Stop" : "Start"} </button>
        </div>
      </div>
    </div>
  );
}

export default App;
