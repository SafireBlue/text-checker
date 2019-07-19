
import FoundResult from "./Util/FoundResult";

export default async function(text: string): Promise<FoundResult[]> {
    const result = new Array<FoundResult>();
    const regex = RegExp("([A-Za-z]{2,})", "g");
    let execResult: RegExpExecArray = regex.exec(text)!;
    while (execResult) {
        if (/[a-z][A-Z]/g.test(execResult[0])) {
            result.push({StartIndex: execResult.index, Value: execResult[0]});
            execResult = regex.exec(text)!;
        }
    }
    return result;
}