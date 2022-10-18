import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import "bootstrap/dist/css/bootstrap.min.css";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import { GridColumns, GridRowsProp } from "@mui/x-data-grid";
import Grid from "@mui/material/Grid";
import accountService from "../../helpers/Services/account.service";
import DataGridComponent from "../../common/datatable/DataGrid";

const Account = () => {
  const [project, setProject] = useState<GridRowsProp>([]);
  const [teams, setTeams] = useState<GridRowsProp>([]);
  const userinfo: any = useSelector((state: any) => state && state.signReducer && state.signReducer.entities);

  async function getProject() {
    const response = await accountService.getProjects(userinfo);
    if (response.status) setProject(response.data.projectdata);
  }

  const gridProjectColumns: any = [
    {
      headerName: "No.",
      field: "id",
      editable: false,
    },
    {
      headerName: "Project Name",
      field: "name",
      editable: true,
    },
    {
      headerName: "Project Manager",
      field: "manager",
      editable: true,
      valueGetter: (params:any) => params.row.manager.userName,
    },
    {
      headerName: "Project Leader",
      field: "teamleader",
      editable: true,
      valueGetter: (params:any) => params.row.teamleader.email,
    },
  ];

  async function getTeam() {
    const res = await accountService.getTeams(userinfo);
    if (res.status) setTeams(res.data);
  }

  const gridTeamColumns: GridColumns = [
    {
      headerName: "No.",
      field: "id",
      editable: false,
    },
    {
      headerName: "Team Name",
      field: "name",
      editable: true,

    },
    {
      headerName: "Team Manager",
      field: "manager",
      editable: true,
      valueGetter: (params:any) => params.row.manager.email,

    },
    {
      headerName: "Team Leader",
      field: "teamleader",
      editable: true,
      valueGetter: (params:any) => params.row.teamleader.email,

    },
  ];

  useEffect(() => {
    getProject();
    getTeam();
  }, []);

  return (
    <>

<Card sx={{ display: "flex" }}>
        <Box sx={{ display: "flex", flexDirection: "column" }}>
          <CardContent sx={{ flex: "1 0 auto" }}>
            <p style={{ float: "left", fontSize: "22px", fontWeight: 500 }} className="fw-bolder">My Profile </p>
            <br />
            <br />
            <br />

            <Box
        component="img"
      sx={{
          height: 233,
          width: 350,
          maxHeight: { xs: 233, md: 167 },
          maxWidth: { xs: 350, md: 250 },
        }}
        alt="Profile"
       src="/assets/images/avatars/pf.jpg"
      />
            <Grid container spacing={1}>
              <Grid container xs={9} className="left-content-around">
                <Grid item xs={6} className="p-1 text-bold">Name</Grid>
                <Grid item xs={3} className="p-1">:</Grid>
                <Grid item xs={3} className="p-1">{userinfo.userName}</Grid>
              </Grid>
              <Grid container xs={9} className="left-content-around">
                <Grid item xs={6} className="p-1 text-bold">Email</Grid>
                <Grid xs={3} className="p-1">:</Grid>
                <Grid item xs={3} className="p-1">{userinfo.email}</Grid>
              </Grid>
              <Grid container xs={9} className="left-content-around">
                <Grid item xs={6} className="p-1 text-bold">Employee ID</Grid>
                <Grid item xs={3} className="p-1">:</Grid>
                <Grid item xs={3} className="p-1">{userinfo.employeeId}</Grid>
              </Grid>
            </Grid>

<Card sx={{ display: "flex" }}>
        <Box sx={{ display: "flex", flexDirection: "column" }}>
          <CardContent sx={{ flex: "1 0 auto" }}>
            <p style={{ float: "left", fontSize: "22px", fontWeight: 500 }} className="fw-bolder">My Project </p>
            <br />
            <br />
            <br />
            <DataGridComponent columns={gridProjectColumns} items={project} />

            </CardContent></Box></Card>
            <Card sx={{ display: "flex" }}>
        <Box sx={{ display: "flex", flexDirection: "column" }}>
          <CardContent sx={{ flex: "1 0 auto" }}>
            <p style={{ float: "left", fontSize: "22px", fontWeight: 500 }} className="fw-bolder">My Teams </p>
            <br />
            <br />
            <br />
            <DataGridComponent columns={gridTeamColumns} items={teams} />

            </CardContent></Box></Card>
          </CardContent>
        </Box>
      </Card>
   </>
  );
};

export default Account;
