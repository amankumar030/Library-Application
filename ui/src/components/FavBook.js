import axios from "axios";
import React, { useState } from "react";
import { Row, Col } from "reactstrap";
import { Link } from "react-router-dom";
import { Card, CardImg, CardBody, CardTitle, CardSubtitle, CardText, Button, Container } from "reactstrap";
import { useEffect } from "react/cjs/react.development";

const FavBook = ({ book }) => {
    const style = { width: "90px", height: "120px", border: "2px solid black" };
    const bookid = book.id;
    

    function deleteBook(id) {
        axios.delete("http://localhost:8080/fav/" + id)
    }
    const bookStyle={width:"100%" ,border:"2px solid black", height:"150px"}
    const buttonStyle={background:"rgb(2, 241, 245)",color:"black"}
  

    return (
      
            <div style={bookStyle} className="mt-2">
                <div className="row my-2">
                    <div className="col"><img src={book.image} className="rounded mx-auto d-block" style={style} alt="" /></div>
                    <div className="col my-4">
                        
                        <h4 className="text-center">{book.title}</h4>
                        <h5 className="text-center">By : {book.author}</h5>
                    </div>
                    <div className="col my-5"><div className="text-center" >Price: INR <b>{book.price}</b></div></div>
                    <div className="col my-5"><Button color="danger"  id="deletebutton" onClick={() => deleteBook(book.id)}>Remove</Button></div>
                </div>
            </div>

    )
}
export default FavBook;