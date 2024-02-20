const menus = require('../dataBase/menus.json')

module.exports = (req, res) => {
    menuId = req.params.id,
    menuFind = menus.find((menu) => menu.id === parseInt(menuId))
    res.render('detailMenu', {menuFind})
}