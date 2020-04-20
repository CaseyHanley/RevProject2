package dev.stanley.controllers;

import java.util.List;


import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import dev.stanley.aspects.AuthorizeDelete;
import dev.stanley.beans.Users;
import dev.stanley.services.UserService;

@CrossOrigin(origins = "*", allowedHeaders = "*")
@RestController
public class UserController {

	@Autowired
	UserService us;

	@CrossOrigin
	@RequestMapping(value = "/users", method = RequestMethod.POST, consumes = "application/Json")
	public Users createUser(@RequestBody Users user) {
		return us.createUser(user);
	}

	@CrossOrigin
	@GetMapping(value = "/users", produces = "application/Json")
	public List<Users> allUsers() {
		return us.allUsers();
	}
	
	@CrossOrigin
	@GetMapping(value = "/users/{u_id}")
	public Users getUserById(@PathVariable("u_id") int u_id) {
		return us.getUserById(u_id);

	}

	@CrossOrigin
	@GetMapping(value = "/users/username/{username}")
	public Users getUser(@PathVariable("username") String username) {
		System.out.println("called");
		return us.getUser(username);

	}

	@CrossOrigin
	@PutMapping(value = "/users", consumes = "application/Json")
	public Users updateUser(@RequestBody Users change) {
		return us.updateUser(change);
	}

	@CrossOrigin
	@AuthorizeDelete
	@DeleteMapping(value = "/users/{u_id}")
	public boolean deleteUser(@PathVariable("u_id") int u_id) {
		return us.deleteUser(us.getUserById(u_id));
	}

	@CrossOrigin
	@RequestMapping(value = "/users/login", method = RequestMethod.POST, consumes = "application/Json")
	public Users loginUser(@Valid @RequestBody Users user) {
		System.out.println(user.getUsername());
		System.out.println(user.getPassword());
		String username = user.getUsername();
		String password = user.getPassword();
		return us.loginUser(username, password);
	}

}
