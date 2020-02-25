import React from "react"
import 'bootstrap/dist/css/bootstrap.min.css';
import '../css/custom.css';


    export default () => 
        <footer className="boxShadowFooter">
            <p className="text-center">©{(new Date().getFullYear())} Kaufman Development Group | Site designed by <a href="https://www.nautilusdesigns.com">Nautilus Designs</a></p>
        </footer>