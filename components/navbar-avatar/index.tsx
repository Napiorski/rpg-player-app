import React, { useState } from "react";
import { Avatar, Menu, MenuButton, MenuList, MenuItem } from "@chakra-ui/react";

const AvatarDropdown = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleMenuOpen = () => {
    setIsOpen(true);
  };

  const handleMenuClose = () => {
    setIsOpen(false);
  };

  return (
    <Menu isOpen={isOpen} onClose={handleMenuClose}>
      <MenuButton
        paddingLeft="2"
        as={Avatar}
        name="Dan Abrahmov"
        src="https://bit.ly/dan-abramov"
        onClick={handleMenuOpen}
      />
      <MenuList>
        <MenuItem>Profile Settings</MenuItem>
        <MenuItem>Sign out</MenuItem>
      </MenuList>
    </Menu>
  );
};

export default AvatarDropdown;
