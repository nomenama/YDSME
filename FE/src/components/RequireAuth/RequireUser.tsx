import React from "react";
import {useLocation, Navigate, Outlet} from "react-router-dom";
import useUser from "../../hooks/useUser";
import {UserRole, UserRoles} from "../../types";

const RequireUser = ({allowedRoles}: { allowedRoles: UserRoles }) => {
    const {user} = useUser();
    const location = useLocation();

    return (
        user?.roles.find((role: UserRole) => allowedRoles?.includes(role))
            ? <Outlet/>
            : user?.roles
                ? <Navigate to="/unauthorised" state={{from: location}} replace/>
                : <Navigate
                    to="/login"
                    state={{from: location}} replace
                />
    )
};

export default RequireUser;