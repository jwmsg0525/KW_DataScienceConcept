const SubwayInfo = require('../../../src/modules/SubwayInfo')

class Service {
    constructor(){
        const self = {}
        self.subwayInfo = new SubwayInfo()
        self.searchStationName = this.searchStationName
        self.searchStationIdx = this.searchStationIdx
        self.getCongestionIdx = this.getCongestionIdx
        return self
    }
    
    async searchStationName(stationName = ""){
        return await this.subwayInfo.search_station_name(stationName)
    }
    async searchStationIdx( idx = ""){
        return await this.subwayInfo.search_station_idx(idx)
    }
    async getCongestionIdx( idx = ""){
        return await this.subwayInfo.get_congestion_idx(idx)
    }

}

module.exports= Service