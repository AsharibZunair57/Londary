import "./sideBar.css"
import LineStyleIcon from '@material-ui/icons/LineStyle';
import TimelineIcon from '@material-ui/icons/Timeline';
import TrendingUpIcon from '@material-ui/icons/TrendingUp';
import PersonIcon from '@material-ui/icons/Person';
import AttachMoneyIcon from '@material-ui/icons/AttachMoney';
import AssessmentIcon from '@material-ui/icons/Assessment';
import MailIcon from '@material-ui/icons/Mail';
import DynamicFeedIcon from '@material-ui/icons/DynamicFeed';
import MessageIcon from '@material-ui/icons/Message';
import EventSharpIcon from '@material-ui/icons/EventSharp';
import CardGiftcardSharpIcon from '@material-ui/icons/CardGiftcardSharp';
import {Link , Router ,useHistory} from 'react-router-dom'

function SideBar() {

    const history=useHistory();
    const routeChange = (Path)=>{
        let path = Path;
        history.push(path);
    }

    return (
        <div className='sidebar'>
          <div className="sidebarWrapper">
          <div className="sidebarMenu">
          <h3 className="sidebarTitle">Dashboard</h3>   
          <ul className="sidebarList">
          <li className="sidebarListItem active"onClick={e => {
              const path = '/'
              routeChange(path);
          }}>
          <LineStyleIcon className="sidebarIcon"/>
          Home
         </li>
         <li className="sidebarListItem">
          <TimelineIcon className="sidebarIcon"/>
          Analytics
         </li>
         <li className="sidebarListItem">
          <TrendingUpIcon className="sidebarIcon" />
          Sales
         </li>

          </ul>
          
          </div>
          <div className="sidebarMenu">
          <h3 className="sidebarTitle">Quick Menu</h3>   
          <ul className="sidebarList">
          <li className="sidebarListItem" onClick={e => {
              const path = '/vendormaster'
              routeChange(path);
          }}>
          <PersonIcon />
          Vendor
         </li>
         <li className="sidebarListItem" onClick={e => {
              const path = '/orders'
              routeChange(path);
          }}>
          <CardGiftcardSharpIcon />
          Order
         </li>
         <li className="sidebarListItem" onClick={e => {
              const path = '/Riders'
              routeChange(path);
          }}>
          <CardGiftcardSharpIcon />
          Riders
         </li>
         <li className="sidebarListItem" onClick={e => {
              const path = '/customer'
              routeChange(path);
          }}>
          <PersonIcon />
          Customer
         </li>
         </ul>
  </div>
</div>
        </div>
    )
}

export default SideBar
