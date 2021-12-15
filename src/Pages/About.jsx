import { Button } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";

import CustomInput from "../Components/Input";
const About = () => {
  const [inputVal, setInputVal] = useState();
  const [data, setData] = useState("");

  const HandleSubmit = (e) => {
    e.preventDefault();
    console.log("input value is ", inputVal);
  };

  useEffect(() => {
    fetch("https://retoolapi.dev/s1YhKF/data").then(res => res.json())
      .then((data) =>
        setTimeout(() => {
          setData(data)
        }, 3000))
  }, []);
  return (
    <>
      <div>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ad, beatae?
          Mollitia ad libero odio consequatur aliquid ex voluptatibus facere!
          Enim, id. Quibusdam soluta cum quasi reprehenderit minus itaque
          officiis similique.
        </p>
      </div>
      <CustomInput setInputVal={setInputVal} inputVal={inputVal} />
      {inputVal}
      <Button
        mt={4}
        colorScheme="teal"
        type="submit"
        onClick={(e) => HandleSubmit(e)}
      >
        Submit
      </Button>

      {data && data?.map((item, index) => {
        return <p key={index}>{item?.fullName}</p>
      })}
      My about page
    </>
  );
};

export default About;
