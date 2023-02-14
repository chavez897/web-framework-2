import { NewTutor, NewTutorRequestStatus } from "./types/newTutor";
import { Action } from "@reduxjs/toolkit";
import { addTutorService as addTutor } from "./services/addTutor.ts";
import newTutorReducerFromSlice, {
  getNewTutor as getNewTutorFromSlice,
  getNewTutorRequestStatus as getNewTutorRequestStatusFromSlice,
  getNewTutorRequestError as getNewTutorRequestErrorFromSlice,
} from "./store/newTutorSlice.ts";

export const getNewTutor = (state: NewTutor): NewTutor =>
  getNewTutorFromSlice(state);

export const getNewTutorRequestStatus = (
  state: NewTutorRequestStatus
): NewTutorRequestStatus => getNewTutorRequestStatusFromSlice(state);

export const getNewTutorRequestError = (state: Error): Error =>
  getNewTutorRequestErrorFromSlice(state);

export const addTutorService = (data: NewTutor): Promise<Action> =>
  addTutor(data);

export const newTutorReducer = (state: NewTutor, action: Action): NewTutor =>
  newTutorReducerFromSlice(state, action);
