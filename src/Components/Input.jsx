import { FormLabel, Input } from '@chakra-ui/react'
import React from 'react'

const CustomInput = ({ setInputVal, inputVal }) => {
    // setInputVal("hello world")
    return (
        <form >
            <FormLabel >First name
                <Input type="text" onChange={(e) => setInputVal(e.target.value)} value={inputVal} />
                {/* <Input type="text" onChange={(e) => setInputVal(e.target.value)} /> */}
            </FormLabel>
        </form>
    )
}

export default CustomInput
