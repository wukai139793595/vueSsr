
import createApp from '../src/main'

export default (config) => {
    return new Promise((resolve, reject) => {
        let app = createApp();
        console.log('entry-server_app', app);
        app.$router.push(config.url);
        let matchedComponents = app.$router.getMatchedComponents();
        if(matchedComponents.length == 0) {
            return reject({code: 404})
        }
        Promise.all(matchedComponents.map(component => {
            if(component.serverRequest) {
                return component.serverRequest(app.$store)
            }
        })).then(() => {

            resolve(app);
        })
    })
}