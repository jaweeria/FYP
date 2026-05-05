// export const baseURL = "http://192.168.10.123:8189";
export const baseURL = "http://localhost:5266/"; //local //ye URL sb apis mn same hota ha

export const endpoints = {
  baseURL: baseURL + "/", // dgk local
  Actions: {
    // Actions
    getActions: "api/Actions",
    getActionswithIds:
      "api/Actions/Details/{actionId}/Fiqh/{fiqhId}/Ritual/{ritualId}",
  },
  Duas: {
    getDua: "api/Duas",
    searchDua: "api/Duas/Search",
    GetDuaByTerm: "api/Duas/ByTerm",
    getDuaByIds: "api/Duas/Action/{actionId}/Ritual/{ritualId}",
    getDuabyId: "api/Duas",
  },
  Package: {
    getPackages: "api/Packages",
    PostPackages: "api/Packages",
    GetPackagesByType: "api/Packages/Type",
    getPackagesByCategory: "api/Packages/Category/{category}",
    getPackagesbyId: "api/Packages/{id}",
  },

  Rituals: {
    getRituals: "api/Rituals",
    getRitualsByAction: "api/Rituals/{id}/Actions",
    GetRitualsGuideByIds: "api/Rituals/{ritualId}/Actions/{actionId}/Guides",
    getRitualsHowYTo: "api/Rituals/{ritualId}/Actions/{actionId}/HowTo",
  },

  TawafDuas: {
    getTawafDua: "api/TawafDuas",
    getTawafDuasRound: "api/TawafDuas/Round/{num}",
  },
  Users: {
    getUser: "api/Users",
    DeleteUserById: "api/Users/{id}",
    AddUser: "api/Users/Signup",
    PostLoginUser: "api/Users/Login", //means method iska post ha endpoints mn user obj define han us mn post login user api ko use kro //is page p projects mn jitni api use kry gy whi hogi
    PostResetPassword: "api/Users/ResetPassword",
  },
};
