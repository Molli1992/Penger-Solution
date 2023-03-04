import React from "react";
import { Box, Image, Text, Stack, Card, CardBody } from '@chakra-ui/react';




function Contact() {



    return (

        <Box padding="0 150px" backgroundColor="black">

            <br></br>
            <br></br>

            <Stack alignItems="center" background="teal">

                <Card
                    direction={{ base: 'column', sm: 'row' }}
                    overflow='hidden'
                    variant='outline'
                    alignItems="center"
                    gap="100px"
                >

                    <Stack alignItems="center">

                        <CardBody alignItems="center">

                            <Stack alignItems="center">

                                <Text fontSize='40px'>Get in Touch</Text>
                                <Text fontSize='20px'>7901 4th St N</Text>
                                <Text fontSize='20px'>STE 5368</Text>
                                <Text fontSize='20px'>St. Petersburg, FL 33702</Text>
                                <Text fontSize='20px'>info@luminacrystal.net</Text>
                                <Text fontSize='20px'>(786) 790-9763</Text>
                                <br></br>
                                <br></br>
                                <Text fontSize='20px'>
                                    <button type="button" class="btn btn-outline-dark">Facebook</button>
                                    <button type="button" class="btn btn-outline-dark">Instagram</button>
                                    <button type="button" class="btn btn-outline-dark">LinkedIn</button>
                                </Text>

                            </Stack>

                        </CardBody>

                    </Stack>

                    <Image
                        alignItems="center"
                        objectFit='cover'
                        maxW={{ base: '100%', sm: '200px' }}
                        src='https://static.wixstatic.com/media/11062b_072eab0b69e54b779cd6e2e7ead60019~mv2_d_5977_3985_s_4_2.jpg/v1/fill/w_595,h_560,fp_0.50_0.50,q_80,usm_0.66_1.00_0.01,enc_auto/11062b_072eab0b69e54b779cd6e2e7ead60019~mv2_d_5977_3985_s_4_2.jpg'
                        alt='Containers'
                    />

                </Card>

            </Stack>

            <br></br>
            <br></br>

        </Box>
    );

};

export default Contact;