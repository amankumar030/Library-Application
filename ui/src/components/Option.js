import React from "react";
import { ListGroup, ListGroupItem } from "reactstrap";
import { Link } from "react-router-dom";

function Option() {
    return (
        <div className="mt-2">
            <ListGroup>
                
                <Link tag="a" to="/books" className="list-group-item">Home</Link>
                <Link tag="a" to="/add-book" className="list-group-item">Add Book</Link>
                <Link tag="a" to="/fav" className="list-group-item">My Cart</Link>
            </ListGroup>
        </div>
    )
}
export default Option;