export function shortNumber(value: number): string {
    if (value < 1000) return value.toString();

    const suffixes = ["", "k", "M", "B", "T"];
    const suffixIndex = Math.floor(Math.log10(value) / 3);

    const shortValue = value / Math.pow(1000, suffixIndex);
    const rounded = shortValue % 1 === 0 ? shortValue.toString() : shortValue.toFixed(1);

    return `${rounded}${suffixes[suffixIndex]}`;
}
