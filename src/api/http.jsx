import { api } from "./config";
//GET hoga to ya // smjh i?//ye functionalag se se iss liyay bnainy tak br br hr module mn code na likhna pre qk time bhi kam hai humre pass
//or reuseabilty best practice hoti ha as a programmer.. got it?
export const GET = async (url, params = {}) => {
  try {
    const res = await api.get(url, { params });
    return res.data;
  } catch (err) {
    return null;
  }
};
//agr method POST hoga to ye function run hoga
export const POST = async (url, data = {}, params = {}) => {
  try {
    const res = await api.post(url, data, { params });

    return {
      status: res.status,
      data: res.data,
    };
  } catch (err) {
    return {
      status: err?.response?.status || 500,
      data: err?.response?.data || null,
    };
  }
};

// region Post form Export
export const PostForExport = async (url, data) => {
  try {
    // If data is a non-empty string, ensure it ends with a comma
    let payload = data;
    if (data && typeof data === "string" && data.trim() !== "") {
      payload = data.endsWith(",") ? data : data + ",";
    }
    const res = await api.post(url, payload);
    return res.data;
  } catch (err) {
    console.error("PostForExport error:", err);
    return null;
  }
};

export const PUT = async (url, data = {}) => {
  try {
    const res = await api.put(url, data);
    return res.data;
  } catch (err) {
    return null;
  }
};
export const DELETE = async (url, data = {}) => {
  try {
    const res = await api.delete(url, data);
    return res.data;
  } catch (err) {
    return null;
  }
};

export const FORM = async (url, data = {}) => {
  try {
    const res = await api.post(url, data, {
      headers: { "Content-Type": "multipart/form-data" },
    });
    return res.data;
  } catch (err) {
    return null;
  }
};
