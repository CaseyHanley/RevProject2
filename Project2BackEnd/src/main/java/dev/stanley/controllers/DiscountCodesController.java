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

import dev.stanley.beans.DiscountCodes;

@RestController
public class DiscountCodesController {

	@Autowired
	DiscountCodes dc;
	
	@RequestMapping(value="/discountcodes", method=RequestMethod.POST, consumes="application/Json")
	public DiscountCodes createDiscountCodes(@RequestBody DiscountCodes code) {
		
		return dc.createDiscountCodes(code);
	}
	
	@GetMapping(value="/discountcodes", produces="application/Json")
	public List<DiscountCodes> getAllDiscountCodes(){
		
		return dc.getAllDiscountCodes();
	}
	
	@GetMapping(value = "/discountcodess/{dc_id}")
	public DiscountCodes getDiscountCodesById(@PathVariable("dc_id") int dc_id) {
		
		return dc.getDiscountCodesById(dc_id);
	}
	
	@PutMapping(value="/discountcodes", consumes="application/Json")
	public DiscountCodes updateDiscountCodes(@RequestBody DiscountCodes change) {
		
		return dc.updateDiscountCodes(change);
	}
	
	@DeleteMapping(value="/discountcodes/{dc_id}")
	public boolean deleteDiscountCodes(@PathVariable("dc_id") int dc_id) {
		
		return dc.deleteDiscountCodes(dc_id);
	}
}
