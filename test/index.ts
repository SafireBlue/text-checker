import {FindSpaces} from "../src/index";

// tslint:disable-next-line:max-line-length
// const res = FindNumbersFromSegment({FormatIndex: null, Props: null, Source: {Value: "test1", BeginOffSet: null}, Translation: {Value: "テスト2", BeginOffSet: null}});

// console.dir(res);

export const test = (async () => {
    const res = await FindSpaces("Support per above. Davey2116 (talk) 18:49, 16 July 2019");
    console.dir(res);
});
