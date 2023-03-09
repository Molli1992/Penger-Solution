import { Box, Image, Text, Stack } from '@chakra-ui/react';
import { useState } from 'react';
import "./Providers.css";



function Providers() {

    const [number, setNumber] = useState(0)
    const Imagenes = ["https://static.wixstatic.com/media/d2418e4ab94246c690f87ebe383e943b.jpg/v1/fill/w_666,h_444,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/Loading%20Cargo.jpg",
        "https://static.wixstatic.com/media/11062b_0a5c18c328d6470ead944e9e3c394533~mv2_d_7360_4912_s_4_2.jpg/v1/fill/w_665,h_444,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/A%20Port%20Worker.jpg",
        "https://www.turijobs.com/blog/wp-content/uploads/2018/03/1.jpg",
        "https://static.wixstatic.com/media/11062b_d00e49cf48f14a40adda61b8c7abbe27~mv2_d_4700_3137_s_4_2.jpg/v1/fill/w_665,h_444,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/A%20Crane%20Lifting%20a%20Container.jpg",
        "https://elordenmundial.com/wp-content/uploads/2012/12/container-ship-16-wiki-19057.jpg"];


    const nextHandler = () => {

        let num = number + 1

        if (num > 4) return;

        console.log("nextHandler");

        setNumber(num)
    };

    const prevHandler = () => {

        let num = number - 1

        if (num < 0) return;

        console.log("prevHandler");

        setNumber(num)

    };

    return (

        <Box backgroundColor="white">

            <Stack alignItems="center">

                <Box>

                    <button type="button" class="btn btn-outline-primary" onClick={prevHandler}>
                        Prev Picture
                    </button>

                    <button type="button" class="btn btn-outline-primary" onClick={nextHandler}>
                        Next Picture
                    </button>

                </Box>

                <Image
                    id="responsive-img-providers"
                    className="img-providers"
                    src={Imagenes[number]}
                    alt='Containers'
                />

            </Stack>

            <Stack alignItems="center" padding="15px" className='stack-text-providers'>

                <Text id="responsive-first-text" className="first-text">About</Text>
                <Text id="responsive-second-text" className="second-text">Freight Payment Providers</Text>

                <Text id="responsive-third-text" className="third-text">
                    Freight Payment Providers (FPP) are companies that specialize in managing the payment and settlement of freight
                    bills for shippers, carriers, and other stakeholders in the transportation industry.
                    FPPs typically offer a range of services, including invoice processing, dispute resolution,
                    carrier payment, and freight audit and analysis.
                </Text>

                <br></br>

                <Text id="responsive-third-text" className="third-text">
                    With the complex and often fragmented nature of the transportation industry, FPPs can help
                    streamline payment processes and improve visibility into transportation costs.
                    By consolidating and analyzing data from multiple sources, FPPs can identify discrepancies,
                    billing errors, and overcharges, helping shippers and carriers to save money and
                    improve operational efficiency.
                </Text>

                <br></br>

                <Text id="responsive-third-text" className="third-text">
                    FPPs may also offer value-added services such as benchmarking, contract negotiation,
                    and transportation management consulting to help their clients optimize their logistics operations and
                    stay competitive in the marketplace.
                </Text>

                <br></br>

                <Text id="responsive-third-text" className="third-text">
                    Overall, Freight Payment Providers play a critical role in facilitating the movement of goods and
                    services around the world, by ensuring that the payment and settlement of freight bills is accurate,
                    timely, and efficient.
                </Text>

            </Stack>

            <br></br>

        </Box>

    );

};

export default Providers;