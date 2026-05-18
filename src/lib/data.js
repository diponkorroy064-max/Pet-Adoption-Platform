
export const getPets = async () => {
    const res = await fetch("http://localhost:5000/pets", { cache: 'no-store' });
    const destinations = await res.json();
    return destinations;
}

