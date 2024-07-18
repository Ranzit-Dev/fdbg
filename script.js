$(document).ready(function(){
    var modal = document.getElementById('pop-modal');
    var span = document.getElementById('closeIcon');

    if (matchMedia) {
        var x = window.matchMedia('(max-width: 992px)');
        x.addListener(smallScreen);
        smallScreen(x);
    }

    // Small screed
    function smallScreen(x){
        if (x.matches) {
           showModal();
        } else{
            $('body').one('mouseleave', function(){
                modal.style.display = 'block';
            });

            span.addEventListener('click', ()=> {
                modal.style.display = 'none';
            });

            window.onclick = function(e){
                if (e.target == modal) {
                    modal.style.display = 'none';
                }
            }
            
        }
    }


    //Show Modal
    function showModal(){
       setTimeout(function(){
           modal.style.display = 'block';
           modal.style.padding = '0';
           document.getElementsByClassName('body-modal')[0].style.width = '100%';
           modal.style.marginTop = '50px';

           span.addEventListener('click', ()=> {
            modal.style.display = 'none';
        });

        window.onclick = function(e){
            if (e.target == modal) {
                modal.style.display = 'none';
            }
        }
       }, 5000);
    }
})