import styled from "styled-components";
import { appearFromTop } from "../../styles/animations";

export const StyledMobileHeaderModal = styled.div`
    height: fit-content;
    width: 100%;
    border-radius: 3px;

    position: absolute;
    z-index: 11;
    top: 80px;
    left: 0px;

    background: #ffffff;

    color: var(--grey-2);
    font-family: "Inter", sans-serif;
    font-weight: 600;
    font-size: 16px;

    box-shadow: 0px 40px 40px 0px #00000017;

    .mobileHeaderModal__option {
        display: flex;
        flex-direction: column;
        gap: 44px;

        padding: 32px 16px;
        border-bottom: 2px solid var(--grey-6);

        span {
            cursor: pointer;
            transition: 0.3s;
            &:hover {
                filter: brightness(0.5);
            }
        }
    }

    .mobileHeaderModal__singUp {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 44px;

        padding: 32px 16px;

        span {
            align-self: start;

            cursor: pointer;
            transition: 0.3s;
            &:hover {
                filter: brightness(0.5);
            }
        }
    }
`;

export const StyledDesktopHeaderModal = styled.div`
    height: 202px;
    width: 200px;

    position: absolute;
    z-index: 20;
    right: 3.8%;
    top: 65px;

    padding: 21px 0px 21px 22px;
    border-radius: 4px;

    background: var(--grey-9);
    box-shadow: 0px 4px 40px -10px #00000040;

    display: flex;
    flex-direction: column;
    justify-content: space-between;

    box-shadow: 0px 40px 40px 0px #00000017;

    span {
        font-family: "Inter", sans-serif;
        font-size: 16px;
        color: var(--grey-2);

        cursor: pointer;
        transition: 0.3s;
        &:hover {
            filter: brightness(0.5);
        }
    }
`;

export const ModalContainer = styled.div`
    .modalBackdrop {
        position: fixed;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        z-index: 10;
    }
`;
