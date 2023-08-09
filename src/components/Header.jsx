import { NavLink } from "react-router-dom";
import { Stack, Text, Center, Box } from "@chakra-ui/react";
import { GiFlowerPot } from "react-icons/gi";
import { BsSearch, BsBasket } from "react-icons/bs";

const Header = () => {
  return (
    <>
      <Center h={"27"} color={"white"} bgColor={"#38A169"}>
        {" "}
        Find Your New Favorite Product
      </Center>
      <Stack
        direction={"row"}
        w={"xl"}
        justifyContent={"space-between"}
        px={"16"}
        py={"12"}
        className=" border-spacing-0 border-b-2 "
      >
        <Center className="text-xl font-extrabold underline">
          <NavLink to={"/"}>The Elysian </NavLink>
        </Center>
        <ul className="flex sm:flex-row gap-16">
          <li>
            <NavLink to={"/resources"} className=" flex">
              <GiFlowerPot size={"42"} className="mr-4 mt-1" />
              <Box className="flex-col">
                <Text
                  fontWeight={"bold"}
                  fontSize={"lg"}
                  display={"flex"}
                  top={"10"}
                >
                  Resources
                </Text>
                <Text as={"i"} color={"gray"}>
                  FAQ,Filing,Support
                </Text>
              </Box>
            </NavLink>
          </li>

          <li>
            <NavLink to={"/visit"}>
              {" "}
              <Box w={"20"} align={"flex-col"}>
                <Text
                  fontWeight={"bold"}
                  fontSize={"lg"}
                  display={"flex"}
                  top={"10"}
                >
                  Visit the Elysian
                </Text>
                <Text as={"i"} color={"gray"}>
                  Store Locator
                </Text>
              </Box>
            </NavLink>
          </li>

          <li>
            <NavLink to={"/signin"}>
              {" "}
              <Box w={"20"} align={"flex-col"}>
                <Text
                  fontWeight={"bold"}
                  fontSize={"lg"}
                  display={"flex"}
                  top={"10"}
                >
                  Hello,Sign In
                </Text>
                <Text as={"i"} color={"gray"}>
                  Your Account
                </Text>
              </Box>
            </NavLink>
          </li>

          <li>
            <NavLink to={"/search"}>
              <BsSearch size={"27"} className="my-3" />
            </NavLink>
          </li>

          <li>
            <NavLink to={"/cart"}>
              <BsBasket size={"27"} className="my-3 mr-16 " />
            </NavLink>
          </li>
        </ul>
      </Stack>
      <Center gap={"80"} bgColor={"#EDF2F7"} h={"40"}>
        <NavLink to={"/newarrivals"}>NEW ARRIVALS</NavLink>
        <NavLink to={"/men"}>MEN</NavLink>
        <NavLink to={"/women"}>WOMEN</NavLink>
        <NavLink to={"/kids"}>KDIS</NavLink>
        <NavLink to={"/accessories"}>ACCESSORIES</NavLink>
        <NavLink to={"/giftideas"}>GIFT IDEAS</NavLink>
      </Center>
    </>
  );
};

export default Header;
