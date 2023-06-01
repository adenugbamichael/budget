/* eslint-disable react/prop-types */
// rrd imports
import { Form, NavLink } from "react-router-dom"

// library
import { TrashIcon } from "@heroicons/react/24/solid"

// assets
// import logo from "../assets/logo.png"

const Nav = ({ userName }) => {
  // const handleSubmit = (event) => {
  //   if (!confirm("Delete user and aLL data?")) {
  //     event.preventDefault()
  //   }
  // }

  return (
    <nav>
      <NavLink to='/' aria-label='Go to home'>
        {/* <img src={logo} alt='' height={45} /> */}
        <span className='logo'>[]homebudget</span>
      </NavLink>

      {userName && (
        <Form
          onClick={(event) => {
            if (!confirm("Delete user and all data?")) {
              event.preventDefault()
            }
          }}
          method='post'
          action='logout'
        >
          <button type='submit' className='btn btn--warning'>
            <span>Delete User</span>
            <TrashIcon width={20} />
          </button>
        </Form>
      )}
    </nav>
  )
}

export default Nav
