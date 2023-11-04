import areaData from '../mapinfo.json'

export const getAreaLamps = (area) => {
    let areaLamps = areaData[area].lamps
    return areaLamps
}

export const getAreaInfo = (area) => {
    let selectedAreaData = areaData[area];
    return selectedAreaData
}

export const convertPos = (x, y) => {
    let newCoords = {
        x: ((x-5)*0.125), 
        y: ((y-24)*0.125)
    };
    return newCoords
}