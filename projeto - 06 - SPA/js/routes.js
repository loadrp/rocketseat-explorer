export class Router {

    routes = {};

    add(routeName, page){
        this.routes[routeName] = page;
        
    }


    route(event) {

        event = event || window.event
        event.preventDefault()
        window.history.pushState({},"", event.target.href)
    
        this.pathHandler()
    
    }
    
    pathHandler(){
        const { pathname } = window.location
        
    
        const route = this.routes[pathname] || this.routes[404]
    
        this.backgroundHandler()
    
        fetch(route).then( data => data.text())
        .then(html => {
            document.querySelector('#app').innerHTML = html
        } 
        )
    
    }
    
    backgroundHandler(){
        if (window.location.pathname == "/explorer"){
            document.body.style.backgroundImage = "url('/images/mountains-universe-3.png')";
            
        }
        else if (window.location.pathname == "/"){
            document.body.style.backgroundImage = "url('/images/mountains-universe-1.png')";
        }
        else if (window.location.pathname == "/universe"){
            document.body.style.backgroundImage = "url('/images/mountains-universe-2.png')";
        }
    }
}
