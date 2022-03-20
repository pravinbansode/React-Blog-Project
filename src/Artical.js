import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import { Context } from "./Context";

const Artical = () => {

    const data = useContext(Context)
    const {selected,selectedID} = useParams()

    return (
        <>
        <div className="article_container">
        
        <br />
        {
            data.map((element)=>{
                if(element.category===selected){
                    return (
                        <>
                        {
                            element.data.map((ele,index)=>{
                                console.log(ele.info)
                                if(String(ele.id)===selectedID){
                                    return (
                                    <div key={index}>
                                        <h1>{ele.name}</h1>
                                        <br />
                                        <img src={ele.img} width="500px" alt={ele.info}/>
                                        <br />
                                        <div>
                                        <br />
                                        <p className="para">{ele.para1}</p>
                                        <br />
                                        <p className="para">{ele.para2}</p>
                                        </div>
                                    </div>
                                )
                                }
                                return null;
                            })
                        }
                        </>
                    )
                }
                return null;
            })
        }
        </div>
        </>
    )
}
export default Artical;