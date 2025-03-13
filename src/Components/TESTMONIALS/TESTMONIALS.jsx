import React, { useRef } from 'react'
import './TESTMONIALS.css'
import next_icon from '../../assets/next-icon.png'
import back_icon from '../../assets/back-icon.png'
import user_1 from '../../assets/user-1.png'
import user_2 from '../../assets/user-2.png'
import user_3 from '../../assets/user-3.png'
import user_4 from '../../assets/user-4.png'



const TESTMONIALS = () => {

    const slider = useRef();
    let tx = 0;


    const slideForward = () => {
        if(tx > -50){
            tx -= 25;
        }
        slider.current.style.transform = `translateX(${tx}%)`
    }
    const slideBackward = () => {
        if(tx < 0){
            tx += 25;
        }
        slider.current.style.transform = `translateX(${tx}%)`
    }
  return (
    <div className='testmonials'>
    <img src={next_icon} alt="..." className='next-btn' onClick={slideForward}/>
    <img src={back_icon} alt="..." className='back-btn' onClick={slideBackward}/>
    <div className="slider">
    <ul ref={slider}>
        <li>
            <div className='slide'>
                <div className="user-info">
                    <img src={user_2} alt="..." />
                    <div>
                        <h3>
                            Rishabh Chaudhary
                        </h3>
                        <span>
                            Abes, India
                        </span>
                    </div>
                </div>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores quam molestias fugiat quidem expedita doloremque, praesentium, architecto maxime vero assumenda quod corrupti ipsum fugit? Alias necessitatibus sunt doloribus totam dicta.
                </p>
            </div>
        </li>
        <li>
            <div className='slide'>
                <div className="user-info">
                    <img src={user_1} alt="..." />
                    <div>
                        <h3>
                            Rishabh Agrawal
                        </h3>
                        <span>
                            ABES, Khuraj
                        </span>
                    </div>
                </div>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores quam molestias fugiat quidem expedita doloremque, praesentium, architecto maxime vero assumenda quod corrupti ipsum fugit? Alias necessitatibus sunt doloribus totam dicta.
                </p>
            </div>
        </li>
        <li>
            <div className='slide'>
                <div className="user-info">
                    <img src={user_3} alt="..." />
                    <div>
                        <h3>
                            Harsh Garg
                        </h3>
                        <span>
                            Abes, Plikwa
                        </span>
                    </div>
                </div>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores quam molestias fugiat quidem expedita doloremque, praesentium, architecto maxime vero assumenda quod corrupti ipsum fugit? Alias necessitatibus sunt doloribus totam dicta.
                </p>
            </div>
        </li>
        <li>
            <div className='slide'>
                <div className="user-info">
                    <img src={user_4} alt="..." />
                    <div>
                        <h3>
                            kishan khan
                        </h3>
                        <span>
                            Abes, Phadh
                        </span>
                    </div>
                </div>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores quam molestias fugiat quidem expedita doloremque, praesentium, architecto maxime vero assumenda quod corrupti ipsum fugit? Alias necessitatibus sunt doloribus totam dicta.
                </p>
            </div>
        </li>
    </ul>
    </div>
    </div>
  )
}

export default TESTMONIALS
