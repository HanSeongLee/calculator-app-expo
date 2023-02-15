import React, { useContext, useMemo } from 'react';
import { View, Text, ViewProps, StyleSheet } from 'react-native';
import { Theme } from 'types/theme';
import { ThemeContext } from 'lib/ThemeContext';
import { ThemeColor } from 'styles/theme-color';
import { GlobalStyle } from 'styles/globals';

interface IProps extends ViewProps{

}

const TextField: React.FC<IProps> = ({ style, children, ...props }) => {
    const { theme } = useContext(ThemeContext);
    const styles = useMemo(() => createStyles(theme), [theme]);

    return (
        <View style={[styles.container, style]}
              {...props}
        >
            <Text style={[GlobalStyle, styles.text]}>
                {children}
            </Text>
        </View>
    );
};

const createStyles = (theme: Theme) =>
    StyleSheet.create({
        container: {
            maxHeight: 88,
            backgroundColor: ThemeColor[theme].themeTextBoxColor,
            borderRadius: 10,
            paddingTop: 29,
            paddingHorizontal: 24,
            paddingBottom: 22,
        },
        text: {
            maxHeight: 88,
            fontSize: 40,
            lineHeight: 37,
            letterSpacing: -0.67,
            color: ThemeColor[theme].themeTextColor,
            textAlign: 'right',
            overflow: 'scroll',
        },
    });

export default TextField;
