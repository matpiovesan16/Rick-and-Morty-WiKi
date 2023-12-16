import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import "../Style/FirstAccordion.css";
import FilterBtn from "./FilterBtn";

export default function FilterLocationList({ setFilterName, setPageNumber, setNameLocation}) {
    let location = [
        'Earth (C-137)', 'Abadango', 'Citadel of Ricks', 'Worldender\'s lair', 'Anatomy Park',
        'Interdimensional Cable', 'Immortality Field Resort', 'Post-Apocalyptic Earth',
        'Purge Planet', 'Venzenulon 7', 'Bepis 9', 'Cronenberg Earth', 'Nuptia 4', 'Giant\'s Town',
        'Bird World', 'St. Gloopy Noops Hospital', 'Earth (5-126)', 'Mr. Goldenfold\'s dream',
        'Gromflom Prime', 'Earth (Replacement Dimension)'
      ];

  console.log(location);

  return (
    <div className="containerAccordion">
      <Accordion className="accordion">
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>Location</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography className="containerBtn">
            {location.map((item,index) => {
              return (
                <FilterBtn
                  key={index}
                  type={item}
                  name="Location"
                  index={index}
                  setPageNumber={setPageNumber}
                  task={setFilterName}
                ></FilterBtn>
              );
            })}
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}