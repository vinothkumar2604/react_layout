
import * as React from 'react';
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import './App.css';

function Item(props) {
  const { sx, ...other } = props;
  return (
    <Box
      sx={{
        bgcolor: (theme) => (theme.palette.mode === 'dark' ? '#101010' : '#fff'),
        color: (theme) => (theme.palette.mode === 'dark' ? 'grey.300' : 'grey.800'),
        border: '1px solid',
        borderColor: (theme) =>
          theme.palette.mode === 'dark' ? 'grey.800' : 'grey.300',
        p: 1,
        borderRadius: 2,
        textAlign: 'center',
        fontSize: '0.875rem',
        fontWeight: '700',
        ...sx,
      }}
      {...other}
    />
  );
}

Item.propTypes = {
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: PropTypes.oneOfType([
    PropTypes.arrayOf(
      PropTypes.oneOfType([PropTypes.func, PropTypes.object, PropTypes.bool]),
    ),
    PropTypes.func,
    PropTypes.object,
  ]),
};


function App() {
  return (
    <div className="App">
     
       <div  className="AB" style={{ width: '100%', height: 220,}}>
      <Box
        sx={{
          display: 'grid',
          gridAutoRows: '30px',
          gap: 1,
        }}
      >
        <Item className="VI" sx={{ gridColumn: '1', gridRow: 'span 2' }}>1</Item>
        {/* The second non-visible row has height of 40px */}
      </Box>
      <div  className="CD" style={{ width: '100%' }}>
      <Box
        sx={{
          display: 'grid',
          gridAutoFlow: 'row',
          gridTemplateColumns: 'repeat(5, 1fr)',
          gridTemplateRows: 'repeat(5, 30px)',
          gap: 1,
          
        }}
      >  
        <Item className="NO" sx={{ gridColumn: '1/2', gridRow:'1 / 3' }}>2</Item>
        <Item className="TH" sx={{ gridColumn: '1/2', gridRow:'3 / 10'}}>5</Item>
        <Item className="KU" sx={{ gridColumn: '2/5', gridRow:'1 / 5' }}>3</Item>
        <Item className="MA" sx={{ gridColumn: '5/7', gridRow:'1 / 3' }}>4</Item>
        <Item className="QW" sx={{ gridColumn: '5/7', gridRow:'3 / 5' }}>6</Item>
        <Item className="TY" sx={{ gridColumn: '2/7', gridRow:'10 / 5' }}>7</Item>
        <Item className="IO" sx={{ gridColumn: '1/5', gridRow:'10 / 19'}}>8</Item>
        <Item className="GH" sx={{ gridColumn: '5/7', gridRow:'10 / 19'}}>8</Item>
      </Box>

    </div>
    </div>
    </div>
   
  );
}

export default App;
