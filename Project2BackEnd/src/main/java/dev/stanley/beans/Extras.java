package dev.stanley.beans;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;

@Entity
public class Extras {
	
	
	@Id
	@Column(name = "e_id")
	@GeneratedValue
	private int e_id;
	
	@Column(name = "descriptions")
	private int descriptions;
	
	@Column(name = "ingredientname")
	private int ingredientname;
	
	@Column(name = "price")
	private int price;
	
	
	public int getE_id() {
		return e_id;
	}
	public void setE_id(int e_id) {
		this.e_id = e_id;
	}
	public int getDescriptions() {
		return descriptions;
	}
	public void setDescriptions(int descriptions) {
		this.descriptions = descriptions;
	}
	public int getIngredientname() {
		return ingredientname;
	}
	public void setIngredientname(int ingredientname) {
		this.ingredientname = ingredientname;
	}
	public int getPrice() {
		return price;
	}
	public void setPrice(int price) {
		this.price = price;
	}
	
	public Extras(int e_id, int descriptions, int ingredientname, int price) {
		super();
		this.e_id = e_id;
		this.descriptions = descriptions;
		this.ingredientname = ingredientname;
		this.price = price;
	}
	
	public Extras() {
		super();
		// TODO Auto-generated constructor stub
	}
	
	@Override
	public String toString() {
		return "Extras [e_id=" + e_id + ", descriptions=" + descriptions + ", ingredientname=" + ingredientname
				+ ", price=" + price + "]";
	}

	
	
}
