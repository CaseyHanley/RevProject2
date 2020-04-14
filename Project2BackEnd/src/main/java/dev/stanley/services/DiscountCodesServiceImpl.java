package dev.stanley.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import dev.stanley.beans.DiscountCodes;
import dev.stanley.repository.DiscountCodesRepository;



@Service
public class DiscountCodesServiceImpl implements DiscountCodesService {

	@Autowired
	DiscountCodesRepository dcr;

	@Override
	public DiscountCodes createDiscountCodes(DiscountCodes code) {
	
		return dcr.save(code);
	}

	@Override
	public DiscountCodes updateDiscountCodes(DiscountCodes code) {
		
		return dcr.save(code);
	}

	@Override
	public boolean deleteDiscountCodes(DiscountCodes code) {
		try {
			dcr.delete(code);
			
		}catch(IllegalArgumentException e) {
			e.printStackTrace();
			return false;
		}
		return true;
	}

	@Override
	public List<DiscountCodes> getAllDiscountCodes() {
	
		return (List<DiscountCodes>)dcr.findAll();
	}

	@Override
	public DiscountCodes getDiscountCodesById(int c_id) {
		
		return dcr.findById(c_id).get();
	}


	

}
