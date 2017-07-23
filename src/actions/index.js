export const ROOT_URL = "localhost:3000/"

export function signup({username, password, confpass}){
	return function(dispatch){
		console.log(username,password,confpass);
	}
};