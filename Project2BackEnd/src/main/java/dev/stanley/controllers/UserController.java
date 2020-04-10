package dev.stanley.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import dev.stanley.beans.Users;
import dev.stanley.services.UserService;

@RestController
public class UserController {

	@Autowired
	UserService us;
	
	@RequestMapping(value="/users", method=RequestMethod.POST, consumes="application/Json")
	public Users createUser(@RequestBody Users user) {
		System.out.println(user);
		return us.createUser(user);
	}
	
	@GetMapping(value="/users", produces="application/Json")
	public List<Users>allUsers(){
		return us.allUsers();
	}
	
	@GetMapping(value = "/users/{u_id}")
	public Users getUserById(@PathVariable("u_id") int u_id) {
		return us.getUser(u_id);
		
	}
	
	@PutMapping(value="/users", consumes="application/Json")
	public Users updateUser(@RequestBody Users change) {
		return us.updateUser(change);
	}
	
	@DeleteMapping(value="/users/{u_id}")
	public boolean deleteUser(@PathVariable("u_id") int u_id) {
		return us.deleteUser(us.getUser(u_id));
	}
}
