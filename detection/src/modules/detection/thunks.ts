import { getFaceInfo, getProductInfo } from "../../api/detection";
import createAsyncThunk from "../../lib/createAsyncThunk";
import { getFaceInfoAsync, getProductInfoAsync } from "./actions";

export const getFaceInfoThunk = createAsyncThunk(getFaceInfoAsync, getFaceInfo);
export const getProductInfoThunk = createAsyncThunk(getProductInfoAsync, getProductInfo);