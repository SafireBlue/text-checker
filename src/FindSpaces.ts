
import TextCheckResult from "./TextCheckResult";
import { USpacesPattern } from "./Util/Spaces";

export default async function(text: string): Promise<TextCheckResult[]> {
    const result = new Array<TextCheckResult>();
    const regex = RegExp(USpacesPattern, "mg");
    let execResult: RegExpExecArray = regex.exec(text)!;
    while (execResult) {
        result.push({Name: "FindSpaces", StartIndex: execResult.index, Value: execResult[0]});
        execResult = regex.exec(text)!;
    }
    return result;
}
