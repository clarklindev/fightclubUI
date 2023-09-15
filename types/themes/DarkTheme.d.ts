export declare const colors: {
    blue: {
        100: string;
        200: string;
        300: string;
        400: string;
        500: string;
        600: string;
    };
    green: {
        100: string;
        200: string;
        300: string;
        400: string;
    };
    yellow: {
        100: string;
        200: string;
        300: string;
    };
    red: {
        100: string;
        200: string;
        300: string;
    };
    neutral: {
        100: string;
        200: string;
        300: string;
        400: string;
        500: string;
        600: string;
        700: string;
        800: string;
        900: string;
        1000: string;
    };
    dev: {
        debug: string;
        error: string;
    };
    status: {
        warning: string;
        error: string;
        success: string;
        info: string;
    };
};
export declare const transparency: {
    100: string;
    90: string;
    80: string;
    70: string;
    60: string;
    50: string;
    40: string;
    30: string;
    20: string;
    10: string;
    0: string;
};
export declare const global: {
    fontFamily: string;
    color: string;
    backgroundColor: string;
    padding: string;
    margin: string;
    gap: string;
    headingColor: string;
    headingFontFamily: string;
    borderWidth: string;
    border: string;
    borderRadius: string;
    inputHeight: string;
    inputPadding: string;
    dividerColor: string;
    componentIcons: string;
};
export type ThemeType = typeof darkTheme;
export declare const darkTheme: {
    name: string;
    Layout: {
        section: {
            padding: string;
            borderBottom: string;
        };
        block: {
            padding: string;
        };
    };
    Heading: {
        color: string;
        margin: string;
        lineHeight: string;
        fontWeight: string;
        fontFamily: string;
        fontSize: {
            h1: string;
            h2: string;
            h3: string;
            h4: string;
            h5: string;
            h6: string;
        };
    };
    Button: {
        primary: string;
        contained: {
            color: string;
            background: string;
            hover: string;
            border: string;
        };
        outlined: string;
        text: {
            color: string;
        };
    };
    Icon: {
        stroke: string;
        fill: string;
        fillOpacity: number;
    };
    Input: {
        color: string;
        inputHeight: string;
        backgroundColor: string;
        border: string;
        borderRadius: string;
    };
    Text: {
        color: string;
        marginBottom: string;
    };
    Accordion: {
        title: {
            color: string;
        };
        content: {
            color: string;
        };
        componentIcons: {
            stroke: string;
            fill: string;
        };
    };
    LabelSomething: {
        gap: string;
    };
    Separator: {
        color: string;
        borderColor: string;
        backgroundColor: string;
        margin: string;
        border: string;
    };
    Select: {
        padding: string;
        inputHeight: string;
        inputPadding: string;
        color: string;
        backgroundColor: string;
        border: string;
        borderRadius: string;
    };
    Slider: {
        formElementBackground: string;
    };
    Checkbox: {
        borderRadius: string;
        border: string;
        backgroundColor: string;
    };
    RadioButton: {
        borderRadius: string;
        border: string;
        backgroundColor: string;
    };
    Counter: {
        height: string;
        border: string;
        borderRadius: string;
        backgroundColor: string;
    };
};
