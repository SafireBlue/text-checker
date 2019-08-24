import TextCheckResult from "./TextCheckResult";

export default async function(text: string): Promise<TextCheckResult[]> {
    const result = new Array<TextCheckResult>();
    // tslint:disable-next-line:max-line-length
    const regex = RegExp("^(http:\/\/www\.|https:\/\/www\.|http:\/\/|https:\/\/)?[a-z0-9]+([\-\.]{1}[a-z0-9]+)*\.[a-z]{2,5}(:[0-9]{1,5})?(\/.*)?$", "mg");
    let execResult: RegExpExecArray = regex.exec(text)!;
    while (execResult) {
        result.push({Name: "FindUrls", StartIndex: execResult.index, Value: execResult[0]});
        execResult = regex.exec(text)!;
    }
    return result;
}
