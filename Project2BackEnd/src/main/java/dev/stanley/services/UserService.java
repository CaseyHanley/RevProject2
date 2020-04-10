package dev.stanley.services;

import java.util.List;

import dev.stanley.beans.Users;

public interface UserService {

	public Users createUser(Users user);
	public Users getUser(int id);
	public Users getUser(String username);
	public List<Users> allUsers();
	public Users updateUser(Users change);
	public boolean deleteUser(Users user);
	
	
	
}
