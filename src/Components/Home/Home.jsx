import React from "react";
import { Box, Image, Text, Stack, Card, CardBody } from '@chakra-ui/react';




function Home() {


    return (

        <Box backgroundColor="white">

            <br></br>
            <br></br>

            <Stack alignItems="center">
                <Text fontSize='60px' color="black">Welcome to Lumina Crystal</Text>
                <Text fontSize='40px' color="black">ALWAYS AT YOUR SERVICE</Text>
                <br></br>
                <Text fontSize='25px' color="black">Fair prices, superior quality and exceptional customer service are guaranteed when you work with us.</Text>
            </Stack>

            <br></br>

            <Stack alignItems="center">
                <Image
                    height="600"
                    width="1200px"
                    src='https://static.dw.com/image/53823423_605.jpg'
                    alt='Containers'
                />
            </Stack>

            <br></br>
            <br></br>

            <Stack alignItems="center">

                <Stack alignItems="center">
                    <Text fontSize='40px' color="black">About Lumina Crystal</Text>
                    <Text fontSize='25px' color="black">HONEST & EFFICIENT WORK</Text>
                    <br></br>
                    <Text fontSize='20px' color="black">Our mission at Lumina Crystal is simple: to provide high-quality</Text>
                    <Text fontSize='20px' color="black">services for our valued clients. Our team goes above and beyond to</Text>
                    <Text fontSize='20px' color="black">cater to each project’s specific needs. Through open</Text>
                    <Text fontSize='20px' color="black">communication and exceptional service, we hope you’ll find what</Text>
                    <Text fontSize='20px' color="black">you’re looking for with our Logistics Service. For more information or</Text>
                    <Text fontSize='20px' color="black">general inquiries, get in touch today.</Text>
                </Stack>

                <br></br>

                <Stack alignItems="center">
                    <Image
                        height="600"
                        width="1200px"
                        src='https://media.istockphoto.com/photos/business-logistics-and-transportation-concept-of-containers-cargo-picture-id1273907220?s=2048x2048'
                        alt='Ship'
                    />
                </Stack>

            </Stack>

            <br></br>
            <br></br>

            <Stack alignItems="center">

                <Text fontSize='40px' color="black">Our Services</Text>
                <Text fontSize='25px' color="black">WHAT WE PROVIDE</Text>

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
                        height="400"
                        width="800px"
                        src='https://media.ambito.com/p/1689e60e024601bde779f60f9d041ebe/adjuntos/239/imagenes/040/076/0040076901/1200x675/smart/aduanasjpg.jpg'
                        alt='Conteiner'
                    />

                    <Stack alignItems="center">

                        <CardBody alignItems="center">

                            <Stack alignItems="center">

                                <Text fontSize='40px' color="black">INTERNATIONAL ADVISORY</Text>
                                <br></br>
                                <Text fontSize='20px' color="black">We offer differentiated solutions in the</Text>
                                <Text fontSize='20px' color="black">search of products, partners, and new</Text>
                                <Text fontSize='20px' color="black">markets. We develop an in-depth market</Text>
                                <Text fontSize='20px' color="black">research using the SWOT analysis tool to</Text>
                                <Text fontSize='20px' color="black">fulfill each client needs and facilitate the</Text>
                                <Text fontSize='20px' color="black">success of products in international</Text>
                                <Text fontSize='20px' color="black">markets.</Text>

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

                                <Text fontSize='40px' color="black">STRATEGIC GLOBAL SOURCING</Text>
                                <br></br>
                                <Text fontSize='20px' color="black">Conquer Trader works with clients to</Text>
                                <Text fontSize='20px' color="black">enhance their competitive advantage by</Text>
                                <Text fontSize='20px' color="black">locating partners/buyers in various countries</Text>
                                <Text fontSize='20px' color="black">to sell products and services in new markets</Text>

                            </Stack>

                        </CardBody>

                    </Stack>

                    <Image
                        height="400"
                        width="800px"
                        src='https://previews.123rf.com/images/tomas1111/tomas11111704/tomas1111170400099/77384954-camiones-transporte-transporte-de-carga-transporte-mar%C3%ADtimo.jpg'
                        alt='Ship'
                    />

                </Card>

            </Stack>

            <br></br>
            <br></br>
            <br></br>

            <Box padding="0 190px">

                <Stack alignItems="center" background="teal">

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

                                    <Text fontSize='40px' color="black">Get in Touch</Text>
                                    <br></br>
                                    <Text fontSize='20px' color="black">Questions, comments or requests?</Text>
                                    <Text fontSize='20px' color="black"> Feel free to reach out, we’d love</Text>
                                    <Text fontSize='20px' color="black">to hear from you. </Text>
                                    <Text fontSize='20px' color="black">James Cartier, Business Relationship Manager</Text>
                                    <br></br>
                                    <Text fontSize='20px' color="black">7901 4th St N</Text>
                                    <Text fontSize='20px' color="black">STE 5368</Text>
                                    <Text fontSize='20px' color="black">St. Petersburg, FL 33702</Text>
                                    <br></br>
                                    <Text fontSize='20px' color="black">info@luminacrystal.net</Text>

                                </Stack>

                            </CardBody>

                        </Stack>

                        <Image
                            height="500"
                            width="600px"
                            src='http://www.wirsolut.com/images/contacto/imagen-contacto-wirsolut.png'
                            alt='Containers'
                        />

                    </Card>

                </Stack>

            </Box>

            <br></br>
            <br></br>

        </Box>

    );

};

export default Home;