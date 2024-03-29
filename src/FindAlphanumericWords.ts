import TextCheckResult from "./TextCheckResult";

export default async function(text: string): Promise<TextCheckResult[]> {
    const result = new Array<TextCheckResult>();
    const regex = RegExp("[A-Za-z0-9]{2,}", "mg");
    let execResult: RegExpExecArray = regex.exec(text)!;
    while (execResult) {
        // tslint:disable-next-line:no-unused-expression
        if (/[A-Za-z]/.test(execResult[0]) && /[0-9]/.test(execResult[0])) {
            result.push({Name: "FindAlphanumericWords", StartIndex: execResult.index, Value: execResult[0]});
        }
        execResult = regex.exec(text)!;
    }
    return result;
}
