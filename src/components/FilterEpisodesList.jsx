import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import "../Style/FirstAccordion.css";
import FilterBtn from "./FilterBtn";

export default function FilterEpisodesList({ setFilterName, setPageNumber, setNameEpisodes}) {
  let page = 1;
  const episodes = [
    "Pilot",
    "Lawnmower Dog",
    "Anatomy Park",
    "M. Night Shaym-Aliens!",
    "Meeseeks and Destroy",
    "Rick Potion #9",
    "Raising Gazorpazorp",
    "Rixty Minutes",
    "Something Ricked This Way Comes",
    "Close Rick-counters of the Rick Kind",
    "Ricksy Business",
    "A Rickle in Time",
    "Mortynight Run",
    "Auto Erotic Assimilation",
    "Total Rickall",
    "Get Schwifty",
    "The Ricks Must Be Crazy",
    "Big Trouble in Little Sanchez",
    "Interdimensional Cable 2: Tempting Fate",
    "Look Who's Purging Now",
  ];
  console.log(setNameEpisodes);

  return (
    <div className="containerAccordion">
      <Accordion className="accordion">
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>Episodes</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography className="containerBtn">
            {episodes.map((item,index) => {
              return (
                <FilterBtn
                  key={index}
                  type={item}
                  name="Episode"
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
