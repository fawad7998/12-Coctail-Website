import Navbar from "../components/Navbar"
import { useState,useEffect } from "react"

function Coctail() {
    const url =`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=margarita`
        const [search,setSearch]=useState("")
        const [coktails ,setCoktails]=useState([]);
    
    useEffect(() => {
    async function fetchdata() {
      const responce = await fetch(url);
      const data01 = await responce.json();
      console.log(data01);
      setCoktails(data01.drinks);
    }
    fetchdata();
  }, [ ]);

  const handleClick = async (e) => {
    e.preventDefault();
    const url2 =`https://www.thecocktaildb.com/api/json/v1/1/search.php?f=${search}`;

    try {
      const res = await fetch(url2);
      const data = await res.json();
      console.log(data);
      setCoktails(data.drinks);
    } catch (error) {
      console.log(error);
    }
  };
        return(
          <>
          <Navbar/>
          <div className="input-setting">
          <input
            style={{
              height: '30px',
              margin: '12px',
              borderRadius: '12px',
              border: 'none',
              outline:'none',
              padding:'20px',
              backgroundColor:'rgba(0,0,0,0.5)',
              color:'white'
            }}
            type="text"
            // onChange={({target: {value}}) => {
            //   setSearched(value);
            // }}
            onChange={(e) => {
              setSearch(e.target.value);
            }}
            
            // onKeyUp={handleClick}
          />
          <button className="bul" onClick={handleClick}> click me </button>
          </div>
         
          <div>
        <div
          style={{
            backgroundColor: 'dodgerblue',
            // margin:'20px',
            borderRadius:'10px',
            padding:'20px',
          }}
        >

        
        <div
          style={{
            display: 'grid',
            gridTemplate: 'repeat(1,60vh)/ repeat(5,17.75vw)',
            gap: '20px',
            width:"",
            overflowX:'hidden'
          }}
        >
          {coktails?.length > 0 ? (
            coktails?.map((pack) => {
              const {idDrink,strDrink,strDrinkThumb} = pack;
              return (
                <div key={idDrink} >
                  <div 
                    style={{
                        display:'flex',
                        justifyContent:'center',
                        alignItems:'center',
                      fontSize: '25px',
                      color:'white',
                      marginTop:'10px',
                      textAlign:'center',
                      fontWeight: 'bold',
                    }}
                    
                  >
                    {strDrink.slice(0,9)}...
                  </div>
                  <img
                    style={{
                      border: '2px solid grey',
                      height: '270px',
                      width: '250px',
                      objectFit: 'fill',
                      borderRadius:'8px'
                    }}
                    src={strDrinkThumb}
                    alt="/"
                  />
                </div>
              );
            })
          ) : (
            <div>No Result Found</div>
          )}
        </div>
      </div>
          </div>
          </>
          )
    }
export default Coctail;
