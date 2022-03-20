import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { Context } from "./Context";
import "./Home.css"

const Home = () => {

    const navigate = useNavigate();
    const data = useContext(Context);

    return (
        <>
        <div className="images">

            <img src={data[0].data[0].img}
                width="800px"
                alt="kerla Nature"
                onClick={()=>navigate("/category/tourism/3")}
                
            />
            <div  className="fitness">{data[0].data[0].name}</div>
            <div  className="fitness1">
                <div>
                    <img src={data[1].data[0].img}
                width="400px"
                alt="fitness"
                onClick={()=>navigate("/category/fitness/6")}
            />
                </div>
                <div>
                    <img src={data[2].data[0].img}
                width="400px"
                alt="Food"
                onClick={()=>navigate("/category/food/11")}
            />
                </div>
            </div>
        </div>
        </>
    )
}

export default Home;