import axios from "axios";
import React, { useState } from "react";
import { Row, Col } from "reactstrap";
import { Link } from "react-router-dom";
import { Card, CardImg, CardBody, CardTitle, CardSubtitle, CardText, Button, Container } from "reactstrap";
import { useEffect } from "react/cjs/react.development";

const Book = ({ book }) => {
    const style = { width: "120px", height: "150px", border: "2px solid black" };
    const bookid = book.id;

    function deleteBook(id) {
        axios.delete("http://localhost:8080/books/" + id)
    }
    const bookStyle={width:"300px" ,border:"2px solid black", height:"400px"}
    const buttonStyle={background:"rgb(2, 241, 245)",color:"black"}
    function addFav(book)
    {
        axios.post("http://localhost:8080/fav",book)
    }

    return (
        <Card className="text-center mx-auto ml-0 mt-2 mb-2" style={bookStyle}>
            <CardBody>
                <div>
                    <div>
                        <img src={book.image} className="rounded mx-auto d-block" style={style} alt="" />
                    </div>
                    <div>
                        <CardTitle><h3>{book.title}</h3></CardTitle>
                        <CardSubtitle className="mb-3">By : {book.author}</CardSubtitle>
                        <div>
                            <p>Price : INR <b>{book.price}</b></p>
                        </div>
                        
                        <Link  tag="a" to="/update" state={bookid}>
                            <Button color="warning" >UPDATE</Button>
                        </Link>
                        <Button color="danger"  className="ml-3" id="deletebutton" onClick={() => deleteBook(book.id)}>DELETE</Button>
                        <Button className="mt-2" style={buttonStyle} onClick={()=>addFav(book)}>Add to Cart</Button>
                    </div>
                </div>
            </CardBody>
        </Card>
    )
}
export default Book;