package dev.stanley.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import dev.stanley.beans.Users;
import dev.stanley.repositories.UserRepository;

@Service
public class UserServiceImpl implements UserService {

	@Autowired
	UserRepository ur;

	@Override
	public Users createUser(Users user) {
		return ur.save(user);
	}

	@Override
	public Users getUserById(int id) {
		return ur.findById(id).get();
	}

	@Override
	public Users getUser(String username) {
		return ur.findByUsername(username);
	}


	@Override
	public List<Users> allUsers() {
		return (List<Users>) ur.findAll();
	}

	@Override
	public Users updateUser(Users change) {
		return ur.save(change);
	}

	@Override
	public boolean deleteUser(Users user) {
		try {
			ur.delete(user);

		} catch (IllegalArgumentException e) {
			e.printStackTrace();
			return false;
		}
		return true;
	}

//	@Override
//	public boolean loginUser(String username, String password) {
//		if(ur.findByUsernameAndPassword(username,password) != null) {
//		System.out.println("method working");
//		return true;
//		}
//		else {
//			return false;
//		}
//	}
	
	@Override
	public Users loginUser(String username, String password) {
		return ur.findByUsernameAndPassword(username,password);
		
		
	}

	@Override
	public Users getUserByP(String password) {
		return ur.findByPassword(password);
	}





}
