import * as React from 'react';
import Popover from '@mui/material/Popover';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import HoverGrid from './HoverGrid';

export default function Hovertab(props) {
  const [anchorEl, setAnchorEl] = React.useState(null);
  

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = (event) => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? 'ande': undefined;

  return (
    <div>
      <Button sx={{ my: 2}} className='qnavbtn' aria-describedby={id}  onMouseEnter={handleClick}>
        {props.title}
      </Button>
      <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'center',
      
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'center',
        }}
        className='hoverpop'
      >
        <HoverGrid></HoverGrid>
      </Popover>
    </div>
  );
}