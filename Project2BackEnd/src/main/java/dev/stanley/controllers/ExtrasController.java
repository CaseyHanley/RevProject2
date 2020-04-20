package dev.stanley.controllers;

import java.util.List;

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

import dev.stanley.beans.Extras;
import dev.stanley.services.ExtrasService;

@RestController
@CrossOrigin(origins = "http://ec2-3-134-96-132.us-east-2.compute.amazonaws.com:8080", allowedHeaders = "*")
public class ExtrasController {
	
	@Autowired
	ExtrasService es;
	
	@RequestMapping(value="/extras", method=RequestMethod.POST, consumes="application/Json")
	public Extras createExtras(@RequestBody Extras extra) {
		
		return es.createExtras(extra);
	}
	
	@GetMapping(value="/extras", produces="application/Json")
	public List<Extras> getAllExtras(){
		return (List<Extras>) es.getAllExtras();
	}
	
	@GetMapping(value = "/extras/{e_id}")
	public Extras getExtrasById(@PathVariable("e_id") int e_id){
		return es.getExtrasById(e_id);
	}
	
	@PutMapping(value="/extras", consumes="application/Json")
	public Extras updateExtras(@RequestBody Extras change) {
		return es.updateExtras(change);
	}
	
	@DeleteMapping(value="/extras/{e_id}")
	public boolean deleteExtras(@PathVariable("e_id") int e_id) {
		return es.deleteExtras(es.getExtrasById(e_id));
	}
}
