package dev.stanley.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RestController;

import dev.stanley.beans.Extras;

@RestController
public class ExtrasController {
	
	@Autowired
	Extras ex;
	
	@RequestMapping(value="/users", method=RequestMethod.POST, consumes="application/Json")
	
	@GetMapping(value="/users", produces="application/Json")
	
	@GetMapping(value = "/users/{u_id}")
	
	@PutMapping(value="/users", consumes="application/Json")
	
	@DeleteMapping(value="/users/{u_id}")

}
