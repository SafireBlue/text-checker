
import TextCheckResult from "./TextCheckResult";

export default async function(text: string): Promise<TextCheckResult[]> {
    const result = new Array<TextCheckResult>();
    const regex = RegExp("([A-Za-z]{2,})", "mg");
    let execResult: RegExpExecArray = regex.exec(text)!;
    while (execResult) {
        if (/[a-z][A-Z]/g.test(execResult[0])) {
            result.push({Name: "FindCamelCaseWords", StartIndex: execResult.index, Value: execResult[0]});
        }
        execResult = regex.exec(text)!;
    }
    return result;
}
