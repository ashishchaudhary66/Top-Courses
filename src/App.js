import React,{useState, useEffect} from "react";
import { filterData } from "./data";
import Cards from './components/Cards';
import NavBar from "./components/NavBar";
import Filter from "./components/Filter";
import Spinner from "./components/Spinner"
import { apiUrl } from "./data";
import { toast } from "react-toastify";
const App = () => {
  const[courses,setCourses]=useState([])
  const[loading,setLoading]=useState(false)
  const[category,setCategory]=useState(filterData[0].title);

  async function fetchData(){
    setLoading(true);
    try{
        const response=await fetch(apiUrl)
        const output=await response.json()
        setCourses(output.data)
    }catch(e){
        toast.error("Error while fetching data")
    }
    setLoading(false)
  }
  
  useEffect(()=>{
    fetchData()
  },[])

  return (
    <div className="text-white">
      <div>
        <NavBar/>
      </div>
      <div >
        <Filter filterData={filterData} 
          category={category}
          setCategory={setCategory}
        />
      </div>
      <div>
        {(loading)?(<Spinner/>):(<Cards courses={courses} category={category} />)}
      </div>
    </div>
    
  );
};

export default App;
