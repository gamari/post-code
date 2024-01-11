import { Advertisement } from "../types"
import { v4 as uuidv4 } from 'uuid';

// TODO 場所を検討したほうが良いかも
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