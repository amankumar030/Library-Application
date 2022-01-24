import axios from "axios";
import React from "react";
import Book from "./Book";
import FavBook from "./FavBook";
import { useEffect, useState } from "react/cjs/react.development";
import { Button, Container } from "reactstrap";
function Favourite() {
    const [books,setBooks]=useState([])
    const [amount,setAmount]=useState()
    const buttonStyle={background:"rgb(2, 241, 245)",color:"black",float:"right"}
    const [emptycart,setemptycart]=useState(false)

    useEffect(()=>{
        getAllFavBook();
        document.title="My Cart"


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
        <Container>
        <div >
            
            <h3 className="text-center mt-2">Your Cart</h3>
            <hr></hr>
           {books.length===0?<p className="text-center">Your Cart is Empty</p>:books.map((item)=><FavBook book={item}></FavBook>)}
           {books.length===0?<p></p>: <div className="row mt-4">
           <div className="col"><h4 className="text-center">Total : INR {amount}</h4></div>
           <div className="col"><Button className="text-center mr-4" style={buttonStyle}>Proceed to Pay </Button></div>
        </div>}
       
        </div>
        </Container>
    )
}
export default Favourite;