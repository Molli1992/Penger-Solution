import React from "react";
import { Text, Stack, Box, Image } from '@chakra-ui/react';
import "./Contact.css";




function Contact() {



    return (

        <Box className="box-1">

            <Stack className="stack-img">

                <Image
                    className="img"
                    src='http://www.wirsolut.com/images/contacto/imagen-contacto-wirsolut.png'
                    alt='Workers'
                />

            </Stack>

            <Stack className="stack-text">

                <Text className="first-text">Get in Touch</Text>
                <Text className="second-text">7901 4th St N</Text>
                <Text className="second-text">STE 5368</Text>
                <Text className="second-text">St. Petersburg, FL 33702</Text>
                <Text className="second-text">info@luminacrystal.net</Text>
                <Text className="second-text">(786) 790-9763</Text>
                <br></br>
                <br></br>

            </Stack>

        </Box >

    );

};

export default Contact;