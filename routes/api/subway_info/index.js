var express = require('express');
var router = express.Router();

const Service = require('./service')

/* GET home page. */
router.get('/keyword/:keyword', async function(req,res,next){
    try{
        const service = new Service()
        const keyword = req.params.keyword
        const rs = await service.searchStationName(keyword)
        res.send({status:res.status, success:true, error:false, messageType:"dictArray", message:rs})
    }catch(e){
        console.log(e)
        res.send({status:res.status, success:false, error:true, messageType:"error", message:e})
    }
    
})
router.get('/idx/:idx', async function(req,res,next){
    try{
        const service = new Service()
        const idx = req.params.idx
        const rs = await service.searchStationIdx(idx)
        res.send({status:res.status, success:true, error:false, messageType:"dictArray", message:rs})
    }catch(e){
        console.log(e)
        res.send({status:res.status, success:false, error:true, messageType:"error", message:e})
    }
    
})
router.get('/congestion/:idx', async function(req,res,next){
    try{
        const service = new Service()
        const idx = req.params.idx
        const rs = await service.getCongestionIdx(idx)
        res.send({status:res.status, success:true, error:false, messageType:"dictArray", message:rs})
    }catch(e){
        console.log(e)
        res.send({status:res.status, success:false, error:true, messageType:"error", message:e})
    }
    
})


/* POST home page. */


module.exports = router;
