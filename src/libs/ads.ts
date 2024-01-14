import { Advertisement, CodeDetail } from "../types"
import { v4 as uuidv4 } from 'uuid';

export const insertAds = (codeList: CodeDetail[]) => {
    const ads = createRandomAdvertisementList();
    const result: (CodeDetail | Advertisement)[] = [];

    const interval = 3;
    let adIndex = 0;
    for (let i = 0; i < codeList.length; i++) {
        if (i % interval === 0 && i !== 0) {
            if (adIndex < ads.length) {
                result.push(ads[adIndex]);
                adIndex++;
            }
        }
        result.push(codeList[i]);
    }

    return result;
}

export const createRandomAdvertisementList = () => {
    const ads: Advertisement[] = [
        {
            id: uuidv4(),
            isAd: true,
        },
        {
            id: uuidv4(),
            isAd: true,
        }
    ]

    return ads;
}