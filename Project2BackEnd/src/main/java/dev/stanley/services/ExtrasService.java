package dev.stanley.services;

import java.util.List;

import dev.stanley.beans.Extras;

public interface ExtrasService {

	public Extras createExtras(Extras extra);
	public Extras updateExtras(Extras change);
	public Extras getExtrasById(int e_id);
	public List<Extras> getAllExtras();
	public boolean deleteExtras(Extras extra);
	
}
