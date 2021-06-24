import { getFaceInfo } from "../../api/detection";
import createAsyncThunk from "../../lib/createAsyncThunk";
import { getFaceInfoAsync } from "./actions";

export const getFaceInfoThunk = createAsyncThunk(getFaceInfoAsync, getFaceInfo);