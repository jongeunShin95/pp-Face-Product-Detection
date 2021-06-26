import { createReducer } from "typesafe-actions";
import { asyncState, createAsyncReducer, transformToArray } from "../../lib/reducerUtils";
import { getFaceInfoAsync, getProductInfoAsync } from "./actions";
import { DetectionAction, DetectionState } from "./types";

const initialState: DetectionState = {
    detectionInfo: asyncState.initial()
};

const detection = createReducer<DetectionState, DetectionAction>(initialState)
    .handleAction(transformToArray(getFaceInfoAsync),
        createAsyncReducer(getFaceInfoAsync, 'detectionInfo'))
    .handleAction(transformToArray(getProductInfoAsync),
        createAsyncReducer(getProductInfoAsync, 'detectionInfo'));

export default detection;