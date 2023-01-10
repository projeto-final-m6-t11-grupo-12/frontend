import { StyledNoAnnouncement } from "./style";

export interface INoAnnoun {
    message: string;
}

function NoAnnouncement({ message }: INoAnnoun) {
    return (
        <StyledNoAnnouncement>
            <h6>{message}</h6>
        </StyledNoAnnouncement>
    );
}

export default NoAnnouncement;
