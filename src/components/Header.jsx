import { NavLink } from "react-router-dom";
import { HStack, VStack, Stack, Container, Text } from "@chakra-ui/react";

const Header = () => {
  return (
    <>
      <Stack
        direction={"row"}
        w={"xl"}
        justifyContent={"space-between"}
        px={"16"}
        py={"12"}
      >
        <Text>The Muse</Text>
        <ul className="flex gap-5">
          <li>
            <NavLink to={"/resources"}>
              {" "}
              <VStack w={"20"} align={"flex-start"}>
                <Text>Resources</Text>
                <Text>FAQ,Filing,Support</Text>
              </VStack>
            </NavLink>
          </li>
          <li>
            <NavLink to={"/visit"}>
              {" "}
              <VStack w={"20"} align={"flex-start"}>
                <Text>Visit the Elysian</Text>
                <Text>Store Locator</Text>
              </VStack>
            </NavLink>
          </li>
          <li>
            <NavLink to={"/signin"}>
              {" "}
              <VStack w={"20"} align={"flex-start"}>
                <Text>Hello,Sign In</Text>
                <Text>Your Account</Text>
              </VStack>
            </NavLink>
          </li>
          <li></li>
        </ul>
      </Stack>
    </>
  );
};

export default Header;
