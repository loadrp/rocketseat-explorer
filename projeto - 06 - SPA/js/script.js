import { Router } from "./routes.js";

/* const routes = {
    "/": "/pages/home.html",
    "/explorer": "/pages/explorer.html",
    "/universe": "/pages/universe.html",
    404: "/pages/404.html",
} */

const router = new Router()

router.add("/","/pages/home.html")
router.add("/explorer","/pages/explorer.html")
router.add("/universe","/pages/universe.html")
router.add("/404","/pages/404.html")

router.pathHandler()
window.onpopstate = () => router.pathHandler();
window.route = () => router.route()