
import FoundResult from "./Util/FoundResult";
import { USpacesPattern } from "./Util/Spaces";

export default async function(text: string): Promise<FoundResult[]> {
    const result = new Array<FoundResult>();
    const wordPattern = "[A-Za-z0-9]{2,}";
    const regex = RegExp(`${wordPattern}`, "mg");
    let execResult: RegExpExecArray = regex.exec(text)!;
    let prevStartIndex = execResult.index;
    let prevValue = execResult[0];
    execResult = regex.exec(text)!;
    while (execResult) {
        if (prevValue === execResult[0]
            && execResult.index - (prevStartIndex + prevValue.length) === 1
            && text.charAt(execResult.index - 1).match(USpacesPattern)) {
            result.push({Name: "FindRepeatedWords", StartIndex: prevStartIndex, Value: prevValue});
            result.push({Name: "FindRepeatedWords", StartIndex: execResult.index, Value: execResult[0]});
        }
        prevStartIndex = execResult.index;
        prevValue = execResult[0];
        execResult = regex.exec(text)!;
    }
    return result;
}
