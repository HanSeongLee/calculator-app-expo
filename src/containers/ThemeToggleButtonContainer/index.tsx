import React, { useContext } from 'react';
import MultiToggleButton from 'components/MultiToggleButton';
import { ActionType, ThemeContext } from 'lib/ThemeContext';
import { ThemeOptions } from 'types/theme';

const ThemeToggleButtonContainer: React.FC = () => {
    const { theme, dispatch } = useContext(ThemeContext);

    const onChangeValue = (value: string) => {
        dispatch(ActionType.CHANGE_THEME, value);
    };

    return (
        <MultiToggleButton name={'Theme'}
                           value={theme}
                           onChangeValue={onChangeValue}
                           options={ThemeOptions}
        />
    );
};

export default ThemeToggleButtonContainer;
