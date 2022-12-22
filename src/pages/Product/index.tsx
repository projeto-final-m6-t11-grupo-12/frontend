import { useEffect, useState } from "react";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import {
    StyledProductPage,
    StyledProductsInfo,
    StyledProductUserDetails,
    StyledSectionProduct,
    StyledProductImage,
    StyledProductDetail,
    StyledProductDescription,
    StyledYearKmPriceDiv,
    StyledImages,
    StyledUserDetails,
    StyledInitialLetters,
} from "./style";

interface IUserProductPage {
    name: string;
    description: string;
}

interface IProductPage {
    cover_image: string;
    title: string;
    description: string;
    user: IUserProductPage;
    km: number;
    year: number;
    price: number;
    published: boolean;
    images: string[];
}

interface IProductPageProps {
    product: IProductPage;
}

function ProductPage({ product }: IProductPageProps) {
    const {
        cover_image,
        title,
        description,
        user, // Mudará para user_id
        km,
        year,
        price,
        published,
        images,
    }: IProductPage = product;

    const [initialLetters, setInitialLetters] = useState<string>("");
    const [convertedPrice, setConvertedPrice] = useState<number>(0);

    // Adicionar dependencia futuramente, provavelmente o product
    useEffect(() => {
        setInitialLetters(
            user.name
                .split(" ")
                .slice(0, 2)
                .map((elem) => elem[0].toUpperCase())
                .join("")
        );

        setConvertedPrice(price / 100);
    }, []);
    return (
        <>
            <Header />
            <StyledProductPage>
                <StyledSectionProduct>
                    <StyledProductsInfo>
                        <StyledProductImage>
                            <img src={cover_image} alt="Imagem de capa" />
                        </StyledProductImage>
                        <StyledProductDetail>
                            <h6>{title}</h6>
                            <StyledYearKmPriceDiv>
                                <div>
                                    <p>{year}</p>
                                    <p>{km} KM</p>
                                </div>
                                <p>
                                    {convertedPrice.toLocaleString("pt-BR", {
                                        style: "currency",
                                        currency: "BRL",
                                    })}
                                </p>
                            </StyledYearKmPriceDiv>
                            <button>Comprar</button>
                        </StyledProductDetail>
                        <StyledProductDescription>
                            <h6>Descrição</h6>
                            <p>{description}</p>
                        </StyledProductDescription>
                    </StyledProductsInfo>
                    <StyledProductUserDetails>
                        <StyledImages>
                            <h6>Fotos</h6>
                            <ul>
                                {images?.map((img) => (
                                    <li>
                                        <img src={img} />
                                    </li>
                                ))}
                            </ul>
                        </StyledImages>
                        <StyledUserDetails>
                            <StyledInitialLetters>
                                {initialLetters}
                            </StyledInitialLetters>
                            <h6>{user.name}</h6>
                            <p className="description">{user.description}</p>
                            <button>Ver todos anuncios</button>
                        </StyledUserDetails>
                    </StyledProductUserDetails>
                </StyledSectionProduct>
            </StyledProductPage>
            <Footer />
        </>
    );
}

export default ProductPage;