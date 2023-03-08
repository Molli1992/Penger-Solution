import React from "react";
import { Box, Image, Text, Stack, Card, CardBody } from '@chakra-ui/react';
import "./Home.css";



function Home() {


    return (

        <div>

            <Box backgroundColor="white">

                <Stack alignItems="center" padding="30px">

                    <Text id="responsive-first-text" className="first-text">Welcome to Lumina Crystal</Text>
                    <Text id="responsive-second-text" className="second-text">ALWAYS AT YOUR SERVICE</Text>
                    <Text id="responsive-third-text" className="third-text">Fair prices, superior quality and exceptional customer service are guaranteed when you work with us.</Text>

                </Stack>

                <br></br>

                <Stack alignItems="center">

                    <Image
                        id="responsive-img-home"
                        className="img-home"
                        src='https://static.dw.com/image/53823423_605.jpg'
                        alt='Containers'
                    />

                </Stack>

                <br></br>

                <Stack alignItems="center" padding="30px">

                    <Text id="responsive-first-text" className="first-text">About Lumina Crystal</Text>
                    <Text id="responsive-second-text" className="second-text">HONEST & EFFICIENT WORK</Text>
                    <Text id="responsive-third-text" className="third-text">
                        Our mission at Lumina Crystal is simple: to provide high-quality
                        services for our valued clients. Our team goes above and beyond to
                        cater to each project’s specific needs. Through open
                        communication and exceptional service, we hope you’ll find what
                        you’re looking for with our Logistics Service. For more information or
                        general inquiries, get in touch today.
                    </Text>

                </Stack>

                <br></br>

                <Stack alignItems="center">

                    <Image
                        id="responsive-img-home"
                        className="img-home"
                        src='https://media.istockphoto.com/photos/business-logistics-and-transportation-concept-of-containers-cargo-picture-id1273907220?s=2048x2048'
                        alt='Ship'
                    />

                </Stack>

                <Stack id="responsive-stack-text-services" className="stack-text-services">

                    <Text id="responsive-first-text" className="first-text">Our Services</Text>
                    <Text id="responsive-second-text" className="second-text" >WHAT WE PROVIDE</Text>

                </Stack>

            </Box>

            <Box id="responsive-box-1-services" className="box-1-services">

                <Stack id="responsive-stack-img-services" className="stack-img-services">

                    <Image
                        id="responsive-img-services"
                        className="img-services"
                        src='https://media.ambito.com/p/1689e60e024601bde779f60f9d041ebe/adjuntos/239/imagenes/040/076/0040076901/1200x675/smart/aduanasjpg.jpg'
                        alt='Conteiner'
                    />

                </Stack>

                <Stack id="responsive-stack-text-services" className="stack-text-services">

                    <Text id="responsive-first-text" className="first-text">INTERNATIONAL ADVISORY</Text>
                    <Text id="responsive-third-text" className="third-text">
                        We offer differentiated solutions in the
                        search of products, partners, and new
                        markets. We develop an in-depth market
                        research using the SWOT analysis tool to
                        fulfill each client needs and facilitate the
                        success of products in international
                        markets.
                    </Text>

                </Stack>

            </Box >

            <Box id="responsive-box-1-services" className="box-1-services">

                <Stack id="responsive-stack-text-services" className="stack-text-services">

                    <Text id="responsive-first-text" className="first-text">STRATEGIC GLOBAL SOURCING</Text>
                    <Text id="responsive-third-text" className="third-text">
                        Conquer Trader works with clients to
                        enhance their competitive advantage by
                        locating partners/buyers in various countries
                        to sell products and services in new markets
                    </Text>

                </Stack>

                <Stack id="responsive-stack-img-services" className="stack-img-services">

                    <Image
                        id="responsive-img-services"
                        className="img-services"
                        src='https://previews.123rf.com/images/tomas1111/tomas11111704/tomas1111170400099/77384954-camiones-transporte-transporte-de-carga-transporte-mar%C3%ADtimo.jpg'
                        alt='Ship'
                    />

                </Stack>

            </Box >

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
                    <Text id="responsive-second-text" className="second-text">St. Petersburg, FL 33702</Text>
                    <Text id="responsive-second-text" className="second-text">info@luminacrystal.net</Text>
                    <Text id="responsive-second-text" className="second-text">(786) 790-9763</Text>
                    <br></br>
                    <br></br>

                </Stack>

                <br></br>

            </Box >

        </div>

    );

};

export default Home;