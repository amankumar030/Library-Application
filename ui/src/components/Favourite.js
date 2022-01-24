import axios from "axios";
import React from "react";
import Book from "./Book";
import FavBook from "./FavBook";
import { useEffect, useState } from "react/cjs/react.development";
import { Button } from "reactstrap";
function Favourite() {
    const [books,setBooks]=useState([])
    const [amount,setAmount]=useState()
    const buttonStyle={background:"rgb(2, 241, 245)",color:"black",float:"right"}
    const [emptycart,setemptycart]=useState(false)

    useEffect(()=>{
        getAllFavBook();


    })
    function getAllFavBook()
    {
        axios.get("http://localhost:8080/fav").then((response)=>{
          setBooks(response.data)
          if(books.length==0)
          {
              setemptycart(true)
          }
          let x=0;
          books.map((book)=>{x=x+book.price})
          setAmount(x)
          console.log(response.data)
        },(error)=>{
            console.log(error)
        })
    }

    return (
        <div >
            <h3 className="text-center mt-2">Items in your Cart</h3>
           
        {books.map((item)=><FavBook book={item}></FavBook>)}
        <div className="row mt-4">
           <div className="col"><h4 className="text-center">Total : INR {amount}</h4></div>
           <div className="col"><Button className="text-center mr-4" style={buttonStyle}>Proceed to Pay </Button></div>
        </div>
        </div>
    )
}
export default Favourite;