import { Highlight } from "@mui/icons-material";

export function Collectioncard (){
    return(
        <div className="container-block">
            <div className="item-wrapper">
                <div className="product-block">
                    <div className="product-block-item">
                        <img src="https://cdn.bookatrekking.com/data/images/2020/10/shutterstock-62278099-768w.webp"/>
                    </div>
                    <div className="product-block-item product-body">
                        <div className="body-top">
                            <h2 className="title">htvf ri mni</h2>
                            <p className="text-long">
                            We have prepared this 6-day trek for those trekkers who are experienced and are used to walking several hours a day with a lot of challenging and technical parts.
                            </p>
                            
                        </div>
                        <div className="body-bottom">
                            <Highlight text="go to hell"/>
                        </div>
                    </div>
                </div>    
            </div>    
        </div>
        )
}