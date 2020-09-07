window.addEventListener('load', function () {
    var focusbg = document.querySelector('.focusbg');
    var ul = focusbg.querySelector('ul');
    var dot = document.querySelector('.dot');
    var bgWidth = focusbg.offsetWidth;
    var btnr = document.querySelector('.swiper-btn-next')
    var btnl = document.querySelector('.swiper-btn-prev')
    ul.addEventListener('mouseenter', function () {
        clearInterval(timer)
        timer = null
    })
    ul.addEventListener('mouseleave', function () {
        timer = setInterval(function () {
            btnr.click()
        }, 4000)
    })

    for (var i = 0; i < ul.children.length; i++) {
        var li = document.createElement('li')
        li.setAttribute('index', i)
        dot.appendChild(li);
        li.addEventListener('click', function () {
            for (var i = 0; i < dot.children.length; i++) {
                dot.children[i].className = '';
            }
            this.className = 'current';
            var index = this.getAttribute('index')
            num = index
            circle = index

            animate(ul, -index * bgWidth)

        })
    }
    dot.children[0].className = 'current';
    var first = ul.children[0].cloneNode(true)
    ul.appendChild(first)
    var num = 0;
    var circle = 0;
    btnr.addEventListener('click', function () {
        if (num == ul.children.length - 1) {
            ul.style.left = 0
            num = 0
        }
        num++
        animate(ul, -num * bgWidth)
        circle++
        for (var i = 0; i < dot.children.length; i++) {
            dot.children[i].className = '';
        }
        if (circle == dot.children.length) {
            circle = 0
        }
        dot.children[circle].className = 'current';


    })
    btnl.addEventListener('click', function () {

        if (num == 0) {
            num = ul.children.length - 1

            ul.style.left = num * bgWidth + 'px'
        }
        num--
        animate(ul, -num * bgWidth)



        for (var i = 0; i < dot.children.length; i++) {
            dot.children[i].className = '';
        }
        if (circle == 0) {
            circle = dot.children.length
        }
        circle--
        dot.children[circle].className = 'current';


    })
    var timer = setInterval(function () {
        btnr.click()
    }, 4000)
    // 以下显示隐藏
    var shopcar = document.querySelector('.shopcar')
    var shopcarlist = document.querySelector('.shopcarlist')
    var list = document.querySelector('.categoryList ul')
    var listdetails = document.querySelector('.listdetails')
    function displayyn(obj, obj2) {
        obj.addEventListener('mouseover', function () {
            obj2.style.display = 'block'
        })
        obj2.addEventListener('mouseover', function () {
            obj2.style.display = 'block'
        })
        obj2.addEventListener('mouseleave', function () {
            obj2.style.display = ''
        })
        obj.addEventListener('mouseleave', function () {
            obj2.style.display = 'none'
        })
    }
    displayyn(shopcar, shopcarlist)
    displayyn(list, listdetails)


})