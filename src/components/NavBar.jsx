import React from 'react'
import { NavLink, Link } from 'react-router-dom'
import '../Style/navBar.css'

export const NavBar = () => {
  return (
    <nav className='navBarContainer'>
        <Link to="Rick-and-Morty-WiKi/characters">The Rick and Morty Wiki</Link>
        <ul className='containerList' id='containerList'>
        <NavLink to="/Rick-and-Morty-WiKi/characters" onClick={()=>{
          const x = document.getElementById('x');
          const menu = document.getElementById('menu');
          const containerList = document.getElementById('containerList');
          x.classList.add('hidden');
          menu.classList.remove('hidden');
          containerList.classList.remove('activeMenu');
        }}>Characters</NavLink>
        <NavLink to="/Rick-and-Morty-WiKi/location" onClick={()=>{
          const x = document.getElementById('x');
          const menu = document.getElementById('menu');
          const containerList = document.getElementById('containerList');
          x.classList.add('hidden');
          menu.classList.remove('hidden');
          containerList.classList.remove('activeMenu');
        }}>Locations</NavLink>
        <NavLink to="/Rick-and-Morty-WiKi/episodes" onClick={()=>{
          const x = document.getElementById('x');
          const menu = document.getElementById('menu');
          const containerList = document.getElementById('containerList');
          x.classList.add('hidden');
          menu.classList.remove('hidden');
          containerList.classList.remove('activeMenu');
        }}>Episodes</NavLink>
        </ul>
        <i class="fa-solid fa-x btnNavBar hidden" id='x' onClick={()=>{
          const x = document.getElementById('x');
          const menu = document.getElementById('menu');
          const containerList = document.getElementById('containerList');
          x.classList.add('hidden');
          menu.classList.remove('hidden');
          containerList.classList.remove('activeMenu');
        }}></i>
        <i className="fa-solid fa-bars btnNavBar" id='menu' onClick={()=>{
          const x = document.getElementById('x');
          const menu = document.getElementById('menu');
          const containerList = document.getElementById('containerList');
          x.classList.remove('hidden');
          menu.classList.add('hidden');
          containerList.classList.add('activeMenu');
        }}></i>
      
    </nav>
  )
}

