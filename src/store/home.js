const state = {
    homeInfo: [{
      homePhoto: ''
    }],
    // homeInfo: {
    //     homePhoto: {
    //        url: 'https://i.imgur.com/pSOsNdQ.png'
    //     },
    //     portfolioText: {
    //        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus',
    //        title:'Lorem ipsum dolor sit amet, consectetur adipiscing'
    //     },
    //     imagePop: {
    //       url: 'https://i.imgur.com/JHRp6sS.jpg'
    //     },
    //     popText:{
    //         title: 'GET TO KNOW US A LITTLE BETTER',
    //         text: `Praesent ut ligula massa. Vivamus vel mi eget mauris tempor imperdiet. Quisque tempor, neque in venenatis consequat, magna sapien 
    //         viverra ante, quis sagittis nulla urna nec mauris. Etiam vehicula justo mollis pretium sollicitudin.Vivamus vel mi eget mauris tempor imperdiet. Quisque tempor, neque in venenatis consequat, magna sapien 
    //         viverra ante, quis sagittis nulla urna nec mauris.
    //    Nulla sodales malesuada neque, consequat eleifend odio commodo eget. Sed nulla arcu, dictum ac odio vel, rutrum dignissim quam. 
    //    Vivamus vel mi eget maur, magna sapien 
    //         viverra ante, quis sagittis nulla urna nec mauris. 
    //    Etiam ac facilisis eros, at eleifend mi.`,
    //        url: 'https://www.youtube.com/embed/tgbNymZ7vqY?autoplay=1'
    //     },
    //     featuredText: {
    //         title: 'A COUPLE OF OUR FEATURED PROJECTS',
    //         text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque eu erat lacus, vel agittis ac, gravida quis tortor. .'
    //     }
    // }

}
const getters = {
    homeInfo: state => {
        return state.homeInfo;
       },
}
const mutations = {
  sethomeInfo(state, payload) {
    state.homeInfo = payload
  }

}
const actions = {

}

export default {
    state,
    getters,
    mutations,
    actions
}