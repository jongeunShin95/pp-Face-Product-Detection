import axios from 'axios';

const formUrlEncoded = (x: any) => Object.keys(x).reduce((p, c) => p + `&${c}=${encodeURIComponent(x[c])}`, '');

export async function getFaceInfo(image_url: string) {
    var api_key = '199502000b4d8f7e32fff2b93146c7eb';
    var api_url = 'https://dapi.kakao.com/v2/vision/face/detect';


    axios.defaults.headers.post = null;

    const params = {
        image_url: image_url,
        threshold: 0.7
    };

    const headers = {
        "Content-Type": "application/x-www-form-urlencoded",
        "Authorization": "KakaoAK " + api_key
    };

    const res = await axios.post<KakaoFaceInfo>(api_url, formUrlEncoded(params), { headers });
    return res.data;
}

export async function getProductInfo(image_url: string) {
    var api_key = '199502000b4d8f7e32fff2b93146c7eb';
    var api_url = 'https://dapi.kakao.com/v2/vision/product/detect';

    axios.defaults.headers.post = null;

    const params = {
        image_url: image_url,
        threshold: 0.7
    };

    const headers = {
        "Content-Type": "application/x-www-form-urlencoded",
        "Authorization": "KakaoAK " + api_key
    };

    const res = await axios.post<KakaoProductInfo>(api_url, formUrlEncoded(params), { headers });
    return res.data;
}

// Face
export interface KakaoFaceInfo {
    rid:    string;
    result: FaceResult;
}

export interface FaceResult {
    width:  number;
    height: number;
    faces:  Face[];
}

export interface Face {
    facial_attributes: FacialAttributes;
    facial_points:     FacialPoints;
    h:                 number;
    yaw:               number;
    class_idx:         number;
    score:             number;
    w:                 number;
    pitch:             number;
    y:                 number;
    x:                 number;
    roll:              number;
}

export interface FacialAttributes {
    gender: Gender;
    age:    number;
}

export interface Gender {
    male:   number;
    female: number;
}

export interface FacialPoints {
    left_eyebrow:  Array<number[]>;
    jaw:           Array<number[]>;
    left_eye:      Array<number[]>;
    lip:           Array<number[]>;
    nose:          Array<number[]>;
    right_eye:     Array<number[]>;
    right_eyebrow: Array<number[]>;
}


// Product
export interface KakaoProductInfo {
    rid:    string;
    result: ProductResult;
}

export interface ProductResult {
    width:   number;
    objects: Object[];
    height:  number;
}

export interface Object {
    y2:    number;
    x2:    number;
    score: number;
    y1:    number;
    x1:    number;
    class: string;
}