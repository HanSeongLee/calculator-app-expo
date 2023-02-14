export enum Theme {
    THEME_1 = '1',
    THEME_2 = '2',
    THEME_3 = '3',
};

export const ThemeOptions: Option[] = Object.values(Theme).map((value, index) => {
    return {
        label: `${index + 1}`,
        value,
    };
});
