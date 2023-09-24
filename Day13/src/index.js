import { message, messageDOM } from "./tools/message";
import "./components/footer";
import info from "./data/title.txt";
import "./sass/index.scss";
import addImage from "./tools/image";

message(info);
messageDOM(info);
addImage("h1");
