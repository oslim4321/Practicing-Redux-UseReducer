import React, { useEffect, useState } from 'react'
import '../App.css'
// import '../App'
function Loop() {
    const [loop, setloop] = useState()
    const [navbar, setnavbar] = useState(true)
    const [backtoTop, setbacktoTop] = useState(false)
    function looping() {
        for (let i = 0; i < 20; i++) {
        //    console.log(i)
        }
    }
    let count = 50;
    window.addEventListener('scroll', () => {
        let scrollHeight = window.pageYOffset;
        // console.log(scrollHeight)
    if (scrollHeight > 500) {
        setnavbar(true)
        setbacktoTop(true)
    } else {
        setnavbar(false)
        setbacktoTop(false)
    }
    })
    function backtoTopping() {
        document.body.scrollTop = (0)
        document.documentElement.scrollTop=(0,0)
        }
    
   
  return (
      <div className='bod' style={{width: '100%'}} >
          {
            <div className={navbar ? 'block' : 'none'}>
                 <div className="navbar"></div>
            </div>
          }
          
          <h1>Hello world</h1>
          <p>{loop}</p>
          <button onClick={looping}>Loop Out</button>
          {/* <select name="" id=""> */}
          {[...Array(count)].map((x,i) => (
            //   <option key={i + 1} value={i + 1}>{i + 1}</option>
              <h1 key={i + 1}><span>({i+1})  </span> I  Coding.....</h1>
          ))}
          {
              backtoTop ? <div onClick={backtoTopping} className='backtoTop'></div> : null
          }
          
          {/* </select> */}
          
          {/* {
              count.map(elem => {
                  console.log(elem)
              })
          } */}
    </div>
  )
}

export default Loop