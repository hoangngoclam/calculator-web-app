export default class CCalculator {
    static getResultCal(numberA: number, operation: string, numberB: number): number {
        // console.log(numberA, operation, numberB);
        switch (operation) {
            case '+': {
                return numberA + numberB;
            }
            case '-': {
                return numberA - numberB;
            }
            case '*': {
                return numberA * numberB;
            }
            case '/': {
                return numberA / numberB;
            }
            default:
                return 0;
        }
    }
    static isAllowKeyInput(text: string): boolean {
        const regex = /\d|\+|\-|\*|\/|\.|Enter|Backspace|Delete/gm;
        return regex.test(text);
    }
    static isOperationKeyInput(text: string): boolean {
        const regex = /\+|\-|\*|\/|\./gm;
        return regex.test(text);
    }
}
