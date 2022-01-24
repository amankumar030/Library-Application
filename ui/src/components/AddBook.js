import React from "react";
import { useState } from "react/cjs/react.development";
import { Button, Form, FormGroup, Label } from "reactstrap";
import { Input } from "reactstrap";
import axios from "axios";
import { Card } from "reactstrap";
import { Toast } from "bootstrap";
import { Provider as AlertProvider } from 'react-alert'
import AlertTemplate from 'react-alert-template-basic'


function AddBook() {
    const [validTitle, setValidTitle] = useState(true)
    const [validAuthor, setValidAuthor] = useState(true)
    const errorStyle = { color: "red" }
    const [book, setBook] = useState({ title: "", author: "", image: "" ,price:""})
    const inputStyle={width:"50%"}
    const buttonStyle={background:"rgb(2, 241, 245)",color:"black"}
    const options = {
        position: 'bottom center',
        timeout: 5000,
        offset: '30px',
        transition: 'scale'
      }
    

    function addBook(e) {
        e.preventDefault();
        if (book.title == '') {
            setValidTitle(false)
            return;
        }
        if (book.author == '') {
            setValidAuthor(false)
            return;
        }
        axios.post("http://localhost:8080/books", book).then((res) => {
            setValidTitle(true)
            setValidAuthor(true)
            alert("Book added")
        }, (error) => console.log(error));

        setBook({ title: "", author: "", image: "" ,price:""});
    }

    return (
        <Card className="pb-3 mt-2">
            <h2 className="text-center">Add a new Book to your Collection</h2>
            <Form className="text-center mx-auto" style={inputStyle} onSubmit={addBook} >
                <FormGroup>
                    <Label><b>Title</b></Label>
                    <Input type="text" id="title" name="title" value={book.title} onChange={(data) => {
                        setBook({ ...book, title: data.target.value })
                    }}>
                    </Input>
                    {!validTitle && <p style={errorStyle}>*Title can not be empty</p>}

                </FormGroup>
                <FormGroup>
                    <Label><b>Author</b></Label>
                    <Input type="text" id="author" value={book.author} onChange={(data) => {
                        setBook({ ...book, author: data.target.value })
                    }}>
                    </Input>
                    {!validAuthor && <p style={errorStyle}>*Author can not be empty</p>}

                </FormGroup>
                <FormGroup>
                    <Label><b>Price</b></Label>
                    <Input type="text" id="price" value={book.price} onChange={(data) => {
                        setBook({ ...book, price: data.target.value })
                    }}>
                    </Input>
                    

                </FormGroup>
                <FormGroup>
                    <Label><b>Image URL</b></Label>
                    <Input type="text" id="url" value={book.image} onChange={(data) => {
                        setBook({ ...book, image: data.target.value })
                    }}>
                    </Input>

                </FormGroup>
                <Button type="submit" style={buttonStyle}>
                    Add
                </Button>
            </Form>

        </Card>
    )

}
export default AddBook;