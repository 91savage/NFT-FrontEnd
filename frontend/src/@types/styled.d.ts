import 'styled-components';

declare module 'styled-components' {
    export interface DefaultTheme {
        body: string;
        text: string;
        accentColor: string;
        bodyRgba: string;
        textRgba: string;
    }
}
