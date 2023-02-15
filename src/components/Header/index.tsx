import React, { useContext, useMemo } from 'react';
import { StyleSheet, Text, ViewProps } from 'react-native';
import Container from 'components/Container';
import { Theme } from 'types/theme';
import { ThemeColor } from 'styles/theme-color';
import { ThemeContext } from 'lib/ThemeContext';
import { GlobalStyle } from 'styles/globals';
import ThemeToggleButtonContainer from 'containers/ThemeToggleButtonContainer';

interface IProps extends ViewProps {

}

const Header: React.FC<IProps> = () => {
    const { theme } = useContext(ThemeContext);

    const styles = useMemo(() => createStyles(theme), [theme]);

    return (
        <Container style={styles.container}>
            <Text style={[styles.text, GlobalStyle]}>
                calc
            </Text>

            <ThemeToggleButtonContainer />
        </Container>
    );
};

const createStyles = (theme: Theme) =>
    StyleSheet.create({
        container: {
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            paddingTop: 30,
            paddingBottom: 32,
        },
        text: {
            lineHeight: 29,
            textAlign: 'center',
            letterSpacing: -0.53,
            color: ThemeColor[theme].themeTextColor,
        }
    });

export default Header;
