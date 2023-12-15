import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import '../Style/FirstAccordion.css'
import FilterBtn from './FilterBtn';

export default function Status({setStatus,setPageNumber}) {
    const status = ["Alive", "Dead", "Unknown"];
  return (
    <div className='containerAccordion'>

      <Accordion className='accordion'>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>Status</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography className='containerBtn'>
            {status.map((items, index)=>{
                 return <FilterBtn setPageNumber={setPageNumber} task={setStatus} type={items} key={index} index={index} name="status"/>

            })}
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}