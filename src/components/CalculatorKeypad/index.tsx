import React, { useContext, useMemo } from 'react';
import { StyleSheet, View, ViewProps } from 'react-native';
import { Key, KeyType } from 'types/key';
import Button from 'components/Button';
import { ThemeContext } from 'lib/ThemeContext';
import { Theme } from 'types/theme';
import { ThemeColor } from 'styles/theme-color';

interface IProps extends ViewProps {
    keys: Key[];
    onPress: (keyType: KeyType) => void;
}

const CalculatorKeypad: React.FC<IProps> = ({ keys, onPress, style, ...props}) => {
    const { theme } = useContext(ThemeContext);
    const styles = useMemo(() => createStyles(theme), [theme]);

    return (
        <View style={[styles.container, style]}
              {...props}
        >
            <View style={[styles.box]}>
                {keys.map(({ keyType, variant }, index) => (
                    <Button style={[styles.button]}
                            key={index}
                            variant={variant}
                            onPress={_ => onPress(keyType)}
                    >
                        {keyType}
                    </Button>
                ))}
            </View>
        </View>
    );
};

const gap = 13;
const gapArea = gap / 2;
const createStyles = (theme: Theme) =>
    StyleSheet.create({
        container: {
            marginVertical: -gapArea,
            marginHorizontal: -gapArea,
            padding: gapArea,
        },
        box: {
            flexDirection: 'row',
            flexWrap: 'wrap',
            backgroundColor: ThemeColor[theme].themeBoxColor,
            borderRadius: 10,
            padding: 24 - gapArea,
        },
        button: {
            flex: 1,
            marginVertical: gapArea,
            marginHorizontal: gapArea,
        },
    });

export default CalculatorKeypad;
