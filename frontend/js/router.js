const route = (event) => {
  event = event || window.event;
  event.preventDefault();
  window.history.pushState({}, "", event.target.href);
  routerHandler();
};

const routes = {
  404: "/pages/404.htm",
  "/": "/pages/index.htm",
  "/home": "/pages/home.htm",
};

const routerHandler = async () => {
  const path = window.location.pathname;
  const route = routes[path] || routes[404];
  const html = await fetch(route).then((data) => data.text());
  document.getElementById("main-page").innerHTML = html;
};

window.onpopstate = routerHandler;
window.route = route;

routerHandler();
