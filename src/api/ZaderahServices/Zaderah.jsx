import { GET, POST, FORM, PostForExport, DELETE } from "../http";
import { endpoints as ep } from "../endpoints";

export const PostLoginUser = (
  params = {}, //yha p function bny hn jo hm modules mn use kr rhy hn ye login wali api ha
) => POST(ep.Users.PostLoginUser, params); //method POST ep means endpoints
export const PostSignupUser = (params = {}) => POST(ep.Users.AddUser, params);
export const postResetPassword = (params = {}) =>
  POST(ep.Users.PostResetPassword, params);
export const GetPackages = (data = {}) => GET(ep.Package.getPackages, data);
export const getPackagesByType = (type) => {
  if (!type) return null;
  return GET(`${ep.Package.GetPackagesByType}/${type}`);
};
//region duas
export const getDuas = (data = {}) => GET(ep.Duas.getDua, data);
export const getDuasByTerm = (term) => {
  if (!term) return null;
  return GET(`${ep.Duas.GetDuaByTerm}/${term}`);
};
export const SearchDuas = (searchValue) => {
  if (!searchValue) return null;

  return GET(ep.Duas.searchDua, { query: searchValue });
};
export const getDuasById = (Id) => {
  if (!Id) return null;
  return GET(`${ep.Duas.getDuabyId}/${Id}`);
};
//region Actions
export const getActions = () => {
  return GET(ep.Actions.getActions);
};

export const getActionswithIds = (actionId, fiqhId, ritualId) => {
  return GET(
    `api/Actions/Details/${actionId}/Fiqh/${fiqhId}/Ritual/${ritualId}`,
  );
};
//region Comment

export const getComment = (userID) => {
  if (!userID) return null;
  return GET(`${ep.comment.fetchComment}/${userID}`);
};
export const PostComment = (params = {}) => POST(ep.comment.addComment, params);
export const DeleteComment = (params = {}) => DELETE(ep.comment.deleteComment, params);