
import { Product } from "./Product"
import { Text } from "./Text"
import { Highlights } from "./Highlights"
import { Round } from "./Round"
import { Stay } from "./Stay"
import { Content } from "./Content"
import { Bluetext } from "./Bluetext"


export function Arrange(...props){
    console.log('arrange ',{props})
    const title = props[0].data ? props[0].data : ''
    return(
        <div className="product-banner">
            <img className="product-image-banner" src="https://media.istockphoto.com/id/1293741276/photo/majestic-view-of-the-k2-peak.jpg?s=612x612&w=0&k=20&c=rry-9uHSUeGfjt6M-mirAEWWGbg1Q5CcUJ8g9RRIOJE="/>
            <div className="container-block">
                <div className="space-manager">
                    <div className="arrange-container-left">
                    {/* <Product/> */}

                        <div className="mera-peak margin">
                            <div className="container-block">
                                <h1 className="mera-title">{title}</h1>
                            </div>
                        </div>
                        {/* <Bluetext /> */}
                        <div className="blue-buttons-body">
                            <div className="blue-buttons">
                            <Highlights text="Distance: 15 - 20 km per day" />
                            <Highlights text="More than 1000 m ascent per day" />

                            </div>
                        </div>
                        <div className="margin">
                            <div className="container-block">
                                <ul className="anchor-list">
                                    <li className="anchor-list-item">
                                        <a href="#">overview</a>
                                    </li>
                                </ul>
                            </div>
                            
                        </div>
                        {/* <Greytext/> */}
                        <Text/>
                        <Content/>

                    </div>
                    <div className="arrange-container-right">
                        <Stay/>
                        <Round/>
                        <div className="margin">
                            <div className="container-block">
                                
                            </div>
                            
                        </div>
                    </div>

                </div>
            
            </div>

        </div>
        
    )
    
}