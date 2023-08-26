  const routes = {
        "/"          :   "/pages/home.html",
        "/about"     :"/pages/about.html",
        "/contact"   : "/pages/contact.html" ,
        404          : "/pages/404.html",
        }

        function router(event){

            event = event || window.event
            event.preventDefault()  
            window.history.pushState({ } , "" , event.target.href)  
            handle()
        }

        function handle(){    

         const {pathname} = window.location
         const route = routes[pathname]  || routes[404]
         
         console.log("\nAntes do fetch")
         fetch(route)
         .then( data =>  data.text()                                       )
             
         .then( html =>  document.querySelector('#App').innerHTML = html   )
         console.log("showing route from link clicked :\n\n", route)
        }
        handle()
        window.onpopstate = () => handle() ; 
        window.router = () => router()