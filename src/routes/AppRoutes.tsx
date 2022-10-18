import React, { Fragment } from "react";
import { Route, Routes } from "react-router-dom";
import Account from "../feature/account/Account";
import Dashboard from "../feature/dashboard/Dashboard";
import AuthRoute from "./AuthRoute";

const AppRoutes = () => (
  <>
    <div className="App" id="wrapper">

      <Fragment>
        <div className="wrapper d-flex flex-column min-vh-100 bg-light">
          <div className="body flex-grow-1 px-3">
            <Routes>
              <Route path='/dashboard' element={<AuthRoute />}>
                <Route path='/dashboard' element={<Dashboard />} />
              </Route>
              <Route path='/account' element={<AuthRoute />}>
                <Route path='/account' element={<Account />} />
              </Route>
            </Routes>
          </div>
        </div>
      </Fragment>
    </div>
  </>
);
export default AppRoutes;
