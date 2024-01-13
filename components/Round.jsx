

import { Button } from "./Button";

export function Round(){
    return(
        <div className="colored-container container-block ">
            <div className="colored-flex_component">
                <div className="expert">Contact our Trekking Expert</div>
                <div className="image-container">
                    <img src="https://cdn.bookatrekking.com/data/images/2023/08/jan-bakker-bookatrekking-1-225w.webp"/>
                </div>
                <div className="expert">John Expert</div>
                <Button content="Ask your question"/>
            </div>

        </div>
    );
}
