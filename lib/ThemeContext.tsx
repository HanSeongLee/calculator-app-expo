import { Theme } from '../types/theme';
import React, { useState } from 'react';

export enum ActionType {
    CHANGE_THEME,
}

const initialValue = {
    theme: Theme.THEME_1,
    dispatch: (actionType: ActionType, payload: unknown) => {},
};

interface IProps {
    children: React.ReactNode;
}

export const ThemeContextWrapper: React.FC<IProps> = ({ children }) => {
    const [value, setValue] = useState(initialValue);

    const dispatch = (actionType: ActionType, payload: unknown) => {
        switch (actionType) {
            case ActionType.CHANGE_THEME: {
                setValue({
                    ...value,
                    theme: payload as Theme,
                });
                return;
            }
            default:
                return;
        }
    };

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
