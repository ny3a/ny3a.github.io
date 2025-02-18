import axios from 'axios'
import { ref } from 'vue'
import ratingFrame from './handleRating.ts'
const b50 = ref(['Loading...'])
const b35 = ref<best35[]>([])
const b15 = ref<best15[]>([])
const frame = ref('')
let errStatus = ref('')
interface best35 {
    achievements: number;
    ds:number;
    ra:number;
    song_id:number;
    title:string;
    type:string;
    rate:string;
}
interface best15 {
    achievements: number;
    ds:number;
    ra:number;
    song_id:number;
    title:string;
    type:string;
    rate:string;
}
const fetchBest50 = (username:string|null) => {
    axios.post("https://www.diving-fish.com/api/maimaidxprober/query/player", {
    username: username,
    b50: 'true',
}).then(res => {

    b50.value = res.data.rating
    b35.value = res.data.charts.sd
    b15.value = res.data.charts.dx
    frame.value = ratingFrame(res.data.rating)
    errStatus.value = '200'
    }).catch(err => {
        errStatus.value = err.response.status
    })
    return { b50, b35, b15, frame, errStatus }
}

export default { fetchBest50 }