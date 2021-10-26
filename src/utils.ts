import _ from "lodash";

export const Sleep = (ms: number) => {
    return new Promise((resolve) => setTimeout(resolve, ms));
};

export const HEX_CHARSET = "abcdef0123456789";
export const ALPHANUMERIC_NONVOWEL =
    "bcdfghjklmnpqrstvwxyzBCDFGHJKLMNPQRSTVWXYZ0123456789";

export const GenerateId = (charSet: string, length: number = 16): string => {
    return _.range(length)
        .map(() => charSet.charAt(Math.floor(Math.random() * charSet.length)))
        .join("");
};
