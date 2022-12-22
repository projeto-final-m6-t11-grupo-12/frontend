import {
    StyledAdminProfileBody,
    ProfileBackground,
    ProductListSection,
} from "./style";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import ProfileCard from "../../components/ProfileCard";
import ProductCardList from "../../components/ProductCardList";

import { IProductCard } from "../../components/ProductCardList";

import { useState } from "react";

import carPhoto from "../../assets/carPhoto.png";
import motorcyclePhoto from "../../assets/motorcyclePhoto.png";

const car: IProductCard = {
    id: "a",
    cover_image: carPhoto,
    description: "lorem ipsum",
    km: 10000,
    price: 150000,
    published: true,
    title: "title",
    username: "Fernando Scramignon",
    vehicle_type: "Carro",
    year: 2021,
};

const moto: IProductCard = {
    id: "a",
    cover_image: motorcyclePhoto,
    description: "vrummmmm",
    km: 5000,
    price: 90000,
    published: true,
    title: "title",
    username: "Fernando Scramignon",
    vehicle_type: "Moto",
    year: 2078,
};

const carsList: IProductCard[] = [];
const motoList: IProductCard[] = [];

for (let i = 0; i < 6; i++) {
    if (i % 2 !== 0) {
        carsList.push({ ...car, id: String(i), published: false });
        continue;
    }
    carsList.push({ ...car, id: String(i) });
}

for (let i = 0; i < 6; i++) {
    if (i % 2 == 0) {
        motoList.push({ ...moto, id: String(i * 10), published: false });
        continue;
    }
    motoList.push({ ...moto, id: String(i * 10) });
}

function ProfileViewAdmin() {
    const [cars, setCars] = useState(carsList);
    const [motos, setMotos] = useState(motoList);

    return (
        <StyledAdminProfileBody>
            <Header />
            <ProfileBackground />
            <ProfileCard isAdvertiser={true} />
            <ProductListSection>
                <ProductCardList
                    title="Carro"
                    advertise={true}
                    showActivity={false}
                    productList={cars}
                />
                <ProductCardList
                    title="Moto"
                    advertise={true}
                    showActivity={false}
                    productList={motos}
                />
            </ProductListSection>
            <Footer />
        </StyledAdminProfileBody>
    );
}

export default ProfileViewAdmin;
