type Option = {
    label: string,
    value: any
}
export const getYearsOptions = (startYear: number) => {
    const options: Array<Option> = [{label: 'All', value: ''}];
    const currentYear = new Date().getFullYear();

    for (let i = startYear; i <= currentYear; i++) {
        // @ts-ignore
        options.push({
            label: `Year: ${i}`,
            value: i,
        });
    }

    return options;
}
