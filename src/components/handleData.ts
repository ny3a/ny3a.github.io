// import {b2 as n} from "./index-CapN6LMG.js";
//
// function u(e) {
//     switch (e = typeof e == "string" ? parseInt(e) : e, e) {
//         case 0:
//             return "basic";
//         case 1:
//             return "advanced";
//         case 2:
//             return "expert";
//         case 3:
//             return "master";
//         case 4:
//             return "remaster";
//         case 10:
//             return "utage";
//         default:
//             return "unknown"
//     }
// }
//
// function a(ratingState) {
//     switch (ratingState) {
//         case 0:
//             return "d";
//         case 1:
//             return "c";
//         case 2:
//             return "b";
//         case 3:
//             return "bb";
//         case 4:
//             return "bbb";
//         case 5:
//             return "a";
//         case 6:
//             return "aa";
//         case 7:
//             return "aaa";
//         case 8:
//             return "s";
//         case 9:
//             return "splus";
//         case 10:
//             return "ss";
//         case 11:
//             return "ssplus";
//         case 12:
//             return "sss";
//         case 13:
//             return "sssplus";
//         default:
//             return "blank"
//     }
// }
//
// function c(e) {
//     switch (e) {
//         case 0:
//             return "none";
//         case 1:
//             return "fc";
//         case 2:
//             return "fcplus";
//         case 3:
//             return "ap";
//         case 4:
//             return "applus";
//         default:
//             return "none"
//     }
// }
//
// function f(e) {
//     switch (e) {
//         case 0:
//             return "none";
//         case 1:
//             return "fs";
//         case 2:
//             return "fsplus";
//         case 3:
//             return "fsd";
//         case 4:
//             return "fsdplus";
//         case 5:
//             return "sync";
//         default:
//             return "none"
//     }
// }
//
// function l(e = 0, t = 0) {
//     if (t === 0) return 0;
//     const r = e * 100 / t;
//     return r < 85 ? 0 : r >= 85 && r < 90 ? 1 : r >= 90 && r < 93 ? 2 : r >= 93 && r < 95 ? 3 : r >= 95 && r < 97 ? 4 : r >= 97 && r < 100 ? 5 : 0
// }
//
// function i(e) {
//     switch (e) {
//         case-1:
//         case 0:
//             return "-";
//         case 1:
//         case 2:
//         case 3:
//         case 4:
//         case 5:
//         case 6:
//         case 7:
//             return e.toString();
//         case 8:
//             return "7+";
//         case 9:
//             return "8";
//         case 10:
//             return "8+";
//         case 11:
//             return "9";
//         case 12:
//             return "9+";
//         case 13:
//             return "10";
//         case 14:
//             return "10+";
//         case 15:
//             return "11";
//         case 16:
//             return "11+";
//         case 17:
//             return "12";
//         case 18:
//             return "12+";
//         case 19:
//             return "13";
//         case 20:
//             return "13+";
//         case 21:
//             return "14";
//         case 22:
//             return "14+";
//         case 23:
//             return "15";
//         default:
//             return "?"
//     }
// }

const handleRatingFrame = (rating:number) => {
    return rating >= 1e3 && rating < 2e3 ? "blue" : rating >= 2e3 && rating < 3e3 ? "green" : rating >= 3e3 && rating < 4e3 || rating >= 4e3 && rating < 7e3 ? "yellow" : rating >= 7e3 && rating < 1e4 ? "red" : rating >= 1e4 && rating < 12e3 ? "purple" : rating >= 12e3 && rating < 13e3 ? "bronze" : rating >= 13e3 && rating < 14e3 ? "silver" : rating >= 14e3 && rating < 14500 ? "gold" : rating >= 14500 && rating < 15e3 ? "platinum" : rating >= 15e3 ? "rainbow" : "normal"
}
//
// function b(e) {
//     if (e == null || e == "") return "/img/maimai/jacket_dummy.png";
//     const {cdnUrl: t} = n();
//     return `${t}/SDEZ/cover/${e}.webp-thumbnail.large`
// }
//
// function g(e) {
//     if (e == null || e == "") return "/img/avatar.png";
//     const {cdnUrl: t} = n();
//     return `${t}/SDEZ/icon/${e}.webp-thumbnail`
// }
//
// function p(e) {
//     return e ? e < 1e4 ? `0.${"0".repeat(4 - e.toString().length)}${e.toString()}%` : `${e.toString().slice(0, -4)}.${e.toString().slice(-4)}%` : "-"
// }
//
// function S(e) {
//     return e ? e < 1e3 ? e.toString() : `${e.toString().slice(0, -3)},${e.toString().slice(-3)}` : "-"
// }
//
// export {p as a, u as b, i as c, a as d, c as e, f, g, S as h, b as i, l as j, o as k};
export { handleRatingFrame };