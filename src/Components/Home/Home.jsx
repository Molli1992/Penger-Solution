import React from "react";
import { Box, Image, Text, Stack, Card, CardBody, Heading, CardFooter, Button } from '@chakra-ui/react';




function Home() {


    return (

        <div>

            <Box>


                <br></br>
                <br></br>

                <Stack alignItems="center">
                    <Image
                        width="1100px"
                        src='https://static.wixstatic.com/media/fdc8a1b7183a4e4591de19b31b0c02a1.jpg/v1/fill/w_940,h_440,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/Cargo%20Shipping%20Containers.jpg'
                        alt='Containers'
                    />

                </Stack>

                <br></br>

                <Stack alignItems="center">
                    <Text fontSize='60px'>Welcome to Lumina Crystal</Text>
                    <Text fontSize='40px'>ALWAYS AT YOUR SERVICE</Text>
                    <br></br>
                    <Text fontSize='25px'>Fair prices, superior quality and exceptional customer service are guaranteed when you work with us.</Text>
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
                            src='https://static.wixstatic.com/media/11062b_b11682b6f62c4ff4b163510814dae600~mv2_d_3991_2661_s_4_2.jpg/v1/fill/w_595,h_620,fp_0.50_0.50,q_85,usm_0.66_1.00_0.01,enc_auto/11062b_b11682b6f62c4ff4b163510814dae600~mv2_d_3991_2661_s_4_2.jpg'
                            alt='Ship'
                        />

                        <Stack alignItems="center">

                            <CardBody alignItems="center">

                                <Stack alignItems="center">

                                    <Text fontSize='40px'>About Lumina Crystal</Text>
                                    <Text fontSize='25px'>HONEST & EFFICIENT WORK</Text>
                                    <br></br>
                                    <Text fontSize='20px'>Our mission at Lumina Crystal is simple: to provide high-quality</Text>
                                    <Text fontSize='20px'>services for our valued clients. Our team goes above and beyond to</Text>
                                    <Text fontSize='20px'>cater to each project’s specific needs. Through open</Text>
                                    <Text fontSize='20px'>communication and exceptional service, we hope you’ll find what</Text>
                                    <Text fontSize='20px'>you’re looking for with our Logistics Service. For more information or</Text>
                                    <Text fontSize='20px'>general inquiries, get in touch today.</Text>

                                </Stack>

                            </CardBody>

                        </Stack>

                    </Card>

                </Stack>

                <br></br>
                <br></br>

                <Stack alignItems="center">

                    <Text fontSize='40px'>Our Services</Text>
                    <Text fontSize='25px'>WHAT WE PROVIDE</Text>

                </Stack>

                <br></br>
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
                            src='https://static.wixstatic.com/media/nsplsh_002d9a5110a1434982632801d969a414~mv2.jpg/v1/fill/w_899,h_500,fp_0.50_0.50,q_85,usm_0.66_1.00_0.01,enc_auto/nsplsh_002d9a5110a1434982632801d969a414~mv2.jpg'
                            alt='Conteiner'
                        />

                        <Stack alignItems="center">

                            <CardBody alignItems="center">

                                <Stack alignItems="center">

                                    <Text fontSize='40px'>INTERNATIONAL ADVISORY</Text>
                                    <br></br>
                                    <Text fontSize='20px'>We offer differentiated solutions in the</Text>
                                    <Text fontSize='20px'>search of products, partners, and new</Text>
                                    <Text fontSize='20px'>markets. We develop an in-depth market</Text>
                                    <Text fontSize='20px'>research using the SWOT analysis tool to</Text>
                                    <Text fontSize='20px'>fulfill each client needs and facilitate the</Text>
                                    <Text fontSize='20px'>success of products in international</Text>
                                    <Text fontSize='20px'>markets.</Text>

                                </Stack>

                            </CardBody>

                        </Stack>

                    </Card>

                </Stack>

                <br></br>
                <br></br>
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

                            <CardBody alignItems="center">

                                <Stack alignItems="center">

                                    <Text fontSize='40px'>STRATEGIC GLOBAL SOURCING</Text>
                                    <br></br>
                                    <Text fontSize='20px'>Conquer Trader works with clients to</Text>
                                    <Text fontSize='20px'>enhance their competitive advantage by</Text>
                                    <Text fontSize='20px'>locating partners/buyers in various countries</Text>
                                    <Text fontSize='20px'>to sell products and services in new markets</Text>

                                </Stack>

                            </CardBody>

                        </Stack>

                        <Image
                            alignItems="center"
                            objectFit='cover'
                            maxW={{ base: '100%', sm: '200px' }}
                            src='https://static.wixstatic.com/media/nsplsh_de8595204a6c401ba6b914870948401b~mv2.jpg/v1/fill/w_899,h_500,fp_0.50_0.50,q_85,usm_0.66_1.00_0.01,enc_auto/nsplsh_de8595204a6c401ba6b914870948401b~mv2.jpg'
                            alt='Ship'
                        />

                    </Card>

                </Stack>

                <br></br>
                <br></br>

                <Box padding="0 80px">

                    <Stack alignItems="center" background="gray">

                        <Card
                            direction={{ base: 'column', sm: 'row' }}
                            overflow='hidden'
                            variant='outline'
                            alignItems="center"
                            gap="30px"
                        >

                            <Stack alignItems="center">

                                <CardBody alignItems="center">

                                    <Stack alignItems="center">

                                        <Text fontSize='40px'>Get in Touch</Text>
                                        <br></br>
                                        <Text fontSize='20px'>Questions, comments or requests? Feel free to reach out, we’d love</Text>
                                        <Text fontSize='20px'>to hear from you. </Text>
                                        <Text fontSize='20px'>James Cartier, Business Relationship Manager</Text>
                                        <br></br>
                                        <br></br>
                                        <Text fontSize='20px'>7901 4th St N</Text>
                                        <Text fontSize='20px'>STE 5368</Text>
                                        <Text fontSize='20px'>St. Petersburg, FL 33702</Text>
                                        <br></br>
                                        <br></br>
                                        <Text fontSize='20px'>info@luminacrystal.net</Text>

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

                </Box>

            </Box>

        </div>

    );

};

export default Home;