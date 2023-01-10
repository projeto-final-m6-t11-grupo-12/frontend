import {
    IFullProduct,
    ISimpleProduct,
    ProductContext,
} from "../../providers/product";
import { useEffect, useRef, useState } from "react";
import ProductCard from "../ProductCard";
import { StyledProductCardList } from "./style";
import { motion } from "framer-motion";
import NoAnnouncement from "../NoAnnouncement";

export interface IProductCardListProps {
    title: string;
    productList: IFullProduct[] | ISimpleProduct[];
    showActivity: boolean;
    advertise: boolean;
    username?: string;
    id?: string;
}

function ProductCardList({
    title,
    productList,
    showActivity,
    advertise,
    username,
    id,
}: IProductCardListProps) {
    const carousel: any = useRef();
    const [width, setWidth] = useState(0);

    useEffect(() => {
        setWidth(carousel.current?.scrollWidth - carousel.current?.offsetWidth);
    }, [carousel.current]);

    return (
        <StyledProductCardList id={id}>
            <h5>{title}s</h5>
            {productList.length === 0 ? (
                <NoAnnouncement message="Ainda não há anúncios" />
            ) : (
                <motion.ul
                    ref={carousel}
                    className="carousel"
                    whileTap={{ cursor: "grabbing" }}
                >
                    <motion.div
                        className="inner"
                        drag="x"
                        dragConstraints={{ right: 0, left: -width }}
                        whileDrag={{ pointerEvents: "none" }}
                    >
                        {productList?.map(
                            (product) =>
                                product.vehicle_type == title && (
                                    <motion.li key={product.id}>
                                        <ProductCard
                                            product={product}
                                            showActivity={showActivity}
                                            advertise={advertise}
                                            username={username}
                                        />
                                    </motion.li>
                                )
                        )}
                    </motion.div>
                </motion.ul>
            )}
        </StyledProductCardList>
    );
}

export default ProductCardList;
