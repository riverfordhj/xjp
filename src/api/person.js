import request from '@/utils/request'

export function getBuildingsBySub(subId) {
  return request({
    url: `/person/GetBuildingInSubdivision/${subId}`,
    method: 'get'
  })
}

export function getSubdivsions() {
  return request({
    url: '/person/GetSubdivsions',
    method: 'get'
  })
}

export function getPersons() {
  return request({
    url: '/person/GetPersons',
    method: 'get'
  })
}

export function getPersonsByBuilding(buildingId) {
  return request({
    url: `/person/GetPersonsByBuilding/${buildingId}`,
    method: 'get'
  })
}

export function getPersonByRoom(roomInfo) {
  return request({
    url: '/person/GetPersonsInRoom',
    method: 'post',
    data: roomInfo
  })
}

export function getPeopleByResidents(HouseId) {
  return request({
    url: '/people/getPeopleByResidents',
    method: 'get',
    params: {
      HouseId: HouseId
    }
  })
}

export function getPeopleByBuilding(BuildingName) {
  return request({
    url: '/people/getPeopleByBuilding',
    method: 'get',
    params: {
      BuildingName: BuildingName
    }
  })
}
