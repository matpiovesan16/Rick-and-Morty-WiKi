import "./index.css";
import { Card } from "./components/Card";
import { useEffect, useState } from "react";
import { Button } from "./components/Button";
import { Search } from "./components/Search";
import { Filter } from "./components/Filter";
import { NavBar } from "./components/NavBar";
import { BrowserRouter as Router, Routes, Route} from "react-router-dom"; 
import { Episodes } from "./Pages/Episodes";
import { Location } from "./Pages/Location";


function App(){
  return(
    <Router>
      <div className="App">
        <NavBar/>
      </div>

      <Routes>
        <Route path="/Rick-and-Morty-WiKi/characters" element={<Home/>}/>
        <Route path="/Rick-and-Morty-WiKi/episodes" element={<Episodes/>}/>
        <Route path="/Rick-and-Morty-WiKi/location" element={<Location/>}></Route>
      </Routes>
    </Router>
  )
}

function Home() {
  const [dataResults, setData] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);
  const [dataInfo, setDataInfo] = useState(null);
  const [search, setSearch] = useState("");
  const [filterStatus, setFilterStatus] = useState("");
  const [filterGender, setFilterGender] = useState("");
  const [filterSpecies, setFilterSpecies] = useState("");

  
  let api = `https://rickandmortyapi.com/api/character/?page=+${pageNumber}&name=${search}&status=${filterStatus}&gender=${filterGender}&species=${filterSpecies}`;

  useEffect(() => {
      const fetchData = async () => {
      const res = await fetch(api);
      const data = await res.json();

      const dataResults = data.results;
      const dataInfo = data.info;

      setData(dataResults);
      setDataInfo(dataInfo);
    };
    fetchData();
  }, [api]);

  return (
    <main>
      <h1 className="tituloCharacters">Characters</h1>
      <Search setSearch={setSearch} setPageNumber={setPageNumber}/>
      <div className="containerMain">
      <Filter setStatus={setFilterStatus} setPageNumber={setPageNumber} setGender={setFilterGender} setSpecies ={setFilterSpecies} clearFilter={""}></Filter>
      <Card data={dataResults}></Card>
      </div>
      <Button setPageNumber={setPageNumber} pageNumber={pageNumber} dataInfo={dataInfo}></Button>
    </main>
  );
}

export default App;
