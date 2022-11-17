import React, {useEffect, useState} from "react";
import {H4, InnerContainer, P1, PageContainer, Spinner} from "../../common/index.styles";
import {GroupContainer, Input, Label, LoginForm, SecondaryButton} from "./Login.styles";
import {postLogin} from "../../api/api";
import {useNavigate} from "react-router-dom";
import useUser from "../../hooks/useUser";

export const Login = () => {
    const {user, setUser} = useUser();
    const navigate = useNavigate();
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const [isLoading, setIsLoading] = useState(false);

    const handleLogin = async (e: any) => {
        setIsLoading(true);
        e.preventDefault();
        if (!username || !password) {
            setError("Username or password cannot be empty");
            setIsLoading(false);
            return;
        }

        try {
            const {data} = await postLogin(username, password);
            sessionStorage.setItem("user", JSON.stringify(data));
            setUser(data);
            setUsername("");
            setPassword("");
            setIsLoading(false);
            navigate("/dashboard");
        } catch (err: any) {
            setError(err?.message);
            setIsLoading(false);
        }
    }

    useEffect(() => {
        if (error) {
            setError("")
        }
    }, [username, password]);

    useEffect(() => {
        if (user?.firstName && user?.roles.length) {
            navigate("/dashboard")
        }
    }, [navigate, user]);

    return (
        <PageContainer>
            <InnerContainer>
                <LoginForm>
                    <H4>Member Login</H4>
                    {Boolean(error) && <P1 textAlign="center" color="red">{error}</P1>}
                    <GroupContainer>
                        <Label htmlFor="username">
                            Username
                        </Label>
                        <Input id="username" type="text" value={username} onChange={(e) => setUsername(e.target.value)}/>
                    </GroupContainer>
                    <GroupContainer>
                        <Label htmlFor="password">
                            Password
                        </Label>
                        <Input id="password" type="password" value={password} onChange={(e) => setPassword(e.target.value)}/>
                    </GroupContainer>
                    <SecondaryButton type="submit" hidden onClick={handleLogin}>{isLoading ? <Spinner size={20}/> : "Login"}</SecondaryButton>
                </LoginForm>
            </InnerContainer>
        </PageContainer>
    )
}

export default Login;