import React from "react";
import {
    Box, Image, Text, Stack
} from '@chakra-ui/react';
import "./Services.css";




function Services() {



    return (

        <Box backgroundColor="#321B1B">

            <Stack id="responsive-stack-text-services" className="stack-text-services">

                <Text id="responsive-first-text" className="first-text">PROFESSIONAL SERVICES</Text>
                <Text id="responsive-first-text" className="first-text" >Meeting Your Needs</Text>

            </Stack>

            <Box id="responsive-box-1-services" className="box-1-services" backgroundColor="#321B1B">

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

            <Box id="responsive-box-1-services" className="box-1-services" backgroundColor="#321B1B">

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

            <Box id="responsive-box-1-services" className="box-1-services" backgroundColor="#321B1B">

                <Stack id="responsive-stack-img-services" className="stack-img-services">

                    <Image
                        id="responsive-img-services"
                        className="img-services"
                        src='https://aldiaargentina.microjuris.com/wp-content/uploads/2019/03/relacic3b3n-laboral.jpg'
                        alt='GPS'
                    />

                </Stack>

                <Stack id="responsive-stack-text-services" className="stack-text-services">

                    <Text id="responsive-first-text" className="first-text">Customs brokerage</Text>
                    <Text id="responsive-third-text" className="third-text">
                        Assisting with customs clearance and compliance to ensure the legal import and export of goods.
                    </Text>

                </Stack>

            </Box >

            <Box id="responsive-box-1-services" className="box-1-services" backgroundColor="#321B1B">

                <Stack id="responsive-stack-text-services" className="stack-text-services">

                    <Text id="responsive-first-text" className="first-text">Value-added services</Text>
                    <Text id="responsive-third-text" className="third-text">
                        Providing additional services such as packaging, labeling, kitting, assembly, and quality control.
                    </Text>

                </Stack>

                <Stack id="responsive-stack-img-services" className="stack-img-services">

                    <Image
                        id="responsive-img-services"
                        className="img-services"
                        src='https://www.itc-packaging.com/uploads/job_offers/1024x600%20mozo.jpg'
                        alt='MAP'
                    />

                </Stack>

            </Box >

        </Box>

    );

};

export default Services;