import LogoIcon from "../assets/logo.png";
import AboutIcon from "../assets/about.png";
import ExperienceIcon from "../assets/work.png";
import ProjectsIcon from "../assets/projects.png";
import ContactIcon from "../assets/contact.png";
import { HiMenuAlt3 } from "react-icons/hi";
import {
  Button,
  Flex,
  Link,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
} from "@chakra-ui/react";

const NavMenu = () => {
  return (
    <header>
      <nav className="header-flex">
        <a href="#" className="link">
          <img className="logo" src={LogoIcon}></img>
        </a>
        <Menu>
          <MenuButton
            as={Button}
            style={{ color: "#AAC7D8", backgroundColor: "#44576D" }}
            _focus={{ boxShadow: "none" }}
          >
            <HiMenuAlt3 size={25} />
          </MenuButton>
          <MenuList backgroundColor="#44576D" px={2}>
            <MenuItem
              as={Link}
              href="#about"
              _focus={{ boxShadow: "none", backgroundColor: "#5c7491" }}
              backgroundColor="#44576D"
              borderRadius={5}
            >
              <Flex>
                <img className="icon" src={AboutIcon} />
                <span id="link-title">About</span>
              </Flex>
            </MenuItem>
            <MenuItem
              as={Link}
              href="#experience"
              _focus={{ boxShadow: "none", backgroundColor: "#5c7491" }}
              backgroundColor="#44576D"
              borderRadius={5}
            >
              <Flex>
                <img className="icon" src={ExperienceIcon} />
                <span id="link-title">Experience</span>
              </Flex>
            </MenuItem>
            <MenuItem
              as={Link}
              href="#projects"
              _focus={{ boxShadow: "none", backgroundColor: "#5c7491" }}
              backgroundColor="#44576D"
              borderRadius={5}
            >
              <Flex>
                <img className="icon" src={ProjectsIcon} />
                <span id="link-title">Projects</span>
              </Flex>
            </MenuItem>
            <MenuItem
              as={Link}
              href="#contact"
              _focus={{ boxShadow: "none", backgroundColor: "#5c7491" }}
              backgroundColor="#44576D"
              borderRadius={5}
            >
              <Flex>
                <img className="icon" src={ContactIcon} />
                <span id="link-title">Contact</span>
              </Flex>
            </MenuItem>
          </MenuList>
        </Menu>
      </nav>
    </header>
  );
};

export default NavMenu;
