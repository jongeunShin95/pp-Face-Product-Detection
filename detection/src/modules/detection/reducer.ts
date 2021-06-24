import { createReducer } from "typesafe-actions";
import { asyncState, createAsyncReducer, transformToArray } from "../../lib/reducerUtils";
import { getFaceInfoAsync } from "./actions";
import { FaceAction, FaceState } from "./types";

const initialState: FaceState = {
    faceInfo: asyncState.initial()
}

const github = createReducer<FaceState, FaceAction>(initialState)
    .handleAction(transformToArray(getFaceInfoAsync),
        createAsyncReducer(getFaceInfoAsync, 'faceInfo'))

export default github;