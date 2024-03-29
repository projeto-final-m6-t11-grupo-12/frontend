import styled from "styled-components";
import { appearFromLeft } from "../../styles/animations";

export const StyledLogin = styled.div`
    height: fit-content;
    min-height: 100vh;
    width: 100%;
    display: flex;
    flex-flow: column nowrap;
    justify-content: space-between;
    background-color: var(--grey-8);

    form {
        align-self: center;
        width: 91.5%;
        max-width: 412px;
        padding: 44px 48px;
        background-color: var(--grey-10);
        border-radius: 4px;
        margin: 122px 0;

        display: flex;
        flex-flow: column nowrap;
        align-items: center;

        animation: ${appearFromLeft} 1s;
    }

    form div:nth-child(2) {
        margin-bottom: 24px;
    }
    form div:nth-child(3) {
        margin-bottom: 9px;
    }

    h2 {
        color: var(--black);
        font-family: "Lexend", sans-serif;
        font-size: 24px;
        margin-bottom: 32px;
        align-self: flex-start;
    }

    .form__button--forgotPassword,
    .form__span--divider {
        font-family: "Inter", sans-serif;
        font-weight: 500;
        font-size: 14px;
        color: var(--grey-2);
    }

    .form__button--forgotPassword {
        padding: 0;
        border: 0;
        margin: 0;
        background-color: transparent;
        margin-bottom: 21px;
        align-self: flex-end;
        cursor: pointer;

        text-decoration: underline 0.05em rgba(0, 0, 0, 0);
        transition: text-decoration-color 300ms;
        &:hover {
            text-decoration-color: var(--grey-2);
        }
    }

    .form__span--divider {
        margin: 24px 0;
    }
`;

export const StyledSuccessModal = styled.div`
    margin-top: 22px;
    display: flex;
    flex-flow: column nowrap;
    gap: 20px;
    max-width: 472px;
    width: 83.73vw;

    .modalSuccess__h3--subtitle {
        color: var(--grey-1);
        font-size: 16px;
        font-weight: 500;
        font-family: "Lexend", sans-serif;
    }
    .modalSuccess__p--description {
        color: var(--grey-2);
        font-size: 16px;
        font-weight: 400;
        font-family: "Inter", sans-serif;
        margin-bottom: 13px;
        line-height: 28px;
    }
`;

export const StyledForgotPasswordModal = styled(StyledSuccessModal)`
    margin-top: 0;

    .forgotPasswordModal__span--feedback {
        color: var(--grey-2);
        font-size: 16px;
        font-weight: 400;
        font-family: "Inter", sans-serif;
        line-height: 28px;
    }
`;
