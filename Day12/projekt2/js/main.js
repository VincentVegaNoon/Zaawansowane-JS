import { showInConsole, showInDom } from "./components/show.js";
import bike from "./components/product.js";

showInConsole(bike.name);
showInDom(bike.price, "h1");
showInDom(bike.age);
