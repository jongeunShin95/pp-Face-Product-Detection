import { AxiosError } from "axios";
import { createAsyncAction } from "typesafe-actions";
import { KakaoFaceInfo, KakaoProductInfo } from '../../api/detection';

export const GET_FACE_INFO = 'detection/GET_FACE_INFO';
export const GET_FACE_INFO_SUCCESS = 'detection/GET_FACE_INFO_SUCCESS';
export const GET_FACE_INFO_ERROR = 'detection/GET_FACE_INFO_ERROR';

export const GET_PRODUCT_INFO = 'detection/GET_PRODUCT_INFO';
export const GET_PRODUCT_INFO_SUCCESS = 'detection/GET_PRODUCT_INFO_SUCCESS';
export const GET_PRODUCT_INFO_ERROR = 'detection/GET_PRODUCT_INFO_ERROR';

export const getFaceInfoAsync = createAsyncAction(
    GET_FACE_INFO,
    GET_FACE_INFO_SUCCESS,
    GET_FACE_INFO_ERROR
)<any, KakaoFaceInfo, AxiosError>(); // lib로 따로뺴면 첫 인자 타입은 any로 lib로 따로 안빼면 undefined로

export const getProductInfoAsync = createAsyncAction(
    GET_PRODUCT_INFO,
    GET_PRODUCT_INFO_SUCCESS,
    GET_PRODUCT_INFO_ERROR
)<any, KakaoProductInfo, AxiosError>();