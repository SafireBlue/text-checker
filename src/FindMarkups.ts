import TextCheckResult from "./TextCheckResult";

export default async function(text: string): Promise<TextCheckResult[]> {
    const result = new Array<TextCheckResult>();
    const singledtonTag: string = "<.+?/>";
    const startTag: string = "<[^/].*?>";
    const endTag: string = "</.+?>";
    let startTagCounter: number = 0;
    let startTagIndex: number = 0;
    const regex = RegExp(`(${singledtonTag}|${startTag}|${endTag})`, "mg");
    let execResult: RegExpExecArray = regex.exec(text)!;
    while (execResult) {
        const value: string = execResult[0];
        if (value.match(singledtonTag)) {
            result.push({Name: "FindMarkups", StartIndex: execResult.index, Value: value});
        } else if (value.match(startTag)) {
            if (startTagCounter === 0) {
                startTagIndex = execResult.index;
            }
            startTagCounter++;
        } else {
            startTagCounter--;
            if (startTagCounter === 0) {
                // tslint:disable-next-line:max-line-length
                result.push({
                    Name: "FindMarkups",
                    StartIndex: startTagIndex,
                    Value: text.substring(startTagIndex, execResult.index + value.length),
                });
            }
        }
        execResult = regex.exec(text)!;
    }
    return result;
}
