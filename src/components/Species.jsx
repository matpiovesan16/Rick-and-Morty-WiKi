import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import '../Style/FirstAccordion.css'
import FilterBtn from './FilterBtn';

export default function Species({setPageNumber, setSpecies}) {
    let specie = ["Human", "Alien", "Humanoid", "Poopybuthole", "Unknown", "Mythological", "Animal", "Disease", "Robot", "Cronenberg", "Planet", ];
  return (
    <div className='containerAccordion'>

      <Accordion className='accordion'>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>Species</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography className='containerBtn'>
            {specie.map((item,index)=>{
                return <FilterBtn key={index} index={index} name="Species" type={item} task={setSpecies} setPageNumber={setPageNumber}></FilterBtn>
            })}
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}