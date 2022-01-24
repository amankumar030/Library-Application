import React, { useEffect } from "react";
import { useState } from "react/cjs/react.development";
import { Button, Form, FormGroup, Label } from "reactstrap";
import { Input } from "reactstrap";
import axios from "axios";
import { Card } from "reactstrap";
import { Toast } from "bootstrap";
import { ToastBody } from "reactstrap";
import { useLocation } from 'react-router-dom'

function UpdateBook() {
    const [book, setBook] = useState({ title: "", author: "", image: "" })
    const [validTitle, setValidTitle] = useState(true)
    const [validAuthor, setValidAuthor] = useState(true)
    const errorStyle = { color: "red" }
    const location = useLocation()
    const id = location.state
    const inputStyle={width:"50%"}
    const cardStyle={}
    const buttonStyle={background:"rgb(2, 241, 245)",color:"black"}


    useEffect(() => {
        axios.get("http://localhost:8080/books/" + id).then((res) => {
            setBook(res.data)
        }, (error) => console.log(error))
    }, [])

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
            setValidAuthor(true)
            setValidTitle(true)
            alert("Book Updated")
            setBook({ title: "", author: "", image: "",price:"" });

        }, (error) => console.log(error));
    }

    return (
        <Card className="pb-3 mt-2" style={cardStyle}>
            <h2 className="text-center">Update the Book</h2>
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
                    Update
                </Button>
            </Form>
        </Card>
    )
}
export default UpdateBook;