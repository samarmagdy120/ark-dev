import moment from "moment";

// export let foo = () => {
//   const date = new Date("yyyy-mm-dd");

//   const dd = date.getDate();
//   const mm = date.getMonth();
//   const yyyy = date.getFullYear();
//   console.log(date);

// const date = moment().format();
// let lastThirtyDay = moment.duration({ days: 30 });
// export let date = momenformat("YYYY-MM-DD");

export const date = moment().subtract(30, "d").format("YYYY-MM-DD");
// console.log(lastThirtyDay);
//   return lastThirtyDay;
// };
