//eslint-disable-next-line
import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'


import { AiFillDashboard } from 'react-icons/ai';
import { CgProfile } from 'react-icons/cg';
import { IoMdPeople } from 'react-icons/io'
import { PiChalkboardTeacherBold } from 'react-icons/pi'
import { GiArchiveRegister } from 'react-icons/gi'
import { MdOutlineWhatsapp } from 'react-icons/md'
import { MdAdUnits } from 'react-icons/md'
import { BsTable } from 'react-icons/bs'
import { IoNotificationsOutline } from 'react-icons/io5'
import { AiOutlineSearch } from 'react-icons/ai'
import { Link } from 'react-router-dom'

import Session from '../../views/Calendar/Calendar';
import { useStateContext } from '../../context';

const Dashboard = () => {
  const navigate = useNavigate();
  const { user } = useStateContext();

  useEffect(() => {
    const userAgent = navigator.userAgent || navigator.vendor || window.opera;
    console.log(userAgent)
    if (/(android|iphone|ipad|ipod|blackberry|windows phone)/i.test(userAgent)) {
      navigate('/redirects')

    }

  }, [navigate])
  return (
    <section className='container'>
      <div className="left">
        <div className="logo">
          <img src="https://via.placeholder.com/150" alt="logo" />
        </div>
        <div className="separator">
          <p><AiFillDashboard className='dash-icon' />Dashboard</p>
        </div>
        <section className="options">
          <div className="option">
            <CgProfile className='dash-icon' />
            <p><Link to="/profile" className='links'>Profile</Link></p>
          </div>
          <div className="option">
            <PiChalkboardTeacherBold className='dash-icon' />
            <p><Link to="/trainers" className='links'>Trainers</Link></p>
          </div>
          <div className="option">
            <IoMdPeople className='dash-icon' />
            <p><Link to="/classgroups" className='links'>Groups</Link></p>
          </div>
          <div className="option">
            <BsTable className='dash-icon' />
            <p><Link to="/timetable" className='links'>TimeTable</Link></p>
          </div>
          <div className="option">
            <GiArchiveRegister className='dash-icon' />
            <p><Link to="/clubs" className='links'>Social Clubs</Link></p>
          </div>
          <div className="option">
            <MdAdUnits className='dash-icon' />
            <p><Link className='links' to="/units">Units</Link></p>
          </div>
          <div className="option">
            <MdOutlineWhatsapp className='dash-icon' />
            <p><Link className='links' to="externals">Class group</Link></p>
          </div>
        </section>
      </div >
      {/* center */}
      <section className="center">
        <div className="top">
          <div className="username">
            <h3>Hello, {user.name}</h3>
            <div className="date-time">
              <div className="top-left">
                <h1 className='title'>Timetable</h1>
                <p><span className="day">Monday</span><span className="month">July</span><span className="year">2021</span></p>
              </div>
              <div className="top-right">
                <p className="date">
                  12/12/2021 <BsTable />
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="t-details">
          <div className="bottom">
            <article className="timetable">
              <div className="timetable-right"><span>08:00</span></div>
              <div className="timetable-center">
                <p className="unit-name">OOP</p>
                <p className="unit-code">011o</p>
                <p className="time">
                  08:00 - 10:00
                </p>
              </div>
              <div className="timetable-left">Jillo</div>
            </article>
          </div>
          <div className="bottom">
            <article className="timetable react">
              <div className="timetable-right"><span>13:00</span></div>
              <div className="timetable-center">
                <p className="unit-name">QT</p>
                <p className="unit-code">Qt09101</p>
                <p className="time">
                  13:00 - 15:00
                </p>
              </div>
              <div className="timetable-left">Slavian</div>
            </article>
          </div>
          <div className="bottom">
            <article className="timetable angular">
              <div className="timetable-right"><span>08:00</span></div>
              <div className="timetable-center">
                <p className="unit-name">Visual Basics</p>
                <p className="unit-code">VBC 101</p>
                <p className="time">
                  08:00 - 10:00
                </p>
              </div>
              <div className="timetable-left">Morris</div>
            </article>
          </div>
          <div className="bottom">
            <article className="timetable vue">
              <div className="timetable-right"><span>08:00</span></div>
              <div className="timetable-center">
                <p className="unit-name">SAD</p>
                <p className="unit-code"> 209 SAD</p>
                <p className="time">
                  08:00 - 10:00
                </p>
              </div>
              <div className="timetable-left">Eddar</div>
            </article>
          </div>
        </div>
      </section>
      {/* right */}
      <section className="right" >
        <div className="fns-right">
          <div className='date-fns'>
            <span className="day">Monday</span>
            <span className="month"> July </span>
            <span className="year"> 2021</span>
          </div>
          <div className="notification">
            <div className="bell">
              <IoNotificationsOutline className='dash-icon' />
            </div>
            <span className="badge">2</span>
          </div>
          <div className="search">
            <div className="bell">
              <AiOutlineSearch className='dash-icon' />
            </div>
          </div>
        </div>
        <div className="profile-calendar">
          <article className="calendar">
            <Session />
          </article>
          <br />
          <hr />
          <article className="profile">
            <div className="left-details">
              <div className="profile-pic">
                <img src="https://via.placeholder.com/150" alt="profile" />
              </div>
              <div className="profile-name">
                <h3>Gibsons</h3>
                <p>Student</p>
                <p>Computer Science</p>
                <p>Module: 2</p>
              </div>
            </div>
            <div className="right-details">
              <p>Logout </p>
            </div>
          </article>
        </div>
      </section>
    </section >
  )
}

export default Dashboard
