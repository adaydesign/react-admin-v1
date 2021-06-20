import { BsFillGridFill, BsFillHeartFill, BsBook,BsBarChartFill,BsBellFill,BsQuestionCircleFill, BsPersonSquare } from 'react-icons/bs'

const menuList = [
    {
        "name":"Dashboard",
        "path":"/dashboard",
        "icon":BsFillGridFill
    },
    {
        "name":"Favorites",
        "path":"/favorites",
        "icon":BsFillHeartFill
    },
    {
        "name":"Notes",
        "path":"/notes",
        "icon":BsBook
    },
    {
        "name":"Statics",
        "path":"/statics",
        "icon":BsBarChartFill
    },
    {   
        "divider":true
    },
    {
        "name":"User Profile",
        "path":"/user_profile",
        "icon":BsPersonSquare
    },
    {   
        "divider":true
    },
    {
        "name":"Notifications",
        "path":"/notifications",
        "icon":BsBellFill
    },
    {
        "name":"Help Center",
        "path":"/help",
        "icon":BsQuestionCircleFill
    }
]

export default menuList