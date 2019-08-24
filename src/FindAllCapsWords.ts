import TextCheckResult from "./TextCheckResult";

export default async function(text: string): Promise<TextCheckResult[]> {
    const result = new Array<TextCheckResult>();
    const regex = RegExp("([A-Z]{2,})", "mg");
    let execResult: RegExpExecArray = regex.exec(text)!;
    while (execResult) {
        result.push({Name: "FindAllCapsWords", StartIndex: execResult.index, Value: execResult[0]});
        execResult = regex.exec(text)!;
    }
    return result;
}
