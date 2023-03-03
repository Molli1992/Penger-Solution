import { Box, Image, Text, Stack } from '@chakra-ui/react';
import { useState } from 'react';



function Providers() {

    const [number, setNumber] = useState(0)
    const Imagenes = ["https://static.wixstatic.com/media/d2418e4ab94246c690f87ebe383e943b.jpg/v1/fill/w_666,h_444,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/Loading%20Cargo.jpg",
        "https://static.wixstatic.com/media/11062b_0a5c18c328d6470ead944e9e3c394533~mv2_d_7360_4912_s_4_2.jpg/v1/fill/w_665,h_444,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/A%20Port%20Worker.jpg",
        "https://static.wixstatic.com/media/11062b_3e26c21e64ae48a1b02ff442ab562bcf~mv2_d_3991_2661_s_4_2.jpg/v1/fill/w_666,h_444,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/Aerial%20View%20of%20Containers.jpg",
        "https://static.wixstatic.com/media/11062b_d00e49cf48f14a40adda61b8c7abbe27~mv2_d_4700_3137_s_4_2.jpg/v1/fill/w_665,h_444,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/A%20Crane%20Lifting%20a%20Container.jpg",
        "https://static.wixstatic.com/media/d4138b86a1cd4df18f5186a937a261a4.jpg/v1/fill/w_666,h_444,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/Freight%20Shipping%20Containers.jpg"];


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

        <Box>

            <Stack alignItems="center">

                <Text fontSize="40px">About</Text>
                <Text fontSize="25px">Freight Payment Providers</Text>

                <Text fontSize="20px">Freight payment providers or third-party logistics providers (3PL’s) act as the intermediary between two parties in</Text>
                <Text fontSize="20px">the receiving, processing, payment of accounts payable. While each 3PL provides unique freight payment solutions,</Text>
                <Text fontSize="20px">generally speaking, invoices are processed and paid directly by the 3PL, then reimbursed by the client. Essentially,</Text>
                <Text fontSize="20px">the outsourced freight invoice payment company eliminates the need for an account payable division within</Text>
                <Text fontSize="20px">companies or organizations. This saves the company money on payroll and allows them to allocate those</Text>
                <Text fontSize="20px">employees to more productive business growth or operations roles.</Text>

                <br></br>

                <Text fontSize="20px">Invoice processing is a rather complex series of individual steps to ensure prompt and accurate payment of</Text>
                <Text fontSize="20px">invoices. Noted below are the common steps that professional 3PL’s use to review, process, and pay freight bills on</Text>
                <Text fontSize="20px">behalf of their clients.</Text>

                <br></br>

                <Text fontSize="20px">• Receipt of the Invoice: When a partnership has been created between a shipper and a 3PL, all carriers are notified</Text>
                <Text fontSize="20px">that the freight payment company is acting on behalf of their client. At this point, all carriers will submit invoices to</Text>
                <Text fontSize="20px">the 3PL or intermediary in multiple formats for processing. In most cases, the typical method of invoice submittal</Text>
                <Text fontSize="20px">includes USPS mail or electronic invoices sent via EDI.</Text>

                <br></br>

                <Text fontSize="20px">• Validation of the Invoice: Once the invoices from carriers have been received by the 3PL, the freight payment</Text>
                <Text fontSize="20px">provider will validate each invoice to ensure that duplicate charges are not appearing on the invoice, are charges</Text>
                <Text fontSize="20px">that have been incurred by the shipper, and include all required documentation.</Text>

                <br></br>

                <Text fontSize="20px">• Capturing Data: This is a service that makes a 3PL stand out above competitors. Freight payment companies</Text>
                <Text fontSize="20px">capture comprehensive amounts of data elements from the freight billing invoices and the supporting</Text>
                <Text fontSize="20px">documentation to establish a report-based database. The shipper can use this data to fine-tune their supply chain</Text>
                <Text fontSize="20px">operations.</Text>

                <br></br>

                <Text fontSize="20px">• Service & Rate Auditing: When the invoice is being reviewed for errors, the auditing of rates and services will</Text>
                <Text fontSize="20px">begin. Freight auditing also includes negotiating better rates from the carrier to the shipper. 3PL’s maintain</Text>
                <Text fontSize="20px">exceptional relationships with multiple carriers, which provides them the expertise and experience to secure base</Text>
                <Text fontSize="20px">rates or special service rates. While the auditing process is first and foremost a mistake-finding mission, it’s also a</Text>
                <Text fontSize="20px">great time to optimize service rates between shippers and carriers.</Text>

                <br></br>

                <Text fontSize="20px">• Accounting: Before the invoices have been paid, the professional freight invoice provider will utilize accounting</Text>
                <Text fontSize="20px">methods to correctly document and ledger through correct general ledger codes that are provided by the shipper to</Text>
                <Text fontSize="20px">keep all charges correctly documented.</Text>

                <br></br>

                <Text fontSize="20px">• Exception Management: There are always exceptions to processing invoices in logistics. When an exception</Text>
                <Text fontSize="20px">occurs, the 3PL will act ethically but swiftly on behalf of their shipper clients to resolve it – with as little hassle as</Text>
                <Text fontSize="20px">possible.</Text>

                <br></br>

                <Text fontSize="20px">• Payment: When the invoice has been completed audited, documented, and ensured for accuracy, the 3PL will</Text>
                <Text fontSize="20px">either pay the invoice or submit a final invoice report to the shipper – so they can submit funds to the 3PL to pay the</Text>
                <Text fontSize="20px">carrier.</Text>

                <br></br>

            </Stack>

            <br></br>

            <Stack alignItems="center">

                <Box>

                    <button type="button" class="btn btn-primary" onClick={prevHandler}>
                        Prev Picture
                    </button>

                    <button type="button" class="btn btn-primary" onClick={nextHandler}>
                        Next Picture
                    </button>

                </Box>

                <Image
                    width="800px"
                    src={Imagenes[number]}
                    alt='Containers'
                />

            </Stack>

        </Box>

    );

};

export default Providers;