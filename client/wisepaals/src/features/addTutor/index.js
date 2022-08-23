import newTutorReducerFromSlice, {
  getNewTutor as getNewTutorFromSlice,
  getNewTutorRequestStatus as getNewTutorRequestStatusFromSlice,
  getNewTutorRequestError as getNewTutorRequestErrorFromSlice,
} from "./store/newTutorSlice";

import { addTutorService as addTutor } from "./services/addTutor";

export const getNewTutor = getNewTutorFromSlice;

export const getNewTutorRequestStatus = getNewTutorRequestStatusFromSlice;

export const getNewTutorRequestError = getNewTutorRequestErrorFromSlice;

export const addTutorService = addTutor;

export const newTutorReducer = newTutorReducerFromSlice;
