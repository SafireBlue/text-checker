
import FoundResult from "./Util/FoundResult";

// tslint:disable-next-line:max-line-length
// Reference: https://ja.wikipedia.org/wiki/%E3%82%B9%E3%83%9A%E3%83%BC%E3%82%B9#%E3%82%B3%E3%83%B3%E3%83%94%E3%83%A5%E3%83%BC%E3%82%BF%E3%81%AB%E3%81%8A%E3%81%91%E3%82%8B%E3%82%B9%E3%83%9A%E3%83%BC%E3%82%B9
// tslint:disable-next-line:max-line-length
export const USpacePattern = "\u{0020}|\u{2002}|\u{2003}|\u{2004}|\u{2005}|\u{2006}|\u{2007}|\u{2008}|\u{2009}|\u{3000}|\u{0009}";

export default async function(text: string): Promise<FoundResult[]> {
    const result = new Array<FoundResult>();
    const regex = RegExp(USpacePattern, "g");
    let execResult: RegExpExecArray = regex.exec(text)!;
    while (execResult) {
        result.push({StartIndex: execResult.index, Value: execResult[0]});
        execResult = regex.exec(text)!;
    }
    return result;
}
