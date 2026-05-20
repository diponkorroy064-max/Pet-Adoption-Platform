
export const getPets = async () => {
    const res = await fetch("http://localhost:5000/pets", { cache: 'no-store' });
    const pets = await res.json();
    return pets;
}


export const getPetsById = async(id) => {
    const res = await fetch(`http://localhost:5000/pets/${id}/byId`);
    const pets = await res.json();
    // console.log(pets);
    return pets;
}


export const getPetsByEmail = async (email) => {
    const res = await fetch(`http://localhost:5000/pets/${email}`);
    const pets = await res.json();
    // console.log(pets);
    return pets;
}



