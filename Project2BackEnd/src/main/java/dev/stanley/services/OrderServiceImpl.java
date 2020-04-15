package dev.stanley.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import dev.stanley.beans.Orders;
import dev.stanley.repository.OrdersRepository;

@Service
public class OrderServiceImpl implements OrderService {

	@Autowired
	OrdersRepository or;
	
	@Override
	public Orders createOrder(Orders orders) {
		return or.save(orders);
	}

	@Override
	public Orders getOrderById(int o_id) {
		return or.findById(o_id).get();
	}

	@Override
	public List<Orders> allOrders() {
		return (List<Orders>) or.findAll();
	}

	@Override
	public Orders updateOrder(Orders change) {
		return or.save(change);
	}

	@Override
	public boolean deleteOrder(Orders order) {
		try {
			or.delete(order);
			
		}catch(IllegalArgumentException e) {
			e.printStackTrace();
			return false;
		}
		return false;
	}

	@Override
	public Orders getOrder(String username) {
		return or.findByUsername(username);
	}

}
