import React, { useEffect } from 'react';
import { Box, Chip } from '@mui/material';

function SelectMenu({ onSelectDashboard }) {
  // const changeData = (event) => {
  //   onSelectDashboard(event.target.textContent.toString());
  // };
  // use state to keep track of the selected dashboard and change the color of the chip
  const [selected, setSelected] = React.useState('Core');
  const handleClick = (event) => {
    setSelected(event.target.textContent.toString());
    onSelectDashboard(event.target.textContent.toString());
  };

  useEffect(() => {
    const chips = document.querySelectorAll('.chip');
    chips.forEach((chip) => {
      if (chip.textContent.toString() !== selected) {
        chip.style.backgroundColor = '#1A2027';
        chip.style.color = '#fff';
      } else {
        chip.style.backgroundColor = '#fff';
        chip.style.color = '#1A2027';
      }
    });
  }, [selected]);

  return (
    <Box
      sx={{
        width: '10%',
        height: '30%',
        backgroundColor: '#1A2027',
        display: 'flex',
        justifyContent: 'center',
        flexDirection: 'column',
        padding: 2,
        borderRadius: 4,
      }}
    >
      <Chip
        label="Core"
        variant="outlined"
        className="chip"
        onClick={handleClick}
        sx={{
          marginBottom: '10px',
          color: 'white',
          borderColor: 'white',
          '&:hover': {
            backgroundColor: '#1A2027',
          },
        }}
      />
      <Chip
        label="Weapons"
        variant="outlined"
        className="chip"
        onClick={handleClick}
        sx={{
          marginBottom: '10px',
          color: 'white',
          borderColor: 'white',
          '&:hover': {
            backgroundColor: '#1A2027',
          },
        }}
      />
      <Chip
        label="Stats"
        variant="outlined"
        className="chip"
        onClick={handleClick}
        sx={{
          marginBottom: '10px',
          color: 'white',
          borderColor: 'white',
          '&:hover': {
            backgroundColor: '#1A2027',
          },
        }}
      />
    </Box>
  );
}

//   return (
//     <Box
//       sx={{
//         width: '10%',
//         height: '30%',
//         backgroundColor: '#1A2027',
//         display: 'flex',
//         justifyContent: 'center',
//         flexDirection: 'column',
//         padding: 2,
//         borderRadius: 4,
//       }}
//     >
//       <Chip
//         label="Core"
//         variant="outlined"
//         color={selected === 'Core' ? 'success' : 'default'}
//         onClick={changeData}
//       />
//       <Chip
//         label="Weapons"
//         variant="outlined"
//         color={selected === 'Weapons' ? 'success' : 'default'}
//       />
//       <Chip
//         label="Stats"
//         variant="outlined"
//         color={selected === 'Stats' ? 'success' : 'default'}
//         onClick={changeData}
//       />
//     </Box>
//   );
// }

export default SelectMenu;
