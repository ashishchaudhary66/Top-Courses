import React from "react"

function Spinner(){
    return(
        <div className="h-[70vh] relative flex flex-col justify-center items-center gap-8">
            <div className='spinner'></div>
            <p>loading....</p>
        </div>
    )
}
export default Spinner