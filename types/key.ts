export type Key = {
    keyType: KeyType;
    variant?: ButtonVariant;
}

export type KeyType = NumberKeyType | ActionKeyType;

export enum NumberKeyType {
    NUM_0 = 0,
    NUM_1 = 1,
    NUM_2 = 2,
    NUM_3 = 3,
    NUM_4 = 4,
    NUM_5 = 5,
    NUM_6 = 6,
    NUM_7 = 7,
    NUM_8 = 8,
    NUM_9 = 9,
}

export enum ActionKeyType {
    KEY_DEL = 'Del',
    KEY_PLUS = '+',
    KEY_MINUS = '-',
    KEY_DOT = '.',
    KEY_DIVIDE = '/',
    KEY_MULTIPLY = 'x',
    KEY_RESET = 'Reset',
    KEY_EQUAL = '=',
}

export const KeyList: Key[] = [
    {
        keyType: NumberKeyType.NUM_7,
    },
    {
        keyType: NumberKeyType.NUM_8,
    },
    {
        keyType: NumberKeyType.NUM_9,
    },
    {
        keyType: ActionKeyType.KEY_DEL,
        variant: 'secondary',
    },
    {
        keyType: NumberKeyType.NUM_4,
    },
    {
        keyType: NumberKeyType.NUM_5,
    },
    {
        keyType: NumberKeyType.NUM_6,
    },
    {
        keyType: ActionKeyType.KEY_PLUS,
    },
    {
        keyType: NumberKeyType.NUM_1,
    },
    {
        keyType: NumberKeyType.NUM_2,
    },
    {
        keyType: NumberKeyType.NUM_3,
    },
    {
        keyType: ActionKeyType.KEY_MINUS,
    },
    {
        keyType: ActionKeyType.KEY_DOT,
    },
    {
        keyType: NumberKeyType.NUM_0,
    },
    {
        keyType: ActionKeyType.KEY_DIVIDE,
    },
    {
        keyType: ActionKeyType.KEY_MULTIPLY,
    },
    {
        keyType: ActionKeyType.KEY_RESET,
        variant: 'secondary',
    },
    {
        keyType: ActionKeyType.KEY_EQUAL,
        variant: 'primary',
    },
];
