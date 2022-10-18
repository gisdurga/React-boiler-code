const USER_LOGIN = "/websitecontent-news/list";
const CREATE_USER = "/users/create";
const USER_SIGNIN = "/auth/login";
const GETALL_USER = "";
const DELETE_USER = "";
const GET_USER_BY_ID = "/users/getbyid";
const GET_USER_ROLE_SCREEN_ACTIVITIES = "";
const UPDATE_USER = "";
const TOTAL_LEAVE_APPLIED = "/leave/getleave/list";
const TODAY_ATTENDANCE = "/attendance/gettodayattendance";
const TOTAL_USERS = "/users/getall";
const GET_COMPANY = "/company/getcompany";
const UPDATE_COMPANY = "/company/update";
const LEAVE_STATUS = "/leave/getLeaveByStatus";
const ATTEN_SEARCH = "/attendance/attendanceSearch";
const ATTEN_GET_ID = "/attendance/getallattenddancebyid";
const ACCOUNT_PROJECT = "/projects/listproject";
const ACCOUNT_TEAMS = "/teams/listteam";
const GET_LEAVE_BY_USERID = "/leave/getbyid";
const CREATE_LEAVE = "/leave/create";
const DELETE_LEAVE = "/leave/deleteleave";
const GETALL_ROLE = "/roles/getall";
const GETALL_POSITION = "/position/listPositions";
const GETALL_PROJECT = "/projects/listproject";
const CREATE_PROJECTUSER = "/projectuser/createprojectuser";
const GETALL_TEAMLEADER = "/users/getPositionUser/leader";
const GETALL_PROJECTMANAGER = "/users/getPositionUser/manager";
const CREATE_PROJECT = "/projects/createproject";
const GETUSER_PROJECT = "projectuser/getprojectforuserid";
const GETALL_TASKLIST = "/task/listtask";
const TODAY_BIRTHDAY = "/users/getTodayBirthday";
const GETALL_HOLIDAYS = "/holiday/getall";
const CREATE_HOLIDAYS = "/holiday/create";
const GETALL_PROJECTMEMBER = "/projectuser/listprojectuser";
const UPDATE_HOLIDAYS = "/holiday/update";
const DELETE_HOLIDAY = "/holiday/delete";
const GETALL_HOLIDAYSBYID = "/holiday/getone";
const GETALL_SPRINT = "/sprints/listsprints";
const CREATE_SPRINT = "/sprints/createsprints";
const DELETE_SPRINT = "/sprints/deletesprints";
const UPDATE_SPRINT = "/sprints/updatesprints";
const GETALL_SPRINTBYID = "/sprints/getbyid";

const CREATE_TIMESHEET = "/timesheet/createtimesheet";
const GET_TIMESHEET = "/timesheet/getTimesheetByDate";
const ENDPOINT = {
  USER_LOGIN,
  GETALL_USER,
  CREATE_USER,
  DELETE_USER,
  GET_USER_BY_ID,
  GET_USER_ROLE_SCREEN_ACTIVITIES,
  UPDATE_USER,
  TOTAL_USERS,
  TOTAL_LEAVE_APPLIED,
  TODAY_ATTENDANCE,
  LEAVE_STATUS,
  ATTEN_SEARCH,
  ATTEN_GET_ID,
  GET_COMPANY,
  GET_LEAVE_BY_USERID,
  CREATE_LEAVE,
  DELETE_LEAVE,
  GETALL_ROLE,
  GETALL_POSITION,
  UPDATE_COMPANY,
  GETALL_PROJECT,
  CREATE_PROJECTUSER,
  GETALL_PROJECTMANAGER,
  GETALL_TEAMLEADER,
  CREATE_PROJECT,
  ACCOUNT_PROJECT,
  ACCOUNT_TEAMS,
  GETUSER_PROJECT,
  GETALL_TASKLIST,
  TODAY_BIRTHDAY,
  GETALL_HOLIDAYS,
  CREATE_HOLIDAYS,
  GETALL_PROJECTMEMBER,
  UPDATE_HOLIDAYS,
  DELETE_HOLIDAY,
  USER_SIGNIN,
  GETALL_HOLIDAYSBYID,
  GETALL_SPRINT,
  CREATE_SPRINT,
  DELETE_SPRINT,
  UPDATE_SPRINT,
  GETALL_SPRINTBYID,
  CREATE_TIMESHEET,
  GET_TIMESHEET,
};
export default ENDPOINT;
