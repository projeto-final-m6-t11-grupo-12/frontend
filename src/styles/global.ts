import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    html, body, div, span, applet, object, iframe,
    h1, h2, h3, h4, h5, h6, p, blockquote, pre,
    a, abbr, acronym, address, big, cite, code,
    del, dfn, em, img, ins, kbd, q, s, samp,
    small, strike, strong, sub, sup, tt, var,
    b, u, i, center,
    dl, dt, dd, ol, ul, li,
    fieldset, form, label, legend,
    table, caption, tbody, tfoot, thead, tr, th, td,
    article, aside, canvas, details, embed,
    figure, figcaption, footer, header, hgroup,
    menu, nav, output, ruby, section, summary,
    time, mark, audio, video, input {
        margin: 0;
        padding: 0;
        border: 0;
        font-size: 100%;
        font: inherit;
        vertical-align: baseline;
        box-sizing: border-box;
    }
    article, aside, details, figcaption, figure,
    footer, header, hgroup, menu, nav, section {
        display: block;
    }
    body {
        line-height: 1;
    }
    ol, ul {
        list-style: none;
    }
    blockquote, q {
        quotes: none;
    }
    blockquote:before, blockquote:after,
    q:before, q:after {
        content: '';
        content: none;
    }
    table {
        border-collapse: collapse;
        border-spacing: 0;
    }
    button {
        cursor: pointer;
        transition: 0.3s;
    }

    a {
        color: inherit;
        text-decoration: none;
    }

    body {
        min-height: 100vh;
    }
    
    .ReactModal__Overlay {
        &::-webkit-scrollbar {
            display: none;
        }
    }
    html {
        scroll-behavior: smooth;
    }
    :target {
        scroll-margin-top: .8em;
    }

    :root {
        --brand-1: #4529E6;
        --brand-2: #5126EA;
        --brand-3: #B0A6F0;
        --brand-4: #EDEAFD;
        --grey-0: #0B0D0D;
        --grey-1: #212529;
        --grey-2: #495057;
        --grey-3: #868E96;
        --grey-4: #ADB5BD;
        --grey-5: #CED4DA;
        --grey-6: #DEE2E6;
        --grey-7: #E9ECEF;
        --grey-8: #F1F3F5;
        --grey-9: #F8F9FA;
        --grey-10: #FDFDFD;
        --black: #000000;
        --white-fixed: #FFFFFF;
        --alert-1: #CD2B31;
        --alert-2: #FDD8D8;
        --alert-3: #FFE5E5;
        --sucess-1: #18794E;
        --sucess-2: #CCEBD7;
        --sucess-3: #DDF3E4;
        --random-1: #E34D8C;
        --random-2: #C04277;
        --random-3: #7D2A4D;
        --random-4: #7000FF;
        --random-5: #6200E3;
        --random-6: #36007D;
        --random-7: #349974;
        --random-8: #2A7D5F;
        --random-9: #153D2E;
        --random-10: #6100FF;
        --random-11: #5700E3;
        --random-12: #30007D;
    }

`;
