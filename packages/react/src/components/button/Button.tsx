import React, { Component } from 'react';
import styled, { css } from 'styled-components';
import theme from 'styled-theming';

// export interface IBpButtonProps extends Props<any> {
//     variant?: BpButtonVariantEnum;
//     size?: string;
//     isLoading?: boolean;
//     icon?: string;
//     shape?: string;
//     kind?: string;
//     disabled?: boolean;
//     fluid?: boolean;
//     theme?: any;
//     children: React.ReactNode;
// }

type IBpButtonProps = Partial<{
    variant?: BpButtonVariantEnum;
    size?: string;
    isLoading?: boolean;
    icon?: string;
    shape?: string;
    kind?: string;
    disabled?: boolean;
    fluid?: boolean;
    theme?: any;
    // children: React.ReactNode;
}>;

const initialState = { isLoading: false };
type State = Readonly<typeof initialState>;

export enum BpButtonVariantEnum {
    default = 'default',
    primary = 'primary',
    success = 'success',
    warning = 'warning',
}

export enum BpButtonSizeEnum {
    xsmall = 'xs',
    small = 'sm',
    medium = 'md',
    large = 'lg',
    xlarge = 'xl',
}

const backgroundColor = theme.variants('mode', 'variant', {
    default: { light: 'gray', dark: 'darkgray' },
    primary: { light: 'blue', dark: 'darkblue' },
    success: { light: 'green', dark: 'darkgreen' },
    warning: { light: 'orange', dark: 'darkorange' },
});

const buttonBaseStyles = css`
    background-color: ${backgroundColor};
    font-size: 1em;
    padding: 0.25em 1em;
    border-radius: 3px;
`;

const ButtonElement = styled.button<IBpButtonProps>`
    ${buttonBaseStyles}
`;

export class BpButton extends Component<IBpButtonProps, State> {
    static defaultProps = {
        variant: BpButtonVariantEnum.default,
    };

    constructor(props: IBpButtonProps) {
        super(props);
    }

    public render(): JSX.Element {
        const { children, size, theme, variant } = this.props;

        return (
            <ButtonElement theme={theme} variant={variant} size={size}>
                {children}
            </ButtonElement>
        );
    }
}
