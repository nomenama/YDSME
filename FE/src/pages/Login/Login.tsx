import React, {useEffect, useState} from "react";
import {H4, InnerContainer, P1, PageContainer, Spinner} from "../../common/index.styles";
import {GroupContainer, Input, Label, LoginButton, LoginForm} from "./Login.styles";
import {postLogin} from "../../api/api";
import {useNavigate} from "react-router-dom";

export const Login = () => {
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
            setUsername("");
            setPassword("");
            setIsLoading(false);
            return navigate("/dashboard");
        } catch (err: any) {
            setError(err?.response?.data?.error);
            setIsLoading(false);
        }
        return;
    }

    useEffect(() => {
        if (error) {
            setError("")
        }
    }, [username, password])

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
                    <LoginButton type="button" onClick={handleLogin}>{isLoading ? <Spinner width={20} height={20}/> : "Login"}</LoginButton>
                </LoginForm>
            </InnerContainer>
        </PageContainer>
    )
}

export default Login;