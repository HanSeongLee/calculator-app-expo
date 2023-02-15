import { Theme } from '../types/theme';
import React, { useEffect, useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

export enum ActionType {
    CHANGE_THEME,
}

const initialValue = {
    theme: Theme.THEME_1,
    dispatch: async (actionType: ActionType, payload: unknown) => {},
};

interface IProps {
    children: React.ReactNode;
}

export const ThemeContextWrapper: React.FC<IProps> = ({ children }) => {
    const [value, setValue] = useState(initialValue);

    const dispatch = async (actionType: ActionType, payload: unknown) => {
        switch (actionType) {
            case ActionType.CHANGE_THEME: {
                const theme = payload as Theme;
                setValue({
                    ...value,
                    theme,
                });
                await AsyncStorage.setItem('theme', theme);
                return;
            }
            default:
                return;
        }
    };

    const loadTheme = async () => {
        const theme = await AsyncStorage.getItem('theme');
        if (theme !== null) {
            await dispatch(ActionType.CHANGE_THEME, theme);
        }
    };

    useEffect(() => {
        loadTheme();
    }, [])

    return (
        <ThemeContext.Provider value={{
            ...value,
            dispatch,
        }}
        >
            {children}
        </ThemeContext.Provider>
    );
}

export const ThemeContext = React.createContext(initialValue);
