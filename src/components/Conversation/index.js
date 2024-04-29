import {  Box, Stack} from '@mui/material';
import React from 'react';
import { useTheme } from "@mui/material/styles";
import Header from './Header';
import Footer from './Footer';
import Message from './Message';

const Conversation = () => {
    const theme = useTheme();
  return (
    <Stack height={'100%'} maxHeight={'100vh'} width={'100%'}>

        {/* Chat header */}
        <Header/>
        {/* Msg */}
        <Box className='scrollbar' width={"100%"} sx={{flexGrow:1, height:'100%', overflowY:'scroll'}}>
        <Message menu={true}/>
        </Box>
        {/* Chat footer */}
       <Footer/>
    </Stack>
  )
}

export default Conversation