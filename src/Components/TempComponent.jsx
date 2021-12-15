import React from 'react'
import { Button } from "@chakra-ui/react";
import { Link } from "react-router-dom";

const TempComponent = ({ item, index }) => {
    return (
        <Button colorScheme='teal' variant='solid' background="white" color={"black"} >
            <Link to={item.route}>{item.text}</Link>
        </Button>
    )
}

export default TempComponent
