export function toUSD(number) {
    return number.toLocaleString('en-US', {style: 'currancy', currency: 'USD' });
}