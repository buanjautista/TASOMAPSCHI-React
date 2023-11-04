import areaData from '../mapinfo.json'

export const getAreaLamps = (area) => {
    let areaLamps = areaData[area].lamps
    // console.log(areaLamps)
    return areaLamps
}

export const getAreaInfo = (area) => {
    let selectedAreaData = areaData[area];
    console.log(selectedAreaData)
    return selectedAreaData
}