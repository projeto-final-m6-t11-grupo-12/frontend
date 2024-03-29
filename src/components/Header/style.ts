import styled from "styled-components";
import { appearFromTop, fadeIn } from "../../styles/animations";

export const StyledHeader = styled.header`
    height: 80px;
    width: 100%;
    min-width: 320px;

    padding: 0px 4.3%;
    border-bottom: 2px solid var(--grey-6);

    background: var(--grey-10);

    display: flex;
    align-items: center;
    justify-content: space-between;
`;

export const LogoContainer = styled.section`
    cursor: pointer;
    animation: ${fadeIn} 300ms;
`;

export const MobileMenu = styled.section`
    cursor: pointer;

    transition: 0.3s;
    &:hover {
        filter: brightness(0.8);
    }
`;

export const DesktopMenu = styled.section`
    display: flex;
    gap: 44px;

    span {
        cursor: pointer;

        transition: 0.3s;
        &:hover {
            filter: brightness(0.8);
        }
    }

    .desktopMenu__options {
        height: 80px;

        display: flex;
        align-items: center;
        gap: 44px;

        color: var(--grey-2);

        font-family: "Inter", sans-serif;
        font-weight: 600;
        font-size: 16px;
    }

    .desktopMenu__separator {
        width: 2px;
        height: 80px;
        background: var(--grey-6);
    }

    .desktopMenu__singUp {
        display: flex;
        gap: 44px;
        align-items: center;

        color: var(--grey-2);

        font-size: 16px;
        font-family: "Inter", sans-serif;
        font-weight: 600;
    }

    .desktopMenu__profile {
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 8px;

        min-width: 205px;

        cursor: pointer;

        .desktopMenu__profile--icon {
            width: 32px;
            height: 32px;

            background: var(--brand-2);
            color: #ffffff;

            border-radius: 150px;

            display: flex;
            align-items: center;
            justify-content: center;

            font-family: "Inter", sans-serif;
            font-size: 14px;
            font-weight: 700;
        }

        .desktopMenu__profile--name {
            color: var(--grey-2);

            font-family: "Inter", sans-serif;
            font-weight: 400;
            font-size: 16px;

            cursor: pointer;
            transition: 0.3s;
            &:hover {
                filter: brightness(0.5);
            }
        }
    }
`;
