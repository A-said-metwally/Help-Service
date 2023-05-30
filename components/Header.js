import Image from 'next/image';
import React, { useState } from 'react'
import Typewriter from 'typewriter-effect';
import TypewriterComponent from 'typewriter-effect';
import HeaderItem from './HeaderItem';
import {
  HomeIcon,
  LightningBoltIcon,
  BadgeCheckIcon,
  CollectionIcon,
  SearchIcon,
  UserIcon,
  MoonIcon,
  CodeIcon,
  DocumentReportIcon,
  ViewBoardsIcon,
  ChartBarIcon
} from "@heroicons/react/outline"
import Link from 'next/link';

function Header() {

  return (
    <header className='flex items-center justify-between flex-col sm:flex-row  h-auto container mb-4 '>
      <nav className="navbar navbar-expand-lg  max-w-3xl">
          <div className="container-fluid">
            {/* <a className="navbar-brand" href="#">Navbar</a> */}
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNavDropdown">
              <ul className="navbar-nav flex flex-grow justify-between max-w-2xl">
                <li className="nav-item">
                  <HeaderItem title = 'HOME' Icon = {HomeIcon} path='/' />
                </li>
                <li className="nav-item">
                  <HeaderItem title = 'Inputs' Icon = {LightningBoltIcon} path='/kpi_inputs'/>
                </li>
                <li className="nav-item">
                  <HeaderItem title = 'Results' Icon = {BadgeCheckIcon } path='/results'/>
                </li>
                <li className="nav-item">
                  <HeaderItem title = 'Evaluation' Icon = {ChartBarIcon} path='#' subNav={true}/>
                </li>
                <li className="nav-item">
                  <HeaderItem title = 'Summary' Icon = {DocumentReportIcon} path='/summary'/>
                </li>
                <li className="nav-item">
                  <HeaderItem title = 'Matrix' Icon = {CollectionIcon} path='/matrix'/>
                </li>
                <li className="nav-item">
                  <HeaderItem title = 'Exceptions' Icon = {UserIcon} path='#'/>
                </li>
                <li className="nav-item dropdown">
                  <a className="nav-link dropdown-toggle text-gray-600 active:text-green-400 p-0" 
                    role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    <HeaderItem title = 'Coding' Icon = {CodeIcon} path='#' />
                  </a>
                  <ul className="dropdown-menu mt-3 p-2 shadow-md shadow-slate-400 ">
                    <li>
                      <Link href = '/matrixCoding'><a className="dropdown-item">Matrix</a></Link>
                    </li>
                    <li>
                      <Link href = '/targetCoding'><a className="dropdown-item">Set Targets</a></Link>
                    </li>
                  </ul>
                </li>
              </ul>
            </div>
          </div>
      </nav>

      <Image 
          className='object-contain'
          src = '/logo.png' 
          height={100} 
          width={100}
          alt='logo-img'
      />
    </header>

  )
}

export default Header