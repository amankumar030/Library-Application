import React from "react";
import { Card } from "reactstrap";
const headerStyle={background:"rgb(2, 241, 245)"}
function Header(){
    return(
        <Card style={headerStyle} className="text-center"> <h1 className="text-center mt-4 mb-4">Welecome to Library</h1></Card>
       
    )

}
export default Header;