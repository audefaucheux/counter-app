// action creators

const INCREMENT = "INCREMENT";
const DECREMENT = "DECREMENT";
const REFRESH_TIME = "REFRESH_TIME";

export const increment = () => ({ type: INCREMENT });
export const decrement = () => ({ type: DECREMENT });
export const refreshTime = () => ({ type: REFRESH_TIME });
