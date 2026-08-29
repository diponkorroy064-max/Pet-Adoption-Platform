'use server'
import { headers } from "next/headers";
import { auth } from "../auth";


export const getPets = async () => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/pets/all`, { cache: 'no-store' });
    const pets = await res.json();
    return pets;
}


export const getPetsById = async (id) => {
    const { token } = await auth.api.getToken({
        headers: await headers()
    })
    console.log(token);

    const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/pets/${id}/byId`, {
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

    const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/pets/${email}`, {
        cache: 'no-store',
        headers: {
            authorization: `Bearer ${token}`
        }
    });
    const pets = await res.json();
    // console.log(pets);
    return pets;
}


export const getAdoptRequestById = async (petId) => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/adoption/${petId}/newId`);
    const adoptReqDataById = await res.json();
    // console.log(adoptReqDataById);

    return adoptReqDataById;
}


export const getAdoptRequestByEmail = async (Email) => {
    const { token } = await auth.api.getToken({
        headers: await headers()
    })
    console.log(token);

    const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/adoption/${Email}/userEmail`, {
        headers: {
            authorization: `Bearer ${token}`
        }
    });
    const adoptReqDataByEmail = await res.json();
    // console.log(adoptReqDataByEmail);

    return adoptReqDataByEmail;
}




