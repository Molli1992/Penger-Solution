import React from "react";
import {
    Box, Image, Text, Stack, Card, CardBody,
    Heading, Divider, CardFooter, ButtonGroup, Button
} from '@chakra-ui/react';
import "./Services.css";




function Services() {

    const breakpoints = ['0em', '30em', '48em', '62em', '80em', '96em'];


    return (

        <div>

            <Stack id="responsive-stack-text-services" className="stack-text-services">

                <Text id="responsive-first-text" className="first-text">PROFESSIONAL SERVICES</Text>
                <Text id="responsive-first-text" className="first-text" >Meeting Your Needs</Text>

            </Stack>

            <Box id="responsive-box-1-services" className="box-1-services">

                <Stack id="responsive-stack-img-services" className="stack-img-services">

                    <Image
                        id="responsive-img-services"
                        className="img-services"
                        src='https://assets.verizonconnect.com/cdn-cgi/image/width=1900,height=540,format=auto/solutions/uk-fleet/us-desktop-fleet-tracking-banner.jpg'
                        alt='GPS'
                    />

                </Stack>

                <Stack id="responsive-stack-text-services" className="stack-text-services">

                    <Text id="responsive-first-text" className="first-text">GPS Fleet Tracking</Text>
                    <Text id="responsive-third-text" className="third-text">
                        Technology solutions: Utilizing the latest technology to
                        optimize logistics processes, such as track-and-trace
                        systems, real-time inventory tracking, and predictive
                        analytics.
                    </Text>

                </Stack>

            </Box >

            <Box id="responsive-box-1-services" className="box-1-services">

                <Stack id="responsive-stack-text-services" className="stack-text-services">

                    <Text id="responsive-first-text" className="first-text">Route Planning</Text>
                    <Text id="responsive-third-text" className="third-text">
                        Warehousing and distribution: Providing secure, climate-
                        controlled storage facilities for goods, as well as managing
                        the sorting, packing, and distribution of those goods to their
                        final destination.
                    </Text>

                </Stack>

                <Stack id="responsive-stack-img-services" className="stack-img-services">

                    <Image
                        id="responsive-img-services"
                        className="img-services"
                        src='https://s1.static.brasilescola.uol.com.br/be/conteudo/images/a-cartografia-representa-espaco-auxilia-sua-compreensao-5626a9ab82125.jpg'
                        alt='MAP'
                    />

                </Stack>

            </Box >

        </div>

    );

};

export default Services;