import React from "react";
import { Box, Image, Text, Stack, Card, CardBody } from '@chakra-ui/react';




function Services() {



    return (

        <Box>

            <Stack alignItems="center">

                <Text fontSize='40px'>Professional Services</Text>
                <br></br>
                <Text fontSize='25px'>MEETING YOUR NEEDS</Text>

            </Stack>

            <br></br>
            <br></br>

            <Stack alignItems="center">

                <Card
                    direction={{ base: 'column', sm: 'row' }}
                    overflow='hidden'
                    variant='outline'
                    alignItems="center"
                    gap="30px"
                >
                    <Image
                        alignItems="center"
                        objectFit='cover'
                        maxW={{ base: '100%', sm: '200px' }}
                        src='https://static.wixstatic.com/media/aa61bc8f07db422f9f56abf2a673d9f7.jpg/v1/fill/w_575,h_400,fp_0.50_0.50,q_80,usm_0.66_1.00_0.01,enc_auto/aa61bc8f07db422f9f56abf2a673d9f7.jpg'
                        alt='Workers'
                    />

                    <Image
                        alignItems="center"
                        objectFit='cover'
                        maxW={{ base: '100%', sm: '200px' }}
                        src='https://static.wixstatic.com/media/6cbf5621bc1a4e96a5339968ad1f88fc.jpg/v1/fill/w_575,h_400,fp_0.50_0.50,q_80,usm_0.66_1.00_0.01,enc_auto/6cbf5621bc1a4e96a5339968ad1f88fc.jpg'
                        alt='Workers'
                    />

                </Card>

            </Stack>

            <br></br>
            <br></br>

            <Stack alignItems="center">

                <Card
                    direction={{ base: 'column', sm: 'row' }}
                    overflow='hidden'
                    variant='outline'
                    alignItems="center"
                    gap="30px"
                >
                    <Stack alignItems="center">

                        <Text fontSize='30px'>GPS Fleet Tracking</Text>
                        <br></br>
                        <Text fontSize='20px'>Since its founding, Lumina Crystal has been one of the most trusted</Text>
                        <Text fontSize='20px'>names in the industry. Hire us for this service and learn how we</Text>
                        <Text fontSize='20px'>cater to the needs of each client, ensuring the results you need and</Text>
                        <Text fontSize='20px'>deserve.</Text>

                    </Stack>

                    <Stack alignItems="center">

                        <Text fontSize='30px'>Route Planning</Text>
                        <br></br>
                        <Text fontSize='20px'>We have the experience and skills necessary to tackle just about</Text>
                        <Text fontSize='20px'>every type of job that comes our way. With Lumina Crystal, clients</Text>
                        <Text fontSize='20px'>know exactly what to expect - professionalism, efficiency and</Text>
                        <Text fontSize='20px'>exceptional results.</Text>

                    </Stack>

                </Card>

            </Stack>

            <br></br>
            <br></br>
            <br></br>

        </Box>

    );

};

export default Services;