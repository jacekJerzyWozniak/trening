

const calculatedArea = (width, height) => {

    const area = width * height;

    return area;

}

const wallOne = calculatedArea(3, 5);
const wallTwo = calculatedArea(17, 7);

console.log(wallOne);
console.log(wallTwo);









const getSize = (width, height, depth) => {

    const area = width * height;
    const volume = width * height * depth;

    const sizes = [area, volume];
    return sizes;
}

const areaOne = getSize(3, 8, 2)[0];
const volumeOne = getSize(2, 5.5, 11.12)[1];

console.log(areaOne);
console.log(volumeOne);









const hotel = {

    name: "Quay",
    rooms: 40,
    booked: 25,
    gym: true,
    roomTypes: ["twin", "double", "suite"],

    checkAvailability: function () {

        const pokoje = hotel.rooms - hotel.booked;

        return pokoje;
    }
};



console.log(pokoje);
