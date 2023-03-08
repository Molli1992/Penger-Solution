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
                        Since its founding, Lumina Crystal has been one of the most trusted
                        names in the industry. Hire us for this service and learn how we
                        cater to the needs of each client, ensuring the results you need and
                        deserve.
                    </Text>

                </Stack>

            </Box >

            <Box id="responsive-box-1-services" className="box-1-services">

                <Stack id="responsive-stack-text-services" className="stack-text-services">

                    <Text id="responsive-first-text" className="first-text">Route Planning</Text>
                    <Text id="responsive-third-text" className="third-text">
                        We have the experience and skills necessary to tackle just about
                        every type of job that comes our way. With Lumina Crystal, clients
                        know exactly what to expect - professionalism, efficiency and
                        exceptional results.
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