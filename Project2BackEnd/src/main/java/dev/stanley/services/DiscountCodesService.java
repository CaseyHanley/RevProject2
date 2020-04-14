package dev.stanley.services;

import java.util.List;

import dev.stanley.beans.DiscountCodes;

public interface DiscountCodesService {

	
	public DiscountCodes createDiscountCodes(DiscountCodes code);
	public DiscountCodes updateDiscountCodes(DiscountCodes code);
	public boolean deleteDiscountCodes(DiscountCodes code);
	public List<DiscountCodes> getAllDiscountCodes();
	public DiscountCodes getDiscountCodesById(int c_id);
	
}
