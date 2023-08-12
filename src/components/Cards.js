import React from "react";
import Card from "./Card";

function Cards(props){
    let courses=props.courses;
    let category=props.category
    function getCourses(){
        
        if(category==="All"){
            let allCourses=[]
            Object.values(courses).forEach(array=>{
                array.forEach((courseData) => {
                    allCourses.push(courseData)
                })
            })
            return allCourses;
        }
        else{
            return courses[category]
        }
    }
    return(
        <div className="w-[100%] mx-auto max-w-[1080px] flex flex-wrap justify-center mb-5 gap-4">
            {   
                getCourses().map((course) => {
                    return <Card key={course.id} course={course} />
                })
            }
        </div>
    )
}
export default Cards;