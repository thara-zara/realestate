import { createContext,useState } from "react";
import Sale from "../TempData/Data";

const MyContext = createContext();

export function AddProvider({children}){

    const [favourite,setFavourite] =useState([])
    const [value,setValue] =useState()
    const [name,setName] = useState()
    const [details,setDestails]=useState(Sale);
    const [find,setFind]=useState(Sale);

/*    ad to fav   */
    const addFavoutie=(item)=>{
        setFavourite([...favourite,item]);
        console.log(favourite);
      }
/*    get select option  */
      const handleSelected =(selectValue)=>{
        console.log(selectValue); 
        setValue(selectValue);
      }
/*     get search name    */    
      const handleName=(searchValue)=>{
        console.log(searchValue); 
        setName(searchValue);
      }
/*    filter select     */    
      const handleFilter  = () =>{
        const result = details
        .filter(curselect=>curselect.room === (value === "" ? details : value))
        setFind(result);
        console.log(result);
      }
/*    filter search    */      
      const handleSeacrh = ()=>{
        const result = details
        .filter((search)=>{
          if (name === ""){
            return search;
          }
          else if(search.head?.toLowerCase().includes(name?.toLowerCase())){
            return search;
          }
         }
       )  
       setFind(result);
       console.log(result);
      }

/*  return context provider    */
    return(
        <MyContext.Provider value={{
            favourite,
            addFavoutie,
            handleSelected,
            handleName,
            handleFilter,
            handleSeacrh,
            find
        }} >{children}</MyContext.Provider>
    )
}
export default MyContext;