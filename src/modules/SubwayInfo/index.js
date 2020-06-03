const { connectionPool } = require('../../../database')

class SubwayInfo{
    constructor(){
        const self = {}
        self.search_station_name = this.search_station_name
        self.search_station_idx = this.search_station_idx
        self.get_congestion_idx = this.get_congestion_idx
        return self
    }

    async search_station_name(stationname=""){
        try{
            const conn = await connectionPool.getConnection(async conn=>conn);
            const query = "SELECT idx, station_name, subway_line FROM subway_station WHERE station_name like ?"
            const keyword = '%'+stationname+'%'
            const [rs] = await conn.query(query,[keyword]);
            await conn.commit();
            conn.release()
            return rs
        }catch(e){
            console.log(e);
            return []
        }
    }
    async search_station_idx(stationidx=""){
        try{
            const conn = await connectionPool.getConnection(async conn=>conn);
            const query = "SELECT * FROM subway_station WHERE idx = ?"
            const idx = stationidx
            const [rs] = await conn.query(query,[idx]);
            await conn.commit();
            conn.release()
            return rs
        }catch(e){
            console.log(e);
            return []
        }
    }

    async get_congestion_idx(stationidx=""){
        try{
            const conn = await connectionPool.getConnection(async conn=>conn);
            const query = "SELECT * FROM get_latest_congestion WHERE station_id = ?"
            const idx = stationidx
            const [rs] = await conn.query(query,[idx]);
            await conn.commit();
            conn.release()
            return rs
        }catch(e){
            console.log(e);
            return []
        }
    }

    async
}


module.exports = SubwayInfo