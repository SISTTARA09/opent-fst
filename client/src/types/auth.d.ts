interface IsSignedContextType {
	isSigned: boolean | null;
	setIsSigned: React.Dispatch<React.SetStateAction<boolean | null>> | null;
	user: null | { user: UserForm };
}

export { IsSignedContextType };
