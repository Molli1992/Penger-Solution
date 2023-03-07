import React from "react";
import { Text, Stack, Box, Image } from '@chakra-ui/react';
import "./About.css";




function About() {


    return (

        <Box className="box-1-about">

            <Stack className="stack-img-about">

                <Image
                    className="img-about"
                    src='https://www.beetrack.com/hs-fs/hubfs/transporte%20logistico%20pdf.jpg?width=724&name=transporte%20logistico%20pdf.jpg'
                    alt='Workers'
                />

            </Stack>


            <Stack className="stack-text-about">

                <Text className="first-text">All About Lumina Crystal</Text>
                <br></br>
                <Text className="second-text">PROFESSIONALISM. EXCELLENCE. TIMELINESS.</Text>
                <br></br>
                <Text className="third-text">Fast, efficient, and honest, Lumina Crystal has become a reputable</Text>
                <Text className="third-text">and well-known Logistics Service. Our team is up for every job,</Text>
                <Text className="third-text">managing projects with the skill and experience our clients have</Text>
                <Text className="third-text">come to expect. We want our customers to be satisfied with our</Text>
                <Text className="third-text">work, which is why we provide open communication channels</Text>
                <Text className="third-text">throughout the duration of each project.</Text>

            </Stack>

        </Box >

    );

};

export default About;

/*

*/