import { Highlights } from "../Highlights"
import { Button } from "../Button"

export default function NewCard() {
    return (
        <div className="block-component">
            <div className="card-wrapper container-block">
                <div className="product-block ">
                    {/* single-card */}
                    <div className="card-product">
                        <div className="card-image-wrapper">
                            <img src="https://cdn.bookatrekking.com/data/images/2019/06/mera-peak-climbing-cover-photo-768w.webp"/>
                        </div>
                        <div className="card-content-wrapper">
                            <div className="content-top">
                                <div className="content-heading">
                                    <h3>mera jii peak</h3>
                                </div>
                                <div>
                                    <div className="product-block--item__partner">
                                        hgfrh
                                    </div>
                                    <div className="product-block--item__partner">
                                        hgfrh
                                    </div>

                                </div>
                            </div>
                            <div className="content-bottom">
                                <div className="blue-buttons-body">
                                    <div className="blue-buttons">
                                        <Highlights text="15 days" />
                                        <Highlights text="T4 Trail" />
                                    </div>
                                </div>
                                <Button content="book now"/>
                                
                            </div>
                        </div>
                    </div>
                </div>
            </div>            
        </div>
    )
}