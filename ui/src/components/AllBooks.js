import React, { useEffect, useState } from "react";
import { CardGroup } from "reactstrap";
import Book from "./Book";
import axios from "axios";

function AllBooks() {
    const [books, setBooks] = useState([])
    const style={}
    useEffect(() => {
        document.title="Home"
        getAllBooks();
    })

    function getAllBooks() {
        axios.get('http://localhost:8080/books').then((res) => {
            setBooks(res.data)
        }, (error) => {
            console.log(error)
        })
    }
    const elements = books.map(element =>{
        return(<div  className="col md-4"> <Book book={element}></Book> </div>);
    })
    return (
        <div className="row" style={style} >
            {elements}
        </div>
    )
}

export default AllBooks;