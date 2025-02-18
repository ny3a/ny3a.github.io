import { handleRatingFrame } from './handleData.ts'
const handleRating = (b:number)=> {
    return 'https://u.otogame.net/img/maimai/rating_base_' + handleRatingFrame(b) + '.png'
}
export default handleRating;