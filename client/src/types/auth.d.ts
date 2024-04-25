interface IsAuthContextType {
	isAuth: boolean | null;
	setIsAuth: React.Dispatch<React.SetStateAction<boolean | null>> | null;
	user: null | { user: UserForm };
}

export { IsAuthContextType };
