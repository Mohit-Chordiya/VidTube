// export const API_KEY = "AIzaSyDLt1LtROu_Ta4zYprjrcZv7O6gxP9llcU";
export const API_KEY = "AIzaSyCayBh1uvTgKaNVoMXaVeVa4xxfxF4v8DA";

export const value_converter = (value) => {
    if (value >= 1000000) {
        return Math.floor(value / 1000000) + "M";
    } else if (value >= 1000) {
        return Math.floor(value / 1000) + "K";
    } else {
        return value;
    }
};
