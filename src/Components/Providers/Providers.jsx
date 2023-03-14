import { Box, Image, Text, Stack } from '@chakra-ui/react';
import { useState } from 'react';
import "./Providers.css";



function Providers() {

    const [number, setNumber] = useState(0)
    const Imagenes = ["https://prosertek.com/wp-content/uploads/trabajadores-puerto2.jpg",
        "https://cronicaglobal.elespanol.com/uploads/s1/76/62/80/estibadores-desbordados-trabajo_10_670x355.png",
        "https://lu17.com/wp-content/uploads/2020/10/COVID-19-Back-to-the-workplace-adapting-workplaces-and-protecting-workers-by-EU-OSHA_i1500.jpg",
        "https://www.rrhhdigital.com/userfiles/operario-trincador.jpg",
        "https://resizer.iproimg.com/unsafe/880x/filters:format(webp)/https://assets.iprofesional.com/assets/jpg/2020/03/493253.jpg"];


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

        <Box backgroundColor="#321B1B">

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