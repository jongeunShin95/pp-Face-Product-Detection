import * as actions from './actions';
import { ActionType } from 'typesafe-actions';
import { KakaoFaceInfo, KakaoProductInfo } from '../../api/detection';
import { AsyncState } from '../../lib/reducerUtils';

export type DetectionAction = ActionType<typeof actions>;
export type DetectionState = {
    detectionInfo: AsyncState<KakaoFaceInfo | KakaoProductInfo, Error>;
};