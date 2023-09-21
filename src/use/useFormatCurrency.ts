export function useFormatCurrency(): Object {
    function getFormatted(cents: number) {
        return (cents / 100).toString()
    };

    function getFormattedCurrency(cents: number) {
        const currency = '€';
        const formatted = `${getFormatted(cents)} ${currency}`;
        return formatted;
    }

    function toCents(value: number | string): number {
        return Number(value) * 100;
    }

    return {getFormatted, getFormattedCurrency, toCents};
}
