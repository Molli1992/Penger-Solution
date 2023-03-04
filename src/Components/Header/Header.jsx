import React from "react";
import { Box } from '@chakra-ui/react';


function NavBar(props) {



    return (

        <Box backgroundColor="black">

            <div class="container">

                <header>

                    <br></br>

                    <a href="/" class="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-white text-decoration-none">
                        <span class="fs-3">Lumina Crystal</span>
                    </a>

                    <hr class="border border-danger border-2 opacity-50"></hr>

                    <ul class="nav nav-pills">
                        <li class="nav-item fs-5"><a href="/" class="nav-link px-2 text-white" aria-current="page">Home</a></li>
                        <li class="nav-item fs-5"><a href="/about" class="nav-link px-2 text-white">About</a></li>
                        <li class="nav-item fs-5"><a href="/services" class="nav-link px-2 text-white">Services</a></li>
                        <li class="nav-item fs-5"><a href="/contact" class="nav-link px-2 text-white">Contact</a></li>
                        <li class="nav-item fs-5"><a href="/about-1" class="nav-link px-2 text-white">Freight Payment Providers</a></li>
                    </ul>

                </header>

            </div>

        </Box>

    )

};

export default NavBar;


