document.getElementById("buy").onclick = function() {
    document.getElementById('message').textContent = ('Товар успешно добавлен в корзину')
};
document.getElementById("details").onclick = function() {
    document.getElementById('info').textContent = ('Качественный звук, хорошая звука изоляция, гарантия на год!')
};
document.getElementById("delivery").onclick = function() {
    document.getElementById('delivery-info').textContent = ('Доставка по городу - 300р')
};
document.getElementById("clear").onclick = function() {
    document.getElementById('message').textContent = ('')
};
