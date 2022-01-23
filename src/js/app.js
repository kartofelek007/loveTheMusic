import { pageHeaderSticky } from "./page-header";
import makeForm from "./_form";
import {map} from "./_map";

document.addEventListener('DOMContentLoaded', function() {
    pageHeaderSticky();
    makeForm();
    map();
});

