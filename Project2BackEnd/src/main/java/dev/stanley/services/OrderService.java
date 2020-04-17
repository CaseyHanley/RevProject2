package dev.stanley.services;

import java.util.List;

import dev.stanley.beans.Orders;

public interface OrderService {

	public Orders createOrder(Orders orders);
	public Orders getOrderById(int oid);
	public List<Orders> getOrder(String username);
	public List<Orders> allOrders();
	public Orders updateOrder(Orders change);
	public boolean deleteOrder(Orders order);
	
}
