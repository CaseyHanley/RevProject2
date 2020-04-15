package dev.stanley.services;

import java.util.List;

import dev.stanley.beans.OrderArchive;

public interface OrderArchiveService {

	public OrderArchive createOrderArchive(OrderArchive OrderArchive);

	public OrderArchive getOrderById(int o_id);

	public OrderArchive getOrderArchive(String username);

	public List<OrderArchive> allOrderArchive();

	public OrderArchive updateOrderArchive(OrderArchive change);

	public boolean deleteOrderArchive(OrderArchive order);
}
