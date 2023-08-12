import React from "react";
function Filter(props){
    let category=props.category
    let setCategory=props.setCategory

    function filterHandler(title){
        console.log(title)
        setCategory(title)
    }

    return(
        <div className="w-11/12 mx-auto max-w-[1080px] flex flex-wrap justify-center items-center my-3">
            {props.filterData.map(data=>{
                return (
                    <button onClick={()=>filterHandler(data.title)} key={data.id} 
                        className= {`flex border justify-center bg-[#1a1f35] items-center text-lg m-2 py-1 px-3 rounded-md
                            ${category===data.title?" opacity-100 border-white":"opacity-80 border-transparent"}
                        `}>
                        {data.title}
                    </button>
                )
            })}
        </div>
    )
}

export default Filter