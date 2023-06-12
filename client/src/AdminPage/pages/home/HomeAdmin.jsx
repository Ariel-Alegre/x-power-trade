import './home.scss'
import SidebarAdmin from '../../componentsAdmin/SidebarAdmin/SidebarAdmin'
import Navbar from '../../componentsAdmin/navbar/Navbar'
import Widget from '../../componentsAdmin/widget/Widget'
import Feature from '../../componentsAdmin/feature/Feature'
import Chart from '../../componentsAdmin/ListUser/ListUsers'
import ListUsers from '../../componentsAdmin/ListUser/ListUsers'

const HomeAdmin = () => {
  return (
    <div className="home">
        <SidebarAdmin />
        <div className="homeContainer">
          <Navbar />
          <div className='widgets'>
            <Widget type="users"/>
            <Widget type='orders' />
            <Widget type='earnings' />
            <Widget type='balance' />
          </div>
          <div className="charts">
        <ListUsers/>
          </div>
        </div>
    </div>
  )
}

export default HomeAdmin;