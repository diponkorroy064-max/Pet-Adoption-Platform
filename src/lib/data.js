import { headers } from "next/headers";
import { auth } from "./auth";


export const getPets = async () => {
    const res = await fetch("http://localhost:5000/pets", { cache: 'no-store' });
    const pets = await res.json();
    return pets;
}


export const getPetsById = async (id) => {
    const { token } = await auth.api.getToken({
        headers: await headers()
    })
    console.log(token);

    const res = await fetch(`http://localhost:5000/pets/${id}/byId`, {
        headers: {
            authorization: `Bearer ${token}`
        }
    });

    const pets = await res.json();
    // console.log(pets);
    return pets;
}


export const getPetsByEmail = async (email) => {
    const { token } = await auth.api.getToken({
        headers: await headers()
    })
    console.log(token);

    const res = await fetch(`http://localhost:5000/pets/${email}`, {
        headers: {
            authorization: `Bearer ${token}`
        }
    });
    const pets = await res.json();
    // console.log(pets);
    return pets;
}


export const getAdoptRequestById = async (petId) => {
    const res = await fetch(`http://localhost:5000/adoption/${petId}/newId`);
    const adoptReqDataById = await res.json();
    // console.log(adoptReqDataById);

    return adoptReqDataById;
}


export const getAdoptRequestByEmail = async (Email) => {
    const { token } = await auth.api.getToken({
        headers: await headers()
    })
    console.log(token);

    const res = await fetch(`http://localhost:5000/adoption/${Email}/userEmail`, {
        headers: {
            authorization: `Bearer ${token}`
        }
    });
    const adoptReqDataByEmail = await res.json();
    // console.log(adoptReqDataByEmail);

    return adoptReqDataByEmail;
}









