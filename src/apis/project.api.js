import { apiInstance } from "configs/axios.config";

export const showMyProjectListsAPI = () =>
  apiInstance.get("project/showMyProjectLists");
export const showProjectDetailsAPI = (projectID) =>
  apiInstance.get(`project/showProjectDetails/${projectID}`);
export const updateProjectRequirementAPI = (data, projectID) =>
  apiInstance.put(`project/updateProjectRequirement/${projectID}`, data);
export const updateNegotiationCommentAPI = (data, projectID) =>
  apiInstance.put(`project/updateNegotiationComment/${projectID}`, data);
export const freelancerApproveProjectRequirementAPI = (projectID) =>
  apiInstance.put(`project/freelancerApproveProjectRequirement/${projectID}`);
export const addTaskAPI = (data, projectID) =>
  apiInstance.put(`project/addTask/${projectID}`, data);
export const updateTaskAPI = (data, projectID) =>
  apiInstance.put(`project/updateTask/${projectID}`, data);
export const addCommentAPI = (data, projectID) =>
  apiInstance.put(`project/addComment/${projectID}`, data);
export const completeProjectAPI = (data, projectID) =>
  apiInstance.put(`project/completeProject/${projectID}`, data);
export const requestRejectProjectAPI = (projectID,rejectReason) =>
  apiInstance.put(`project/requestRejectProject/${projectID}`,rejectReason);
export const provideFeedbackAPI = (data, projectID) =>
  apiInstance.put(`project/provideFeedback/${projectID}`, data);
