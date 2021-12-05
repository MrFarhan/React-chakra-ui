import { Avatar, Button,  useColorMode } from "@chakra-ui/react";
import React from "react";
import "./Navbar.css"
// import { Link as ReachLink } from "@reach/router"
import { Link } from "react-router-dom";



const Navbar = () => {
  const { colorMode, toggleColorMode } = useColorMode()
  let navLinks = [
    { route: "/about", text: "About" },
    { route: "/articles", text: "Articles" },
    { route: "/lectures", text: "Lectures" },
  ];
  return (
    <div className="NavContainer">
      <div className="profilePic"><Avatar size='xl' name='Dan Abrahmov' src='https://bit.ly/dan-abramov' /></div>
      <div className="NavLinks">
        {navLinks?.map((item, index) => {
          return <Button colorScheme='teal' variant='solid' background="white" color={"black"}>
            <Link to={item.route}>{item.text}</Link>
          </Button>
        })}
      </div>
      <Button onClick={toggleColorMode}>
        Toggle {colorMode === 'light' ? 'Dark' : 'Light'}
      </Button>
    </div >
  );
};

export default Navbar;
