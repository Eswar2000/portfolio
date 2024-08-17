import './introduction.scss';
import {init} from 'ityped';
import { useEffect, useRef } from 'react';

export default function Introduction() {
  const textRef = useRef();
  useEffect(() => {
    init(textRef.current, {
      showCursor: false,
      strings: ["software developer", "traveller", "gamer"],
      backDelay: 1500,
      backSpeed: 100
    });
  }, []);


  return (
    <div className='introduction' id='introduction'>
      <div className="left-intro">
        <div className="blob" />
      </div>
      <div className="right-intro">
        <div className='intro-right-container'>
          <span id='name-banner'>Eswar V</span>
          <h2>I am a <span id='activity-banner' ref={textRef}></span></h2>
        </div>
      </div>
    </div>
  )
}
