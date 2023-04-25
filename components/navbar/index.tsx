import React from "react";
import {
  Box,
  Flex,
  Image,
  Link,
  Text,
  IconButton,
  Button,
  Stack,
  Collapse,
  Icon,
  Popover,
  PopoverTrigger,
  PopoverContent,
  useColorModeValue,
  useBreakpointValue,
  useDisclosure,
  useColorMode,
} from "@chakra-ui/react";
import {
  HamburgerIcon,
  CloseIcon,
  ChevronDownIcon,
  ChevronRightIcon,
} from "@chakra-ui/icons";
import NextLink from "next/link";
import { useRouter } from "next/router";
import dynamic from "next/dynamic";
import { useNightMode } from "hooks/nightmode-hook";
import { AppContext } from "context/providers/app-provider";

// See: https://chakra-templates.dev/navigation/navbar
const NAV_ITEMS = [
  {
    label: "Misc",
    children: [
      {
        label: "Explore Design Work",
        subLabel: "Trending Design to inspire you",
        href: "/",
      },
      {
        label: "New & Noteworthy",
        subLabel: "Up-and-coming Designers",
        href: "/",
      },
    ],
  },
  {
    label: "Inventory",
    href: "/inventory",
  },
  {
    label: "Lore",
    href: "/lore",
  },
  {
    label: "Maps",
    href: "/map",
  },
  {
    label: "About",
    href: "/about",
  },
  {
    label: "Character",
    href: "/character",
  },
  {
    label: "Creatures",
    href: "/creatures",
  },
];

export const Navbar = () => {
  // TODO: setup player context (global store)
  // const {state: {username, isLoggedIn}} = useRpgContext()

  // const { isNightMode, toggleNightMode } = React.useContext(AppContext);
  const { colorMode, toggleColorMode } = useColorMode();
  const { isOpen, onOpen, onClose, onToggle } = useDisclosure();

  const initialRef = React.useRef();
  const finalRef = React.useRef();

  return (
    <Box>
      <Flex
        bg={useColorModeValue("white", "gray.800")}
        color={useColorModeValue("gray.600", "white")}
        minH={"60px"}
        py={{ base: 2 }}
        px={{ base: 4 }}
        borderBottom={1}
        borderStyle={"solid"}
        borderColor={useColorModeValue("gray.200", "gray.900")}
        align={"center"}
      >
        <Flex
          flex={{ base: 1, md: "auto" }}
          ml={{ base: -2 }}
          display={{ base: "flex", md: "none" }}
        >
          <IconButton
            onClick={onToggle}
            icon={
              isOpen ? <CloseIcon w={3} h={3} /> : <HamburgerIcon w={5} h={5} />
            }
            variant={"ghost"}
            aria-label={"Toggle Navigation"}
          />
        </Flex>
        <Flex flex={{ base: 1 }} justify={{ base: "center", md: "start" }}>
          <Image
            borderRadius="full"
            boxSize="70px"
            src={"/dnd2.jpeg"}
            alt={"Logo"}
          />

          <Flex display={{ base: "none", md: "flex" }} ml={10}>
            <DesktopNav />
          </Flex>
        </Flex>
        <Button onClick={toggleColorMode}>
          {colorMode === "light" ? "Dark" : "Light"}
        </Button>
        {/* TODO: revisit this when we work on the login/context
        <Stack
          flex={{base: 1, md: 0}}
          justify={'flex-end'}
          direction={'row'}
          spacing={6}>
          <Button
            as={'a'}
            fontSize={'sm'}
            fontWeight={400}
            variant={'link'}
            href={'#'}
          >
            <b>{(isLoggedIn && username) || 'Please Log In'}</b>
          </Button>
        </Stack>
*/}
      </Flex>
      <Collapse in={isOpen} animateOpacity>
        <MobileNav />
      </Collapse>
    </Box>
  );
};

