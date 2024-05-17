// import { createRoot } from "react-dom/client";
// import { StrictMode, lazy, Suspense } from "react";
// import { kcContext as kcLoginThemeContext } from "./login/kcContext";
// // import { KcContext } from "keycloakify/login/kcContext";
// // import { kcContext as kcAccountThemeContext } from "./keycloak-theme/account/kcContext";

// const KcLoginThemeApp = lazy(() => import("./login/KcApp"));
// // const KcAccountThemeApp = lazy(() => import("./keycloak-theme/account/KcApp"));
// // Important note:
// // In this starter example we show how you can have your react app and your Keycloak theme in the same repo.  
// // Most Keycloakify user only want to great a Keycloak theme.  
// // If this is your case run the few commands that will remover everything that is not strictly related to the 
// //Keycloak theme:
// // https://github.com/keycloakify/keycloakify-starter?tab=readme-ov-file#i-only-want-a-keycloak-theme
// // const App = lazy(() => import("./App"));

// createRoot(document.getElementById("root")!).render(
//     <StrictMode>
//         <Suspense>
//             {(()=>{

//                 // if( kcLoginThemeContext !== undefined ){
//                     // return <KcLoginThemeApp kcContext={kcLoginThemeContext as KcContext} />;
//                 // }

//                 if( kcLoginThemeContext !== undefined ){
//                     return <KcLoginThemeApp kcContext={kcLoginThemeContext} />;
//                 }

//                 throw new Error(
//                   "This app is a Keycloak theme" +
//                   "It isn't meant to be deployed outside of Keycloak"
//                 );
//             })()}
//         </Suspense>
//     </StrictMode>
// );

import { createRoot } from "react-dom/client";
import { StrictMode, lazy, Suspense } from "react";
import { kcContext as kcLoginThemeContext } from "./login/kcContext";
import { kcContext as kcAccountThemeContext } from "./account/kcContext";
import React from "react";

const KcLoginThemeApp = lazy(() => import("./login/KcApp"));
const KcAccountThemeApp = lazy(() => import("./account/KcApp"));

createRoot(document.getElementById("root")!).render(
    <StrictMode>
        <Suspense>
            {(()=>{

                if( kcLoginThemeContext !== undefined ){
                    return <KcLoginThemeApp kcContext={kcLoginThemeContext} />;
                }

                if( kcAccountThemeContext !== undefined ){
                    return <KcAccountThemeApp kcContext={kcAccountThemeContext} />;
                }

                throw new Error(
                  "This app is a Keycloak theme" +
                  "It isn't meant to be deployed outside of Keycloak"
                );

            })()}
        </Suspense>
    </StrictMode>
);