/* eslint-disable @typescript-eslint/no-explicit-any */
import { AppBar, Badge, Box, Button, IconButton, InputBase, Menu, MenuItem, Stack, Toolbar, Typography } from '@mui/material';
import React from 'react';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart'
import NotificationsIcon from '@mui/icons-material/NotificationImportant'
import LocationOnIcon from '@mui/icons-material/LocationOnOutlined'

const Header = ({searcText, setSearchTerm}:any) => {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleMenuOpen = (event: any) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  return (
    <AppBar position="static" color="default" sx={{ boxShadow: 'none', borderBottom: '1px solid #ddd' }}>
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          AHRMART
        </Typography>
        <Box sx={{ flexGrow: 1, display: { xs: 'none', sm: 'flex' } }}>
          <Button className='btn' onClick={handleMenuOpen}>Browse All Categories</Button>
          <Menu
            anchorEl={anchorEl}
            open={Boolean(anchorEl)}
            onClose={handleMenuClose}
          >
            <MenuItem onClick={handleMenuClose}>Category 1</MenuItem>
            <MenuItem onClick={handleMenuClose}>Category 2</MenuItem>
            <MenuItem onClick={handleMenuClose}>Category 3</MenuItem>
          </Menu>

          <InputBase
            placeholder="Ryse Supplement"
            sx={{ ml: 2, flex: 1, border: '1px solid #ddd', borderRadius: '4px', padding: '0 8px' }}
            onChange={setSearchTerm}
            value={searcText}
            // startAdornment={<SearchIcon />}
          />
        </Box>


        {/* User and Cart Icons */}
        <Box sx={{ display: 'flex', alignItems: 'center', ml: 2 }}>
          <Typography variant="body2">Hello, Abdul</Typography>
          <IconButton>
            <Badge badgeContent={2} color="secondary">
              <ShoppingCartIcon />
            </Badge>
          </IconButton>
          <IconButton>
            <Badge badgeContent={3} color="secondary">
              <NotificationsIcon />
            </Badge>
          </IconButton>
        </Box>
        
      </Toolbar>
      <Stack direction={'row'} justifyContent={'center'}>
      <Box sx={{ display: { xs: 'none', md: 'flex' }, ml: 2 }}>
          <Button className='btn'>Trending</Button>
          <Button className='btn'>Best Seller</Button>
          <Button className='btn'>Saves</Button>
          <Button className='btn' onClick={handleMenuOpen}>Receiving Method</Button>
          <Button className='btn'>Help</Button>
        </Box>
        <Box sx={{ display: 'flex', alignItems: 'center', ml: 2 }}>
          <LocationOnIcon />
          <Typography variant="body2">Set Location</Typography>
          <Typography variant="body2">Hudson, 12534</Typography>
        </Box>
      </Stack>
    </AppBar>
  );
};

export default Header;
