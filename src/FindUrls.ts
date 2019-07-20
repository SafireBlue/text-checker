import FoundResult from "./Util/FoundResult";

export default async function(text: string): Promise<FoundResult[]> {
    const result = new Array<FoundResult>();
    // tslint:disable-next-line:max-line-length
    const regex = RegExp("^(http:\/\/www\.|https:\/\/www\.|http:\/\/|https:\/\/)?[a-z0-9]+([\-\.]{1}[a-z0-9]+)*\.[a-z]{2,5}(:[0-9]{1,5})?(\/.*)?$", "g");
    let execResult: RegExpExecArray = regex.exec(text)!;
    while (execResult) {
        result.push({StartIndex: execResult.index, Value: execResult[0]});
        execResult = regex.exec(text)!;
    }
    return result;
}