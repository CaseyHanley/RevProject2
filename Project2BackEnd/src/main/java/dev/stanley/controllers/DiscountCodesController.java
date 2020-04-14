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

import dev.stanley.beans.DiscountCodes;
import dev.stanley.services.DiscountCodesService;

@RestController
@CrossOrigin(origins = "http://localhost:4200", allowedHeaders = "*")
public class DiscountCodesController {

	@Autowired
	DiscountCodesService dcs;
	
	@RequestMapping(value="/discountcodes", method=RequestMethod.POST, consumes="application/Json")
	public DiscountCodes createDiscountCodes(@RequestBody DiscountCodes code) {
		
		return dcs.createDiscountCodes(code);
	}
	
	@GetMapping(value="/discountcodes", produces="application/Json")
	public List<DiscountCodes> getAllDiscountCodes(){
		
		return dcs.getAllDiscountCodes();
	}
	
	@GetMapping(value = "/discountcodess/{dc_id}")
	public DiscountCodes getDiscountCodesById(@PathVariable("dc_id") int dc_id) {
		
		return dcs.getDiscountCodesById(dc_id);
	}
	
	@PutMapping(value="/discountcodes", consumes="application/Json")
	public DiscountCodes updateDiscountCodes(@RequestBody DiscountCodes change) {
		
		return dcs.updateDiscountCodes(change);
	}
	
	@DeleteMapping(value="/discountcodes/{dc_id}")
	public boolean deleteDiscountCodes(@PathVariable("dc_id") int dc_id) {
		
		return dcs.deleteDiscountCodes(dcs.getDiscountCodesById(dc_id));
	}
}
