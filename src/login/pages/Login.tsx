// import { useState, type FormEventHandler } from "react";
// import { clsx } from "keycloakify/tools/clsx";
import { useConstCallback } from "keycloakify/tools/useConstCallback";
import type { PageProps } from "keycloakify/login/pages/PageProps";
// import { useGetClassName } from "keycloakify/login/lib/useGetClassName";
import type { KcContext } from "../kcContext";
import type { I18n } from "../i18n";
import '../../styles.css';
// import { useConstCallback } from "powerhooks";
import { FormEventHandler, useState } from "react";
import React from "react";

export default function Login(props: PageProps<Extract<KcContext, { pageId: "login.ftl" }>, I18n>) {
    // , i18n, doUseDefaultCss = false, Template, classes
    const { kcContext } = props;


    // const { getClassName } = useGetClassName({
    //     doUseDefaultCss,
    //     classes
    // });

    const {url } = kcContext;

    // const result = useOidc();
    const [isLoginButtonDisabled, setIsLoginButtonDisabled] = useState(false);

    const onSubmit = useConstCallback<FormEventHandler<HTMLFormElement>>(e => {
        e.preventDefault();

        setIsLoginButtonDisabled(true);

        const formElement = e.target as HTMLFormElement;

        //NOTE: Even if we login with email Keycloak expect username and password in
        //the POST request.
        formElement.querySelector("input[name='email']")?.setAttribute("name", "username");

        // debugger;

        formElement.submit();
    });

    return (
        // Template {...{ kcContext, i18n, doUseDefaultCss, classes }} headerNode={''}
        <>
        {/* <> */}
            {/* <div className="mb-5 select-none">
                <h3 className="text-2xl font-semibold mb-1 headline-color">
                    aaaaa
                </h3>
                <p className="text-sm description-color">
                    nbbbbbbbbb
                </p>
            </div> */}

            <div className="flex w-full h-screen justify-between left-0">
                <div className="w-full lg:w-3/5 p-6 md:p-16">
                    <div className="w-full lg:max-w-md mx-auto">
                    </div>

                    <div className="mb-5 select-none">
                        <h3 className="text-2xl font-semibold mb-1 headline-color">
                            Welcome!
                        </h3>

                        <p className="text-sm description-color">
                            Enter your information to log into the program
                        </p>
                    </div>

                    <form id="kc-form-login" onSubmit={onSubmit} action={url.loginAction} method="post">
                        <div className="flex flex-col w-full">
                            <label className="font-semibold text-xs lg:text-sm mb-2 flex mt-2">
                                <span>
                                    E-mail address
                                </span>
                            </label>

                            <input id="username" placeholder="Enter e-mail" type="text" className="text-xs lg:text-sm py-1.5 px-2 rounded-md border border-gray-300" />
                        </div>
                        
                        <div className="flex flex-col w-full">
                            <label className="font-semibold text-xs lg:text-sm mb-2 flex mt-2">
                                <span>Password</span>
                            </label>

                            <input id="password" placeholder="Enter password" type="password" className="text-xs lg:text-sm py-1.5 px-2 rounded-md border border-gray-300" />
                        </div>

                        <div className="flex justify-between pb-4">
                            <div className="flex items-center">
                                <input id="remember_me" type="checkbox" className="rounded h-3 w-3" />

                                <label className="ml-2 text-sm font-medium">
                                    Remember me
                                </label>
                            </div>

                            <a href="/auth/reset-password" className="text-primary font-semibold hover:underline text-sm">
                                Forgot password?
                            </a>
                        </div>

                        <button className="h-10 text-sm p-4 flex items-center rounded-md outline-none w-full flex justify-center bg-primary text-white hover:bg-blue-600" type="submit">
                            Log in
                        </button>
                    </form>
                </div>
            </div>

            <div className="flex right-0">
                <div className="relative hidden lg:flex lg:max-w-xl text-white overflow-hidden">
                    <div className="overflow-hidden absolute left-0 -bottom-52">
                    </div>

                    <div className="pt-48 ml-20 px-10 space-y-6 max-w-lg flex flex-col bg-gradient-to-b from-primary to-black">

                        <p className="text-md font-light leading-relaxed">
                            This is test login page
                        </p>
                    </div>
                </div>
            </div>
        </>
    );
}