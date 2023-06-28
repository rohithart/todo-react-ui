import { useState } from "react";
import { AppBar, Toolbar, Button, MenuItem } from "@mui/material";
import Menu from "@mui/material/Menu";
import { Link } from "react-router-dom";
import "./Header.scss";

const Header = () => {
  const menuItems = [
    {
      link: "/",
      name: "Home",
      icon: "fas fa-home",
    },
    {
      link: "/todo",
      name: "Todo",
      icon: "fas fa-check",
    },
    {
      link: "/404",
      name: "Not found page",
      icon: "fas fa-exclamation",
    },
  ];

  const menuItemsDefault = [
    {
      link: "/",
      name: "FAQ",
      icon: "far fa-question-circle",
    },
    {
      link: "/",
      name: "T&C",
      icon: "far fa-list-alt",
    },
    {
      link: "/",
      name: "Privacy policy",
      icon: "fas fa-user-secret",
    },
  ];

  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleOpen = (event: any) => {
    setAnchorEl(event.currentTarget);
  };

  return (
    <AppBar position="static">
      <Toolbar className="nav-container">
        <div className="nav-left-container">
          <div className="nav-left-containers">
            <Link to="/" aria-label="Home">
              <img
                src={process.env.PUBLIC_URL + "/logo.svg"}
                className="pic"
                alt="profile picture"
              />
            </Link>
            <div className="header-message">
              <Link to="/" aria-label="Home" className="app-name">
                ToDo App
              </Link>
            </div>
          </div>
        </div>

        <div className="menu-container">
          {menuItems.map((item, index) => (
            <Button key={index} component={Link} to={item.link} color="inherit">
              <i className={item.icon}></i> {item.name}
            </Button>
          ))}

          <Button onClick={handleOpen}>
            <i className="fas fa-chevron-down"></i> Other
          </Button>

          <Menu
            id="default-menu"
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            anchorOrigin={{ vertical: "top", horizontal: "right" }}
            transformOrigin={{ vertical: "top", horizontal: "right" }}
          >
            {menuItemsDefault.map((item, index) => (
              <MenuItem key={index} component={Link} to={item.link}>
                <i className={item.icon}></i> {item.name}
              </MenuItem>
            ))}
          </Menu>
        </div>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
