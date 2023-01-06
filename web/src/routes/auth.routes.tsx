import { Navigate } from 'react-router-dom';

interface AuthRoutesProps {
	children: JSX.Element;
}

export function AuthRoutes({ children }: AuthRoutesProps) {
	const user = true;

	return user ? children : <Navigate to="/login" />;
}
