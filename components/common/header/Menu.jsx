import { useState } from 'react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { useRouter } from 'expo-router';

import styles from "../header/header.style";

const Menu = () => {
  const router = useRouter();
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  
  const handleSelect = (event) => {
    setAnchorEl(event.currentTarget);
  };
  
  const handleClose = () => {
    setAnchorEl(null);
  };
  
  const handleClickHome = (event) => {
    handleSelect(event);
    router.push("/app/index.js");
  };
  
  const handleClickProfile = (event) => {
    handleSelect(event);
    router.push("/app/profile.js");
  };
  
  const handleClickLiked = (event) => {
    handleSelect(event);
    router.push("/app/liked-jobs.js");
  };
  
  return (
    <div style={styles.btnContainer}>
      <Button
        id="basic-button"
        aria-controls={open ? 'basic-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
      >
        ☰
      </Button>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
      >
        <MenuItem onClick={handleClickHome}>Home</MenuItem>
        <MenuItem onClick={handleClickProfile}>Profile</MenuItem>
        <MenuItem onClick={handleClickLiked}>Liked Jobs</MenuItem>
      </Menu>
    </div>
  );
}

export default Menu;