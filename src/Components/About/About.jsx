import React from "react";
import { Text, Stack, Box, Image } from '@chakra-ui/react';
import "./About.css";




function About() {


    return (

        <Box id="responsive-box-1-about" className="box-1-about">

            <Stack id="responsive-stack-img-about" className="stack-img-about">

                <Image
                    id="responsive-img-about"
                    className="img-about"
                    src='https://www.beetrack.com/hs-fs/hubfs/transporte%20logistico%20pdf.jpg?width=724&name=transporte%20logistico%20pdf.jpg'
                    alt='Workers'
                />

            </Stack>


            <Stack id="responsive-stack-text-about" className="stack-text-about">

                <Text id="responsive-first-text" className="first-text">All About Penger Solution</Text>
                <Text id="responsive-second-text" className="second-text">PROFESSIONALISM. EXCELLENCE. TIMELINESS.</Text>
                <br></br>
                <Text id="responsive-third-text" className="third-text">
                    Fast, efficient, and honest, Penger Solution has become a reputable
                    and well-known Logistics Service. Our team is up for every job,
                    managing projects with the skill and experience our clients have
                    come to expect. We want our customers to be satisfied with our
                    work, which is why we provide open communication channels
                    throughout the duration of each project.
                </Text>

            </Stack>

        </Box >

    );

};

export default About;

/*

*/