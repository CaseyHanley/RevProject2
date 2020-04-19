package dev.stanley.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import dev.stanley.beans.Extras;
import dev.stanley.repositories.ExtrasRepository;


@Service
public class ExtrasServiceImpl implements ExtrasService {

	@Autowired
	ExtrasRepository er;
	
	
	@Override
	public Extras createExtras(Extras extra) {
		 
		return er.save(extra);
	}

	@Override
	public Extras updateExtras(Extras change) {
		 
		return er.save(change);
	}

	@Override
	public Extras getExtrasById(int e_id) {
		 
		return er.findById(e_id).get();
	}
	
	@Override
	public List<Extras> getAllExtras() {
		 
		return (List<Extras>)er.findAll();
	}

	@Override
	public boolean deleteExtras(Extras extra) {
		try {
			er.delete(extra);
			
		}catch(IllegalArgumentException e) {
			e.printStackTrace();
			return false;
		}
		return true;
	}

}
