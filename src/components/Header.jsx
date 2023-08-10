import { NavLink } from "react-router-dom";
import {
  Stack,
  Text,
  Avatar,
  AvatarBadge,
  AvatarGroup,
  HStack,
  VStack,
  Box,
  Center,
} from "@chakra-ui/react";
import { GiFlowerPot } from "react-icons/gi";
import { BsSearch, BsBasket, BsHandbag, BsPinMap } from "react-icons/bs";

const Header = () => {
  return (
    <>
      <Center maxW={"100vw"} color={"white"} bgColor={"green"}>
        <NavLink to={"/newarrivals"}>Check Out New Products</NavLink>
      </Center>
      <HStack
        justifyContent={"space-between"}
        maxW={"100vw"}
        overflow={"scroll"}
      >
        <NavLink to={"/"}>
          <Text pl={"1vh"} pr={"2vh"} align={"left"} fontWeight={"bold"}>
            The Elysian
          </Text>
        </NavLink>
        <HStack justifyContent={"space-evenly"}>
          <Box className="pr-2 sm:pr-11">
            <NavLink to={"/resources"}>
              <HStack>
                <BsHandbag size={"24"} />
                <VStack>
                  <Text
                    fontSize={"smaller"}
                    fontWeight={"bold"}
                    justifyContent={"flex-start"}
                    alignSelf={"flex-start"}
                  >
                    Resources
                  </Text>
                  <Text
                    fontSize={"small"}
                    font
                    as={"i"}
                    color={"gray"}
                    mt={"-1.5vh"}
                  >
                    FAQ,Blog,Support
                  </Text>
                </VStack>
              </HStack>
            </NavLink>
          </Box>
          <Box className="pr-2 sm:pr-11 w-36 sm:w-40">
            <NavLink to={"/visitus"}>
              <HStack>
                <BsPinMap size={"24"} />
                <VStack>
                  <Text
                    fontSize={"smaller"}
                    fontWeight={"bold"}
                    justifyContent={"flex-start"}
                    alignSelf={"flex-start"}
                  >
                    Visit Us
                  </Text>
                  <Text
                    fontSize={"small"}
                    font
                    as={"i"}
                    color={"gray"}
                    mt={"-1.5vh"}
                  >
                    Store Locator
                  </Text>
                </VStack>
              </HStack>
            </NavLink>
          </Box>
          <Box className="pr-2 sm:pr-11 w-32 sm:w-40" ml={"-2vw"}>
            <NavLink to={"/account"}>
              <HStack>
                <Avatar name="Agastsya Joshi" src="xyz" />
                <VStack>
                  <Text
                    fontSize={"smaller"}
                    fontWeight={"bold"}
                    justifyContent={"flex-start"}
                    alignSelf={"flex-start"}
                  >
                    Hello,Sign In
                  </Text>
                  <Text
                    fontSize={"small"}
                    font
                    as={"i"}
                    color={"gray"}
                    mt={"-1.5vh"}
                  >
                    Your Account
                  </Text>
                </VStack>
              </HStack>
            </NavLink>
          </Box>
        </HStack>
      </HStack>
      <Center
        className="gap-2 sm:gap-40"
        bgColor={"#EDF2F7"}
        mt={"2"}
        h={"30"}
        overflow={"scroll"}
      >
        <NavLink to={"/newarrivals"}>NEW ARRIVALS</NavLink>
        <NavLink to={"/men"}>MEN</NavLink>
        <NavLink to={"/women"}>WOMEN</NavLink>
        <NavLink to={"/accessories"}>ACCESSORIES</NavLink>
        <NavLink to={"/giftideas"}>GIFT IDEAS</NavLink>
      </Center>
    </>
  );
};

export default Header;
