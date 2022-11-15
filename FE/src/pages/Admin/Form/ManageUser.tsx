import {H4, P1, Spinner} from 'common/index.styles';
import {SecondaryButton} from 'pages/Login/Login.styles';
import React, {ChangeEvent, useState} from 'react';
import {LoadingProps, UserWithId} from 'types';
import {Form, Select, Label, Input, CheckboxLabel, ButtonGroup, FieldSet} from "../Admin.styles";
import {deleteUser, getUser, updateUser} from "../../../api/api";
import {ToastError, ToastSuccess} from "../../../common/Toast";
import SearchBar from "../../../components/SearchBar/SearchBar";

const NewUser = ({isLoading, setIsLoading, setWhichForm}: LoadingProps) => {
    //Member role added by default
    const newRoles = ["ADMIN", "COMMITTEE", "EDITOR", "MEMBER"];
    const initialState = {
        id: null,
        firstName: "",
        lastName: "",
        email: "",
        username: "",
        roles: []
    }
    const [userDetail, setUserDetail] = useState<UserWithId>(initialState);

    const handleOnSearch = async (search: string) => {
        if (!search) return;

        try {
            const {status, data} = await getUser(search);

            if (status === 200) {
                setUserDetail(data);
            }
        } catch (err: any) {
            ToastError(err.message);
        }
    }
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

    const handleOnDelete = async () => {
        setIsLoading(true);
        if (!userDetail.id) {
            setIsLoading(false);
            return;
        }

        try {
            const {status, data} = await deleteUser(userDetail.id);

            if (status === 200) {
                ToastSuccess(data.message);
                setUserDetail(initialState);
                setIsLoading(false);
            }
        } catch (err: any) {
            ToastSuccess(err.message);
            setIsLoading(false);
        }
    }

    const handleOnUpdate = async (e: any) => {
        e.preventDefault();

        try {
            setIsLoading(true);
            const {status, data} = await updateUser(userDetail);

            if (status === 200) {
                setIsLoading(false);
                setUserDetail(initialState);
                ToastSuccess(data.message);
            }

        } catch (err: any) {
            setIsLoading(false);
            ToastError();
        }
    }

    return (
        <>
            <SearchBar handleOnSearch={handleOnSearch}/>
            <Form onSubmit={handleOnUpdate}>
                <FieldSet disabled={!userDetail.firstName || !userDetail.lastName}>
                    <H4>Manage User Account</H4>
                    <Label>
                        ID
                        <Input type="text" readOnly placeholder={`${userDetail?.id}`}/>
                    </Label>
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
                            type="text"
                            placeholder={userDetail.username}
                            readOnly
                        />
                    </Label>

                    <Label htmlFor="roles">
                        Roles
                        <Select>
                            <P1>Select one or multiple</P1>
                            {newRoles.map((role) => (
                                <CheckboxLabel htmlFor={role} key={role}>
                                    <input
                                        onChange={handleOnChecked}
                                        type="checkbox"
                                        id={role}
                                        name={role}
                                        value={role}
                                        checked={userDetail.roles.some((newRole) => newRole === role)}
                                    />
                                    {role}
                                </CheckboxLabel>
                            ))}
                        </Select>
                    </Label>
                    <ButtonGroup>
                        <SecondaryButton type="button" onClick={handleGoBack}>Back</SecondaryButton>
                        <SecondaryButton type="button" onClick={handleOnDelete}>{isLoading ? <Spinner/> : "Delete User"}</SecondaryButton>
                        <SecondaryButton>{isLoading ? <Spinner/> : "Update User"}</SecondaryButton>
                    </ButtonGroup>
                </FieldSet>
            </Form>
        </>
    );
};

export default NewUser;