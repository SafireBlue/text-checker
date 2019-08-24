import FoundResult from "./FoundResult";

export default async function(text: string): Promise<FoundResult[]> {
    const result = new Array<FoundResult>();
    const regex = RegExp("([A-Z]{2,})", "mg");
    let execResult: RegExpExecArray = regex.exec(text)!;
    while (execResult) {
        result.push({Name: "FindAllCapsWords", StartIndex: execResult.index, Value: execResult[0]});
        execResult = regex.exec(text)!;
    }
    return result;
}
