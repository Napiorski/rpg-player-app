import { useState } from "react";
import { Avatar, Menu, MenuButton, MenuList, MenuItem } from "@chakra-ui/react";

type AvatarDropdownProps = {
  initials?: string;
  avatarSrc?: string;
};

const AvatarDropdown = ({ initials, avatarSrc }: AvatarDropdownProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleMenuOpen = () => {
    setIsOpen(true);
  };

  const handleMenuClose = () => {
    setIsOpen(false);
  };

  return (
    <Menu isOpen={isOpen} onClose={handleMenuClose}>
      <MenuButton p="2" onClick={handleMenuOpen}>
        {avatarSrc ? (
          <Avatar name={initials} src={avatarSrc} />
        ) : (
          <Avatar name={initials} />
        )}
      </MenuButton>
      <MenuList>
        <MenuItem>User Settings</MenuItem>
        <MenuItem>Sign Out</MenuItem>
      </MenuList>
    </Menu>
  );
};

export default AvatarDropdown;
