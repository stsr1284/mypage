var index = 0,
    amount = 0,
    currTransl = [],
    translationComplete = true,
    moveOffset = 0,
    timer = null;

var transitionCompleted = function () {
    translationComplete = true;
};


function initCarousel(isInitial = true) {
    const carousel = document.getElementById('carousel');
    const slides = document.getElementsByClassName("slide");
    amount = slides.length;
    // 컨테이너의 너비 가져오기
    moveOffset = parseInt(window.getComputedStyle(document.getElementById('carousel-container')).width, 10);
    // 캐러셀의 너비 계산
    carousel.style.width = (amount * moveOffset) + 'px';
    
    
    // currTransl 올바르게 초기화
    for (var i = 0; i < amount; i++) {
        currTransl[i] = -moveOffset;
        slides[i].style.transform = 'translateX(' + currTransl[i] + 'px)';
        slides[i].style.opacity = '1';
        slides[i].addEventListener("transitionend", transitionCompleted, true);
        slides[i].addEventListener("transitionend", transitionCompleted, true);                    
        slides[i].addEventListener("webkitTransitionEnd", transitionCompleted, true);                    
        slides[i].addEventListener("oTransitionEnd", transitionCompleted, true);                    
        slides[i].addEventListener("MSTransitionEnd", transitionCompleted, true);                  
    }
    
    // 마지막 아이템을 시작 부분에 추가하여 올바른 변환이 이루어지도록 함
    if (isInitial) {
        carousel.insertBefore(carousel.children[amount - 1], carousel.children[0]);
    }
}
        

function prev()
{
    if (translationComplete === true)
    {
        translationComplete = false;
        index--;
        if (index == -1)
        {
            index = amount-1;
        }
        var outerIndex = (index) % amount;
        var slides = document.getElementsByClassName("slide");
        for (var i = 0; i < amount; i++)
        {
            slides[i].style.opacity = '1';    
            slides[i].style.transform = 'translateX('+(currTransl[i]+moveOffset)+'px)';
            currTransl[i] = currTransl[i]+moveOffset;
        }
        var outerSlide = slides[outerIndex];
        outerSlide.style.transform = 'translateX('+(currTransl[outerIndex]-(moveOffset*amount))+'px)';
        outerSlide.style.opacity = '0';
        currTransl[outerIndex] = currTransl[outerIndex]-moveOffset*(amount);
    }
}
    
    function next()
    {
        if (translationComplete === true)
        {
            translationComplete = false;
            var outerIndex = (index) % amount;
            var slides = document.getElementsByClassName("slide");
            index++;
            for(var i = 0; i < amount; i++)
            {
                slides[i].style.opacity = '1';    
                slides[i].style.transform = 'translateX('+(currTransl[i]-moveOffset)+'px)';
                currTransl[i] = currTransl[i]-moveOffset;
            }
            var outerSlide = slides[outerIndex];
            outerSlide.style.transform = 'translateX('+(currTransl[outerIndex]+(moveOffset*amount))+'px)';
            outerSlide.style.opacity = '0';
            currTransl[outerIndex] = currTransl[outerIndex]+moveOffset*(amount);
        }
    }

    window.addEventListener("resize", () => {
          if (!timer) {
            timer = setTimeout(() => {
              timer = null;
              initCarousel(false);
            }, 400);
          }
    });
    
    
    document.addEventListener("DOMContentLoaded", function () {
        initCarousel();
        document.getElementById("prev").addEventListener("click", prev, true);
        document.getElementById("next").addEventListener("click", next, true);
    });