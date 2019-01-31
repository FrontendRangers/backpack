import React from 'react';
import { storiesOf } from '@storybook/react';
import { select } from '@storybook/addon-knobs';
import { withDocs } from 'storybook-readme';
import { ThemeProvider } from 'styled-components';

import { BpButton, BpButtonVariantEnum } from './Button';
import Readme from './README.md';

storiesOf('Button', module)
    .add('with text', withDocs(Readme, () => <BpButton>Hello Button</BpButton>))
    .add('with a theme', () => {
        const theme: any = select('theme', ['light', 'dark'], 'light');
        return (
            <ThemeProvider theme={{ mode: theme }}>
                <BpButton
                    variant={select(
                        'variant',
                        BpButtonVariantEnum,
                        BpButtonVariantEnum.default
                    )}>
                    Hello Button
                </BpButton>
            </ThemeProvider>
        );
    });
