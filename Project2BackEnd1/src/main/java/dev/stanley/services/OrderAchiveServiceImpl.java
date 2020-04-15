package dev.stanley.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import dev.stanley.beans.OrderArchive;
import dev.stanley.repository.OrderArchiveRepository;

@Service
public class OrderAchiveServiceImpl implements OrderArchiveService {

	@Autowired
	OrderArchiveRepository oar; 
	
	
	@Override
	public OrderArchive createOrderArchive(OrderArchive OrderArchive) {
		return oar.save(OrderArchive);
	}

	@Override
	public OrderArchive getOrderById(int o_id) {
		return oar.findById(o_id).get();
	}

	@Override
	public OrderArchive getOrderArchive(String username) {
		return oar.findByUsername(username);
	}

	@Override
	public List<OrderArchive> allOrderArchive() {
		return (List<OrderArchive>) oar.findAll();
	}

	@Override
	public OrderArchive updateOrderArchive(OrderArchive change) {
		return oar.save(change);
	}

	@Override
	public boolean deleteOrderArchive(OrderArchive order) {
		try {
			oar.delete(order);
			
		}catch(IllegalArgumentException e) {
			e.printStackTrace();
			return false;
		}
		return false;
	}

}
