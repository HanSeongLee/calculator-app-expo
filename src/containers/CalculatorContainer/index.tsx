import React, { useMemo, useState } from 'react';
import TextField from 'components/TextField';
import { View } from 'react-native';
import CalculatorKeypad from 'components/CalculatorKeypad';
import { ActionKeyType, KeyList, KeyType, NumberKeyType } from 'types/key';

const CalculatorContainer: React.FC = () => {
    const [displayValue, setDisplayValue] = useState<string>('0');
    const [temp, setTemp] = useState<number | null>(null);
    const [operator, setOperator] = useState<ActionKeyType | null>(null);
    const [inputStatus, setInputStatus] = useState<boolean>(false);

    const fractionalParts = useMemo(() => {
        const fraction = displayValue.includes('.');
        return {
            fraction,
            value: fraction ? displayValue.split('.')[1] : '0',
        };
    }, [displayValue]);

    const calculate = (operator: ActionKeyType, initialValue: number, operand: number) => {
        switch (operator) {
            case ActionKeyType.KEY_PLUS:
                return initialValue + operand;
            case ActionKeyType.KEY_MINUS:
                return initialValue - operand;
            case ActionKeyType.KEY_DIVIDE:
                return initialValue / operand;
            case ActionKeyType.KEY_MULTIPLY:
                return initialValue * operand;
            default:
                return 0;
        }
    };

    const onPress = (keyType: KeyType) => {
        let result: number | string = 0;

        if (keyType in NumberKeyType) {
            if(inputStatus) {
                result = `${keyType}`;
                setInputStatus(false);
            } else {
                result = `${displayValue}${keyType}`;
            }
        }

        switch (keyType) {
            case ActionKeyType.KEY_DEL:
                const subResult = displayValue.substring(0, displayValue.length - 1);
                result = subResult === '-' ? 0 : subResult;
                break;
            case ActionKeyType.KEY_PLUS:
            case ActionKeyType.KEY_MINUS:
            case ActionKeyType.KEY_DIVIDE:
            case ActionKeyType.KEY_MULTIPLY:
                if (temp != null && operator === keyType) {
                    result = calculate(keyType, temp, Number(displayValue));
                    setTemp(result as number);
                    setInputStatus(true);
                } else {
                    setTemp(Number(displayValue));
                    setOperator(keyType);
                }
                break;
            case ActionKeyType.KEY_DOT:
                result = `${displayValue}.`;
                break;
            case ActionKeyType.KEY_RESET:
                result = 0;
                setTemp(null);
                setOperator(null);
                break;
            case ActionKeyType.KEY_EQUAL:
                if (operator && temp) {
                    result = calculate(operator, temp, Number(displayValue));
                    setInputStatus(true);
                }
                break;
            default:
                break;
        }

        setDisplayValue(typeof result === 'string' ? result : result.toString());
    };

    return (
        <View>
            <TextField>
                {Number(displayValue).toLocaleString(undefined, {
                    minimumFractionDigits: fractionalParts.fraction ?
                        (fractionalParts.value === '' ? 1 : fractionalParts.value.length) :
                        0,
                })}
            </TextField>

            <CalculatorKeypad style={{
                marginTop: 24,
            }}
                              keys={KeyList}
                              onPress={onPress}
            />
        </View>
    );
};

export default CalculatorContainer;
