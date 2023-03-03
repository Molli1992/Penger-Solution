import React from "react";



function NavBar(props) {



    return (

        <div class="container">

            <header class="d-flex flex-wrap justify-content-center py-3 mb-4 border-bottom">

                <a href="/" class="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-dark text-decoration-none">
                    <span class="fs-4">Lumina Crystal</span>
                </a>

                <ul class="nav nav-pills">
                    <li class="nav-item"><a href="/" class="nav-link active" aria-current="page">Home</a></li>
                    <li class="nav-item"><a href="/about" class="nav-link">About</a></li>
                    <li class="nav-item"><a href="/servies" class="nav-link">Services</a></li>
                    <li class="nav-item"><a href="/contact" class="nav-link">Contact</a></li>
                    <li class="nav-item"><a href="/about-1" class="nav-link">Paymnet Providers</a></li>
                </ul>

            </header>

        </div>

    )

};

export default NavBar;


