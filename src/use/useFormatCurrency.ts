export function useFormatCurrency(args = {
    country: 'pl-PL',
    currency: 'eur'
}): {
    getFormattedCurrency: (cents: number) => string,
    getFormatted: (cents: number) => string,
    toCents: (value: number | string) => number
} {
    const {country, currency} = args;

    function getFormatted(cents: number) {
        return new Intl.NumberFormat(country, {minimumFractionDigits: 2, maximumFractionDigits: 2}).format(cents / 100);
    };

    const getFormattedCurrency = (cents: number): string => {
        const formatted = `${getFormatted(cents)} ${currency}`;
        return formatted;
    }

    function toCents(value: number | string): number {
        return Number(value) * 100;
    }

    return {getFormatted, getFormattedCurrency, toCents};
}
