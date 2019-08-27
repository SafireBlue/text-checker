
import TextCheckResult from "./TextCheckResult";
import { UNonAsciiSpacesPattern, USpacesPattern } from "./Util/Spaces";

// tslint:disable-next-line:max-line-length
export default async function(text: string, options: {excludesAsciiSpace: boolean} = {excludesAsciiSpace: false}): Promise<TextCheckResult[]> {
    const result = new Array<TextCheckResult>();
    const regex = RegExp(options.excludesAsciiSpace ? UNonAsciiSpacesPattern : USpacesPattern, "mg");
    let execResult: RegExpExecArray = regex.exec(text)!;
    while (execResult) {
        result.push({Name: "FindSpaces", StartIndex: execResult.index, Value: execResult[0]});
        execResult = regex.exec(text)!;
    }
    return result;
}
