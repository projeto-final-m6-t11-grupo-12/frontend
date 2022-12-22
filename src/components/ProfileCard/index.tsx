import { StyledCard } from "./style";
import Button from "../Button";

interface IProfileProps {
    isAdvertiser: boolean;
}

function ProfileCard({ isAdvertiser }: IProfileProps) {
    return (
        <StyledCard>
            <div className="profileNameDiv">
                <div className="profileNameDiv__icon">FS</div>
                <div className="profileNameDiv__name">
                    <h2>Fernando Scramignon</h2>
                    <Button
                        size="small"
                        type="button"
                        height="fit-content"
                        width="90px"
                        backgroundcolor="var(--brand-4)"
                        border="2px solid var(--brand-4)"
                        color="var(--brand-1)"
                        hover={{
                            backgroundColorHover: "var(--brand-2)",
                            colorHover: "#ffffff",
                            border: "1.5px solid var(--brand-4)",
                        }}
                    >
                        Anunciante
                    </Button>
                </div>
            </div>
            <p className="profileDescription">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s
            </p>
            {isAdvertiser && (
                <Button
                    size="small"
                    type="button"
                    height="fit-content"
                    width="150px"
                    backgroundcolor="transparent"
                    border="2px solid var(--brand-4)"
                    color="var(--brand-1)"
                    hover={{
                        backgroundColorHover: "var(--brand-2)",
                        colorHover: "#ffffff",
                        border: "2px solid var(--brand-1)",
                    }}
                >
                    Criar Anuncio
                </Button>
            )}
        </StyledCard>
    );
}

export default ProfileCard;
