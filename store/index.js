export const state = () => ({
  pokemon: []
})
export const mutations = {
  addPokemonData(state,payload) {
    console.log('payload---->',payload)
    state.pokemon = payload
  }
}
