
import FoundResult from "./FoundResult";
import { USpacesPattern } from "./Util/Spaces";

export default async function(text: string): Promise<FoundResult[]> {
    const result = new Array<FoundResult>();
    const regex = RegExp(USpacesPattern, "mg");
    let execResult: RegExpExecArray = regex.exec(text)!;
    while (execResult) {
        result.push({Name: "FindSpaces", StartIndex: execResult.index, Value: execResult[0]});
        execResult = regex.exec(text)!;
    }
    return result;
}
