
function animate(obj, target, callback) {
    clearInterval(obj.timer);
    obj.timer = setInterval(function () {
        if (target < 0) {
            var step = Math.floor((target - obj.offsetLeft) / 10)

        } else { var step = Math.ceil((target - obj.offsetLeft) / 10) }
        // step > 0 ? Math.ceil(step) : Math.floor(step)
        if (obj.offsetLeft == target) {
            clearInterval(obj.timer);
        }
        obj.style.left = obj.offsetLeft + step + 'px';
    }, 60)

}
