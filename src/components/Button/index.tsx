import React, { useContext, useMemo } from 'react';
import { View, StyleSheet, Text, TouchableOpacity, TouchableOpacityProps } from 'react-native';
// @ts-ignore
import InsetShadow from 'react-native-inset-shadow';
import { ThemeContext } from 'lib/ThemeContext';
import { Theme } from 'types/theme';
import { ThemeColor } from 'styles/theme-color';
import { GlobalStyle } from 'styles/globals';

interface IProps extends TouchableOpacityProps {
    variant?: ButtonVariant;
}

const Button: React.FC<IProps> = ({ variant, children, style, ...props }) => {
    const { theme } = useContext(ThemeContext);
    const styles = useMemo(() => createStyles(theme, variant ? variant : 'default'), [theme, variant]);

    return (
        <TouchableOpacity style={[
            styles.container,
            style,
        ]}
                          {...props}
        >
            <View style={[
                styles.innerBox,
            ]}
            >
                <Text style={[GlobalStyle, styles.text]}>
                    {children}
                </Text>
            </View>
        </TouchableOpacity>
    );
};

const backgroundColors = (theme: Theme, variant: ButtonVariant) => {
    switch (variant) {
        case 'primary':
            return ThemeColor[theme].themePrimaryColor;
        case 'secondary':
            return ThemeColor[theme].themeSecondaryColor;
        default:
            return ThemeColor[theme].themeDefaultColor;
    }
};

const boxShadows = (theme: Theme, variant?: ButtonVariant) => {
    switch (variant) {
        case 'primary':
            return ThemeColor[theme].themeShadowPrimaryColor;
        case 'secondary':
            return ThemeColor[theme].themeShadowSecondaryColor;
        default:
            return ThemeColor[theme].themeShadowDefaultColor;
    }
};

const textColor = (theme: Theme, variant?: ButtonVariant) => {
    switch (variant) {
        case 'primary':
            return ThemeColor[theme].themeHighlightColor;
        case 'secondary':
            return ThemeColor[theme].themeWhiteColor;
        default:
            return ThemeColor[theme].themeNaturalColor;
    }
};

const createStyles = (theme: Theme, variant: ButtonVariant) =>
    StyleSheet.create({
        container: {
            minWidth: 60,
            minHeight: 64,
            backgroundColor: boxShadows(theme, variant),
            borderRadius: 5,
            paddingBottom: 4,
        },
        innerBox: {
            flex: 1,
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: backgroundColors(theme, variant),
            borderRadius: 5,
        },
        text: {
            fontSize: variant === 'primary' || variant === 'secondary' ? 20 : 32,
            lineHeight: variant === 'primary' || variant === 'secondary' ? 18 * 1.2 : 29 * 1.2,
            textTransform: variant === 'primary' || variant === 'secondary' ? 'uppercase' : 'none',
            color: textColor(theme, variant),
            marginTop: 5,
        },
    });

Button.defaultProps = {
    variant: 'default',
};

export default Button;
