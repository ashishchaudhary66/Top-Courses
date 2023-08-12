import React, { useState } from "react";
import {FcLike,FcLikePlaceholder } from "react-icons/fc";
import { toast } from "react-toastify";
function Card(props){
    let course=props.course
    const[liked,setLiked]=useState(false)
    function likeHandler(){
        setLiked(!liked)
        liked?toast.warning("like removed"):toast.success("Liked Successfully")
    }
    
    return(
        <div className="w-[320px] flex flex-col gap-4 bg-[#1a1f35] rounded-lg overflow-hidden">
            <div className="relative">
                <img src={course.image.url} alt={course.image.alt}></img>
                <div onClick={likeHandler} className="absolute bottom-[-13px] right-5 w-9 h-9 bg-white rounded-full flex items-center justify-center">
                    <button>
                        {liked?<FcLike fontSize="1.75rem"/>:<FcLikePlaceholder fontSize="1.75rem"/>}
                    </button>
                </div>
            </div>
            <div className="px-4 pb-4">
                <p className=" text-lg font-bold mb-1">{course.title}</p>
                <p>
                    {course.description.length>100?course.description.substr(0,100)+"...":course.description}
                </p>
            </div>
            
        </div>
    )
}

export default Card;