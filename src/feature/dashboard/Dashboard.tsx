import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import "bootstrap/dist/css/bootstrap.min.css";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import { CardHeader } from "@mui/material";
import Typography from "@mui/material/Typography";
import People from "@mui/icons-material/People";
import EventBusy from "@mui/icons-material/EventBusy";
import EventNote from "@mui/icons-material/EventNote";
import { Chart } from "react-google-charts";
import Grid from "@mui/material/Grid";
import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import "react-toastify/dist/ReactToastify.css";
import { getAllUser } from "../../app/redux/actions/action";
import dashboardService from "../../helpers/Services/dashboard.service";

const Item = styled(Paper)(({ theme }: any) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));
const Dashboard = () => {
  // const navigate = useNavigate();
  const dispatch = useDispatch<any>();
  const userinfo: any = useSelector((state: any) => state && state.signReducer && state.signReducer.entities);
  const [usersList, setUsersList] = useState(0);
  const [leaveList, setLeaveList] = useState(0);
  const [presentList, SetPresentList] = useState(0);
  const [absentList, setAbsentList] = useState(0);
  const [leaveapproved, setLeaveapproved] = useState(0);
  const [leaverejected, setLeaverejected] = useState(0);
  const [leavewaiting, setLeavewaiting] = useState(0);
  const pieChartdata = [
    ["Pizza", "Popularity"],
    ["Absent", absentList],
    ["Present", presentList],
  ];
  const options = {
    title: "Today Attendance Status",
  };

  async function getAllDatas(val: any) {
    const resp: any = await dispatch(getAllUser(val));
    if (resp.payload) {
      setUsersList(resp.payload.length);
    }

    const resp1 = await dashboardService.getTotalAttendance(userinfo);
    if (resp1.status) {
      SetPresentList(resp1.data.present.length);
      setAbsentList(resp1.data.absent.length);
    }
    const resp2 = await dashboardService.getAppliedLeaves(userinfo);
    if (resp2.status) {
      setLeaveList(resp2.data.length);
    }

    const resp3 = await dashboardService.getLeaveByStatus(userinfo, "approved");
    if (resp3.status) {
      setLeaveapproved(resp3.data.length);
    }
    const resp4 = await dashboardService.getLeaveByStatus(userinfo, "rejected");
    if (resp4.status) {
      setLeaverejected(resp4.data.length);
    }
    const resp5 = await dashboardService.getLeaveByStatus(userinfo, "waiting");
    if (resp5.status) {
      setLeavewaiting(resp5.data.length);
    }
  }

  useEffect(() => {
    getAllDatas(userinfo);
  }, []);

  return (
    <>
      <Card sx={{ display: "flex" }}>
        <Box sx={{ display: "flex", flexDirection: "column" }}>
          <CardHeader>Welcome, {userinfo.userName}</CardHeader>
          <CardContent sx={{ flex: "1 0 auto" }}>
            <Grid container spacing={13}>
              <Grid item xs={3}>
                <Card sx={{ display: "flex", height: "100%", width: "150%", backgroundColor: "#93dde3" }}>
                  <Box sx={{ display: "flex", flexDirection: "column" }}>
                    <CardContent sx={{ flex: "1 0 auto" }}>
                      <Typography component="div" variant="h5">Users
                      </Typography>
                      <Typography variant="subtitle1" color="text.secondary" component="div">Total Users
                      </Typography>
                    </CardContent>
                    <Box sx={{ display: "flex", alignItems: "center", pl: 1, pb: 1 }}>{usersList}</Box>
                  </Box>
                  <People />
                </Card>
              </Grid>
              <Grid item xs={3}>
                <Card sx={{ display: "flex", height: "100%", width: "150%", backgroundColor: "#e4d0cc" }}>
                  <Box sx={{ display: "flex", flexDirection: "column" }}>
                    <CardContent sx={{ flex: "1 0 auto" }}>
                      <Typography component="div" variant="h5">Leaves
                      </Typography>
                      <Typography variant="subtitle1" color="text.secondary" component="div">Leave Applied
                      </Typography>
                    </CardContent>
                    <Box sx={{ display: "flex", alignItems: "center", pl: 1, pb: 1 }}>{leaveList}</Box>
                  </Box>
                  <EventBusy />
                </Card>
              </Grid>
              <Grid item xs={3}>
                <Card sx={{ display: "flex", height: "100%", width: "150%", backgroundColor: "#cfc4de" }}>
                  <Box sx={{ display: "flex", flexDirection: "column" }}>
                    <CardContent sx={{ flex: "1 0 auto" }}>
                      <Typography component="div" variant="h5">Attendance
                      </Typography>
                      <Typography variant="subtitle1" color="text.secondary" component="div">Total Present
                      </Typography>
                    </CardContent>
                    <Box sx={{ display: "flex", alignItems: "center", pl: 1, pb: 1 }}>{presentList}</Box>
                  </Box>
                  <EventNote />
                </Card>
              </Grid>
              <Grid item xs={3}>
                <Card sx={{ display: "flex", height: "100%", width: "150%", backgroundColor: "#1cb5af" }}>
                  <Box sx={{ display: "flex", flexDirection: "column" }}>
                    <CardContent sx={{ flex: "1 0 auto" }}>
                      <Typography component="div" variant="h5">Attendance
                      </Typography>
                      <Typography variant="subtitle1" color="text.secondary" component="div">Total Absent
                      </Typography>
                    </CardContent>
                    <Box sx={{ display: "flex", alignItems: "center", pl: 1, pb: 1 }}>{absentList}</Box>
                  </Box>
                  <EventNote />
                </Card>
              </Grid>
            </Grid>
          </CardContent>
        </Box>
      </Card>
      <br />
      <Card sx={{ display: "flex" }}>
        <Box sx={{ display: "flex", flexDirection: "column" }}>
          <CardHeader>Leaves Status Count</CardHeader>
          <CardContent sx={{ flex: "1 0 auto" }}>
            <Grid container spacing={40} >
              <Grid item xs={4} >
                <Item className="border-start border-start-4 border-start-info py-1 px-3" style={{ height: "50%", width: "200%" }}>
                  <div className="text-medium-emphasis small">Approved</div>
                  {leaveapproved}</Item>
              </Grid>
              <Grid item xs={4} style={{ height: "500px", width: "100%" }}>
                <Item className="border-start border-start-4 border-start-danger py-1 px-3" style={{ height: "50%", width: "200%" }}>
                  <div className="text-medium-emphasis small">Rejected</div>
                  {leaverejected}</Item>
              </Grid>
              <Grid item xs={4} style={{ height: "500px", width: "100%" }}>
                <Item className="border-start border-start-4 border-start-warning py-1 px-3" style={{ height: "50%", width: "200%" }}>
                  <div className="text-medium-emphasis small">Waiting</div>
                  {leavewaiting}</Item>
              </Grid>
            </Grid>
          </CardContent>
        </Box>
      </Card><br />
      {
        (absentList || presentList)
          ? <>
            <Card sx={{ display: "flex" }}>
              <Box sx={{ display: "flex", flexDirection: "column" }}>
                <CardContent sx={{ flex: "1 0 auto" }}>
                  <Chart
                    chartType="PieChart"
                    data={pieChartdata}
                    options={options}
                    width={"100%"}
                    height={"400px"}
                  />
                </CardContent>
              </Box>
            </Card>
          </>
          : ""
      }
      <br />

    </>
  );
};

export default Dashboard;
