import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import '../Style/FirstAccordion.css'
import FilterBtn from './FilterBtn';

export default function Gender({setPageNumber,setGender}) {
  const gender = ["Female", "Male", "Unknown", "Genderless"];
  return (
    <div className='containerAccordion'>

      <Accordion className='accordion'>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>Gender</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography className='containerBtn'>
            {
              gender.map((items,index)=>{
                return <FilterBtn name="Gender" type={items} key={index} index={index} task={setGender} setPageNumber={setPageNumber}></FilterBtn>
              })

            }
            
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}