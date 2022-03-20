const HomeModel = require('../models/HomeModel');

/* HomeModel.create({
    titulo: 40,
    descricao: Number(25)
})
.then(dados => console.log(dados)) */

HomeModel.find()
.then(dados => {
    this.dados = dados;
    for (let i in this.dados) {
        console.log(`Titulo do dado: ${this.dados[i].titulo}`)
    }
})

exports.paginaInicial = (req, res) => {
    res.render('index');
    return
}

exports.trataPost = (req, res) => {
    res.send(req.body)
    return
}