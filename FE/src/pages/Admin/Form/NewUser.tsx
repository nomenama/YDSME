import {H4, P1, Spinner} from 'common/index.styles';
import {SecondaryButton} from 'pages/Login/Login.styles';
import React, {ChangeEvent, useState} from 'react';
import {LoadingProps, User} from 'types';
import {Form, Select, Label, Input, CheckboxLabel, ButtonGroup, FieldSet} from "../Admin.styles";
import {createUser} from "../../../api/api";
import {ToastError, ToastSuccess} from "../../../common/Toast";

const NewUser = ({isLoading, setIsLoading, setWhichForm}: LoadingProps) => {
    //Member role added by default
    const newRoles = ["ADMIN", "COMMITTEE", "EDITOR", "MEMBER"];
    const initialState = {
        firstName: "",
        lastName: "",
        email: "",
        username: "",
        password: "",
        roles: []
    }
    const [userDetail, setUserDetail] = useState<User>(initialState);

    const handleOnChange = (e: ChangeEvent<HTMLInputElement>) => {
        setUserDetail({
            ...userDetail,
            [e.target.name]: e.target.value.trim()
        })
    }

    const handleOnChecked = (e: ChangeEvent<HTMLInputElement>) => {
        if (e.target.checked) {
            setUserDetail({
                ...userDetail,
                roles: [...userDetail.roles, e.target.value]
            })
        } else {
            setUserDetail({
                ...userDetail,
                roles: userDetail.roles.filter((role) => role !== e.target.value)
            })
        }
    }

    const handleGoBack = () => {
        setUserDetail(initialState);
        setWhichForm("");
    }

    const handleOnSubmit = async (e: any) => {
        e.preventDefault();
        const isMemberRoleSelected = userDetail.roles.some((role) => role === "MEMBER");

        if (!isMemberRoleSelected) {
            userDetail.roles.push("MEMBER")
        }

        try {
            setIsLoading(true);
            const {status, data} = await createUser(userDetail);

            if (status === 201) {
                setIsLoading(false);
                setUserDetail(initialState);
                ToastSuccess(data.message);
            }

        } catch (err: any) {
            setIsLoading(false);
            ToastError(err.response.data.message);
        }
    }

    return (
        <Form onSubmit={handleOnSubmit}>
            <FieldSet>
                <H4>New User Creation</H4>
                <Label htmlFor="firstName">
                    First Name
                    <Input
                        onChange={handleOnChange}
                        value={userDetail.firstName}
                        type="text"
                        id="firstName"
                        name="firstName"
                        placeholder={"required"}
                        required
                    />
                </Label>

                <Label htmlFor="lastName">
                    Last Name
                    <Input
                        onChange={handleOnChange}
                        value={userDetail.lastName}
                        type="text"
                        id="lastName"
                        name="lastName"
                        placeholder={"required"}
                        required
                    />
                </Label>

                <Label htmlFor="email">
                    Email
                    <Input
                        onChange={handleOnChange}
                        value={userDetail.email}
                        type="email"
                        id="email"
                        name="email"
                        placeholder={"required"}
                        required
                    />
                </Label>

                <Label htmlFor="username">
                    Username
                    <Input
                        onChange={handleOnChange}
                        value={userDetail.username}
                        type="text"
                        id="username"
                        name="username"
                        placeholder={"required"}
                        required
                        minLength={6}
                    />
                </Label>

                <Label htmlFor="password">
                    Password
                    <Input
                        onChange={handleOnChange}
                        value={userDetail.password}
                        type="password"
                        id="password"
                        name="password"
                        placeholder={"must at least 8 characters long with 1 uppercase, lowercase, number and special characters"}
                        pattern="^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*]).{8,}$"
                        required
                    />
                </Label>

                <Label htmlFor="roles">
                    Roles
                    <Select>
                        <P1>Select one or multiple</P1>
                        {newRoles.map((role) => (
                            <CheckboxLabel htmlFor={role} key={role}>
                                <input onChange={handleOnChecked} type="checkbox" id={role} name={role} value={role}/>{role}
                            </CheckboxLabel>
                        ))}
                    </Select>
                </Label>
                <ButtonGroup>
                    <SecondaryButton type="button" onClick={handleGoBack}>Back</SecondaryButton>
                    <SecondaryButton
                        disabled={
                            !userDetail.username
                            || !userDetail.password
                            || !userDetail.roles.length
                            || !userDetail.email
                            || !userDetail.firstName
                            || !userDetail.lastName
                        }
                    >{isLoading ? <Spinner/> : "Submit"}</SecondaryButton>
                </ButtonGroup>
            </FieldSet>
        </Form>
    );
};

export default NewUser;