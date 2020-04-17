package dev.stanley.beans;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;

@Entity
public class Orders {

	@Id
	@Column(name = "oid", updatable = false)
	@GeneratedValue
	private int oid;

	@Column(name = "ousername")
	private String ousername;

	@Column(name = "price")
	private double price;

	@Column(name = "comments", nullable = true)
	private String comments;

	@Column(name = "status")
	private String status;

	@Column(name = "productname1", columnDefinition = "varchar(255) default 'Null'")
	private String productname1;

	@Column(name = "productname2", columnDefinition = "varchar(255) default 'Null'")
	private String productname2;

	@Column(name = "productname3", columnDefinition = "varchar(255) default 'Null'")
	private String productname3;

	@Column(name = "productname4", columnDefinition = "varchar(255) default 'Null'")
	private String productname4;

	@Column(name = "productname5", columnDefinition = "varchar(255) default 'Null'")
	private String productname5;

	@Column(name = "productname6", columnDefinition = "varchar(255) default 'Null'")
	private String productname6;

	@Column(name = "productname7", columnDefinition = "varchar(255) default 'Null'")
	private String productname7;

	@Column(name = "quanity1")
	private int quantity1;

	@Column(name = "quanity2")
	private int quantity2;

	@Column(name = "quanity3")
	private int quantity3;

	@Column(name = "quanity4")
	private int quantity4;

	@Column(name = "quanity5")
	private int quantity5;

	@Column(name = "quanity6")
	private int quantity6;

	@Column(name = "quanity7")
	private int quantity7;

	public Orders() {
		super();
	}

	public Orders(int oid, String ousername, double price, String comments, String status, String productname1,
			String productname2, String productname3, String productname4, String productname5, String productname6,
			String productname7, int quantity1, int quantity2, int quantity3, int quantity4, int quantity5,
			int quantity6, int quantity7) {
		super();
		this.oid = oid;
		this.ousername = ousername;
		this.price = price;
		this.comments = comments;
		this.status = status;
		this.productname1 = productname1;
		this.productname2 = productname2;
		this.productname3 = productname3;
		this.productname4 = productname4;
		this.productname5 = productname5;
		this.productname6 = productname6;
		this.productname7 = productname7;
		this.quantity1 = quantity1;
		this.quantity2 = quantity2;
		this.quantity3 = quantity3;
		this.quantity4 = quantity4;
		this.quantity5 = quantity5;
		this.quantity6 = quantity6;
		this.quantity7 = quantity7;
	}

	public Orders(String ousername, double price, String comments, String status, String productname1,
			String productname2, String productname3, String productname4, String productname5, String productname6,
			String productname7, int quantity1, int quantity2, int quantity3, int quantity4, int quantity5,
			int quantity6, int quantity7) {
		super();
		this.ousername = ousername;
		this.price = price;
		this.comments = comments;
		this.status = status;
		this.productname1 = productname1;
		this.productname2 = productname2;
		this.productname3 = productname3;
		this.productname4 = productname4;
		this.productname5 = productname5;
		this.productname6 = productname6;
		this.productname7 = productname7;
		this.quantity1 = quantity1;
		this.quantity2 = quantity2;
		this.quantity3 = quantity3;
		this.quantity4 = quantity4;
		this.quantity5 = quantity5;
		this.quantity6 = quantity6;
		this.quantity7 = quantity7;
	}

	public String getOusername() {
		return ousername;
	}

	public void setOusername(String ousername) {
		this.ousername = ousername;
	}

	public String getProductname1() {
		return productname1;
	}

	public void setProductname1(String productname1) {
		this.productname1 = productname1;
	}

	public String getProductname2() {
		return productname2;
	}

	public void setProductname2(String productname2) {
		this.productname2 = productname2;
	}

	public String getProductname3() {
		return productname3;
	}

	public void setProductname3(String productname3) {
		this.productname3 = productname3;
	}

	public String getProductname4() {
		return productname4;
	}

	public void setProductname4(String productname4) {
		this.productname4 = productname4;
	}

	public String getProductname5() {
		return productname5;
	}

	public void setProductname5(String productname5) {
		this.productname5 = productname5;
	}

	public String getProductname6() {
		return productname6;
	}

	public void setProductname6(String productname6) {
		this.productname6 = productname6;
	}

	public String getProductname7() {
		return productname7;
	}

	public void setProductname7(String productname7) {
		this.productname7 = productname7;
	}

	public int getOid() {
		return oid;
	}

	public void setOid(int oid) {
		this.oid = oid;
	}

	public double getPrice() {
		return price;
	}

	public void setPrice(double price) {
		this.price = price;
	}

	public String getComments() {
		return comments;
	}

	public void setComments(String comments) {
		this.comments = comments;
	}

	public String getStatus() {
		return status;
	}

	public void setStatus(String status) {
		this.status = status;
	}

	public int getQuantity1() {
		return quantity1;
	}

	public void setQuantity1(int quantity1) {
		this.quantity1 = quantity1;
	}

	public int getQuantity2() {
		return quantity2;
	}

	public void setQuantity2(int quantity2) {
		this.quantity2 = quantity2;
	}

	public int getQuantity3() {
		return quantity3;
	}

	public void setQuantity3(int quantity3) {
		this.quantity3 = quantity3;
	}

	public int getQuantity4() {
		return quantity4;
	}

	public void setQuantity4(int quantity4) {
		this.quantity4 = quantity4;
	}

	public int getQuantity5() {
		return quantity5;
	}

	public void setQuantity5(int quantity5) {
		this.quantity5 = quantity5;
	}

	public int getQuantity6() {
		return quantity6;
	}

	public void setQuantity6(int quantity6) {
		this.quantity6 = quantity6;
	}

	public int getQuantity7() {
		return quantity7;
	}

	public void setQuantity7(int quantity7) {
		this.quantity7 = quantity7;
	}

	@Override
	public String toString() {
		return "OrderArchive [o_id=" + oid + ", Username=" + ousername + ", productname1=" + productname1
				+ ", productname2=" + productname2 + ", productname3=" + productname3 + ", productname4=" + productname4
				+ ", productname5=" + productname5 + ", productname6=" + productname6 + ", productname7=" + productname7
				+ ", quantity1=" + quantity1 + ", quantity2=" + quantity2 + ", quantity3=" + quantity3 + ", quantity4="
				+ quantity4 + ", quantity5=" + quantity5 + ", quantity6=" + quantity6 + ", quantity7=" + quantity7
				+ ", price=" + price + ", comments=" + comments + ", status=" + status + "]";
	}

}
