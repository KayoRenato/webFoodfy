const register = 'public'
const ChefsModel = require('../models/ChefsModel')
const LoadRecipe = require('../services/LoadRecipe')


module.exports = {
  async index(req, res){
    try {
      const recipes = await LoadRecipe.load('recipes')

      return res.render('index.njk', {register , recipes: recipes.slice(0,6)})
    } catch (err) {
      console.error(err);
      return res.status(404).render('notFound.njk', {register})
    }
  },
  async chefs(req,res){
    try {
      const chefs = await ChefsModel.listChefs()

      return res.render('chefs.njk', {register, chefs})
    } catch (err) {
      console.error(err);
      return res.status(404).render('notFound.njk', {register})
    }
  },
  about(req,res) {
    try {
      return res.render('about.njk')
    } catch (err) {
      console.error(err);
      return res.status(404).render('notFound.njk', {register})
    }
  }
}
