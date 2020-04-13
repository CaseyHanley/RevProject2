package dev.stanley.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;

import dev.stanley.beans.Extras;
import dev.stanley.repository.ExtrasRepository;

public class ExtrasServiceImpl implements ExtrasService {

	@Autowired
	ExtrasRepository er;
	
	
	@Override
	public Extras createExtras(Extras extra) {
		// TODO Auto-generated method stub
		return er.save(extra);
	}

	@Override
	public Extras updateExtras(Extras change) {
		// TODO Auto-generated method stub
		return er.save(change);
	}

	@Override
	public Extras getExtrasById(int e_id) {
		// TODO Auto-generated method stub
		return er.findExtraById(e_id);
	}

	@Override
	public List<Extras> getAllExtras() {
		// TODO Auto-generated method stub
		return (List<Extras>)er.findAllExtras();
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
