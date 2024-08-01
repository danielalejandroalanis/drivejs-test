import {
  Box,
  Flex,
  Avatar,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuDivider,
  useColorModeValue,
  Stack,
  useColorMode,
  Center,
  Image,
  Link,
} from "@chakra-ui/react";
import { MoonIcon, SunIcon } from "@chakra-ui/icons";
import { startTheMagicShow } from "../config/driverjs";

export default function Nav() {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <>
      <Box bg={useColorModeValue("gray.100", "gray.900")} px={4}>
        <Flex h={16} alignItems={"center"} justifyContent={"space-between"}>
          <Link href="/">
            <Image src="/images/rickAndMortyLogo.svg" w={150} />
          </Link>

          <Flex alignItems={"center"}>
            <Stack direction={"row"} spacing={7}>
              <Button onClick={toggleColorMode} id="theme-mode-info">
                {colorMode === "light" ? <MoonIcon /> : <SunIcon />}
              </Button>

              <Menu>
                <MenuButton
                  as={Button}
                  rounded={"full"}
                  variant={"link"}
                  cursor={"pointer"}
                  minW={0}
                >
                  <Avatar
                    size={"sm"}
                    src={
                      "https://media.licdn.com/dms/image/C5603AQEGs-h3e7EoMA/profile-displayphoto-shrink_400_400/0/1593468167110?e=1727913600&v=beta&t=DpLQu3IigJm3UAiNiXy_MGgHuq3n8szSeU3smGoJTo8"
                    }
                  />
                </MenuButton>
                <MenuList alignItems={"center"}>
                  <br />
                  <Center>
                    <Avatar
                      size={"2xl"}
                      src={
                        "https://media.licdn.com/dms/image/C5603AQEGs-h3e7EoMA/profile-displayphoto-shrink_400_400/0/1593468167110?e=1727913600&v=beta&t=DpLQu3IigJm3UAiNiXy_MGgHuq3n8szSeU3smGoJTo8"
                      }
                    />
                  </Center>
                  <br />
                  <Center>
                    <p>Daniel</p>
                  </Center>
                  <br />
                  <MenuDivider />
                  <MenuItem>Perfil</MenuItem>
                  <MenuItem onClick={startTheMagicShow}>Tutorial</MenuItem>
                  <MenuItem>Logout</MenuItem>
                </MenuList>
              </Menu>
            </Stack>
          </Flex>
        </Flex>
      </Box>
    </>
  );
}
