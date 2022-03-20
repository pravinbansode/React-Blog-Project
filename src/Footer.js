import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { Context } from "./Context";
import "./style.css"


const Footer = () => {

    const data = useContext(Context);
    const navigate = useNavigate();
    return(
        <div className="footer">
            <h1>The Latest</h1>
            <div className="footer1" >
                {
                    data.map((ele)=>{
                        return (
                            <div className="footer2" onClick={()=>navigate("/category/"+ele.category+"/"+ele.data[0].id)}>
                                {
                                  <img src={ele.data[0].img} 
                                    width="300px"
                                    height="200px"
                                    alt="footer images"
                                   
                                  />
                                }
                                <div>
                                    <h2>{ele.data[0].name}</h2>
                                    {ele.data[0].info}
                                </div>
                            </div>
                        );
                    })
                }
            </div>
        </div>
    )
}

export default Footer;