import React, { useState } from "react";
import {
  AppBar,
  Button,
  Box,
  Toolbar,
  Typography,
  Tabs,
  Tab,
} from "@mui/material";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { authActions } from "../store";

const Header = () => {
  const dispath = useDispatch();
  const isLoggedIn = useSelector((state) => state.isLoggedIn);
  const [value, setValue] = useState();
  return (
    <div>
      <AppBar
        position="sticky"
        sx={{
          background:
            " linear-gradient(90deg, rgba(0,0,0,0.961323030188638) 0%, rgba(214,226,227,1) 51%, rgba(200,200,200,1) 57%, rgba(26,21,28,1) 100%);",
        }}
      >
        <Toolbar>
          <Typography variant="h4">BlogsApp</Typography>
          {isLoggedIn && (
            <Box display="flex" marginLeft="auto" marginRight="auto">
              <Tabs
                textColor="inherit"
                value={value}
                onChange={(e, val) => setValue(val)}
              >
                <Tab LinkComponent={Link} to="/blogs" label="All Blogs" />
                <Tab LinkComponent={Link} to="/myBlogs" label="My Blogs" />
                <Tab LinkComponent={Link} to="/blogs/add" label="Add Blog" />
              </Tabs>
            </Box>
          )}
          <Box display="flex" marginLeft="auto">
            {!isLoggedIn && (
              <>
                <Button
                  LinkComponent={Link}
                  to="/auth"
                  variant="outlined"
                  sx={{ margin: "1", borderRadius: 10, marginRight: "5px" }}
                  color="primary"
                >
                  Login
                </Button>
                <Button
                  LinkComponent={Link}
                  to="/auth"
                  variant="outlined"
                  sx={{ margin: "1", borderRadius: 10, marginRight: "5px" }}
                  color="primary"
                >
                  SignUp
                </Button>{" "}
              </>
            )}
            {isLoggedIn && (
              <Button
                onClick={() => dispath(authActions.logout())}
                LinkComponent={Link}
                to="/auth"
                variant="outlined"
                sx={{ margin: "1", borderRadius: 10 }}
                color="primary"
              >
                Logout
              </Button>
            )}
          </Box>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Header;
