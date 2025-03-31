import React from "react";
import { Box } from "@chakra-ui/react";
import { FaGithub } from "react-icons/fa";

function Footer() {
  return (
    <Box backgroundColor="#0B0125" padding="1px">
      <div class="container">
        <footer class="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top">
          <div class="col-md-4 d-flex align-items-center">
            <a
              href="https://github.com/Molli1992?tab=repositories"
              target="_blank"
              rel="noreferrer"
              class="mb-3 me-2 mb-md-0 text-white text-decoration-none lh-1"
            >
              <FaGithub style={{ fontSize: "24px" }} />
            </a>
            <span class="mb-3 mb-md-0 text-white">
              &copy; 2022 Company, Inc
            </span>
          </div>
        </footer>
      </div>
    </Box>
  );
}

export default Footer;
