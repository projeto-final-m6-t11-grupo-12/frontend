import { StyledHeader, LogoContainer, MobileMenu, DesktopMenu } from "./style";

import colorizedLogo from "../../assets/motorsShopColor.svg";
import bars from "../../assets/bars.svg";
import xMark from "../../assets/xMark.svg";

import HeaderModal from "../HeaderModal";
import Button from "../Button";

import { useState, useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";

import { limitString } from "../../utils";
import { IFullUser, UserContext } from "../../providers/user";
import { IHeaderProps } from "../../interfaces/header";

import { ProductContext } from "../../providers/product";

function Header({ yPositions }: IHeaderProps) {
    const [isDesktop, setIsDesktop] = useState<boolean>(
        window.innerWidth > 768
    );
    const [modalIsOpen, setModalIsOpen] = useState<boolean>(false);

    const [username, setUsername] = useState<string>("...");
    const [isAdvertiser, setIsAdvertiser] = useState<boolean>(false);

    const [avatar, setAvatar] = useState<string>("...");
    const { change } = useContext(ProductContext);

    const { isAuthenticated, getUserById, setIsAuthenticated } =
        useContext(UserContext);

    const navigate = useNavigate();

    function alternateModalIsOpen() {
        setModalIsOpen(!modalIsOpen);
    }

    function handleResize() {
        if (window.innerWidth >= 768) {
            return setIsDesktop(true);
        }
        return setIsDesktop(false);
    }

    useEffect(() => {
        window.addEventListener("resize", handleResize);
    });

    useEffect(() => {
        const id = localStorage.getItem("user_id");
        if (!id) setIsAuthenticated(false);
        else {
            getUserById(id).then((res: IFullUser | undefined) => {
                if (res?.name) {
                    const { name, isAdvertiser } = res;

                    const nameArray = name.split(" ");
                    let avatar = nameArray[0][0];

                    if (nameArray.length >= 2) {
                        avatar += nameArray[1][0];
                    }
                    setIsAdvertiser(isAdvertiser);
                    setAvatar(avatar);
                    setUsername(res.name);
                }
            });
        }
    }, [change]);

    return (
        <>
            <StyledHeader id="header">
                <LogoContainer onClick={() => navigate("/")}>
                    <img
                        className="colorizedLogo"
                        src={colorizedLogo}
                        alt="Motors Shop logo colorized"
                    />
                </LogoContainer>
                {!isDesktop ? (
                    <MobileMenu>
                        {!modalIsOpen ? (
                            <img
                                className="bars"
                                src={bars}
                                alt="bars menu"
                                onClick={alternateModalIsOpen}
                            />
                        ) : (
                            <img
                                src={xMark}
                                alt="Close modal icon"
                                onClick={alternateModalIsOpen}
                            />
                        )}
                    </MobileMenu>
                ) : (
                    <DesktopMenu>
                        <div className="desktopMenu__options">
                            <span
                                onClick={() =>
                                    yPositions?.carsY &&
                                    window.scrollTo({
                                        top: yPositions.carsY,
                                        behavior: "smooth",
                                    })
                                }
                            >
                                Carros
                            </span>
                            <span
                                onClick={() => {
                                    yPositions?.bikesY &&
                                        window.scrollTo({
                                            top: yPositions.bikesY,
                                            behavior: "smooth",
                                        });
                                }}
                            >
                                Motos
                            </span>
                            <span>Leilão</span>
                        </div>
                        <div className="desktopMenu__separator"></div>
                        {isAuthenticated ? (
                            <div
                                className="desktopMenu__profile"
                                onClick={alternateModalIsOpen}
                            >
                                <div className="desktopMenu__profile--icon">
                                    {avatar}
                                </div>
                                <div className="desktopMenu__profile--name">
                                    {limitString(username, 19)}
                                </div>
                            </div>
                        ) : (
                            <div className="desktopMenu__singUp">
                                <span onClick={() => navigate("/login")}>
                                    Fazer Login
                                </span>
                                <Button
                                    onFunction={() => navigate("/register")}
                                    size="small"
                                    type="button"
                                    height="fit-content"
                                    width="fit-content"
                                    backgroundcolor="transparent"
                                    border="2px solid var(--grey-6)"
                                    color="var(--grey-0)"
                                    hover={{
                                        backgroundColorHover: "var(--grey-1)",
                                        colorHover: "var(--grey-10)",
                                        border: "2px solid var(--grey-1)",
                                    }}
                                >
                                    Cadastrar
                                </Button>
                            </div>
                        )}
                    </DesktopMenu>
                )}
            </StyledHeader>
            {modalIsOpen && (
                <HeaderModal
                    isAdvertiser={isAdvertiser}
                    isDesktop={isDesktop}
                    alternateModalIsOpen={alternateModalIsOpen}
                    yPositions={yPositions}
                />
            )}
        </>
    );
}

export default Header;
