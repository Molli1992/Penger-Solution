import React from "react";
import { Box } from '@chakra-ui/react';




function Footer() {

    return (

        <Box backgroundColor="#321B1B" padding="1px">

            <div class="container">

                <footer class="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top">

                    <div class="col-md-4 d-flex align-items-center">
                        <a href="https://github.com/Molli1992?tab=repositories" target="_blank" rel="noreferrer" class="mb-3 me-2 mb-md-0 text-white text-decoration-none lh-1">
                            <ion-icon name="logo-github" size="large"></ion-icon>
                        </a>
                        <span class="mb-3 mb-md-0 text-white">&copy; 2022 Company, Inc</span>
                    </div>

                </footer>

            </div>

        </Box>

    );

};

export default Footer;

/*

                    <ul class="nav col-md-4 justify-content-end list-unstyled d-flex">

                        <li class="ms-3"><a class="text-white" href="/" target="_blank" rel="noreferrer">
                            <ion-icon name="logo-facebook" size="large"></ion-icon>
                        </a>
                        </li>

                        <li class="ms-3"><a class="text-white" href="/" target="_blank" rel="noreferrer">
                            <ion-icon name="logo-linkedin" size="large"></ion-icon>
                        </a></li>

                    </ul>
*/