$('#searchBox').on("change keyup paste", () => {
    $("#detail").css("display","none"); 
    if ($('#searchBox').val() == "") {
        $('#searchResult').html('<tr><td colspan="3">역명을 입력하여 검색해 주세요.</td></tr>')
        return;
    }

    const ajax_payload = {
        url: "/api/subInfo/keyword/" + $('#searchBox').val(),
        type: "GET"
    }

    $.ajax(ajax_payload)
        .done((data) => {
            $('#searchResult').html('');
            if (data.success) {
                data.message.forEach(e => {
                    $('#searchResult').append(`<tr><td>${e.subway_line}</td><td>${e.station_name}</td><td><button onClick="goIdx(${e.idx})" class="btn  btn-primary btn-sm btn-block ">자세히</button></td></tr>`)
                })
                if (data.message.length == 0) {
                    $('#searchResult').html('<tr><td colspan="3">검색결과가 존재하지 않습니다.</td></tr>')
                }
            }
        })
})


const goIdx = (idx) => {
    const ajax_payload = {
        url: "/api/subInfo/idx/" + String(idx),
        type: "GET"
    }

    $.ajax(ajax_payload)
        .done((data) => {
            if (!data.success)  return
            if(data.message.length == 0) return
            $("#detail").fadeIn("slow");
            location.href="#detail"
            setMap(data.message[0].station_addr)
            $("#detail_line").html(data.message[0].subway_line)
            $("#detail_station").html(data.message[0].station_name)
            $("#detail_addr").html(data.message[0].station_addr)
        })

}

const setMap = (addr)=>{
    var container = document.getElementById('map'); //지도를 담을 영역의 DOM 레퍼런스
            var geocoder = new kakao.maps.services.Geocoder();
            geocoder.addressSearch(addr, function (result, status) {
                if (status === kakao.maps.services.Status.OK) {
                    const topData = result[0];
                    var options = { //지도를 생성할 때 필요한 기본 옵션
                        center: new kakao.maps.LatLng(topData.y, topData.x), //지도의 중심좌표.
                        level: 3 //지도의 레벨(확대, 축소 정도)
                    };

                    var map = new kakao.maps.Map(container, options); //지도 생성 및 객체 리턴
                    var clusterer = new kakao.maps.MarkerClusterer({
                        map: map,
                        gridSize: 35,
                        averageCenter: true,
                        minLevel: 6,
                        disableClickZoom: true,
                        styles: [{
                            width: '53px', height: '52px',
                            background: 'url(cluster.png) no-repeat',
                            color: '#fff',
                            textAlign: 'center',
                            lineHeight: '54px'
                        }]
                    });
                    var marker = new kakao.maps.Marker({
                        position: new kakao.maps.LatLng(topData.y, topData.x)

                    });
                    clusterer.addMarker(marker);

                }
            });
}