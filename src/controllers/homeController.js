const HomeModel = require('../models/HomeModel');

HomeModel.create({
    titulo: 'teste',
    descricao: Number(90)
})
.then(dados => console.log(dados))
.catch(e=> console.log(e));

HomeModel.find()
.then(dados => {
    this.dados = dados;
    for (let i in this.dados) {
        console.log(`Titulo do dado: ${this.dados[i].titulo}`)
    }
}).catch(e => console.log(e));

exports.paginaInicial = (req, res) => {
    res.render('index');
    return
}

exports.trataPost = (req, res) => {
    res.send(req.body)
    return
}