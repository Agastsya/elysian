import {
  HStack,
  Box,
  VStack,
  Stack,
  Center,
  AbsoluteCenter,
  Text,
} from "@chakra-ui/react";
const Home = () => {
  return (
    <>
      <Stack bgColor={"#9AE6B4"}>
        <VStack width={"50%"} h={"80vh"} className="relative">
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
        <VStack></VStack>
      </Stack>
    </>
  );
};

export default Home;
