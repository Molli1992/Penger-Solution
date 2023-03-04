import React from "react";
import { Box } from '@chakra-ui/react';




function Footer() {

    return (

        <Box backgroundColor="black">

            <div class="container">

                <footer class="py-3">

                    <ul class="nav justify-content-center border-bottom pb-3 mb-3">
                        <li class="nav-item"><a class="nav-link px-2 text-white">Lumina Cristal</a></li>
                        <li class="nav-item"><a class="nav-link px-2 text-white">Buenos Aires</a></li>
                        <li class="nav-item"><a class="nav-link px-2 text-white">Calle: Peru 1324</a></li>
                        <li class="nav-item"><a class="nav-link px-2 text-white">luminacristal@gmail.com</a></li>
                        <li class="nav-item"><a class="nav-link px-2 text-white">115-579-0006</a></li>
                    </ul>

                    <p class="text-center text-white">&copy; 2022 Company, Inc</p>

                </footer>

            </div>

        </Box>

    );

};

export default Footer;