import * as actions from './actions';
import { ActionType } from 'typesafe-actions';
import { KakaoFaceInfo } from '../../api/detection';
import { AsyncState } from '../../lib/reducerUtils';

export type FaceAction = ActionType<typeof actions>;
export type FaceState = {
    faceInfo: AsyncState<KakaoFaceInfo, Error>;
}