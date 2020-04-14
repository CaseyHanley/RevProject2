package dev.stanley.services;

import java.util.List;

import dev.stanley.beans.Users;

public interface UserService {

	public Users createUser(Users user);
	public Users getUserById(int id);
	public Users getUser(String username);
	public Users getUserByP(String password);
	public Users loginUser(String username, String password);
	public List<Users> allUsers();
	public Users updateUser(Users change);
	public boolean deleteUser(Users user);
	
	
	
}
