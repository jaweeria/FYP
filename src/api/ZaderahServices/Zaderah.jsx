import { GET, POST, FORM, PostForExport } from "../http";
import { endpoints as ep } from "../endpoints";

export const PostLoginUser = (params = {}) =>
  POST(ep.Users.PostLoginUser, params);
export const PostSignupUser = (params = {}) => POST(ep.Users.AddUser, params);
export const getDuas = (data = {}) => GET(ep.Duas.getDua, data);
export const GetPackages = (data = {}) => GET(ep.Package.getPackages, data);
export const getPackagesByType = (type) => {
  if (!type) return null;
  return GET(`${ep.Package.GetPackagesByType}/${type}`);
};

// export const getPayrollList = (data = {}) =>
//   POST(ep.HrPayRoll.GetPayrollList, data);
// export const getPayrollList = (data = {}) =>
//   POST(ep.HrPayRoll.GetPayrollList, data);
// export const getPayrollList = (data = {}) =>
//   POST(ep.HrPayRoll.GetPayrollList, data);
// export const exportPayRoll = (data) =>
//   PostForExport(ep.HrPayRoll.ExportPayRollSalary, data);

// export const GetEmpBonusPayRoll = (data = {}) =>
//   POST(ep.HrEmployee.bonus.GetList, data);

// export const DeleteEmpBonus = (data = {}, params = {}) =>
//   POST(ep.HrEmployee.bonus.Delete, data, params);

// export const GetEmpIncrementPayRoll = (data = {}) =>
//   POST(ep.HrEmployee.increment.GetList, data);

// export const DeleteEmpIncrement = (data = {}, params = {}) =>
//   POST(ep.HrEmployee.increment.Delete, data, params);

// export const exportIncrements = (data) =>
//   PostForExport(ep.HrEmployee.increment.Export, data);

// export const exportBonuses = (data) =>
//   PostForExport(ep.HrEmployee.bonus.Export, data);

// // region Tax Slab
// export const GetTaxSlabList = (data = {}) =>
//   POST(ep.HrPayRoll.taxSlab.GetList, data);

// export const AddTaxSlab = (data = {}) => POST(ep.HrPayRoll.taxSlab.Add, data);

// export const UpdateTaxSlab = (data = {}) =>
//   POST(ep.HrPayRoll.taxSlab.Update, data);

// export const DeleteTaxSlab = (data = {}, params = {}) =>
//   POST(ep.HrPayRoll.taxSlab.Delete, data, params);

// export const GetTaxSlabById = (params = {}) =>
//   GET(ep.HrPayRoll.taxSlab.GetById, params);

// export const ExportTaxSlab = (data) =>
//   PostForExport(ep.HrPayRoll.taxSlab.Export, data);

// // region Tax Details
// export const GetTaxDetails = (data = {}) =>
//   POST(ep.HrPayRoll.taxDetails.GetList, data);

// export const GetTaxDetailsById = (params = {}) =>
//   GET(ep.HrPayRoll.taxDetails.GetById, params);

// export const AddTaxDetails = (data = {}) =>
//   POST(ep.HrPayRoll.taxDetails.Add, data);

// export const UpdateTaxDetails = (data = {}) =>
//   POST(ep.HrPayRoll.taxDetails.Update, data);

// export const deleteTaxDetails = (data = {}, params = {}) =>
//   POST(ep.HrPayRoll.taxDetails.Delete, data, params);

// export const ExportTaxDetails = (data) =>
//   PostForExport(ep.HrPayRoll.taxDetails.Export, data);

// export const getCalculateEmpTax = (params = {}) =>
//   GET(ep.HrPayRoll.taxDetails.CalculateEmpTax, params);

// // region Add Payroll
// export const AddPayroll = (data = {}) => POST(ep.HrPayRoll.AddPayroll, data);

// export const addPayRollAllowance = (data = {}) =>
//   POST(ep.HrPayRoll.AddPayRollAllowance, data);
// export const updatePayRollAllowance = (data = {}) =>
//   POST(ep.HrPayRoll.UpdatePayRollAllowance, data);
// export const deletePayRollAllowance = (data = {}) =>
//   POST(ep.HrPayRoll.DeletePayRollAllowance, data);
