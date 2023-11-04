import areaData from '../mapinfo.json'

export const getAreaLamps = (area) => {
    let areaLamps = areaData[area].lamps
    return areaLamps
}

export const getAreaInfo = (area) => {
    let selectedAreaData = areaData[area];
    return selectedAreaData
}