import FoundResult from "./Util/FoundResult";

export default async function(text: string): Promise<FoundResult[]> {
    const result = new Array<FoundResult>();
    const regex = RegExp("([A-Za-z0-9]{2,})", "g");
    let execResult: RegExpExecArray = regex.exec(text)!;
    while (execResult) {
        // tslint:disable-next-line:no-unused-expression
        if (/[A-Za-z]/.test(execResult[0]) && /[0-9]/.test(execResult[0])){
            result.push({StartIndex: execResult.index, Value: execResult[0]});
        }
        execResult = regex.exec(text)!;
    }
    return result;
}
