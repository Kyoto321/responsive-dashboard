import { Link } from 'react-router-dom'
import './menu.scss'

const Menu = () => {
  return (
    <div className='menu'>
      <div className="item">
        <span className="title">MAIN</span>
        <Link to='/' className='list-item'>
          <img src='/home.svg' alt='' />
          <span className="listItemTitle">Home</span>
        </Link>
        <Link to='/profile' className='list-item'>
          <img src='/profile.svg' alt='' />
          <span className="listItemTitle">Profile</span>
        </Link>
      </div>

      <div className="item">
        <span className="title">LISTS</span>
        <Link to='/users' className='list-item'>
          <img src='/user.svg' alt='' />
          <span className="listItemTitle">Users</span>
        </Link>
        <Link to='/products' className='list-item'>
          <img src='/product.svg' alt='' />
          <span className="listItemTitle">Products</span>
        </Link>
        <Link to='/orders' className='list-item'>
          <img src='/order.svg' alt='' />
          <span className="listItemTitle">Orders</span>
        </Link>
        <Link to='/posts' className='list-item'>
          <img src='/post2.svg' alt='' />
          <span className="listItemTitle">Posts</span>
        </Link>
      </div>

      <div className="item">
        <span className="title">GENERAL</span>
        <Link to='/' className='list-item'>
          <img src='/element.svg' alt='' />
          <span className="listItemTitle">Elements</span>
        </Link>
        <Link to='/' className='list-item'>
          <img src='/note.svg' alt='' />
          <span className="listItemTitle">Notes</span>
        </Link>
        <Link to='/' className='list-item'>
          <img src='/form.svg' alt='' />
          <span className="listItemTitle">Forms</span>
        </Link>
        <Link to='/' className='list-item'>
          <img src='/calendar.svg' alt='' />
          <span className="listItemTitle">Calender</span>
        </Link>
      </div>

      <div className="item">
        <span className="title">MAINTENANCE</span>
        <Link to='/' className='list-item'>
          <img src='/settings.svg' alt='' />
          <span className="listItemTitle">Settings</span>
        </Link>
        <Link to='/' className='list-item'>
          <img src='/backup.svg' alt='' />
          <span className="listItemTitle">Backups</span>
        </Link>
      </div>

      <div className="item">
        <span className="title">ANALYTICS</span>
        <Link to='/' className='list-item'>
          <img src='/chart.svg' alt='' />
          <span className="listItemTitle">Charts</span>
        </Link>
        <Link to='/' className='list-item'>
          <img src='/log.svg' alt='' />
          <span className="listItemTitle">Logs</span>
        </Link>
      </div>


    </div>
  )
}

export default Menu