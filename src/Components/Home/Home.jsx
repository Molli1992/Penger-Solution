import React from "react";
import { Box, Image, Text, Stack, Card, CardBody } from '@chakra-ui/react';
import "./Home.css";
import "../Services/Services.css";
import "../Contact/Contact.css";



function Home() {


    return (

        <div>

            <Box backgroundColor="white">

                <Stack alignItems="center" padding="30px" className="stack-home-text">

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

                <Stack alignItems="center" padding="30px" className="stack-home-text">

                    <Text id="responsive-first-text" className="first-text">About Lumina Crystal</Text>
                    <Text id="responsive-second-text" className="second-text">HONEST & EFFICIENT WORK</Text>
                    <Text id="responsive-third-text" className="third-text">
                        Order fulfillment: Processing orders from customers, picking, packing,
                        and shipping products to the end consumer in a timely and efficient manner.
                    </Text>

                </Stack>

                <br></br>

                <Stack alignItems="center">

                    <Image
                        id="responsive-img-home"
                        className="img-home"
                        src='https://www.nationalgeographic.com.es/medio/2022/09/07/medios-de-transporte_b5d866d8_1280x720.jpg'
                        alt='Ship'
                    />

                </Stack>

                <Stack id="responsive-stack-text-services" className="stack-text-services">

                    <Text id="responsive-first-text" className="first-text">Our Services</Text>
                    <Text id="responsive-second-text" className="second-text" >WHAT WE PROVIDE</Text>
                    <br></br>
                    <Text id="responsive-third-text" className="third-text">
                        Transportation management: Coordinating the movement of goods via various modes of transport
                        such as trucks, ships, planes, and trains.
                    </Text>
                    <br></br>
                    <Text id="responsive-third-text" className="third-text">
                        Inventory management: Optimizing inventory levels to ensure that the right amount of goods is
                        available at the right time, while minimizing inventory carrying costs.
                    </Text>

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

                    <Text id="responsive-first-text" className="first-text">Supply chain management</Text>
                    <Text id="responsive-third-text" className="third-text">
                        Managing the entire supply chain, from suppliers to
                        manufacturers to distributors to retailers and finally to
                        consumers, to ensure seamless integration and maximum
                        efficiency.
                    </Text>

                </Stack>

            </Box >

            <Box id="responsive-box-1-services" className="box-1-services">

                <Stack id="responsive-stack-text-services" className="stack-text-services">

                    <Text id="responsive-first-text" className="first-text">Sustainability</Text>
                    <Text id="responsive-third-text" className="third-text">
                        Implementing environmentally responsible practices, such as
                        using fuel-efficient vehicles, reducing packaging waste, and
                        adopting renewable energy sources.
                    </Text>

                </Stack>

                <Stack id="responsive-stack-img-services" className="stack-img-services">

                    <Image
                        id="responsive-img-services"
                        className="img-services"
                        src='https://mobilidade.estadao.com.br/wp-content/uploads/2019/11/iStock-1021291420.jpg'
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