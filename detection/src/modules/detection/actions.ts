import { AxiosError } from "axios";
import { createAsyncAction } from "typesafe-actions";
import { KakaoFaceInfo } from '../../api/detection';

export const GET_FACE_INFO = 'detection/GET_FACE_INFO';
export const GET_FACE_INFO_SUCCESS = 'detection/GET_FACE_INFO_SUCCESS';
export const GET_FACE_INFO_ERROR = 'detection/GET_FACE_INFO_ERROR';

export const getFaceInfoAsync = createAsyncAction(
    GET_FACE_INFO,
    GET_FACE_INFO_SUCCESS,
    GET_FACE_INFO_ERROR
)<any, KakaoFaceInfo, AxiosError>(); // lib로 따로뺴면 첫 인자 타입은 any로 lib로 따로 안빼면 undefined로