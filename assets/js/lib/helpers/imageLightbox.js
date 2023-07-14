import magnificPopup from './magnificPopup';
import $ from 'jquery';

var imageLightbox = ()=>{
    $(document).ready(function() {
        var $img = $(".image-lightbox");
        $.each($img,function(index,item){
            var $item = $(item);
            //console.log($item.attr("src"));
            var src = $item.attr("src");
            $item.magnificPopup({
                items: {
                    src: src
                  },
                  type: 'image',
                //  callbacks:{
                //     open:function(){
                //         console.log("open",$(this)[0]["content"]);
                //         var scale = 1,
                //         panning = false,
                //         pointX = 0,
                //         pointY = 0,
                //         start = { x: 0, y: 0 },
                //         zoom = $(this)[0]["content"][0];
                
                //       function setTransform() {
                //         zoom.style.transform = "translate(" + pointX + "px, " + pointY + "px) scale(" + scale + ")";
                //       }
                
                //       zoom.onmousedown = function (e) {
                //         e.preventDefault();
                //         start = { x: e.clientX - pointX, y: e.clientY - pointY };
                //         panning = true;
                //       }
                
                //       zoom.onmouseup = function (e) {
                //         panning = false;
                //       }
                
                //       zoom.onmousemove = function (e) {
                //         e.preventDefault();
                //         if (!panning) {
                //           return;
                //         }
                //         pointX = (e.clientX - start.x);
                //         pointY = (e.clientY - start.y);
                //         setTransform();
                //       }
                
                //       zoom.onwheel = function (e) {
                //         e.preventDefault();
                //         var xs = (e.clientX - pointX) / scale,
                //           ys = (e.clientY - pointY) / scale,
                //           delta = (e.wheelDelta ? e.wheelDelta : -e.deltaY);
                //         (delta > 0) ? (scale *= 1.2) : (scale /= 1.2);
                //         pointX = e.clientX - xs * scale;
                //         pointY = e.clientY - ys * scale;
                
                //         setTransform();
                //       }
                //     }
                //  }
                  
            });

            
        })
        
        
        //$('.image-lightbox').magnificPopup({type:'image'});
      });
}
export default imageLightbox;