const DesktopNav = () => {
  const linkColor = useColorModeValue("gray.600", "gray.200");
  const linkHoverColor = useColorModeValue("gray.800", "white");
  const popoverContentBgColor = useColorModeValue("white", "gray.800");

  return (
    <Stack direction={"row"} spacing={4}>
      {NAV_ITEMS.map((navItem) => (
        <Box key={navItem.label}>
          <Popover trigger={"hover"} placement={"bottom-start"}>
            <PopoverTrigger>
              <Link
                as={NextLink}
                href={navItem.href ?? "#"}
                passHref
                shallow={true}
                p={2}
                fontSize={"sm"}
                fontWeight={500}
                color={linkColor}
                _hover={{
                  textDecoration: "none",
                  color: linkHoverColor,
                }}
              >
                {navItem.label}
              </Link>
            </PopoverTrigger>

            {navItem.children && (
              <PopoverContent
                border={0}
                boxShadow={"xl"}
                bg={popoverContentBgColor}
                p={4}
                rounded={"xl"}
                minW={"sm"}
              >
                <Stack>
                  {navItem.children.map((child) => (
                    <DesktopSubNav key={child.label} {...child} />
                  ))}
                </Stack>
              </PopoverContent>
            )}
          </Popover>
        </Box>
      ))}
    </Stack>
  );
};

type DesktopSubNavProps = {
  label: string;
  href: string;
  subLabel?: string;
};

function DesktopSubNav({ label, href, subLabel }: DesktopSubNavProps) {
  return (
    <Link
      href={href}
      role={"group"}
      display={"block"}
      p={2}
      rounded={"md"}
      _hover={{ bg: useColorModeValue("pink.50", "gray.900") }}
    >
      <Stack direction={"row"} align={"center"}>
        <Box>
          <Text
            transition={"all .3s ease"}
            _groupHover={{ color: "pink.400" }}
            fontWeight={500}
          >
            {label}
          </Text>
          <Text fontSize={"sm"}>{subLabel}</Text>
        </Box>
        <Flex
          transition={"all .3s ease"}
          transform={"translateX(-10px)"}
          opacity={0}
          _groupHover={{ opacity: "100%", transform: "translateX(0)" }}
          justify={"flex-end"}
          align={"center"}
          flex={1}
        >
          <Icon color={"pink.400"} w={5} h={5} as={ChevronRightIcon} />
        </Flex>
      </Stack>
    </Link>
  );
}

type NavItemProps = {
  label: string;
  href?: string;
  subLabel?: string;
  children?: any;
};

const MobileNav = () => {
  return (
    <></>
    // <Stack
    //   bg={useColorModeValue('white', 'gray.800')}
    //   p={4}
    //   display={{md: 'none'}}>
    //   {NAV_ITEMS.map((navItem) => (
    //     <MobileNavItem key={navItem.label} {...navItem} />
    //   ))}
    // </Stack>
  );
};

/*
Should strongly type the child elements you are mapping below but an 'any' will get you over the
error.  It looks like  a child element is of an object type of {label: string, subLabel?: string, href: string}
but check this out with Jason tomorrow
*/

const MobileNavItem = ({ label, children, href = "#" }: NavItemProps) => {
  const { isOpen, onToggle } = useDisclosure();
  const router = useRouter();

  return (
    <Stack spacing={4} onClick={children && onToggle}>
      <Flex
        onClick={(e) => {
          e.preventDefault();
          router.push(href, undefined, { shallow: true });
        }}
        py={2}
        as={Link}
        justify={"space-between"}
        align={"center"}
        _hover={{
          textDecoration: "none",
        }}
      >
        <Text
          fontWeight={600}
          color={useColorModeValue("gray.600", "gray.200")}
        >
          {label}
        </Text>
        {children && (
          <Icon
            as={ChevronDownIcon}
            transition={"all .25s ease-in-out"}
            transform={isOpen ? "rotate(180deg)" : ""}
            w={6}
            h={6}
          />
        )}
      </Flex>
      <Collapse in={isOpen} animateOpacity style={{ marginTop: "0!important" }}>
        <Stack
          mt={2}
          pl={4}
          borderLeft={1}
          borderStyle={"solid"}
          borderColor={useColorModeValue("gray.200", "gray.700")}
          align={"start"}
        >
          {children &&
            children.map((child: any) => (
              <Link
                as={NextLink}
                key={child.label}
                href={child.href}
                shallow={true}
                passHref
                py={2}
              >
                {child.label}
              </Link>
            ))}
        </Stack>
      </Collapse>
    </Stack>
  );
};
