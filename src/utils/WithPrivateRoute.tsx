"use client";

import React, { useEffect } from "react";
import { redirect } from "next/navigation";
import { useSelector } from "react-redux";
import { RootState } from "@/utils/redux/store";


export default function withPrivateRoute<T extends object>(Component: React.ComponentType<T>) {
    return function IsAuth(props: T) {
        const username = useSelector((state: RootState) => state.user.username);

        useEffect(() => {
            if (!username) {
                redirect("/");
            }
        }, [username]);

        if (!username) {
            return null;
        }

        return <Component {...props} />;
    };
}
