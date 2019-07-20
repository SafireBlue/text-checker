import {FindSpaces, FindMarkups, FoundResult, FindUrls} from "../src/index";

// tslint:disable-next-line:max-line-length
// const res = FindNumbersFromSegment({FormatIndex: null, Props: null, Source: {Value: "test1", BeginOffSet: null}, Translation: {Value: "テスト2", BeginOffSet: null}});

// console.dir(res);

export const test = (async () => {
    const res = await FindSpaces("Support per above. Davey2116 (talk) 18:49, 16 July 2019");
    console.dir(res);
});

export let testFindUrlsResult: FoundResult[];
export const testFindUrls = (async () => {
  testFindUrlsResult = await FindUrls("https://www.regextester.com/93652");
});

export let testFindMarkupsResults: FoundResult[];
export const testFindMarkups = (async () => {
    testFindMarkupsResults = await FindMarkups(`
    test
    
        <tu>
          <note> Usage bundle app name </note>
          <prop type="original">CalendarUsage/System/Library/UsageBundles/CalendarUsage.bundle/en.lproj/Localizable.strings</prop>
          <prop type="product-name">CalendarUsage</prop>
          <prop type="product-version">537</prop>
          <prop type="build-num">578</prop>
          <prop type="datatype">strings</prop>
          <prop type="x-train">Yukon</prop>
          <prop type="restype">string</prop>
          <prop type="id">Calendars &amp; Reminders</prop>
          <tuv xml:lang="en">
            <seg>Calendars &amp; Reminders</seg>
          </tuv>
          <tuv xml:lang="ja">
            <seg>カレンダーとリマインダー</seg>
          </tuv>
        </tu>
        test
        <tu>
          <note> Category for attachments </note>
          <prop type="original">CalendarUsage/System/Library/UsageBundles/CalendarUsage.bundle/en.lproj/Localizable.strings</prop>
          <prop type="product-name">CalendarUsage</prop>
          <prop type="product-version">537</prop>
          <prop type="build-num">578</prop>
          <prop type="datatype">strings</prop>
          fafafa
          <prop type="x-train">Yukon</prop>
          <prop type="restype">string</prop>
          <prop type="id">Attachments</prop>
          <tuv xml:lang="en">
            <seg>Attachments</seg>
          </tuv>
          <tuv xml:lang="ja">
            <seg>添付ファイル</seg>
          </tuv>
        </tu>
    
    
        eeeeeee
        <tu>
          <note> Category for events </note>
          <prop type="original">CalendarUsage/System/Library/UsageBundles/CalendarUsage.bundle/en.lproj/Localizable.strings</prop>
          <prop type="product-name">CalendarUsage</prop>
          <prop type="product-version">537</prop>
          <prop type="build-num">578</prop>
          <prop type="datatype">strings</prop>
          <prop type="x-train">Yukon</prop>
          <prop type="restype">string</prop>
          <prop type="id">Events</prop>
          <tuv xml:lang="en">
            <seg>Events</seg>
          </tuv>
          <tuv xml:lang="ja">
            <seg>イベント</seg>
          </tuv>
        </tu>
    fafaafa`);
});
