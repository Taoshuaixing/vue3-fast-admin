import Cookies from 'js-cookie';

const TokenKey = 'token';
const RoleKey = 'roles';
const NameKey = 'name';
const AvatarKey = 'avatar';

export function getToken() {
	return Cookies.get(TokenKey);
}
export function setToken(token: string) {
	return Cookies.set(TokenKey, token);
}

export function removeToken() {
	return Cookies.remove(TokenKey);
}

export function getRoles() {
	return Cookies.get(RoleKey);
}

export function setRoles(role: string) {
	return Cookies.set(RoleKey, role);
}

export function removeRoles() {
	return Cookies.remove(RoleKey);
}

export function getName() {
	return Cookies.get(NameKey);
}

export function setName(name: string) {
	return Cookies.set(NameKey, name);
}

export function removeName() {
	return Cookies.remove(NameKey);
}

export function getAvatar() {
	return Cookies.get(AvatarKey);
}

export function setAvatar(avatar: string) {
	return Cookies.set(AvatarKey, avatar);
}

export function removeAvatar() {
	return Cookies.remove(AvatarKey);
}
