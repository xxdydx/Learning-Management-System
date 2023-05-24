import { Action, PayloadAction, createSlice } from "@reduxjs/toolkit";
import {
  Course,
  NewCourse,
  NewEnrollment,
  NewFile,
  NewSection,
} from "../types";

import { AppState } from "../store";
import courseService from "../services/courses";

import { ThunkAction } from "@reduxjs/toolkit";
import { NewChapter } from "../types";

const courseSlice = createSlice({
  name: "courses",
  initialState: [] as Course[],
  reducers: {
    create(state, action: PayloadAction<Course>) {
      const course = action.payload;
      state.push(course);
    },
    setCourses(state, action) {
      return action.payload;
    },
    edit(state, action) {
      const updatedCourse = action.payload;
      return state.map((item) =>
        item.id === updatedCourse.id ? updatedCourse : item
      );
    },
    remove(state, action) {
      const id = action.payload;
      return state.filter((forms) => forms.id !== id);
    },
  },
});

export const { create, edit, setCourses, remove } = courseSlice.actions;

export const initializeCourses = (): ThunkAction<
  void,
  AppState,
  unknown,
  Action
> => {
  return async (dispatch) => {
    const courses = await courseService.getAll();
    dispatch(setCourses(courses));
  };
};

export const createCourse = (
  courseObject: NewCourse
): ThunkAction<void, AppState, unknown, Action> => {
  return async (dispatch) => {
    const newCourse = await courseService.create(courseObject);
    dispatch(create(newCourse));
  };
};

export const deleteCourse = (
  id: number
): ThunkAction<void, AppState, unknown, Action> => {
  return async (dispatch) => {
    const response = await courseService.remove(id);
    dispatch(remove(id));
  };
};

export const addChapter = (
  chapter: NewChapter,
  id: number
): ThunkAction<void, AppState, unknown, Action> => {
  return async (dispatch) => {
    const newCourse = await courseService.createChapter(chapter, id);
    console.log(newCourse);
    dispatch(edit(newCourse));
  };
};

export const deleteChapter = (
  chpId: number
): ThunkAction<void, AppState, unknown, Action> => {
  return async (dispatch) => {
    const newCourse = await courseService.removeChapter(chpId);
    dispatch(edit(newCourse));
  };
};

export const addSection = (
  section: NewSection,
  chpId: number
): ThunkAction<void, AppState, unknown, Action> => {
  return async (dispatch) => {
    const newCourse = await courseService.createSection(section, chpId);
    dispatch(edit(newCourse));
  };
};

export const deleteSection = (
  sxnId: number
): ThunkAction<void, AppState, unknown, Action> => {
  return async (dispatch) => {
    const newCourse = await courseService.removeSection(sxnId);
    dispatch(edit(newCourse));
  };
};

export const addFile = (
  file: NewFile,
  sxnId: number
): ThunkAction<void, AppState, unknown, Action> => {
  return async (dispatch) => {
    const newCourse = await courseService.createFile(file, sxnId);
    console.log(newCourse);
    dispatch(edit(newCourse));
  };
};

export const deleteFile = (
  fileId: number
): ThunkAction<void, AppState, unknown, Action> => {
  return async (dispatch) => {
    const newCourse = await courseService.removeFile(fileId);
    dispatch(edit(newCourse));
  };
};

export const addEnrollment = (
  enrollment: NewEnrollment
): ThunkAction<void, AppState, unknown, Action> => {
  return async (dispatch) => {
    const newCourse = await courseService.createEnrollment(enrollment);
    dispatch(edit(newCourse));
  };
};

export default courseSlice.reducer;
