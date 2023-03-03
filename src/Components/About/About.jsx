import React from "react";
import { Box, Image, Text, Stack, Card, CardBody } from '@chakra-ui/react';




function About() {


    return (

        <Box>

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
                        src='https://static.wixstatic.com/media/11062b_34328535553e437aa26b0990d038eadd~mv2_d_6272_4182_s_4_2.jpg/v1/fill/w_595,h_700,fp_0.50_0.50,q_85,usm_0.66_1.00_0.01,enc_auto/11062b_34328535553e437aa26b0990d038eadd~mv2_d_6272_4182_s_4_2.jpg'
                        alt='Workers'
                    />

                    <Stack alignItems="center">

                        <CardBody alignItems="center">

                            <Stack alignItems="center">

                                <Text fontSize='40px'>All About Lumina Crystal</Text>
                                <Text fontSize='25px'>PROFESSIONALISM. EXCELLENCE. TIMELINESS.</Text>
                                <br></br>
                                <Text fontSize='20px'>Fast, efficient, and honest, Lumina Crystal has become a reputable</Text>
                                <Text fontSize='20px'>and well-known Logistics Service. Our team is up for every job,</Text>
                                <Text fontSize='20px'>managing projects with the skill and experience our clients have</Text>
                                <Text fontSize='20px'>come to expect. We want our customers to be satisfied with our</Text>
                                <Text fontSize='20px'>work, which is why we provide open communication channels</Text>
                                <Text fontSize='20px'>throughout the duration of each project.</Text>
                                <br></br>
                                <br></br>
                                <br></br>
                                <button type="button" class="btn btn-outline-primary">Get in Touch</button>

                            </Stack>

                        </CardBody>

                    </Stack>

                </Card>

            </Stack>

        </Box>

    );

};

export default About;