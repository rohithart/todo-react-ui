import React from "react";
import { AppBar, Toolbar, Button, IconButton, MenuItem } from "@mui/material";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import { Link } from "react-router-dom";

import styled from "styled-components";

const HeaderContainer = styled.div`
  .nav-container {
    background: white;
    color: #673ab7;
    display: flex;
    justify-content: space-between;
  }

  .nav-left-container {
    display: flex;
    justify-content: flex-start;

    @media screen and (min-width: 768px) and (orientation: landscape) {
      flex-direction: column;
    }
  }

  .nav-left-containers {
    display: flex;
    justify-content: flex-start;
    align-items: center;
  }

  .fill-remaining-space {
    flex: 1 1 auto;
  }

  .header-message {
    display: flex;
    align-items: center;
    flex-direction: column;

    a {
      color: #673ab7;
      text-decoration: none;
    }
    a:visited {
      color: #673ab7;
    }
    a:hover {
      color: #673ab7;
    }
    a:active {
      color: #673ab7;
    }
  }

  .pic {
    height: 50px;
    width: 50px;
    margin-right: 1rem;
  }

  .app-name {
    font-size: 1.5rem;
    margin-right: 1rem;
  }

  .nav-bar {
    box-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;

    @media screen and (min-width: 768px) and (orientation: landscape) {
      height: 7rem;
    }
  }
`;

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

  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <HeaderContainer>
      <AppBar position="static">
        <Toolbar className="nav-container">
          <div className="nav-left-container">
            <div className="nav-left-containers">
              <IconButton aria-label="Menu">
                <MenuIcon />
              </IconButton>
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
              <Button
                key={index}
                component={Link}
                to={item.link}
                color="inherit"
              >
                <i className={item.icon}></i> {item.name}
              </Button>
            ))}

            <Button>
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
    </HeaderContainer>
  );
};

export default Header;
