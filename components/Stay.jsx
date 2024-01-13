
import { Button } from "./Button";


export function Stay(){
    return (
        <div className="card-product">
            <div className="container-block">
                <div className="green-text_stay ">
                Free cancellation up to two weeks in <br/> advance!
                </div>
                <div className="white-text_stay">
                    <div className="top-text">
                        <div>
                            <div className="text-first">Starting at</div>
                            <div className="text-second">$ 2345</div>
                            <div className="text-third">per person</div>

                        </div>
                    </div>
                    <div className="">

                    </div>
                    <div >
                        <input type="text" placeholder="Pick a date" className="blur-input" />
                    </div>
                    <div className="buy-block-btn">
                        <button className="as-link">
                            Check group discount
                        </button>

                    </div>
                    <Button content="book now"/>
                </div>
            </div>
        </div>
    );
}