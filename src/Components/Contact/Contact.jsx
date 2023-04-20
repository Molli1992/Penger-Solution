import React from "react";
import { Text, Stack, Box, Image } from '@chakra-ui/react';
import "./Contact.css";




function Contact() {



    return (

        <div className="body-contact">

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

                    <Text id="responsive-first-text" className="first-text">Contact Us</Text>
                    <Text id="responsive-second-text" className="second-text">3511 NW 113th ct </Text>
                    <Text id="responsive-second-text" className="second-text">Doral FL 33178</Text>
                    <Text id="responsive-second-text" className="second-text">pengersolutionsllc@gmail.com</Text>
                    <Text id="responsive-second-text" className="second-text">+1 (786) 834 1705</Text>
                    <br></br>
                    <br></br>

                </Stack>

                <br></br>

            </Box >

        </div>

    );

};

export default Contact;