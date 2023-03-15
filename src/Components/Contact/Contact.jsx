import React from "react";
import { Text, Stack, Box, Image } from '@chakra-ui/react';
import "./Contact.css";




function Contact() {



    return (

        <Box id="responsive-box" className="box-1">

            <Stack id="responsive-stack-img" className="stack-img">

                <Image
                    id="responsive-img"
                    className="img"
                    src='http://www.wirsolut.com/images/contacto/imagen-contacto-wirsolut.png'
                    alt='Workers'
                />

            </Stack>

            <Stack id="responsive-stack-text" className="stack-text">

                <Text id="responsive-first-text" className="first-text">Get in Touch</Text>
                <Text id="responsive-second-text" className="second-text">7901 4th St N</Text>
                <Text id="responsive-second-text" className="second-text">STE 5368</Text>
                <Text id="responsive-second-text" className="second-text">Argentina, Buenos Aires</Text>
                <Text id="responsive-second-text" className="second-text">info@pengersolution.net</Text>
                <Text id="responsive-second-text" className="second-text">(786) 790-9763</Text>
                <br></br>
                <br></br>

            </Stack>

            <br></br>

        </Box >

    );

};

export default Contact;