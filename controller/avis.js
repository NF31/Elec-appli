const Avis = require('../models/avis')
exports.getAvis = async(req, res, next)=>{
    try {
        const allAvis = await Avis.find()
        res.render('avis', {allAvis})
    } catch (error) {
        
    }
    
}
exports.postAvis = async (req, res, next)=>{
    const {nom, prenom, email, stars, comment} = req.body
    try {
        const avis = new Avis({
            nom: nom,
            prenom: prenom,
            email: email,
            stars: stars,
            comment: comment,
        })
        console.log(avis)
        await avis.save()


        const allAvis = await Avis.find()
        res.render('avis', {message_avis: 'Votre avis a bien été envoyé !', allAvis })
    } catch (error) {
        console.log(error)
        const allAvis = await Avis.find()
        res.render('avis', {err: 'Vous nous avez déjà envoyé un avis avec cet email !', allAvis })

    }
}