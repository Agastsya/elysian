import {
  HStack,
  Box,
  VStack,
  Stack,
  Center,
  AbsoluteCenter,
  Text,
  Image,
  Circle,
} from "@chakra-ui/react";
import wardrobehome from "../assets/clothes.avif";

const Home = () => {
  return (
    <>
      <Stack bgColor={"#9AE6B4"} direction={["column", "row"]}>
        <VStack width={["0", "50%"]} h={["81vh"]} className="relative">
          <Box alignContent={"flex-start"} className="absolute" top={"40%"}>
            <Text size={"xl"} fontFamily={"sans-serif"} className="text-5xl">
              YOUR SUMMER WARDROBE
            </Text>
            <Text className="w-2/3 font-semibold">
              Enjoy the feel-good vibes of season with our easy-care, highly
              durable clothes and become an elysian.
            </Text>
          </Box>
        </VStack>
        <VStack className="w-1/2 h-1/2 pr-14 pt-14">
          <Image className="rounded-md" src={wardrobehome}></Image>
        </VStack>
      </Stack>
    </>
  );
};

export default Home;
