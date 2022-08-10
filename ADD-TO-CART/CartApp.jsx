import React, { useEffect } from 'react'
import { products } from './Data'
import {useDispatch, useSelector} from 'react-redux'
import {addtocart, dataSlicer} from './dataSlicer'

function CartApp() {
    let arr=[products]
    const items = useSelector((state) => state.cart.cart)
    const dispatch=useDispatch()
    
//     function addtocart (elem)
//         console.log(items)
//         // alert('cool')
//         dispatch(dataSlicer())
//    }
    // dispatch(addtocart(products))
    // console.log(items)
    useEffect(() => {
        // JSON.stringify()
        dispatch(addtocart(arr))

    }, [])

  return (
    <div>
        {
              products.map((elem, i) => {
                
                  const { name, color, imageSrc, price, imageAlt,id } = elem
                //   console.log(products)
                return (
                    <form  onClick={()=> dispatch(addtocart(elem),console.log(items))} key={id}>
                        <div className="card" style={{width:'300px', overflow: 'hidden', padding:'30px'}}>
                            {/* <img > */}
                            <img style={{objectFit: 'cover', width:'100%'}} className="card-img-top" src={imageSrc} alt={imageAlt} />
                            {/* <img src={imageSrc} alt="" /> */}
                            <div className="card-img-overlay">
                                <h4 className="card-title">{ name}</h4>
                                <p className="card-text">Some example text.</p>
                               
                            </div>
                            <button href="#" className="btn btn-primary"> Add To Cart</button>
                            </div>
                    </form>
                )
            })
        }
    </div>
  )
}

export default CartApp